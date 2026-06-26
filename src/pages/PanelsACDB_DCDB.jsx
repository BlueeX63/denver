import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsACDB_DCDB() {
  const specifications = [
    { label: 'Maximum DC String Voltage', value: '1000V DC / 1500V DC High Voltage Grade' },
    { label: 'Surge Protection Device (SPD)', value: 'Type 1 + Type 2 Heavy Duty (40kA / 60kA)' },
    { label: 'Photovoltaic String Fuses', value: 'gPV Grade 1000V/1500V Cylindrical Cartridges' },
    { label: 'DC Disconnect Isolators', value: 'DC-21B / DC-PV2 Category Load Break Switches' },
    { label: 'Enclosure Protection Standard', value: 'IP65 UV-Resistant Polycarbonate / CRCA Steel' },
    { label: 'Cable Gland Sealing', value: 'IP68 Flame-Retardant Polyamide Solar Glands' },
    { label: 'Operating Temperature Range', value: '-25°C to +70°C Desert & Roof Standard' }
  ];

  const features = [
    { title: 'Extreme Surge Lightning Defense', desc: 'Integrated industrial Type 1 & 2 SPDs safely divert high-voltage lightning surges to ground, saving solar inverters.' },
    { title: 'Low-Loss Solar Bus Architecture', desc: 'Specially plated tinned copper busbars eliminate internal DC resistance loss, harvesting every milliwatt of solar generation.' },
    { title: 'IP65 All-Weather Protection', desc: 'Hermetically sealed enclosures withstand heavy monsoon rains, dust storms, and intense rooftop UV degradation.' },
    { title: 'String Reverse Current Isolation', desc: 'High-speed gPV fuses instantly isolate shorted PV strings before reverse feeding damages adjacent healthy panels.' }
  ];

  const applications = [
    'Mega Utility-Scale Solar PV Power Plants',
    'Commercial Factory Rooftop Solar Installations',
    'Remote Telecom BTS Tower Solar Parks',
    'Floating Solar & Agri-PV Farms'
  ];

  const images = [
    "/photos/DSC_9590.JPG",
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9607.JPG",
    "/photos/DSC_9583.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="ACDB & DCDB"
      category="Electrical Panels"
      categoryPath="/panels"
      title="ACDB & DCDB Panels"
      subtitle="Renewable Energy Distribution & Surge Protection Hubs"
      intro="Solar PV generation occurs in harsh outdoor environments. AC Distribution Boards (ACDB) and DC Distribution Boards (DCDB) act as the vital protective bridge between solar arrays, grid inverters, and utility substations."
      sustainabilityText="High-quality surge protection devices enhance system longevity. Designed for weather resistance and long service life, they improve the efficiency of solar installations while supporting clean energy initiatives."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}