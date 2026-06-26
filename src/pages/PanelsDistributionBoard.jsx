import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsDistributionBoard() {
  const specifications = [
    { label: 'Supported Board Configurations', value: 'SPN, TPN, Per Phase Isolation (PPI), VTPN' },
    { label: 'Number of Branch Ways', value: '4-Way to 24-Way Standardized Layouts' },
    { label: 'Incomer Protective Switching', value: 'Isolator, RCCB, RCBO, ELCB Earth Leakage' },
    { label: 'Branch Circuit Protection', value: 'Miniature Circuit Breakers (MCB) up to 63A' },
    { label: 'Pan Assembly Busbar', value: '100% Fully Shrouded Electrolytic Copper Pan' },
    { label: 'Impact & Ingress Standard', value: 'IK09 Mechanical Impact / IP43 Dust Standard' },
    { label: 'Fabrication & Finish', value: '1.6mm CRCA Sheet with Epoxy Powder Coat' }
  ];

  const features = [
    { title: 'Optimized Branch Circuit Defense', desc: 'Precision calibrated MCBs provide instant tripping against short circuits, preventing electrical fires.' },
    { title: 'Structured Thermal Airflow', desc: 'Neat internal cable dressing channels and spacious wiring alleys prevent heat trapping and insulation melting.' },
    { title: 'Earth Leakage Shock Protection', desc: 'High sensitivity 30mA RCCB incomers instantly disconnect power upon detecting human contact or current leakage.' },
    { title: 'Double Door Secure Construction', desc: 'Reversible outer metal doors with flush locking mechanisms protect internal breakers from unauthorized tampering.' }
  ];

  const applications = [
    'Corporate Luxury Office Interiors & Labs',
    'Commercial Shopping Malls & Retail Hubs',
    'Industrial Plant Administrative Blocks',
    'Residential High-Rise Condominiums'
  ];

  const images = [
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9590.JPG",
    "/photos/DSC_9562.JPG",
    "/photos/DSC_9584.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Distribution Board"
      category="Electrical Panels"
      categoryPath="/panels"
      title="Distribution Boards"
      subtitle="Precision Multi-Circuit Branch Distribution & Protection Hubs"
      intro="Distribution Boards act as the final vital frontier of electrical safety. They safely divide incoming bulk feeder power into individual subsidiary branch circuits, protecting sensitive lighting, computers, and machinery."
      sustainabilityText="Optimized circuit protection reduces energy loss and enhances safety. Durable enclosure design ensures extended operational life. Structured wiring improves airflow and thermal stability, contributing to energy efficiency and long-term reliability."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}