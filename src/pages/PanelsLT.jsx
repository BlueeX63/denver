import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsLT() {
  const specifications = [
    { label: 'Operational System Voltage', value: '415V / 440V AC (3-Phase, 50Hz)' },
    { label: 'Rated Insulation Voltage (Ui)', value: '1000V AC' },
    { label: 'Short Circuit Withstand Capacity', value: '50kA / 65kA for 1 sec (CPRI Tested)' },
    { label: 'Main Busbar Material', value: '99.9% Pure Electrolytic ETP Copper / Aluminium' },
    { label: 'Enclosure Protection Class', value: 'IP42 (Indoor) / IP55 (Outdoor Standard)' },
    { label: 'Sheet Metal Fabrication', value: '2.0mm / 1.6mm High-Grade CRCA Steel' },
    { label: 'Compliance Standards', value: 'IS 8623, IEC 61439 Type Tested' }
  ];

  const features = [
    { title: 'High Short-Circuit Withstand Capacity', desc: 'Engineered and CPRI tested to withstand severe electrical fault currents without structural busbar deformation.' },
    { title: 'Modular & Scalable Architecture', desc: 'Compartmentalized sheet metal cassettes allow seamless future addition of feeder feeders.' },
    { title: 'Robust Sheet Metal Construction', desc: 'Precision CNC fabricated seven-tank powder-coated enclosures ensuring exceptional rust resistance.' },
    { title: 'Ergonomic Maintenance Access', desc: 'Spacious cable alleys and front/rear hinged doors facilitate rapid zero-hassle site inspection.' }
  ];

  const applications = [
    'Automotive & Industrial Manufacturing Plants',
    'Commercial High-Rise IT Parks',
    'Multi-Specialty Hospital Infrastructures',
    'Heavy Engineering & Steel Mills'
  ];

  const images = [
    "/photos/DSC_9584.JPG",
    "/photos/DSC_9590.JPG",
    "/photos/DSC_9594.JPG",
    "/photos/DSC_9553.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="L.T. Panel"
      category="Electrical Panels"
      categoryPath="/panels"
      title="L.T. Panel (Low Tension)"
      subtitle="Heavy-Duty Low-Voltage Power Distribution Center up to 415V"
      intro="LT Panels form the backbone of secondary power distribution. They safely receive high current feed from distribution transformers and route stabilized power across diverse industrial plant feeders."
      sustainabilityText="Our LT Panels are built to optimize power flow while minimizing distribution losses. The use of corrosion-resistant enclosures enhances durability, reducing long-term material replacement. Efficient airflow design improves heat dissipation, lowering energy waste. Premium copper bus bars ensure superior conductivity and reduced power drop. Designed for long-term performance, these panels contribute to energy conservation while maintaining high safety standards."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}