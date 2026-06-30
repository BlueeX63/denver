import React from 'react';
import SolarUPSDetailLayout from '../components/SolarUPSDetailLayout';
import { Cpu, BatteryCharging, Sun, ShieldCheck, Zap, Sliders, Layers } from 'lucide-react';

export default function SolarUPS3_1() {
  const specifications = [
    { label: 'Capacity Rating', value: '10kVA / 15kVA / 20kVA / 30kVA / 40kVA / 50kVA' },
    { label: 'Input Phase Architecture', value: '3-Phase, 4-Wire + Earth (340V - 460V AC Wide Tolerance)' },
    { label: 'Output Phase Voltage', value: 'Single Phase Pure Sine Wave (220V / 230V / 240V ±1%)' },
    { label: 'Conversion Configuration', value: 'True Online Double Conversion (3-Phase AC in, 1-Phase AC out)' },
    { label: 'System Operating Efficiency', value: '>94% (Solar MPPT Mode), >91% (AC Double Conversion)' },
    { label: 'Input Power Factor', value: '>0.99 Active Power Factor Correction (APFC inbuilt)' },
    { label: 'Output AC Waveform', value: 'Pure Sine Wave (THD < 1.5% Linear Load)' },
    { label: 'Compatible Battery Chemistry', value: 'External Heavy Duty VRLA / LiFePO4 Battery Banks' },
    { label: 'HMI & Diagnostic Display', value: 'Multi-Parameter Graphical LCD with Phase Flow Diagram' },
    { label: 'Inbuilt Safeguards', value: 'Phase Sequence Reversal, Phase Loss, Over/Under Voltage' },
    { label: 'Communication & SCADA', value: 'RS-232, USB, RS-485 Modbus, SNMP Network Card' }
  ];

  const features = [
    {
      title: '3-Phase Input / 1-Phase Output',
      description: 'Solves grid phase imbalance by drawing power evenly across all three utility phases while delivering clean 1-phase power.',
      icon: <Layers size={32} />
    },
    {
      title: 'Active Power Factor Correction',
      description: 'Achieves input power factor near unity (>0.99), eliminating utility board electricity penalties and reactive waste.',
      icon: <Zap size={32} />
    },
    {
      title: 'Wide Input Voltage Tolerance',
      description: 'Operates smoothly across severe grid voltage fluctuations (340V-460V) without unnecessarily discharging battery banks.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Direct Solar DC Bus Injection',
      description: 'High-power MPPT solar charge controllers feed directly into the central DC bus to take load priority over utility grid supply.',
      icon: <Sun size={32} />
    },
    {
      title: 'DSP Precision Pure Sine Wave',
      description: 'Digital signal processor inverter filters out high-voltage transients, electrical noise, and harmonic distortions.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Smart Phase Failure Protection',
      description: 'Automatic bypass isolation and instant visual alarms alert operators upon utility phase loss or incorrect phase sequencing.',
      icon: <Sliders size={32} />
    }
  ];

  const whyChoose = [
    { title: 'Utility Grid Transformer Optimization', description: 'Eliminates unbalanced single-phase loading on factory utility transformers, meeting electricity board compliance standards.' },
    { title: 'Industrial Grade Components', description: 'Manufactured with high short-circuit withstand copper bus bars and heavy-duty structural sheet metal enclosures.' },
    { title: '35+ Years Engineering Legacy', description: 'Over three decades of engineering experience executing precision electrical infrastructure for commercial & industrial giants.' },
    { title: 'Custom Battery Autonomy Sizing', description: 'Tailored backup calculations and bespoke solar mounting structures engineered specifically for your site layout.' }
  ];

  const howItWorks = [
    { title: '3-Phase AC Rectification', description: 'Incoming utility AC power across all three phases is rectified into a tightly regulated central DC bus.' },
    { title: 'Solar DC Supplementation', description: 'Daytime solar panels feed renewable wattage directly into the central DC bus, drastically slashing grid consumption.' },
    { title: 'Single-Phase Inversion', description: 'Advanced IGBT inverter converts the DC bus into pristine 230V single-phase pure sine wave AC power.' },
    { title: 'Zero-Delay Bypass Failover', description: 'Inbuilt static bypass switch provides instantaneous failover during extreme overloads or routine servicing.' }
  ];

  const applications = [
    { title: 'Commercial & Corporate Real Estate', description: 'Corporate headquarters, IT parks, shopping malls, executive elevators, and centralized HVAC control rooms.' },
    { title: 'Medical Diagnostics & Healthcare', description: 'MRI machines, CT scanners, pathology labs, and digital X-ray suites requiring clean single-phase power.' },
    { title: 'Banking & Broadcast Hubs', description: 'Centralized core banking servers, ATM networks, regional broadcast stations, and telecom switching centers.' }
  ];

  const environmental = [
    { title: 'Green Building Compliance', description: 'High operational efficiency contributes directly to LEED and IGBC green building energy efficiency ratings.' },
    { title: 'Zero Harmonic Pollution', description: 'Active PFC prevents electrical harmonic pollution from feeding back into the local utility grid.' }
  ];

  const productImages = [
    "/photos/ai_solar_ups.png",
    "/photos/ai_online_ups.png",
    "/photos/DSC_9534.JPG",
    "/photos/DSC_9528.JPG"
  ];

  return (
    <SolarUPSDetailLayout
      breadcrumb="Online & Industrial UPS 3-1 Ph"
      title="Online & Industrial UPS 3-1 PH"
      headline="Balanced Industrial Input, Clean Output: Online & Industrial UPS 3-1 Ph"
      intro="Solve utility grid phase imbalance while delivering pristine single-phase power to your sensitive equipment. Synergy Systems’s Online & Industrial UPS 3-1 Ph ingests 3-Phase AC power from the utility grid or solar arrays and delivers perfectly regulated 1-Phase pure sine wave output. This configuration is the gold standard for commercial buildings, medical imaging suites, banking corporate hubs, and medium industrial plants requiring balanced three-phase draw on the input side with zero transfer delay (0s)."
      specifications={specifications}
      features={features}
      seamlessTransfer="Zero transfer time (0s delay) switching between 3-phase utility grid power, solar photovoltaic bus, and battery storage."
      whyChoose={whyChoose}
      howItWorks={howItWorks}
      applications={applications}
      environmental={environmental}
      productImages={productImages}
    />
  );
}