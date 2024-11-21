import Database from 'better-sqlite3';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'accounting.db'));

// Initialize database tables
export async function initDb() {
  try {
    // Create accounts table
    db.exec(`
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
    db.exec(`
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
export function getAccounts() {
  return db.prepare('SELECT * FROM accounts').all();
}

export function createAccount(account: {
  name: string;
  amount: string;
  icon_type: string;
  color: string;
  section_id: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO accounts (name, amount, icon_type, color, section_id) 
    VALUES (?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(
    account.name,
    account.amount,
    account.icon_type,
    account.color,
    account.section_id
  );
  
  return result.lastInsertRowid;
}

export function updateAccount(id: number, updates: Partial<{
  name: string;
  amount: string;
  icon_type: string;
  color: string;
}>) {
  const setClause = Object.keys(updates)
    .map(key => `${key} = @${key}`)
    .join(', ');
  
  const stmt = db.prepare(`
    UPDATE accounts 
    SET ${setClause} 
    WHERE id = @id
  `);
  
  return stmt.run({ ...updates, id });
}

export function deleteAccount(id: number) {
  // First delete all related transactions
  db.prepare('DELETE FROM transactions WHERE from_account_id = ? OR to_account_id = ?')
    .run(id, id);
  
  // Then delete the account
  return db.prepare('DELETE FROM accounts WHERE id = ?').run(id);
}

// Transaction operations
export function getTransactions(accountId: number) {
  return db.prepare(`
    SELECT * FROM transactions 
    WHERE from_account_id = ? OR to_account_id = ?
    ORDER BY date DESC
  `).all(accountId, accountId);
}

export function createTransaction(transaction: {
  from_account_id: number;
  from_account_name: string;
  to_account_id: number;
  to_account_name: string;
  amount: number;
  description: string;
  date: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO transactions (
      from_account_id, from_account_name, 
      to_account_id, to_account_name, 
      amount, description, date
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(
    transaction.from_account_id,
    transaction.from_account_name,
    transaction.to_account_id,
    transaction.to_account_name,
    transaction.amount,
    transaction.description,
    transaction.date
  );
  
  return result.lastInsertRowid;
}

export function clearTransactions(accountId: number) {
  return db.prepare('DELETE FROM transactions WHERE from_account_id = ? OR to_account_id = ?')
    .run(accountId, accountId);
}
