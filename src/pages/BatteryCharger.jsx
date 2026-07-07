import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function BatteryCharger() {
  const specifications = [
    { label: 'Input Nominal AC Voltage', value: '240V 1-Phase / 415V 3-Phase AC (50Hz)' },
    { label: 'Nominal DC Output Voltage', value: '24V / 48V / 110V / 220V DC Constant' },
    { label: 'DC Output Current Capacity', value: '10 Amps to 500 Amps Heavy Duty' },
    { label: 'Charging Modes Standard', value: 'Automatic Float & Boost Charging' },
    { label: 'Ripple Content Regulation', value: '<1% RMS without Battery Connected' },
    { label: 'Supported Battery Technologies', value: 'Lead-Acid (Tubular/VRLA), Ni-Cd, Lithium-Ion' },
    { label: 'Cooling & Enclosure', value: 'Natural / Forced Air Cooled IP42 Sheet Steel' }
  ];

  const features = [
    { title: 'Intelligent Float & Boost Firing', desc: 'Microprocessor regulated charging curves automatically shift between high-rate boost and low-loss maintenance float.' },
    { title: 'Overcharge & Deep Discharge Defense', desc: 'Active voltage monitoring prevents battery electrolyte boiling and premature cell sulfation.' },
    { title: 'Ultra-Low DC Output Ripple', desc: 'Integrated LC inductive filtering ensures pristine clean DC power, protecting substation SCADA and trip coils.' },
    { title: 'Digital Telemetry Display', desc: 'Comprehensive digital LCD meters display real-time charging voltage, current, and earth fault diagnostics.' }
  ];

  const applications = [
    'EHV Electrical Substation Switchgear Coils',
    'Telecom Base Transceiver Station (BTS) Backup',
    'Railway Signaling & Traction Power Yards',
    'Heavy Industrial Emergency Lighting Hubs'
  ];

  const images = [
    "/photos/DSC_9528.JPG",
    "/photos/DSC_9536.JPG",
    "/photos/DSC_9594.JPG",
    "/photos/DSC_9537.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Battery Charger"
      category="Products"
      categoryPath="/battery-charger"
      title="Industrial Battery Charger"
      subtitle="Intelligent Float & Boost Charging for Substations & Telecom Infrastructure"
      intro="Our industrial battery chargers deliver precise and intelligent charging for substations, UPS systems, telecom towers, and renewable energy installations."
      sustainabilityText="Advanced charging algorithms prevent overcharging and deep discharge, extending battery lifespan and reducing environmental waste. High conversion efficiency minimizes energy loss during charging cycles. Digital monitoring ensures optimized performance and cost efficiency. Built for rugged environments, our chargers combine sustainability with premium engineering excellence."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}
