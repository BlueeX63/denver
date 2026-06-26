import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import SolarUPS from './pages/SolarUPS'; // Updated Solar UPS Category
import Panels from './pages/Panels';
import BatteryCharger from './pages/BatteryCharger';

import SolarUPS1_1 from './pages/SolarUPS1_1';
import SolarUPS1_1_1 from './pages/SolarUPS1_1_1';
import SolarUPS3_1 from './pages/SolarUPS3_1';
import SolarUPS3_3 from './pages/SolarUPS3_3';

import PanelsLT from './pages/PanelsLT';
import PanelsPCC from './pages/PanelsPCC';
import PanelsMCC from './pages/PanelsMCC';
import PanelsDrawOut from './pages/PanelsDrawOut';
import PanelsACDB_DCDB from './pages/PanelsACDB_DCDB';
import PanelsDistributionBoard from './pages/PanelsDistributionBoard';
import PanelsBusDuct from './pages/PanelsBusDuct';
import PanelsAPFC from './pages/PanelsAPFC';
import PanelsJunctionBoxes from './pages/PanelsJunctionBoxes';

import BatteryChargerIndustrial from './pages/BatteryChargerIndustrial';
import BatteryChargerSolarPanel from './pages/BatteryChargerSolarPanel';
import BatteryChargerSolarStructure from './pages/BatteryChargerSolarStructure';

function ScrollRoutes() {
  const scrollRef = useRef(null);
  const scroll = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    scroll.current = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  lerp: 0.05,        // smaller = smoother / slower feel
  duration: 1.2,     // higher = longer scroll duration
  smartphone: { smooth: true },
  tablet: { smooth: true },
});

    return () => scroll.current?.destroy();
  }, []);

  useEffect(() => {
    scroll.current?.resize();
  }, [location]);

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen flex flex-col font-outfit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/solar-ups" element={<SolarUPS />} />
        <Route path="/panels" element={<Panels />} />
        <Route path="/battery-charger" element={<BatteryCharger />} />

        <Route path="/solar-ups-1-1" element={<SolarUPS1_1 />} />
        <Route path="/solar-ups-1-1-1" element={<SolarUPS1_1_1 />} />
        <Route path="/solar-ups-3-1" element={<SolarUPS3_1 />} />
        <Route path="/solar-ups-3-3" element={<SolarUPS3_3 />} />

        <Route path="/panels-lt" element={<PanelsLT />} />
        <Route path="/panels-pcc" element={<PanelsPCC />} />
        <Route path="/panels-mcc" element={<PanelsMCC />} />
        <Route path="/panels-draw-out" element={<PanelsDrawOut />} />
        <Route path="/panels-acdb-dcdb" element={<PanelsACDB_DCDB />} />
        <Route path="/panels-distribution-board" element={<PanelsDistributionBoard />} />
        <Route path="/panels-bus-duct" element={<PanelsBusDuct />} />
        <Route path="/panels-apfc" element={<PanelsAPFC />} />
        <Route path="/panels-junction-boxes" element={<PanelsJunctionBoxes />} />

        <Route path="/battery-charger-industrial" element={<BatteryChargerIndustrial />} />
        <Route path="/battery-charger-solar-panel" element={<BatteryChargerSolarPanel />} />
        <Route path="/battery-charger-solar-structure" element={<BatteryChargerSolarStructure />} />
      </Routes>
      <Footer />
    </div>
  );
}

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
