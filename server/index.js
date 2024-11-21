import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import TelegramBot from 'node-telegram-bot-api';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb, getAccounts, createAccount, updateAccount, deleteAccount, getTransactions, createTransaction, clearTransactions } from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Initialize database
initDb().catch(console.error);

// API Routes
app.get('/api/accounts', async (req, res) => {
  try {
    const accounts = await getAccounts();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
});

app.post('/api/accounts', async (req, res) => {
  try {
    const id = await createAccount(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create account' });
  }
});

app.put('/api/accounts/:id', async (req, res) => {
  try {
    await updateAccount(parseInt(req.params.id), req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update account' });
  }
});

app.delete('/api/accounts/:id', async (req, res) => {
  try {
    await deleteAccount(parseInt(req.params.id));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete account' });
  }
});

app.get('/api/transactions/:accountId', async (req, res) => {
  try {
    const transactions = await getTransactions(parseInt(req.params.accountId));
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

app.post('/api/transactions', async (req, res) => {
  try {
    const id = await createTransaction(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

app.delete('/api/transactions/:accountId', async (req, res) => {
  try {
    await clearTransactions(parseInt(req.params.accountId));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear transactions' });
  }
});

// Telegram Bot Integration
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8175269064:AAEUBxMk1B3XrxU7OfgcSFOpBy44OzOyNA4';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-4500008974';

if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Необходимо указать TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env файле');
  process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Хранение соответствия между ID чата на сайте и сообщением в Telegram
const chatMapping = new Map();

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.emit('message', {
    id: Date.now().toString(),
    text: 'Здравствуйте! Как мы можем вам помочь?',
    sender: 'admin',
    timestamp: new Date()
  });

  socket.on('message', async (message) => {
    try {
      const telegramMessage = await bot.sendMessage(
        TELEGRAM_CHAT_ID,
        `Новое сообщение от посетителя:\n\n${message.text}\n\nID чата: ${socket.id}`
      );

      chatMapping.set(socket.id, telegramMessage.message_id);

    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      socket.emit('message', {
        id: Date.now().toString(),
        text: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.',
        sender: 'admin',
        timestamp: new Date()
      });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    chatMapping.delete(socket.id);
  });
});

bot.on('message', async (msg) => {
  if (msg.chat.id.toString() === TELEGRAM_CHAT_ID) {
    io.sockets.sockets.forEach((socket) => {
      socket.emit('message', {
        id: Date.now().toString(),
        text: msg.text,
        sender: 'admin',
        timestamp: new Date()
      });
    });
  }
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
