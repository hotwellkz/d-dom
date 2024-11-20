import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import NewsPage from './pages/NewsPage';
import NewsArticle from './pages/NewsArticle';
import HouseKitsPage from './pages/HouseKitsPage';
import HouseKitDetails from './pages/HouseKitDetails';
import SipPanelsPage from './pages/SipPanelsPage';
import SipPanelDetails from './pages/SipPanelDetails';
import SipPanelsAlmatyPage from './pages/SipPanelsAlmatyPage';
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
import CareersPage from './pages/CareersPage';
import FinnishHousesPage from './pages/FinnishHousesPage';
import WoodenHousesAlmatyPage from './pages/WoodenHousesAlmatyPage';
import LogHousesAlmatyPage from './pages/LogHousesAlmatyPage';
import SmallSipHousesPage from './pages/SmallSipHousesPage';
import FrameHousesPricePage from './pages/FrameHousesPricePage';
import LaminatedTimberHousesPage from './pages/LaminatedTimberHousesPage';
import AccountingPage from './pages/AccountingPage';

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
            <Route path="/sip-panels-almaty" element={<SipPanelsAlmatyPage />} />
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
            <Route path="/karkasnye-doma-cena" element={<FrameHousesPricePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/finskie-doma" element={<FinnishHousesPage />} />
            <Route path="/derevyannye-doma-almaty" element={<WoodenHousesAlmatyPage />} />
            <Route path="/doma-iz-brusa-almaty" element={<LogHousesAlmatyPage />} />
            <Route path="/proekty-domov-iz-sip-panelej-do-100m2" element={<SmallSipHousesPage />} />
            <Route path="/stroitelstvo-domov-iz-kleenogo-brusa" element={<LaminatedTimberHousesPage />} />
            <Route path="/accounting" element={<AccountingPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}
