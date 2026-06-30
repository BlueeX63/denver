import React from 'react';
import SolarUPSDetailLayout from '../components/SolarUPSDetailLayout';
import { Cpu, BatteryCharging, Sun, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';

export default function SolarUPS1_1_1() {
  const specifications = [
    { label: 'Capacity Rating', value: '15kVA / 30kVA / 45kVA / 60kVA / 90kVA / 120kVA' },
    { label: 'Input Phase Architecture', value: 'Single Phase / Three Phase Compatible (170 - 280 V AC)' },
    { label: 'Output Phase Voltage', value: 'Single Phase Pure Sine Wave (220V / 230V / 240V ±1%)' },
    { label: 'Redundancy Configuration', value: '1+1+1 Triple Modular Parallel Redundant (N+2 Topology)' },
    { label: 'System Operating Efficiency', value: '>95% (Solar MPPT Harvest Mode), >92% (Online Mode)' },
    { label: 'Transfer / Failover Time', value: '0 s (Instantaneous Active Load Sharing)' },
    { label: 'Output AC Waveform', value: 'High Precision Pure Sine Wave (THD < 1.5%)' },
    { label: 'Compatible Battery Chemistry', value: 'Heavy Duty VRLA, Ni-Cd, Industrial Li-Ion Battery Banks' },
    { label: 'HMI & Diagnostic Display', value: '7" Touchscreen TFT LCD + Remote Cloud Dashboard' },
    { label: 'Inbuilt Safeguards', value: 'Triple Surge Defense, Short Circuit, Thermal Cutoff, Overload' },
    { label: 'Communication & SCADA', value: 'Dual SNMP Web Cards, RS-485 Modbus, GSM Telemetry' }
  ];

  const features = [
    {
      title: 'Triple Modular Redundancy (1+1+1)',
      description: 'Three parallel UPS units actively sharing load. Even if two modules experience unexpected faults or maintenance, continuous load is sustained.',
      icon: <Layers size={32} />
    },
    {
      title: 'Intelligent Active Load Sharing',
      description: 'Dynamic power distribution reduces thermal and mechanical stress on individual modules, extending overall operational lifespan.',
      icon: <Cpu size={32} />
    },
    {
      title: 'High-Efficiency MPPT Harvesting',
      description: 'Multi-channel solar tracking maximizes daily renewable energy yield and drastically slashes diesel generator dependency.',
      icon: <Sun size={32} />
    },
    {
      title: 'Enterprise Fault Isolation',
      description: 'Ultra-fast static disconnects isolate any compromised module in <1ms without disturbing synchronized pure sine wave output power.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Advanced Battery Life Extension',
      description: 'Precision temperature-compensated charging protects expensive battery banks across fluctuating ambient industrial environments.',
      icon: <BatteryCharging size={32} />
    },
    {
      title: 'Modular Hot-Scalability',
      description: 'Effortlessly add parallel power modules to scale capacity as your industrial facility expands without requiring shutdown or downtime.',
      icon: <Sliders size={32} />
    }
  ];

  const whyChoose = [
    { title: 'Unmatched Tier-IV Availability', description: 'Engineered specifically for hyperscale data centers, defense installations, and continuous healthcare facilities requiring 99.999% availability.' },
    { title: 'High Short-Circuit Withstand', description: 'Rugged sheet metal fabrication and heavy-duty copper bus bar architecture tested to stringent CPRI industrial quality benchmarks.' },
    { title: '35+ Years Engineering Legacy', description: 'Backed by Synergy Systems’s proven corporate leadership in designing and executing complex multi-megawatt electrical infrastructures.' },
    { title: 'Maintenance Without Shutdown', description: 'Triple redundancy enables complete hot-swapping and routine internal overhauls while mission-critical operations continue flawlessly.' }
  ];

  const howItWorks = [
    { title: 'Triple Solar Ingestion', description: 'Solar arrays distribute DC wattage across three synchronized parallel MPPT tracking controllers.' },
    { title: 'Active Phase Synchronization', description: 'Parallel inverters continuously sync voltage, frequency, and phase angle for pristine pure sine wave generation.' },
    { title: 'Dynamic Load Rebalancing', description: 'The central master controller dynamically balances electrical load across active units in real time.' },
    { title: 'Zero-Transfer Power Blending', description: 'Seamlessly blends solar photovoltaic electricity, stored battery backup, and utility grid power with 0s interruption.' }
  ];

  const applications = [
    { title: 'Large Data Centers & Cloud Hubs', description: 'Mission-critical server farms, hyperscale hosting racks, core ISP nodes, and high-frequency banking networks.' },
    { title: 'Defense & Aerospace Facilities', description: 'Radar tracking stations, command & control rooms, satellite telemetry arrays, and secure military communications.' },
    { title: 'Healthcare & Research Institutes', description: 'Multi-specialty surgical suites, cancer therapy accelerators, MRI/CT scanning wings, and biotech labs.' }
  ];

  const environmental = [
    { title: 'Maximized Energy Conservation', description: 'High operating efficiency (>95%) minimizes thermal heat dissipation and drastically lowers HVAC room cooling demands.' },
    { title: 'Sustainable Infrastructure', description: 'Modular scalable design prevents premature equipment scrapping and reduces electronic waste generation over decades.' }
  ];

  const productImages = [
    "/photos/ai_power_room.png",
    "/photos/ai_online_ups.png",
    "/photos/DSC_9530.JPG",
    "/photos/DSC_9545.JPG"
  ];

  return (
    <SolarUPSDetailLayout
      breadcrumb="Online & Industrial UPS 1+1+1 Ph"
      title="Online & Industrial UPS 1+1+1 PH"
      headline="Maximum Redundancy & Resilience: Online & Industrial UPS 1+1+1 Ph"
      intro="The pinnacle of mission-critical power protection. Synergy Systems’s Online & Industrial UPS 1+1+1 Ph offers triple modular parallel redundancy (N+2 topology) combined with high-harvest solar MPPT integration. Designed for large data centers, defense installations, financial institutions, and continuous processing plants, this ultra-reliable system guarantees total fault tolerance and maximum uptime with zero switching delay (0s)."
      specifications={specifications}
      features={features}
      seamlessTransfer="Triple redundant active standby switching guarantees zero downtime and 0s switching interruption under severe grid failures."
      whyChoose={whyChoose}
      howItWorks={howItWorks}
      applications={applications}
      environmental={environmental}
      productImages={productImages}
    />
  );
}