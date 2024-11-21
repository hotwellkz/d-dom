import React from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { news } from '../data/news';

export default function NewsArticle() {
  const { id } = useParams();
  const article = news.find(item => item.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <SEO 
          title="Статья не найдена"
          description="Запрашиваемая новость не найдена на сайте компании Хотвелл"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Статья не найдена</h2>
          <Link to="/news" className="text-primary-600 hover:text-primary-700">
            Вернуться к новостям
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={article.title}
        description={article.summary}
        keywords={`${article.category}, новости Хотвелл, ${article.title.toLowerCase()}, строительство домов, СИП панели`}
        ogImage={article.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/news" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Назад к новостям
        </Link>

        <article>
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-2 text-primary-600" />
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              {article.summary}
            </p>

            {/* Дополнительный контент статьи */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Подробности
              </h2>
              <p className="text-gray-600">
                {article.summary}
              </p>
            </div>

            {/* Рекомендуемые статьи */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Похожие новости
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {news
                  .filter(item => item.id !== article.id)
                  .slice(0, 2)
                  .map(item => (
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="group"
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}