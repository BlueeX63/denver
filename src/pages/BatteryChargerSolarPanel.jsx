import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function BatteryChargerSolarPanel() {
  const specifications = [
    { label: 'Cell Technology Type', value: 'Monocrystalline PERC / TopCon Half-Cut Cells' },
    { label: 'Nominal Module Power Rating', value: '540Wp to 670Wp Commercial High-Yield' },
    { label: 'Module Conversion Efficiency', value: 'Up to 22.8% Tier-1 Solar Standard' },
    { label: 'Power Degradation Warranty', value: '<0.55% Annual Degradation (25-Year Linear)' },
    { label: 'Front Glass Specification', value: '3.2mm Anti-Reflective High-Transmittance Tempered' },
    { label: 'Frame Construction', value: 'Anodized Aluminium Alloy (Silver / Black)' },
    { label: 'Mechanical Load Capacity', value: '5400 Pa Snow Load / 2400 Pa Wind Withstand' }
  ];

  const features = [
    { title: 'Advanced Half-Cut Cell Architecture', desc: 'Half-cut cell design halves electrical current, drastically reducing internal resistive losses and shade-induced hotspot risks.' },
    { title: 'Anti-PID Certified Quality', desc: 'Rigorous cell doping prevents Potential Induced Degradation (PID) under high voltage and humid monsoon climates.' },
    { title: 'Superior Low-Light Performance', desc: 'Advanced textured glass and cell surface passivation ensure robust power yield during cloudy dawns and dusks.' },
    { title: 'Decades of Clean Generation', desc: 'Guaranteed 80%+ output yield even after 25 years of continuous commercial sun exposure.' }
  ];

  const applications = [
    'Comprehensive Commercial Factory Rooftop Parks',
    'Ground-Mounted Megawatt Utility Farms',
    'Solar Online UPS Hybrid Plant Integration',
    'Off-Grid Industrial Captive Power Hubs'
  ];

  const images = [
    "/photos/DSC_9590.JPG",
    "/photos/DSC_9583.JPG",
    "/photos/DSC_9607.JPG",
    "/photos/DSC_9545.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Solar Panels"
      category="Renewable Energy"
      categoryPath="/battery-charger"
      title="Solar Panels"
      subtitle="High-Efficiency Photovoltaic Modules for Maximum Commercial Energy Yield"
      intro="As energy costs soar, industrial self-generation is critical. Synergy Systems supplies tier-1 high-efficiency monocrystalline solar modules engineered to convert sunlight into reliable industrial electricity."
      sustainabilityText="Our solar panels generate clean, renewable energy while significantly reducing carbon emissions. Built using advanced cell technology, they ensure minimal degradation over time. Durable weather-resistant construction enhances lifespan and performance consistency. These panels represent a sustainable investment in long-term energy independence."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}