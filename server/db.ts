import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL || 'libsql://accounting-hotwellkz-bolt.turso.io';
const authToken = process.env.DATABASE_AUTH_TOKEN;

if (!authToken) {
  throw new Error('DATABASE_AUTH_TOKEN is required');
}

export const db = createClient({
  url: dbUrl,
  authToken: authToken
});

// Initialize database tables
export async function initDb() {
  try {
    // Create accounts table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        amount TEXT NOT NULL,
        icon_type TEXT NOT NULL,
        color TEXT NOT NULL,
        section_id TEXT NOT NULL
      )
    `);

    // Create transactions table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        from_account_id INTEGER NOT NULL,
        from_account_name TEXT NOT NULL,
        to_account_id INTEGER NOT NULL,
        to_account_name TEXT NOT NULL,
        amount REAL NOT NULL,
        description TEXT NOT NULL,
        date TEXT NOT NULL,
        FOREIGN KEY (from_account_id) REFERENCES accounts(id) ON DELETE CASCADE,
        FOREIGN KEY (to_account_id) REFERENCES accounts(id) ON DELETE CASCADE
      )
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Account operations
export async function getAccounts() {
  try {
    const result = await db.execute('SELECT * FROM accounts');
    return result.rows;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
}

export async function createAccount(account: {
  name: string;
  amount: string;
  icon_type: string;
  color: string;
  section_id: string;
}) {
  try {
    const result = await db.execute({
      sql: `INSERT INTO accounts (name, amount, icon_type, color, section_id) 
            VALUES (?, ?, ?, ?, ?)
            RETURNING id`,
      args: [
        account.name,
        account.amount,
        account.icon_type,
        account.color,
        account.section_id
      ]
    });
    
    return result.rows[0].id;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
}

export async function updateAccount(id: number, updates: Partial<{
  name: string;
  amount: string;
  icon_type: string;
  color: string;
}>) {
  try {
    const setClause = Object.entries(updates)
      .map(([key]) => `${key} = ?`)
      .join(', ');
    
    await db.execute({
      sql: `UPDATE accounts SET ${setClause} WHERE id = ?`,
      args: [...Object.values(updates), id]
    });
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
}

export async function deleteAccount(id: number) {
  try {
    // First delete all related transactions
    await db.execute({
      sql: 'DELETE FROM transactions WHERE from_account_id = ? OR to_account_id = ?',
      args: [id, id]
    });
    
    // Then delete the account
    await db.execute({
      sql: 'DELETE FROM accounts WHERE id = ?',
      args: [id]
    });
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
}

// Transaction operations
export async function getTransactions(accountId: number) {
  try {
    const result = await db.execute({
      sql: `
        SELECT * FROM transactions 
        WHERE from_account_id = ? OR to_account_id = ?
        ORDER BY date DESC
      `,
      args: [accountId, accountId]
    });
    return result.rows;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}

export async function createTransaction(transaction: {
  from_account_id: number;
  from_account_name: string;
  to_account_id: number;
  to_account_name: string;
  amount: number;
  description: string;
  date: string;
}) {
  try {
    const result = await db.execute({
      sql: `
        INSERT INTO transactions (
          from_account_id, from_account_name, 
          to_account_id, to_account_name, 
          amount, description, date
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
        RETURNING id
      `,
      args: [
        transaction.from_account_id,
        transaction.from_account_name,
        transaction.to_account_id,
        transaction.to_account_name,
        transaction.amount,
        transaction.description,
        transaction.date
      ]
    });
    
    return result.rows[0].id;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

export async function clearTransactions(accountId: number) {
  try {
    await db.execute({
      sql: 'DELETE FROM transactions WHERE from_account_id = ? OR to_account_id = ?',
      args: [accountId, accountId]
    });
  } catch (error) {
    console.error('Error clearing transactions:', error);
    throw error;
  }
}
