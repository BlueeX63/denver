import React from 'react';
import PanelDetailLayout from '../components/PanelDetailLayout';

export default function PanelsDrawOut() {
  const specifications = [
    { label: 'Withdrawable Cassette Positions', value: 'Service, Test & Isolated (Standardized)' },
    { label: 'Mechanical Interlock Standard', value: 'Automatic Safety Shutters & Door Interlocks' },
    { label: 'Stab-in Contact Fingers', value: 'High-Density Silver-Plated Spring Loaded Copper' },
    { label: 'Internal Arc Classification', value: 'IAC AFLR 50kA 1s Arc Containment Tested' },
    { label: 'Module Interchangeability', value: '100% Identical Rating Cassette Swapping' },
    { label: 'Control Wiring Termination', value: 'Heavy-Duty Sliding Self-Aligning Plugs' },
    { label: 'Sheet Steel Standard', value: '2.0mm Electro-Galvanized Heavy CRCA' }
  ];

  const features = [
    { title: 'Zero-Shutdown Module Maintenance', desc: 'Allows engineers to safely extract and service individual breaker cassettes while adjacent live plant feeders keep running.' },
    { title: 'Triple-Position Interlock Safety', desc: 'Distinct mechanical clicks for Service, Test, and Disconnected positions eliminate human operational error.' },
    { title: 'Hot-Swappable Feeder Replacement', desc: 'Faulty feeder units can be replaced with spare cassettes in under 2 minutes, ensuring 99.999% uptime.' },
    { title: 'Arc Flash Shield Protection', desc: 'Spring-action insulating safety shutters instantly drop over live busbar stabs when a cassette is pulled out.' }
  ];

  const applications = [
    'Continuous Steel & Smelting Furnaces',
    'Defense Telemetry & Command Centers',
    'Semiconductor & Microchip Fabrication Facilities',
    'Offshore Oil Rigs & Nuclear Utilities'
  ];

  const images = [
    "/photos/DSC_9575.JPG",
    "/photos/DSC_9583.JPG",
    "/photos/DSC_9553.JPG",
    "/photos/DSC_9590.JPG"
  ];

  return (
    <PanelDetailLayout 
      breadcrumb="Draw Out Panels"
      category="Electrical Panels"
      categoryPath="/panels"
      title="Draw Out Panels"
      subtitle="Modular Withdrawable Cassette Technology for Mission-Critical Continuity"
      intro="When stopping electrical flow means losing lakhs of rupees per minute, Draw Out panels provide the ultimate solution. Breakers and motor feeders are housed in withdrawable cassettes that slide out like server drawers for instant servicing."
      sustainabilityText="The modular withdrawable design reduces operational downtime and prevents unnecessary energy disruption. It allows safe servicing while maintaining productivity. Premium mechanical components ensure long operational life and safe handling. This system supports efficient resource utilization and minimizes infrastructure modification requirements."
      specifications={specifications}
      features={features}
      applications={applications}
      productImages={images}
    />
  );
}