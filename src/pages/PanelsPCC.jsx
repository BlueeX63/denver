import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsPCC() {
  const specifications = [
    { label: 'Maximum Busbar Current Rating', value: 'Up to 6300A Main Horizontal Bus' },
    { label: 'Operational System Voltage', value: '415V / 690V AC (3-Phase, 50Hz)' },
    { label: 'Short Circuit Fault Rating', value: '65kA / 80kA for 1 sec (CPRI Certified)' },
    { label: 'Incomer Breaker Integration', value: 'Air Circuit Breakers (ACB) up to 6300A' },
    { label: 'Outgoing Feeder Modules', value: 'MCCB / Switch Fuse Units (SFU)' },
    { label: 'Busbar Sleeving Standard', value: 'Fire-Retardant Halogen-Free PVC Shrinkable' },
    { label: 'Remote Telemetry Interface', value: 'Modbus RS485 / Ethernet IoT Compatible' }
  ];

  const features = [
    { title: 'Centralized Heavy Load Management', desc: 'Engineered as the main plant electrical hub distributing mega-watts of power with zero voltage fluctuation.' },
    { title: 'Advanced Fault Defense Protection', desc: 'Integrated microprocessor trip units instantly isolate downstream faults before equipment damage occurs.' },
    { title: 'Precision-Engineered Busbar Geometry', desc: 'High thermal conductivity electrolytic copper busbars minimize internal I²R overheating and power loss.' },
    { title: 'Form-4 Compartmentalization', desc: 'Full metallic segregation between busbars, cable alleys, and functional units ensuring maximum operator safety.' }
  ];

  const applications = [
    'Petrochemical & Refinery Processing Plants',
    'Tier-IV Hyperscale Data Centers',
    'Cement Manufacturing & Mining Facilities',
    'Heavy Electrical Substations'
  ];

  const images = [
    "/photos/DSC_9583.JPG",
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9562.JPG",
    "/photos/DSC_9584.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="PCC Panel"
      category="Electrical Panels"
      categoryPath="/panels"
      title="PCC (Power Control Center)"
      subtitle="Main Power Distribution Hub Managing High-Capacity Plant Loads"
      intro="PCC panels act as the primary electrical control brain of industrial facilities. Receiving bulk power directly from transformers, they execute centralized load management, harmonic filtering, and total plant protection."
      sustainabilityText="Synergyelectra PCC panels enhance energy efficiency by reducing transmission losses and improving load balancing. Advanced protection systems prevent equipment damage, extending operational lifespan. Precision-engineered bus bar systems reduce overheating and power inefficiencies. Built with premium insulation materials, our PCC panels ensure long-term sustainability and operational safety for heavy-duty applications."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}