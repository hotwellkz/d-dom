import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
// ... остальной импорт остается без изменений ...

export default function BuilderCalculatorPage() {
  // ... остальной код остается без изменений ...

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="transition-all duration-300">
        <div className="pt-20">
          {/* ... остальной контент остается без изменений ... */}
        </div>
      </div>
    </div>
  );
}
