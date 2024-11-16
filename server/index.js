import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import TelegramBot from 'node-telegram-bot-api';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Инициализация Telegram бота
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
  
  // Отправляем приветственное сообщение
  socket.emit('message', {
    id: Date.now().toString(),
    text: 'Здравствуйте! Как мы можем вам помочь?',
    sender: 'admin',
    timestamp: new Date()
  });

  socket.on('message', async (message) => {
    try {
      // Отправляем сообщение в Telegram
      const telegramMessage = await bot.sendMessage(
        TELEGRAM_CHAT_ID,
        `Новое сообщение от посетителя:\n\n${message.text}\n\nID чата: ${socket.id}`
      );

      // Сохраняем соответствие между ID чата на сайте и сообщением в Telegram
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
    // Удаляем соответствие при отключении клиента
    chatMapping.delete(socket.id);
  });
});

// Обработка ответов из Telegram
bot.on('message', async (msg) => {
  // Проверяем, что сообщение отправлено в нужную группу
  if (msg.chat.id.toString() === TELEGRAM_CHAT_ID) {
    // Находим активные соединения и отправляем сообщение всем подключенным клиентам
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