import React from 'react';
import SolarUPSDetailLayout from '../components/SolarUPSDetailLayout';
import { Cpu, BatteryCharging, Sun, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';

export default function SolarUPS1_1() {
  const specifications = [
    { label: 'Capacity Rating', value: '5kVA / 10kVA / 15kVA / 20kVA / 30kVA' },
    { label: 'Input Phase Architecture', value: 'Single Phase AC Input (170 - 260 V AC)' },
    { label: 'Output Phase Voltage', value: 'Single Phase Pure Sine Wave (220V / 230V / 240V ±1% Regulated)' },
    { label: 'Redundancy Configuration', value: '1+1 Parallel Redundant Active-Standby Architecture' },
    { label: 'System Operating Efficiency', value: '>94% (Solar MPPT Harvest Mode), >91% (Online Double Conversion)' },
    { label: 'Transfer / Failover Time', value: '0 s (True Zero-Interruption Online Double Conversion)' },
    { label: 'Output AC Waveform', value: 'High Precision Pure Sine Wave (THD < 2% Linear Load)' },
    { label: 'Compatible Battery Chemistry', value: 'Tubular Lead-Acid, SMF VRLA, Lithium-Ion (LiFePO4)' },
    { label: 'HMI & Diagnostic Display', value: 'Interactive LCD Screen + LED Mode & Fault Indicators' },
    { label: 'Inbuilt Safeguards', value: 'Overload, Short Circuit, Battery Low/High, DC Surge, Reverse Polarity' },
    { label: 'Communication & SCADA', value: 'RS-232, RS-485 Modbus, SNMP / IoT GSM Cloud Telemetry Option' }
  ];

  const features = [
    {
      title: 'DSP-Based Precision Control',
      description: 'Advanced high-speed Digital Signal Processor ensures pure sine wave synthesis, instant fault detection, and rapid transient response.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Advanced Battery Management',
      description: 'Intelligent multi-stage charging algorithm extends battery cell longevity, regulates thermal profile, and prevents deep discharge sulfation.',
      icon: <BatteryCharging size={32} />
    },
    {
      title: 'Hybrid Solar & Grid Priority',
      description: 'Works seamlessly with solar PV generation and utility grid power, automatically prioritizing free solar energy to reduce electricity bills.',
      icon: <Sun size={32} />
    },
    {
      title: 'Comprehensive Enterprise Safeguards',
      description: 'Safeguards connected medical and server loads against voltage sags, utility surges, harmonics, overloads, and complete blackout events.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'High Efficiency MPPT Tracking',
      description: 'Inbuilt MPPT solar charge controller maximizes PV energy conversion efficiency even under cloudy or fluctuating daytime weather conditions.',
      icon: <Zap size={32} />
    },
    {
      title: 'Compact Acoustic Footprint',
      description: 'Optimized internal airflow and intelligent temperature-controlled variable speed cooling fans ideal for quiet hospital corridors and IT rooms.',
      icon: <Sliders size={32} />
    }
  ];

  const whyChoose = [
    { title: 'Proven 35+ Year Industrial Legacy', description: 'Synergy Systems brings over three decades of engineering excellence across India’s mission-critical medical, telecom, and industrial sectors.' },
    { title: 'ISO 9001 & CPRI Compliance', description: 'Every power electronic system is strictly manufactured with certified high-grade rugged components and subjected to thorough factory acceptance tests.' },
    { title: 'Comprehensive Lifecycle Support', description: 'From initial load sizing and electrical layout design to structural installation and 24/7 Annual Maintenance Contracts (AMC).' },
    { title: '1+1 Active Standby Resilience', description: 'The 1+1 redundant topology ensures that even if one power module undergoes maintenance, critical equipment continues running without interruption.' }
  ];

  const howItWorks = [
    { title: 'Solar PV Power Harvesting', description: 'Photovoltaic solar panels convert daytime sunlight into clean, high-voltage DC electricity routed directly to the system.' },
    { title: 'Intelligent MPPT Regulation', description: 'The internal MPPT charge controller extracts peak solar wattage while regulating precise charging current for the battery bank.' },
    { title: 'True Online Double Conversion', description: 'The continuous inverter transforms the DC bus voltage into a stabilized, distortion-free pure sine wave AC output.' },
    { title: 'Zero Delay (0s) Active Failover', description: 'If solar irradiance drops or utility grid fails, the system instantaneously supplies full load power from the battery bank with 0s switching delay.' }
  ];

  const applications = [
    { title: 'Hospitals & Healthcare Facilities', description: 'Zero-interruption power for operating theaters, diagnostic imaging scanners (MRI/CT), ventilators, ICU monitors, and vaccine refrigeration.' },
    { title: 'Server Rooms & IT Infrastructure', description: 'Eliminates unexpected reboots and data corruption for server racks, core network routers, and defense telemetry switchboards.' },
    { title: 'Automated Manufacturing Lines', description: 'Protects precision CNC machines, PLC automation controllers, electronic packaging equipment, and analytical testing laboratories.' }
  ];

  const environmental = [
    { title: 'Significant Carbon Reduction', description: 'Substantially reduces enterprise greenhouse gas emissions by offsetting fossil-fuel grid power with green, renewable solar energy.' },
    { title: 'Heavy-Duty Sustainable Enclosures', description: 'Corrosion-resistant industrial-grade steel cabinetry built for decades of reliable operation with minimal component degradation.' }
  ];

  const productImages = [
    "/photos/ai_online_ups.png",
    "/photos/ai_solar_ups.png",
    "/photos/DSC_9528.JPG",
    "/photos/DSC_9536.JPG"
  ];

  return (
    <SolarUPSDetailLayout
      breadcrumb="Online & Industrial UPS 1-1 Ph"
      title="Online & Industrial UPS 1–1 PH"
      headline="Mission-Critical Uninterrupted Power: Online & Industrial UPS 1-1 Ph"
      intro="Experience the ultimate reliability in power conditioning with Synergy Systems’s Online & Industrial UPS 1-1 Ph. Engineered for hospitals, data rooms, and automated manufacturing, this system combines DSP-controlled true online double-conversion architecture with active 1+1 parallel redundancy. Integrated solar MPPT capability ensures that your facility not only enjoys zero transfer delay (0s) during utility grid failures but also maximizes clean solar energy savings."
      specifications={specifications}
      features={features}
      seamlessTransfer="True zero interruption (0s transfer time) during failover switching between solar PV generation, battery discharge, and utility AC grid."
      whyChoose={whyChoose}
      howItWorks={howItWorks}
      applications={applications}
      environmental={environmental}
      productImages={productImages}
    />
  );
}