import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function ServoStabilizer() {
  const specifications = [
    { label: 'Capacity Rating', value: '5 kVA to 2500 kVA (Single Phase & Three Phase)' },
    { label: 'Input Voltage Range', value: '300V - 460V AC Three Phase (Wide Range Option: 250V - 480V AC)' },
    { label: 'Output Voltage Regulation', value: '400V / 415V AC ±1% Constant Regulated' },
    { label: 'Voltage Correction Speed', value: 'Up to 35V to 50V per second without overshoot' },
    { label: 'System Operating Efficiency', value: '> 98.5% at Full Load (Low Loss Design)' },
    { label: 'Cooling Mechanism', value: 'Air Cooled (up to 100 kVA) / Oil Cooled (up to 2500 kVA)' },
    { label: 'Waveform Distortion', value: 'Zero Phase Shift & Nil Harmonic Distortion (True Sine Wave)' },
    { label: 'Inbuilt Safeguards', value: 'Electronic Over/Under Voltage Cutoff, Short Circuit, Phase Reversal, Overload' },
    { label: 'Standard Compliance', value: 'IS 9815 / IS 2026 Certified Heavy Duty Industrial Grade' }
  ];

  const features = [
    { 
      title: 'Microprocessor Precision Controller', 
      desc: 'Advanced solid-state electronic control circuitry senses voltage deviations instantaneously and drives the AC synchronous motor with pinpoint accuracy.' 
    },
    { 
      title: '98.5% High Energy Efficiency', 
      desc: 'Engineered with high-conductivity electrolytic copper windings and prime CRGO toroidal cores, ensuring virtually zero energy loss and lower electricity bills.' 
    },
    { 
      title: 'Zero Waveform Distortion', 
      desc: 'Unlike static or relay-based stabilizers, our motorized variable transformer design introduces zero harmonic distortion or phase shift to the output waveform.' 
    },
    { 
      title: 'Heavy-Duty Short Circuit Defense', 
      desc: 'Equipped with industrial MCCBs, contactors, and electronic overload sensing to instantly isolate downstream equipment during severe electrical short circuits.' 
    },
    { 
      title: 'Rapid Voltage Correction Speed', 
      desc: 'High-torque AC synchronous servo motors deliver ultra-fast correction speeds up to 50V/sec, protecting sensitive automation drives from sudden grid voltage spikes.' 
    },
    { 
      title: 'Rugged Industrial Construction', 
      desc: 'Available in heavy-gauge sheet steel enclosures with IP31/IP42 protection, engineered for harsh, dusty, and high-ambient temperature factory environments.' 
    }
  ];

  const applications = [
    'CNC Machines, Robotics & Industrial Automation Centers',
    'Textile Spinning, Weaving & Continuous Processing Mills',
    'Medical Diagnostic Suites (MRI, CT Scan, Cath Labs & X-Ray)',
    'Pharmaceutical Packaging & Continuous Chemical Processing',
    'Commercial Complexes, Malls & Corporate Data Server Rooms',
    'High-Speed Printing Presses & Packaging Automation Units'
  ];

  const images = [
    "/photos/DSC_9536.JPG",
    "/photos/DSC_9528.JPG",
    "/photos/DSC_9534.JPG",
    "/photos/DSC_9537.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Servo Stabilizer"
      category="Products"
      categoryPath="/servo-stabilizer"
      title="Servo Voltage Stabilizers"
      subtitle="Precision Microprocessor-Controlled Voltage Regulation for Sensitive Industrial Machinery"
      intro="In industrial manufacturing and continuous processing plants, voltage fluctuations can cause catastrophic damage to sensitive electronic automation, CNC drives, and medical diagnostic equipment. Synergy Systems’s industrial-grade Servo Voltage Stabilizers deliver continuous, distortion-free voltage regulation with rapid correction speed, safeguarding high-value capital equipment against severe voltage surges, sags, and phase imbalances."
      sustainabilityText="Manufactured with prime-grade electrolytic copper and low-loss CRGO silicon steel laminations, our servo stabilizers achieve up to 98.5% operating efficiency. By preventing electrical over-voltage stress, they drastically reduce equipment heat dissipation and premature component failure, extending machinery service life and minimizing electronic waste across industrial facilities."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}
