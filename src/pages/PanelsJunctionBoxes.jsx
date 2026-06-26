import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsJunctionBoxes() {
  const specifications = [
    { label: 'Enclosure Material Standard', value: 'SMC Fiberglass / Polycarbonate / 304 Stainless Steel' },
    { label: 'Ingress Protection Class', value: 'IP65 / IP66 Hermetically Sealed All-Weather' },
    { label: 'Mechanical Impact Resistance', value: 'IK10 Anti-Vandal Outdoor Rugged Standard' },
    { label: 'Terminal Block Standard', value: 'High-Amperage Melamine / Polyamide Stud Blocks' },
    { label: 'Canopy Roof Standard', value: 'Slanted Rain-Shedding Outdoor Canopy' },
    { label: 'Locking Mechanism', value: '3-Point Secure Anti-Tamper Padlockable Key' },
    { label: 'Gasket Sealing', value: 'Seamless Seamless Neoprene / PU Poured Gasket' }
  ];

  const features = [
    { title: 'Extreme Weather Resistance', desc: 'UV-stabilized non-corrosive SMC and stainless enclosures withstand saline coastal air and harsh desert sun.' },
    { title: 'Organized Cable Management', desc: 'Internal mounting plates with uncluttered stud terminals prevent short circuits and simplify outdoor fault tracing.' },
    { title: 'IK10 Vandal-Proof Ruggedness', desc: 'Heavy wall construction survives extreme external physical impacts in public streets and remote utility fields.' },
    { title: 'Slanted Canopy Rain Defense', desc: 'Integrated sloped roof design prevents water pooling and gasket degradation during torrential monsoons.' }
  ];

  const applications = [
    'City Street Lighting & Traffic Signal Feeders',
    'Outdoor Highway Utility Distribution Hubs',
    'Seaport & Saline Dockside Shipyard Power',
    'Remote Agricultural & Mining Field Pillars'
  ];

  const images = [
    "/photos/DSC_9590.JPG",
    "/photos/DSC_9584.JPG",
    "/photos/DSC_9575.JPG",
    "/photos/DSC_9553.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Junction Boxes"
      category="Electrical Panels"
      categoryPath="/panels"
      title="Junction Boxes & Feeder Pillars"
      subtitle="IP66 Weatherproof Outdoor Cable Termination & Distribution Hubs"
      intro="Outdoor electrical connections face constant assault from rain, dust, UV radiation, and physical tampering. Feeder Pillars and Junction Boxes provide fortress-like protection for outdoor power junctions."
      sustainabilityText="Weatherproof and corrosion-resistant construction ensures long service life. Organized cable management reduces system inefficiencies and enhances safety. Designed for durability and low maintenance, they support sustainable power infrastructure development."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}