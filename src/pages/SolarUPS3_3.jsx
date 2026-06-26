import React from 'react';
import SolarUPSDetailLayout from '../components/SolarUPSDetailLayout';
import { Cpu, BatteryCharging, Sun, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';

export default function SolarUPS3_3() {
  const specifications = [
    { label: 'Capacity Rating', value: '20kVA / 30kVA / 40kVA / 60kVA / 80kVA / 100kVA / 120kVA / 200kVA' },
    { label: 'Input Phase Architecture', value: '3-Phase, 4-Wire + Earth (380V / 400V / 415V AC ±20%)' },
    { label: 'Output Phase Voltage', value: '3-Phase, 4-Wire + Earth (380V / 400V / 415V AC ±1% Synchronized)' },
    { label: 'System Configuration', value: 'True Online Double Conversion Heavy Duty 3-Phase Topology' },
    { label: 'System Operating Efficiency', value: '>96% (Solar Eco Mode), >93% (Full Double Conversion Mode)' },
    { label: 'Overload Withstand Rating', value: '110% for 60 min, 125% for 10 min, 150% for 1 min Inrush' },
    { label: 'Output AC Waveform', value: 'Pure Sine Wave 3-Phase Balanced (THD < 1%)' },
    { label: 'Galvanic Isolation', value: 'Inbuilt / Optional Copper Output Isolation Transformer' },
    { label: 'HMI & Diagnostic Display', value: '10" Industrial Touchscreen HMI with Full Vector Analytics' },
    { label: 'Inbuilt Safeguards', value: 'Phase Reversal, Over/Under Frequency, Short Circuit, Lightning Surge' },
    { label: 'Communication & SCADA', value: 'RS-485 Modbus, Dual SNMP, BMS Integration, Cloud SCADA' }
  ];

  const features = [
    {
      title: 'Full 3-Phase Double Conversion',
      description: 'Complete three-phase architecture providing clean, synchronized power for heavy industrial motors and CNC machines.',
      icon: <Layers size={32} />
    },
    {
      title: 'Massive Overload Withstand',
      description: 'Engineered to absorb high starting inrush currents from heavy industrial pumps, compressors, and robotics (up to 150%).',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Multi-Channel Commercial MPPT',
      description: 'Accommodates multi-kilowatt rooftop or ground-mounted solar arrays to drive daytime manufacturing production.',
      icon: <Sun size={32} />
    },
    {
      title: 'Parallel Expandable up to 6 Units',
      description: 'Connect up to 6 units in parallel to achieve multi-megawatt capacity or N+1 / N+X enterprise redundancy.',
      icon: <Sliders size={32} />
    },
    {
      title: 'Galvanic Isolation Transformer',
      description: 'Eliminates common-mode electrical noise, ground loops, and protects downstream loads from neutral drift.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Rugged Industrial Housing',
      description: 'Heavy-duty IP20/IP31 sheet metal enclosure engineered for harsh dusty environments and high ambient temperatures.',
      icon: <Zap size={32} />
    }
  ];

  const whyChoose = [
    { title: 'Trusted Industrial Powerhouse', description: 'Preferred power partner for India’s top manufacturing, steel, automobile, and pharmaceutical leaders (₹50+ Cr turnover).' },
    { title: 'Turnkey Execution Capability', description: 'Flawless design, engineering, supply, installation, and commissioning of complex multi-megawatt power plants.' },
    { title: 'Lifecycle Cost Slash', description: 'High solar harvest and >96% operating efficiency drastically reduce monthly industrial maximum demand electricity bills.' },
    { title: 'Pan-India Service Network', description: 'Rapid AMC emergency dispatch and dedicated 24/7 technical engineering helpdesk guaranteeing zero production downtime.' }
  ];

  const howItWorks = [
    { title: 'Industrial Grid Ingestion', description: 'Three-phase utility grid power is filtered, surge-protected, and converted into a heavy-duty DC power bus.' },
    { title: 'Commercial Solar Harvesting', description: 'Solar arrays generate industrial-scale renewable DC electricity directly feeding the central inverter bus.' },
    { title: 'Synchronized 3-Phase Inversion', description: 'Heavy-duty IGBT vector inverters synthesize perfectly synchronized 415V three-phase pure sine wave AC output.' },
    { title: 'Intelligent Blending Controller', description: 'Seamlessly blends solar priority, battery discharge, and grid power with 0ms failover transfer time.' }
  ];

  const applications = [
    { title: 'Heavy Manufacturing & Assembly', description: 'Automobile assembly lines, textile spinning mills, steel extrusion plants, robotics, and chemical synthesis.' },
    { title: 'Commercial & Transport Infrastructure', description: 'International airports, metro rail basestations, large hospital campuses, and centralized data centers.' },
    { title: 'Pharmaceutical & Cold Chain', description: 'Sterile vaccine bottling lines, bioreactors, continuous fermentation units, and cold storage warehousing.' }
  ];

  const environmental = [
    { title: 'ESG & Corporate Sustainability', description: 'Major reduction in industrial scope-2 carbon emissions, directly aligning with corporate ESG sustainability mandates.' },
    { title: 'Certified Global Standards', description: 'Manufactured to stringent IEC 62040-1, IEC 62040-2, and ISO 9001 premium engineering benchmarks.' }
  ];

  const productImages = [
    "/photos/DSC_9535.JPG",
    "/photos/DSC_9536.JPG",
    "/photos/DSC_9599.JPG",
    "/photos/DSC_9545.JPG"
  ];

  return (
    <SolarUPSDetailLayout
      breadcrumb="Solar Online UPS 3-3 Ph"
      title="Solar Online UPS 3-3 PH"
      headline="Heavy Industrial Powerhouse: Solar Online UPS 3-3 Ph"
      intro="The ultimate uninterruptible power solution for heavy machinery, complete manufacturing plants, and large facility-wide power protection. Synergyelectra’s Solar Online UPS 3-3 Ph delivers robust 3-Phase input and 3-Phase output double-conversion power. Engineered to handle high starting inrush currents, motor loads, and complex industrial infrastructure, this high-capacity system merges multi-kilowatt solar generation with enterprise grid backup to power the future of sustainable industry."
      specifications={specifications}
      features={features}
      seamlessTransfer="Zero interruption (0ms switching delay) during failover transfer between 3-phase utility grid, commercial solar PV, and battery banks."
      whyChoose={whyChoose}
      howItWorks={howItWorks}
      applications={applications}
      environmental={environmental}
      productImages={productImages}
    />
  );
}