import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Свяжитесь с Нами</h2>
          <p className="text-xl text-secondary-600">Мы будем рады ответить на ваши вопросы. Начните диалог с нами.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700">Имя</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-secondary-200 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-secondary-200 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700">Сообщение</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-secondary-200 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
              >
                Отправить
              </button>
            </form>
          </div>

          <div className="space-y-8 bg-neutral-200 p-8 rounded-lg">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-secondary-800">Email</h3>
                <p className="mt-1 text-secondary-600">info@dostupnydom.kz</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-secondary-800">Телефон</h3>
                <p className="mt-1 text-secondary-600">+7 (747) 743-43-43</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-secondary-800">Адрес</h3>
                <p className="mt-1 text-secondary-600">
                  ул. Рыскулова, 232/3<br />
                  Алматы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}