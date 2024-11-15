import React from 'react';
import SEO from '../components/SEO';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Новости компании Хотвелл - События и обновления"
          description="Актуальные новости и события компании Хотвелл. Узнайте о последних достижениях, новых проектах и технологиях в производстве СИП панелей."
          keywords="новости Хотвелл, события компании, новости строительства, СИП панели новости, строительные новости Казахстан"
          ogImage={news[0]?.image}
          h1="Новости и События"
        />
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Следите за последними событиями и новостями нашей компании
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link 
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48">
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
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {item.summary}
                </p>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Читать далее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}