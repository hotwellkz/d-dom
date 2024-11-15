import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import NewsPage from './pages/NewsPage';
import NewsArticle from './pages/NewsArticle';
import HouseKitsPage from './pages/HouseKitsPage';
import HouseKitDetails from './pages/HouseKitDetails';
import SipPanelsPage from './pages/SipPanelsPage';
import SipPanelDetails from './pages/SipPanelDetails';
import AboutPage from './pages/AboutPage';
import ModularHomesPage from './pages/ModularHomesPage';
import ModularHomeDetails from './pages/ModularHomeDetails';
import PricesPage from './pages/PricesPage';
import CalculatorPage from './pages/CalculatorPage';
import SiteStructurePage from './pages/SiteStructurePage';
import HouseCostPage from './pages/HouseCostPage';
import BuildHouseAlmatyPage from './pages/BuildHouseAlmatyPage';
import WoodenHousePage from './pages/WoodenHousePage';
import SelfBuildHousePage from './pages/SelfBuildHousePage';
import FrameHousesPage from './pages/FrameHousesPage';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen pb-[72px] md:pb-0 relative w-full overflow-x-hidden">
        <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <main className="relative w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/house-kits" element={<HouseKitsPage />} />
            <Route path="/house-kit/:id" element={<HouseKitDetails />} />
            <Route path="/sip-panels" element={<SipPanelsPage />} />
            <Route path="/sip-panel/:id" element={<SipPanelDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/modular-homes" element={<ModularHomesPage />} />
            <Route path="/modular-home/:id" element={<ModularHomeDetails />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/site-structure" element={<SiteStructurePage />} />
            <Route path="/stoimost-stroitelstva-doma" element={<HouseCostPage />} />
            <Route path="/postroit-dom-almaty" element={<BuildHouseAlmatyPage />} />
            <Route path="/kak-postroit-derevyannyj-dom" element={<WoodenHousePage />} />
            <Route path="/skolko-stoit-postroit-dom-samomu" element={<SelfBuildHousePage />} />
            <Route path="/karkasnye-doma" element={<FrameHousesPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </BrowserRouter>
  );
}