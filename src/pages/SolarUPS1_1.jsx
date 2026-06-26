import React from 'react';
import SolarUPSDetailLayout from '../components/SolarUPSDetailLayout';
import { Cpu, BatteryCharging, Sun, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';

export default function SolarUPS1_1() {
  const specifications = [
    { label: 'Capacity Rating', value: '5kVA / 10kVA / 15kVA / 20kVA / 30kVA' },
    { label: 'Input Phase Architecture', value: '1-Phase (170 - 260 V AC)' },
    { label: 'Output Phase Voltage', value: '1-Phase (220V / 230V / 240V ±1% Regulated)' },
    { label: 'Redundancy Configuration', value: '1+1 Parallel Redundant Active-Standby' },
    { label: 'System Operating Efficiency', value: '>94% (Solar MPPT Harvest Mode)' },
    { label: 'Transfer / Failover Time', value: '0 ms (True Zero-Interruption Double Conversion)' },
    { label: 'Output AC Waveform', value: 'Pure Sine Wave (THD < 2% Linear Load)' },
    { label: 'Compatible Battery Chemistry', value: 'Tubular Lead-Acid, VRLA, Lithium-Ion (LiFePO4)' },
    { label: 'HMI & Diagnostic Display', value: 'Interactive LCD Screen + LED Mode Indicators' },
    { label: 'Inbuilt Safeguards', value: 'Overload, Short Circuit, Battery Low, Surge, Reverse Polarity' },
    { label: 'Communication & SCADA', value: 'RS-232, RS-485 Modbus, SNMP / IoT GSM Cloud Option' }
  ];

  const features = [
    {
      title: 'DSP-Based Precision Control',
      description: 'Advanced high-speed Digital Signal Processor ensures pure sine wave synthesis and rapid transient response.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Advanced Battery Management',
      description: 'Intelligent multi-stage charging algorithm extends battery cell longevity and prevents sulfation.',
      icon: <BatteryCharging size={32} />
    },
    {
      title: 'Dual Power Source Compatibility',
      description: 'Works seamlessly with solar PV generation and utility grid power, automatically prioritizing free solar energy.',
      icon: <Sun size={32} />
    },
    {
      title: 'Comprehensive Enterprise Protection',
      description: 'Safeguards connected industrial equipment against high transient surges, voltage sags, overloads, and grid faults.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'High Efficiency MPPT Tracking',
      description: 'Maximized solar PV conversion efficiency under fluctuating daytime irradiance and weather conditions.',
      icon: <Zap size={32} />
    },
    {
      title: 'Compact & Silent Industrial Operation',
      description: 'Optimized acoustic footprint with smart variable-speed cooling fans ideal for offices and control rooms.',
      icon: <Sliders size={32} />
    }
  ];

  const whyChoose = [
    { title: 'Proven Industrial Reliability', description: 'Decades of engineering leadership delivering ₹50+ Crore annual corporate turnover across mission-critical sectors.' },
    { title: 'Global Manufacturing Standards', description: 'DSP-based, MPPT-enabled power electronics manufactured with certified high-grade rugged components.' },
    { title: 'End-to-End Turnkey Support', description: 'Comprehensive site design, structural fabrication, installation, and dedicated 24/7 AMC maintenance services.' },
    { title: 'Zero Downtime Architecture', description: 'The 1+1 redundant topology allows routine maintenance and component inspection without shutting down critical loads.' }
  ];

  const howItWorks = [
    { title: 'Solar Power Generation', description: 'Photovoltaic arrays absorb daytime sunlight to produce clean, high-efficiency DC power.' },
    { title: 'DC-to-DC MPPT Harvest', description: 'Inbuilt MPPT solar charge controller extracts peak wattage and regulates battery charging current.' },
    { title: 'True Online Power Inversion', description: 'Continuous double conversion inverter transforms DC bus power into stabilized pure sine wave AC output.' },
    { title: 'Instantaneous Grid Failover', description: 'If solar irradiance drops or loads spike, the system synchronizes with utility grid or stored battery banks with 0ms delay.' }
  ];

  const applications = [
    { title: 'Industrial Manufacturing Plants', description: 'Automated assembly lines, precision CNC machinery, PLC controllers, and continuous packaging units.' },
    { title: 'Data Centers & IT Infrastructure', description: 'Server racks, network routers, telecom basestations, and financial trading floors requiring 99.999% availability.' },
    { title: 'Hospitals & Medical Facilities', description: 'Life support systems, diagnostic imaging scanners, ICU monitors, and pathology refrigeration.' }
  ];

  const environmental = [
    { title: 'Carbon Footprint Reduction', description: 'Significantly lowers industrial green-house gas emissions by substituting thermal grid power with clean solar energy.' },
    { title: 'Long Service Life & Recyclability', description: 'Corrosion-resistant heavy-duty sheet metal enclosures designed for minimal environmental degradation over decades.' }
  ];

  const productImages = [
    "/photos/DSC_9528.JPG",
    "/photos/DSC_9536.JPG",
    "/photos/DSC_9562.JPG",
    "/photos/DSC_9545.JPG"
  ];

  return (
    <SolarUPSDetailLayout
      breadcrumb="Solar Online UPS 1-1 Ph"
      title="Solar Online UPS 1–1 PH"
      headline="The Future of Uninterrupted Power: Solar Online UPS 1-1 Ph"
      intro="Seamlessly integrate solar energy with your industrial power backup system for unmatched reliability and operational efficiency. Synergyelectra’s Solar Online UPS 1-1 Ph combines true online double-conversion UPS technology with intelligent parallel redundancy. Designed for manufacturing plants, IT facilities, and mission-critical applications, it ensures continuous, clean pure sine wave power with zero transfer time—whether energy comes from solar arrays, battery storage, or the utility grid."
      specifications={specifications}
      features={features}
      seamlessTransfer="Zero interruption (0ms transfer time) during power switching between solar PV, battery discharge, and utility power grid."
      whyChoose={whyChoose}
      howItWorks={howItWorks}
      applications={applications}
      environmental={environmental}
      productImages={productImages}
    />
  );
}