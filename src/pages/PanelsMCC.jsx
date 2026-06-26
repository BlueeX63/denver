import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsMCC() {
  const specifications = [
    { label: 'Supported Starter Configurations', value: 'Direct On Line (DOL), Star-Delta, ATS' },
    { label: 'Variable Frequency Drive (VFD)', value: 'Integrated ABB / Siemens / Danfoss Drives' },
    { label: 'Feeder Module Standard', value: 'Fully Withdrawable Cassette Type / Fixed' },
    { label: 'Control Circuit Voltage', value: '110V AC / 240V AC / 24V DC Isolated' },
    { label: 'Motor Protection Relays (MPR)', value: 'Comprehensive Overload, Stall & Phase Loss' },
    { label: 'Thermal Ventilation System', desc: 'Forced Louvered Airflow with Washable IP54 Filters' },
    { label: 'Ingress Protection Class', value: 'IP42 / IP54 High-Tech Industrial Standard' }
  ];

  const features = [
    { title: 'Optimized Motor Energy Control', desc: 'Intelligent soft starter and VFD drive synchronization drastically cuts high motor starting inrush power surges.' },
    { title: 'Comprehensive Overload Defense', desc: 'High-precision thermal relays prevent expensive motor burnt-outs caused by mechanical jamming or voltage drops.' },
    { title: 'Structured Thermal Ventilation', desc: 'Aerodynamic internal heat dissipation channels keep sensitive electronics cool during continuous 24/7 operations.' },
    { title: 'Rapid Cassette Replacement', desc: 'Standardized drawout cassettes allow replacing faulty motor feeders in under 3 minutes without plant shutdown.' }
  ];

  const applications = [
    'Automated Assembly Line Conveyor Systems',
    'Water Treatment & Pumping Pumping Stations',
    'HVAC Chiller & Boiler Plant Hubs',
    'Pharmaceutical & Chemical Reactors'
  ];

  const images = [
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9583.JPG",
    "/photos/DSC_9575.JPG",
    "/photos/DSC_9590.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="MCC Panel"
      category="Electrical Panels"
      categoryPath="/panels"
      title="MCC (Motor Control Centre)"
      subtitle="Centralized Automation & Protection Hub for Industrial Plant Motors"
      intro="Industrial motors consume up to 70% of plant electricity. MCC panels centralize the switching, speed regulation, and electrical defense of hundreds of manufacturing motors from a single safe control room."
      sustainabilityText="Our MCC panels reduce energy wastage through optimized motor control and overload protection systems. Intelligent integration options enhance motor performance while minimizing downtime. Durable components and structured ventilation extend system life and reduce maintenance frequency. By enhancing motor efficiency, our MCC panels contribute significantly to sustainable industrial operations."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}