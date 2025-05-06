import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import CTASection from '../components/sections/CTASection';
import ServiceCard from '../components/cards/ServiceCard';

const IndustryDetailPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  
  // Define industry data
  const industries = {
    'healthcare': {
      title: 'Healthcare Cybersecurity',
      subtitle: 'Protecting patient data and clinical systems',
      description: 'Comprehensive security solutions for healthcare organizations to protect patient data, ensure HIPAA compliance, and secure clinical operations.',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Healthcare organizations face unique cybersecurity challenges with the increasing digitization of patient records, connected medical devices, and telehealth services. Our healthcare security solutions help you protect sensitive patient data, comply with HIPAA and other regulations, and maintain the integrity and availability of critical clinical systems.',
      challenges: [
        'Protection of sensitive patient health information (PHI)',
        'Compliance with HIPAA and other healthcare regulations',
        'Security of connected medical devices and IoT',
        'Ransomware and other targeted attacks on healthcare',
        'Balance between security and clinical workflow efficiency',
        'Third-party vendor risk management',
        'Legacy systems and applications'
      ],
      solutions: [
        'HIPAA compliance programs and assessments',
        'Medical device security monitoring',
        'Healthcare-specific threat intelligence',
        'Electronic health record (EHR) security',
        'Secure telehealth implementations',
        'Third-party risk management for healthcare vendors',
        'End-user security awareness training for clinical staff'
      ]
    },
    'education': {
      title: 'Higher Education Cybersecurity',
      subtitle: 'Securing academic environments and research data',
      description: 'Tailored security solutions for educational institutions to protect student data, research information, and open academic networks.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Higher education institutions face the challenge of maintaining an open, collaborative environment while protecting sensitive data and research. Our education-focused security solutions help you balance academic freedom with appropriate security controls, protect valuable research data, and safeguard student information.',
      challenges: [
        'Balancing open access with security requirements',
        'Protection of valuable research data and intellectual property',
        'Compliance with FERPA, GDPR, and other regulations',
        'Distributed IT governance across departments and schools',
        'BYOD and diverse user population',
        'Limited security budgets and resources',
        'Targeted attacks against research institutions'
      ],
      solutions: [
        'Zero trust network architecture for campus environments',
        'Research data protection programs',
        'Student data privacy compliance',
        'Security awareness for faculty, staff, and students',
        'Secure cloud integration for educational platforms',
        'Managed detection and response for academic networks',
        'Incident response planning for educational institutions'
      ]
    },
    'banking': {
      title: 'Banking Cybersecurity',
      subtitle: 'Defending financial systems and customer data',
      description: 'Robust security solutions for financial institutions to protect customer data, secure transactions, and maintain regulatory compliance.',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Financial institutions are prime targets for cyber attacks due to the valuable data they hold and the critical nature of their services. Our banking security solutions help you protect customer financial data, secure online and mobile banking platforms, defend against fraud, and comply with industry regulations.',
      challenges: [
        'Protection of sensitive customer financial data',
        'Defense against sophisticated financial fraud',
        'Compliance with PCI DSS, GLBA, and other regulations',
        'Security of online and mobile banking platforms',
        'Third-party vendor risk management',
        'Advanced persistent threats (APTs) targeting financial institutions',
        'Balancing security with customer experience'
      ],
      solutions: [
        'Financial fraud detection and prevention',
        'Secure online and mobile banking implementation',
        'Payment card industry (PCI DSS) compliance',
        'Regulatory compliance programs',
        'Third-party risk management for financial partners',
        'Security automation for financial services',
        'Security operations center (SOC) for financial institutions'
      ]
    },
    'software': {
      title: 'Software Cybersecurity',
      subtitle: 'Building security into your development lifecycle',
      description: 'Security solutions for software companies to integrate security throughout the development lifecycle and protect development infrastructure.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Software companies face unique security challenges in protecting their development infrastructure, ensuring the security of their products, and maintaining customer trust. Our software security solutions help you implement secure development practices, protect your source code and intellectual property, and demonstrate your commitment to security to customers.',
      challenges: [
        'Integrating security into agile development processes',
        'Protection of source code and intellectual property',
        'Securing the software supply chain',
        'Addressing security vulnerabilities in applications',
        'Meeting customer security requirements',
        'DevOps and CI/CD pipeline security',
        'Container and cloud-native application security'
      ],
      solutions: [
        'Secure software development lifecycle (SSDLC) implementation',
        'DevSecOps integration and tooling',
        'Application security testing (SAST, DAST, IAST)',
        'API security testing and protection',
        'Container security for development environments',
        'Software composition analysis for third-party components',
        'Security requirements management for software products'
      ]
    },
    'manufacturing': {
      title: 'Manufacturing Cybersecurity',
      subtitle: 'Securing industrial control systems and operations',
      description: 'Specialized security solutions for manufacturing organizations to protect operational technology, industrial systems, and intellectual property.',
      image: 'https://images.pexels.com/photos/3846033/pexels-photo-3846033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Manufacturing organizations face growing cybersecurity risks as they implement Industry 4.0 technologies and connect their operational technology (OT) environments. Our manufacturing security solutions help you protect industrial control systems, secure the convergence of IT and OT, and defend your intellectual property and production capabilities.',
      challenges: [
        'Securing operational technology (OT) and industrial control systems',
        'IT/OT convergence security challenges',
        'Protection of manufacturing intellectual property',
        'Supply chain security and third-party risk',
        'Legacy systems with long lifecycles',
        'Industrial IoT security',
        'Ransomware targeting manufacturing operations'
      ],
      solutions: [
        'Industrial control system (ICS) security assessment',
        'OT network security monitoring',
        'IT/OT segmentation and security architecture',
        'Manufacturing-specific incident response',
        'Industrial IoT security solutions',
        'Supply chain risk management',
        'Security awareness for OT personnel'
      ]
    },
    'retail': {
      title: 'Retail Cybersecurity',
      subtitle: 'Protecting customer data and payment systems',
      description: 'Comprehensive security solutions for retail organizations to secure payment processing, protect customer data, and ensure PCI DSS compliance.',
      image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Retail organizations must protect customer data, secure payment systems, and maintain the availability of e-commerce platforms while providing a seamless customer experience. Our retail security solutions help you implement strong security controls, comply with PCI DSS requirements, and protect your brand reputation.',
      challenges: [
        'Protection of customer payment card data',
        'PCI DSS compliance requirements',
        'E-commerce platform security',
        'Point-of-sale (POS) system security',
        'Omnichannel retail security challenges',
        'Supply chain security for retail operations',
        'Balancing security with customer experience'
      ],
      solutions: [
        'PCI DSS compliance programs',
        'Secure e-commerce implementation',
        'Payment system security',
        'Retail-specific threat monitoring',
        'Supply chain security assessment',
        'Customer data protection strategies',
        'Security for retail mobile applications'
      ]
    },
    'government': {
      title: 'Government Cybersecurity',
      subtitle: 'Securing critical infrastructure and citizen data',
      description: 'Specialized security solutions for government agencies to protect sensitive information, secure critical infrastructure, and maintain compliance.',
      image: 'https://images.pexels.com/photos/64271/capitol-what-is-it-washington-dc-district-of-columbia-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Government agencies must protect sensitive information, secure critical infrastructure, and maintain compliance with stringent regulations. Our government security solutions help you implement appropriate security controls, respond to sophisticated threats, and demonstrate compliance with government security standards.',
      challenges: [
        'Protection of sensitive government information',
        'Critical infrastructure security',
        'Compliance with government-specific regulations (FedRAMP, FISMA)',
        'Sophisticated nation-state threats',
        'Legacy system security',
        'Budget and resource constraints',
        'Balancing security with citizen service delivery'
      ],
      solutions: [
        'FedRAMP and FISMA compliance programs',
        'Critical infrastructure protection',
        'Government-specific threat intelligence',
        'Zero trust implementation for government',
        'Security clearance management',
        'Secure cloud adoption for government',
        'Cyber resilience for critical government functions'
      ]
    },
    'insurance': {
      title: 'Insurance Cybersecurity',
      subtitle: 'Protecting policyholder data and claims systems',
      description: 'Tailored security solutions for insurance organizations to protect sensitive customer information, secure claims processing, and maintain compliance.',
      image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      longDescription: 'Insurance companies manage large amounts of sensitive customer data and must maintain the security and availability of critical claims processing systems. Our insurance security solutions help you protect policyholder information, secure digital transformation initiatives, and comply with insurance industry regulations.',
      challenges: [
        'Protection of sensitive policyholder information',
        'Security of claims processing systems',
        'Compliance with insurance industry regulations',
        'Third-party vendor risk management',
        'Digital transformation security challenges',
        'Agent and broker network security',
        'Legacy system modernization security'
      ],
      solutions: [
        'Policyholder data protection strategies',
        'Secure digital transformation for insurance',
        'Claims processing system security',
        'Insurance regulatory compliance',
        'Third-party risk management for insurance partners',
        'Security for insurance mobile applications',
        'Cloud security for insurance workloads'
      ]
    }
  };

  // Default industry if ID is not found
  const defaultIndustryId = 'healthcare';
  
  // Get the selected industry or default to the first one
  const industry = industryId && industryId in industries 
    ? industries[industryId as keyof typeof industries] 
    : industries[defaultIndustryId];

  // Recommended services for this industry
  const recommendedServices = [
    {
      id: 'managed-detection',
      title: 'Managed Detection and Response',
      description: `24/7 threat monitoring tailored for the ${industry.title.split(' ')[0]} industry`,
      icon: <Shield className="w-10 h-10 text-cyan-500" />,
      features: [
        'Industry-specific threat detection', 
        'Rapid incident response', 
        'Compliance-aligned monitoring'
      ]
    },
    {
      id: 'virtual-ciso',
      title: 'Virtual CISO',
      description: `Strategic security leadership for ${industry.title.split(' ')[0]} organizations`,
      icon: <Shield className="w-10 h-10 text-cyan-500" />,
      features: [
        'Industry compliance expertise', 
        'Security program development', 
        'Executive reporting and guidance'
      ]
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: `Identify vulnerabilities in ${industry.title.split(' ')[0]} systems and applications`,
      icon: <Shield className="w-10 h-10 text-cyan-500" />,
      features: [
        'Industry-specific attack scenarios', 
        'Compliance-focused testing', 
        'Remediation guidance'
      ]
    }
  ];

  useEffect(() => {
    document.title = `${industry.title} | Cyber Security Services`;
    window.scrollTo(0, 0);
  }, [industry.title]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title={industry.title}
        subtitle={industry.subtitle}
        description={industry.description}
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />

      {/* Industry Overview Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="mb-6">Industry Overview</h2>
              <p className="text-gray-300 mb-6">
                {industry.longDescription}
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary"
              >
                Discuss Your Security Needs
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-cyan-500 mr-2" />
                Industry Challenges
              </h3>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-cyan-500 mr-2" />
                Our Solutions
              </h3>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Services Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Recommended Services</h2>
            <p className="text-gray-400">Our most popular security services for {industry.title.split(' ')[0]} organizations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedServices.map((service) => (
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

      {/* Compliance Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Compliance Considerations</h2>
            <p className="text-gray-400">Understanding the regulatory landscape for {industry.title.split(' ')[0]} organizations.</p>
          </div>
          
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Regulations</h3>
                <ul className="space-y-3">
                  {[
                    'Healthcare: HIPAA, HITECH, FDA regulations',
                    'Financial: PCI DSS, GLBA, SOX',
                    'Education: FERPA, COPPA, state privacy laws',
                    'Manufacturing: NIST CSF, CMMC, industry standards',
                    'Government: FISMA, NIST SP 800-53, FedRAMP',
                    'Insurance: NAIC Model Law, state regulations'
                  ].filter(item => item.toLowerCase().includes(industry.title.split(' ')[0].toLowerCase())).map((regulation, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{regulation.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-300 mb-4">
                  We help {industry.title.split(' ')[0]} organizations navigate the complex regulatory landscape with:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Comprehensive compliance assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Industry-specific control frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Continuous compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Audit preparation and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Regulatory update monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-gray-400">See how we've helped other {industry.title.split(' ')[0]} organizations strengthen their security posture.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Leading {industry.title.split(' ')[0]} Organization</h3>
              <p className="text-gray-400 mb-4">
                A leading {industry.title.split(' ')[0].toLowerCase()} organization faced increasing cyber threats and compliance challenges with their legacy infrastructure.
              </p>
              <h4 className="text-lg font-medium mb-2">Challenges:</h4>
              <ul className="space-y-2 mb-4">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Legacy systems with security vulnerabilities
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Compliance gaps with industry regulations
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Limited visibility into security threats
                </li>
              </ul>
              <h4 className="text-lg font-medium mb-2">Solution:</h4>
              <p className="text-gray-300 text-sm">
                We implemented a comprehensive security program including threat monitoring, vulnerability management, and compliance controls tailored to their industry requirements.
              </p>
              <h4 className="text-lg font-medium mb-2 mt-4">Results:</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  85% reduction in security incidents
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  Full compliance with industry regulations
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  Enhanced threat visibility and response capabilities
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Growing {industry.title.split(' ')[0]} Provider</h3>
              <p className="text-gray-400 mb-4">
                A mid-sized {industry.title.split(' ')[0].toLowerCase()} provider needed to strengthen their security posture during a period of rapid growth and digital transformation.
              </p>
              <h4 className="text-lg font-medium mb-2">Challenges:</h4>
              <ul className="space-y-2 mb-4">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Rapid growth outpacing security resources
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Cloud migration security challenges
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Need for strategic security leadership
                </li>
              </ul>
              <h4 className="text-lg font-medium mb-2">Solution:</h4>
              <p className="text-gray-300 text-sm">
                We provided Virtual CISO services, implemented secure cloud controls, and developed a strategic security roadmap aligned with their business growth objectives.
              </p>
              <h4 className="text-lg font-medium mb-2 mt-4">Results:</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  Secure cloud migration with zero security incidents
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  Strategic security roadmap aligned with growth
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  40% cost savings compared to hiring full-time security staff
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Secure your ${industry.title.split(' ')[0]} organization`}
        description="Contact our team today to discuss your specific security needs and discover how our tailored solutions can protect your organization from cyber threats."
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default IndustryDetailPage;