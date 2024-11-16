import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import io, { Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

// В продакшене используем URL сервера на Render
const SOCKET_URL = 'https://your-render-url.onrender.com';

const RECONNECT_DELAY = 5000;
const MAX_RETRIES = 3;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const [hasShownInitial, setHasShownInitial] = useState(false);

  useEffect(() => {
    // Показываем чат через 30 секунд
    const timer = setTimeout(() => {
      if (!hasShownInitial) {
        setIsOpen(true);
        setHasShownInitial(true);
        // Добавляем приветственное сообщение
        setMessages([
          {
            id: '1',
            text: 'Здравствуйте! Как мы можем вам помочь?',
            sender: 'admin',
            timestamp: new Date()
          }
        ]);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasShownInitial]);

  const connectSocket = () => {
    if (retryCount >= MAX_RETRIES) {
      setConnectionError('Не удалось подключиться к серверу. Пожалуйста, попробуйте позже.');
      return;
    }

    try {
      socketRef.current = io(SOCKET_URL, {
        transports: ['websocket', 'polling']
      });

      socketRef.current.on('connect', () => {
        setIsConnected(true);
        setConnectionError(null);
        setRetryCount(0);
      });

      socketRef.current.on('disconnect', () => {
        setIsConnected(false);
      });

      socketRef.current.on('message', (message: Message) => {
        setMessages(prev => [...prev, message]);
        setIsLoading(false);
        scrollToBottom();
      });

      socketRef.current.on('connect_error', () => {
        setIsConnected(false);
        setConnectionError('Ошибка подключения к серверу');
        socketRef.current?.disconnect();
        
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          connectSocket();
        }, RECONNECT_DELAY);
      });
    } catch (error) {
      setConnectionError('Ошибка при инициализации соединения');
    }
  };

  useEffect(() => {
    if (isOpen && !socketRef.current) {
      connectSocket();
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !socketRef.current || !isConnected) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    setIsLoading(true);
    scrollToBottom();

    try {
      socketRef.current.emit('message', message);
    } catch (error) {
      setConnectionError('Ошибка отправки сообщения');
      setIsLoading(false);
    }
  };

  const handleFallbackContact = () => {
    const phone = "77772282323";
    const message = "Здравствуйте! У меня возникли проблемы с чатом. Можете мне помочь?";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-[360px] mb-4 overflow-hidden border border-gray-200"
          >
            <div className="bg-primary-600 p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold">Онлайн чат</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-700 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200">
              {connectionError ? (
                <div className="text-center">
                  <p className="text-red-500 text-sm mb-2">{connectionError}</p>
                  <button
                    onClick={handleFallbackContact}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Связаться через WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Введите сообщение..."
                      className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !newMessage.trim() || !isConnected}
                      className="bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {!isConnected && !connectionError && (
                    <p className="text-yellow-500 text-sm">
                      Подключение к серверу...
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}