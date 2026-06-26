import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsBusDuct() {
  const specifications = [
    { label: 'Current Transmission Rating', value: '400A to 6600A High Power Trunking' },
    { label: 'Structural Architecture', value: 'Compact Sandwich Non-Ventilated Geometry' },
    { label: 'Conductor Material Grade', value: '99.9% Pure Electrolytic Copper / Aluminium' },
    { label: 'Conductor Insulation Class', value: 'Class-B (130°C) / Class-F Epoxy Insulation' },
    { label: 'Short Circuit Fault Withstand', value: 'Up to 100kA for 1 sec Type Tested' },
    { label: 'Housing Enclosure Standard', value: 'Extruded Aluminium Alloy / GI Casing' },
    { label: 'Ingress Protection Rating', value: 'IP54 Indoor / IP67 Fully Outdoor Sealed' }
  ];

  const features = [
    { title: 'Drastic Transmission Loss Reduction', desc: 'Solid sandwich conductor geometry offers extremely low impedance and magnetic reactance compared to bulky parallel cables.' },
    { title: 'Compact Space-Saving Profile', desc: 'Occupies up to 60% less physical plant space than equivalent multi-run cable trays, freeing vital overhead room.' },
    { title: 'Plug-in Tap Off Flexibility', desc: 'Modular tap-off boxes allow drawing high amperage power anywhere along the trunking run without cutting cables.' },
    { title: 'High Seismic & Fire Resistance', desc: 'Rigid metallic housing prevents fire propagation and withstands severe mechanical vibration and short-circuit forces.' }
  ];

  const applications = [
    'Transformer to Switchgear Incomer Trunking',
    'High-Rise Building Vertical Power Risers',
    'Heavy Manufacturing Plant Overhead Distribution',
    'Hyperscale Data Center Power Backbones'
  ];

  const images = [
    "/photos/DSC_9583.JPG",
    "/photos/DSC_9584.JPG",
    "/photos/DSC_9607.JPG",
    "/photos/DSC_9553.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Bus Duct System"
      category="Electrical Panels"
      categoryPath="/panels"
      title="Bus Duct Systems"
      subtitle="High-Capacity Compact Sandwich Busbar Trunking Technology"
      intro="Traditional multi-strand heavy cabling suffers from high voltage drop, overheating, and massive space consumption. Bus Duct trunking replaces messy cable trays with sleek metallic sandwich busbar expressways."
      sustainabilityText="Manufactured using high-conductivity materials, our bus ducts reduce transmission losses significantly. The compact modular design minimizes material usage while maximizing efficiency. Enhanced insulation and structured airflow design lower heat generation, contributing to sustainable infrastructure development."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}