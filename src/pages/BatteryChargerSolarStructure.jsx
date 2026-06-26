import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function BatteryChargerSolarStructure() {
  const specifications = [
    { label: 'Structural Steel Material', value: 'Hot-Dip Galvanized GI / Galvalume AZ150 Steel' },
    { label: 'Zinc Coating Thickness', value: 'Minimum 80 to 120 Microns Hot-Dip Galvanizing' },
    { label: 'Wind Speed Survivability', value: 'Up to 180 km/h Cyclone & Coastal Tested' },
    { label: 'Design Geometry Types', value: 'Fixed Tilt, Seasonal Tilt, Single-Axis Tracker' },
    { label: 'Fastener Standard', value: 'SS 304 / SS 316 Grade Rust-Proof Bolts' },
    { label: 'Rooftop Ballast Type', value: 'Non-Penetrating Concrete Ballast / Chemical Anchors' },
    { label: 'Design Lifespan Standard', value: '30+ Years Structural Integrity' }
  ];

  const features = [
    { title: 'Aerodynamic Cyclone Survivability', desc: 'Precision CAD engineered profiles withstand severe wind uplift forces during heavy coastal typhoons and storms.' },
    { title: '80+ Micron Hot-Dip Galvanizing', desc: 'Deep metallurgical zinc coating protects structural steel from rust even in high-humidity chemical plant environments.' },
    { title: 'Optimized Solar Incident Tilt', desc: 'Custom calculated tilt angles ensure solar panels receive maximum direct solar irradiance across all winter and summer seasons.' },
    { title: 'Non-Penetrating Roof Options', desc: 'Special RCC ballast frames allow mounting heavy solar arrays on commercial factory sheds without drilling or roof leaks.' }
  ];

  const applications = [
    'Industrial RCC Flat Roof Solar Yards',
    'Trapezoidal Metal Shed Rooftop Plants',
    'Open Field Utility Scale Solar Structures',
    'Elevated Solar Carports & Walkways'
  ];

  const images = [
    "/photos/DSC_9584.JPG",
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9599.JPG",
    "/photos/DSC_9583.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Solar Structure"
      category="Renewable Energy"
      categoryPath="/battery-charger"
      title="Solar Structure"
      subtitle="Heavy-Duty Engineered Mounting Systems for Decades of Solar Stability"
      intro="A solar power plant is only as strong as its foundation. Our engineered solar mounting structures provide rigid, corrosion-resistant steel skeletons designed to secure valuable photovoltaic arrays for 30+ years."
      sustainabilityText="Manufactured with corrosion-resistant materials, our structures withstand harsh environmental conditions. Optimized tilt and alignment enhance solar efficiency. Long service life and minimal maintenance requirements reduce environmental impact. Precision fabrication reflects premium quality and structural strength."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}