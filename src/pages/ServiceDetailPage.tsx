import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Eye, UserCheck, Lock, Shield, AlertTriangle, FileText, Database, Server, CheckCircle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import CTASection from '../components/sections/CTASection';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Define service data
  const services = {
    'managed-detection': {
      title: 'Managed Detection and Response',
      subtitle: 'Real-time threat monitoring and rapid response',
      description: 'Our Managed Detection and Response (MDR) service provides 24/7 monitoring of your systems to detect and respond to security threats in real-time.',
      icon: <Eye className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our Managed Detection and Response (MDR) service combines advanced technology, threat intelligence, and security expertise to provide continuous monitoring and rapid response to security incidents. We serve as an extension of your security team, providing around-the-clock vigilance and the ability to quickly neutralize threats before they cause significant damage.',
      features: [
        'Continuous 24/7 monitoring of security events',
        'Real-time threat detection and alerting',
        'Rapid incident response and containment',
        'Proactive threat hunting to identify hidden threats',
        'Detailed security analytics and reporting',
        'Integration with your existing security tools',
        'Regular security posture reviews',
        'Dedicated security analysts assigned to your account'
      ],
      benefits: [
        'Reduce the time to detect and respond to threats',
        'Minimize the impact of security incidents',
        'Gain visibility into your security posture',
        'Access to security expertise without hiring full-time staff',
        'Free up your IT team to focus on core business initiatives',
        'Improve compliance with regulatory requirements',
        'Keep pace with evolving threats'
      ],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'virtual-ciso': {
      title: 'Virtual CISO',
      subtitle: 'Expert security leadership on demand',
      description: 'Our Virtual CISO service provides strategic security leadership and expertise without the cost of a full-time executive.',
      icon: <UserCheck className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our Virtual CISO (vCISO) service provides your organization with access to experienced security leadership without the cost of hiring a full-time Chief Information Security Officer. Our security experts work with your team to develop and implement a comprehensive security strategy tailored to your business needs and objectives.',
      features: [
        'Security program development and implementation',
        'Risk assessment and management',
        'Security policy and procedure development',
        'Compliance management and readiness',
        'Security awareness training program development',
        'Vendor security assessment',
        'Incident response planning',
        'Board and executive security briefings'
      ],
      benefits: [
        'Access to senior security expertise at a fraction of the cost',
        'Objective, third-party perspective on your security program',
        'Strategic guidance aligned with business objectives',
        'Improved security governance and risk management',
        'Enhanced compliance with regulatory requirements',
        'Better communication of security issues to executives',
        'Flexibility to scale services as needs change'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'penetration-testing': {
      title: 'Penetration Testing',
      subtitle: 'Identify vulnerabilities before hackers do',
      description: 'Our penetration testing services simulate real-world attacks to identify and address security vulnerabilities in your systems.',
      icon: <Lock className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our penetration testing services go beyond automated scanning to identify security vulnerabilities in your applications, networks, and systems. Our security experts use the same techniques and tools as real attackers to simulate real-world attacks, providing a comprehensive assessment of your security posture and actionable recommendations for improvement.',
      features: [
        'Web application penetration testing',
        'Network infrastructure penetration testing',
        'Mobile application security testing',
        'Cloud security assessment',
        'Social engineering testing',
        'Red team exercises',
        'Detailed findings and remediation recommendations',
        'Retest verification of remediation efforts'
      ],
      benefits: [
        'Identify security vulnerabilities before attackers do',
        'Validate the effectiveness of security controls',
        'Meet compliance requirements for security testing',
        'Prioritize security investments based on real risk',
        'Improve security awareness among development teams',
        'Reduce the risk of data breaches and system compromise',
        'Demonstrate security due diligence to customers and partners'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'cyber-security': {
      title: 'Cyber Security Operations',
      subtitle: 'Comprehensive security monitoring and management',
      description: 'Our Cyber Security Operations service provides full-scale security monitoring, management, and response capabilities for your organization.',
      icon: <Shield className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our Cyber Security Operations service provides comprehensive security monitoring, management, and response capabilities. We establish a Security Operations Center (SOC) that integrates with your existing security tools and infrastructure to provide continuous visibility into your security posture, detect and respond to threats, and help you maintain a strong security position.',
      features: [
        'Security information and event management (SIEM)',
        'Endpoint detection and response (EDR)',
        'Network traffic analysis and monitoring',
        'Vulnerability management',
        'Threat intelligence integration',
        'Security automation and orchestration',
        'Regular security reporting and metrics',
        'Continuous security improvement'
      ],
      benefits: [
        'Comprehensive visibility into your security posture',
        'Faster detection and response to security incidents',
        'Reduced risk of successful attacks',
        'More efficient use of security resources',
        'Improved compliance with regulatory requirements',
        'Better security decision-making with data-driven insights',
        'Enhanced protection against advanced threats'
      ],
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'incident-response': {
      title: 'Incident Response',
      subtitle: 'Rapid recovery from security breaches',
      description: 'Our Incident Response service helps you quickly respond to and recover from security breaches and cyber attacks.',
      icon: <AlertTriangle className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our Incident Response service provides rapid assistance when you experience a security breach or cyber attack. Our team of security experts works quickly to contain the incident, eradicate the threat, recover affected systems, and help you implement measures to prevent similar incidents in the future.',
      features: [
        'Emergency incident response and containment',
        'Digital forensics and evidence collection',
        'Malware analysis and removal',
        'System recovery and restoration',
        'Root cause analysis',
        'Post-incident reporting and recommendations',
        'Crisis communication support',
        'Legal and regulatory compliance guidance'
      ],
      benefits: [
        'Minimize damage from security breaches',
        'Reduce downtime and business disruption',
        'Preserve forensic evidence for investigation',
        'Meet regulatory requirements for incident reporting',
        'Learn from incidents to improve security',
        'Access to experts during crisis situations',
        'Demonstrate due diligence to stakeholders'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'hipaa': {
      title: 'HIPAA Compliance Services',
      subtitle: 'Healthcare regulatory compliance and data protection',
      description: 'Our HIPAA compliance services help healthcare organizations protect patient data and meet regulatory requirements.',
      icon: <FileText className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our HIPAA Compliance Services help healthcare organizations protect patient data and meet the requirements of the Health Insurance Portability and Accountability Act (HIPAA). We provide comprehensive assessment, remediation, and ongoing compliance management to ensure that your organization maintains compliance with HIPAA Privacy, Security, and Breach Notification Rules.',
      features: [
        'HIPAA security risk assessment',
        'Gap analysis and remediation planning',
        'Security policy and procedure development',
        'Privacy and security training',
        'Business Associate Agreement review',
        'Compliance documentation and evidence collection',
        'Incident response planning',
        'Ongoing compliance monitoring'
      ],
      benefits: [
        'Reduce the risk of HIPAA violations and penalties',
        'Protect sensitive patient information',
        'Build trust with patients and partners',
        'Streamline compliance processes',
        'Prepare for OCR audits and investigations',
        'Integrate security with healthcare operations',
        'Maintain continuous compliance'
      ],
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'soc2': {
      title: 'SOC 2 Compliance Services',
      subtitle: 'Trust services criteria for service organizations',
      description: 'Our SOC 2 compliance services help service organizations demonstrate their commitment to security and privacy.',
      icon: <Database className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our SOC 2 Compliance Services help service organizations demonstrate their commitment to security, availability, processing integrity, confidentiality, and privacy. We guide you through the entire SOC 2 compliance process, from readiness assessment to final audit, ensuring that you can confidently demonstrate to customers and partners that you follow industry-leading security practices.',
      features: [
        'SOC 2 readiness assessment',
        'Gap analysis and remediation planning',
        'Control implementation assistance',
        'Policy and procedure development',
        'Security awareness training',
        'Pre-audit preparation and support',
        'Remediation verification',
        'Continuous compliance monitoring'
      ],
      benefits: [
        'Demonstrate security commitment to customers',
        'Competitive advantage in the marketplace',
        'Streamlined customer security assessments',
        'Improved security controls and processes',
        'Reduced risk of security incidents',
        'Better alignment of security with business objectives',
        'Preparation for other compliance frameworks'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'cmmc': {
      title: 'CMMC Compliance Services',
      subtitle: 'Cybersecurity standards for defense contractors',
      description: 'Our CMMC compliance services help defense contractors meet DoD cybersecurity requirements.',
      icon: <Server className="w-16 h-16 text-cyan-500" />,
      longDescription: 'Our CMMC Compliance Services help defense contractors meet the requirements of the Cybersecurity Maturity Model Certification (CMMC) framework. We provide comprehensive assessment, remediation, and preparation services to help your organization achieve the appropriate CMMC level and maintain compliance with Department of Defense (DoD) cybersecurity requirements.',
      features: [
        'CMMC readiness assessment',
        'Gap analysis and remediation planning',
        'Security control implementation',
        'Policy and procedure development',
        'Staff training and awareness',
        'Documentation preparation',
        'Pre-assessment testing',
        'Ongoing compliance support'
      ],
      benefits: [
        'Qualify for DoD contracts',
        'Improve overall security posture',
        'Reduce risk of security incidents',
        'Streamline compliance processes',
        'Prepare for CMMC assessment',
        'Demonstrate security commitment to DoD',
        'Protect sensitive government information'
      ],
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  };

  // Default service if ID is not found
  const defaultServiceId = 'managed-detection';
  
  // Get the selected service or default to the first one
  const service = serviceId && serviceId in services 
    ? services[serviceId as keyof typeof services] 
    : services[defaultServiceId];

  useEffect(() => {
    document.title = `${service.title} | Cyber Security Services`;
    window.scrollTo(0, 0);
  }, [service.title]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />

      {/* Service Overview Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex justify-center mb-8">
                {service.icon}
              </div>
              <h2 className="mb-6">Service Overview</h2>
              <p className="text-gray-300 mb-6">
                {service.longDescription}
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary"
              >
                Request This Service
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-500 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-500 mr-2" />
                Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-gray-400">We follow a systematic, proven process to deliver effective security solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="rounded-full bg-cyan-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-500">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-400 text-sm">
                We begin with a thorough assessment of your current security posture, identifying vulnerabilities and areas for improvement.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="rounded-full bg-cyan-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-400 text-sm">
                Based on the assessment findings, we implement customized security solutions tailored to your specific needs and objectives.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="rounded-full bg-cyan-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Management</h3>
              <p className="text-gray-400 text-sm">
                We provide continuous monitoring, management, and optimization of your security program to address evolving threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Common questions about our {service.title} service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How quickly can you implement this service?</h3>
              <p className="text-gray-400">
                Implementation timelines vary based on the complexity of your environment, but we typically begin with an initial assessment phase of 1-2 weeks, followed by a phased implementation approach.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">What is the typical cost structure?</h3>
              <p className="text-gray-400">
                Our services are offered on a subscription basis with pricing based on the size and complexity of your environment. We provide detailed pricing during the consultation phase.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">How do you measure success?</h3>
              <p className="text-gray-400">
                We establish clear metrics and KPIs at the beginning of our engagement, and provide regular reporting on these metrics to demonstrate the value and effectiveness of our services.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Do you offer training for our staff?</h3>
              <p className="text-gray-400">
                Yes, we provide comprehensive training for your staff as part of our service implementation, ensuring that your team understands security best practices and can work effectively with our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Related Services</h2>
            <p className="text-gray-400">Explore our other security services that complement {service.title}.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(services)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, relatedService]) => (
                <Link 
                  key={id} 
                  to={`/services/${id}`}
                  className="card card-hover text-center group"
                >
                  <div className="mb-4 flex justify-center">
                    {relatedService.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{relatedService.title}</h3>
                  <p className="text-gray-400 text-sm">{relatedService.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to implement ${service.title}?`}
        description="Contact our team today to schedule a consultation and learn how our services can strengthen your security posture."
        ctaText="Get Started Now"
        ctaLink="/contact"
      />
    </div>
  );
};

export default ServiceDetailPage;