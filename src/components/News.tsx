import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Новости Компании</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Следите за последними событиями и новостями нашей компании
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`}
              className="block group"
            >
              <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-secondary-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <span className="inline-flex items-center text-primary-600 group-hover:text-primary-700 font-medium transition-colors">
                    Читать далее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Все новости
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}