import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  h1?: string;
  className?: string;
}

export default function SEO({ title, description, keywords, ogImage, h1, className = "text-4xl font-bold text-gray-900 mb-6" }: SEOProps) {
  const siteName = 'Хотвелл';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
      {h1 && <h1 className={className}>{h1}</h1>}
    </>
  );
}