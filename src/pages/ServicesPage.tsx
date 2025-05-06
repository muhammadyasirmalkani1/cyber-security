import { useEffect } from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Database, Server, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/cards/ServiceCard';
import ComplianceCard from '../components/cards/ComplianceCard';
import CTASection from '../components/sections/CTASection';
import ProcessStep from '../components/elements/ProcessStep';
import TestimonialCard from '../components/cards/TestimonialCard';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | Cyber Security Services';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'managed-detection',
      title: 'Managed Detection and Response',
      description: 'Real-time threat monitoring and response services',
      icon: <Eye className="w-10 h-10 text-cyan-500" />,
      features: [
        'Continuous 24/7 monitoring of security events', 
        'Rapid response to detected threats', 
        'Detailed security analytics and reporting',
        'Endpoint detection and response',
        'Network traffic analysis'
      ]
    },
    {
      id: 'virtual-ciso',
      title: 'Virtual CISO',
      description: 'Expert security leadership on demand',
      icon: <UserCheck className="w-10 h-10 text-cyan-500" />,
      features: [
        'Strategic security planning and roadmap development', 
        'Security program implementation and management', 
        'Regular board and executive security briefings',
        'Compliance and risk management',
        'Security budget planning and optimization'
      ]
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Identify vulnerabilities before hackers do',
      icon: <Lock className="w-10 h-10 text-cyan-500" />,
      features: [
        'Comprehensive vulnerability scanning and analysis', 
        'Simulated real-world attack scenarios', 
        'Detailed remediation recommendations',
        'Web application security testing',
        'Social engineering assessments'
      ]
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security Operations',
      description: 'Full-scale security operations center',
      icon: <Shield className="w-10 h-10 text-cyan-500" />,
      features: [
        'Security monitoring and incident management', 
        'Threat intelligence and analysis', 
        'Security automation and orchestration',
        'Log management and analysis',
        'Security metrics and reporting'
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      description: 'Rapid recovery from security breaches',
      icon: <AlertTriangle className="w-10 h-10 text-cyan-500" />,
      features: [
        'Emergency incident containment and eradication', 
        'Forensic analysis of compromised systems', 
        'Remediation planning and execution',
        'Post-incident reporting and recommendations',
        'Business continuity support'
      ]
    }
  ];

  const complianceServices = [
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      description: 'Healthcare regulatory compliance and data protection',
      icon: <FileText className="w-10 h-10 text-cyan-500" />,
    },
    {
      id: 'soc2',
      title: 'SOC 2 Compliance',
      description: 'Trust services criteria for service organizations',
      icon: <Database className="w-10 h-10 text-cyan-500" />,
    },
    {
      id: 'cmmc',
      title: 'CMMC Compliance',
      description: 'Cybersecurity standards for defense contractors',
      icon: <Server className="w-10 h-10 text-cyan-500" />,
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We begin with a thorough assessment of your current security posture to identify vulnerabilities and areas for improvement.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team develops a customized security strategy tailored to your specific business needs and compliance requirements.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We deploy security solutions and controls to protect your systems, networks, and data from cyber threats.'
    },
    {
      number: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring ensures that your security measures remain effective against evolving threats.'
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'We regularly review and improve your security program to maintain optimal protection as your business grows.'
    }
  ];

  const testimonials = [
    {
      quote: "The Virtual CISO service has transformed our security posture. We now have enterprise-level security expertise without the cost of a full-time executive.",
      author: "Sarah Johnson",
      title: "CTO, Healthcare Solutions Inc.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Their penetration testing uncovered critical vulnerabilities that our previous security vendor missed. The detailed remediation plan helped us close these gaps quickly.",
      author: "Michael Chen",
      title: "IT Director, Finance Plus",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The managed detection and response team caught a potential ransomware attack in its early stages, saving us from what could have been a devastating breach.",
      author: "Emma Rodriguez",
      title: "CISO, Education Technologies",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Our Security Services"
        subtitle="Comprehensive cybersecurity solutions for your business"
        description="We offer a full spectrum of security services designed to protect your organization from evolving cyber threats and ensure compliance with industry regulations."
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />

      {/* Core Services Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Core Security Services</h2>
            <p className="text-gray-400">Our flagship security services provide comprehensive protection for your organization's digital assets and infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Compliance Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Risk & Compliance Services</h2>
            <p className="text-gray-400">Our compliance services help you meet regulatory requirements and implement best practices for risk management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceServices.map((service) => (
              <ComplianceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-gray-400">We follow a systematic approach to deliver effective security solutions tailored to your unique business needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Client Testimonials</h2>
            <p className="text-gray-400">Hear what our clients have to say about our cybersecurity services and solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to strengthen your security posture?"
        description="Contact us today to schedule a consultation with our security experts and discover how our services can help protect your organization from cyber threats."
        ctaText="Get Started Now"
        ctaLink="/contact"
      />
    </div>
  );
};

export default ServicesPage;