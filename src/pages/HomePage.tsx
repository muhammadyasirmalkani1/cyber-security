import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Shield, Lock, Eye, Database, FileText, Server, UserCheck } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/cards/ServiceCard';
import ComplianceCard from '../components/cards/ComplianceCard';
import IndustryCard from '../components/cards/IndustryCard';
import FeatureItem from '../components/elements/FeatureItem';
import CTASection from '../components/sections/CTASection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Cyber Security Services | Protect Your Digital Assets';
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
        'Detailed security analytics and reporting'
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
        'Regular board and executive security briefings'
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
        'Detailed remediation recommendations'
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
        'Security automation and orchestration'
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

  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Protect sensitive patient data and ensure HIPAA compliance',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'education',
      title: 'Higher Education',
      description: 'Secure academic environments and research data',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'banking',
      title: 'Banking',
      description: 'Defend financial systems and customer transactions',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'software',
      title: 'Software',
      description: 'Build security into your development lifecycle',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Cyber Security Services"
        subtitle="Protecting your digital assets with advanced threat detection and prevention"
        description="We are a U.S.-based cybersecurity company delivering services and managing cyber risk on behalf of our valued distribution and technology partners."
        ctaText="Get Started Now"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-400">We provide comprehensive security solutions to protect your organization from evolving cyber threats.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <p className="text-gray-400">The process of evaluating, identifying and managing risks associated with a business, and ensuring compliance with relevant regulations and standards.</p>
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

      {/* Industries Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Services by Industry</h2>
            <p className="text-gray-400">We provide industry-specific security solutions tailored to the unique needs of your business sector.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard 
                key={industry.id}
                id={industry.id}
                title={industry.title}
                description={industry.description}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <h2 className="mb-4">Improve your security posture.</h2>
                <p className="text-gray-400 mb-6">
                  The world of cybersecurity is evolving. With the rise of Managed Security Services, organizations now have access to the latest technologies, expertise, and resources without the need to invest in an in-house security team. We're here to be your trusted partner in cybersecurity.
                </p>
              </div>
              
              <div className="space-y-4">
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Trusted compliance and risk program advisors"
                />
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Deliver cost-effective technology to reduce enterprise-wide risk"
                />
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Provide expert consulting services to support IT teams"
                />
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Bring information security leadership to enterprises of all sizes"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden relative h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cybersecurity professionals working" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cyber Security Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/8470799/pexels-photo-8470799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cyber security concept" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="mb-6">What is Cyber Security?</h2>
              <p className="text-gray-400 mb-6">
                Cyber Security is an applied science that focuses on protecting information systems and the data stored within them from unauthorized access. It encompasses various skills such as risk assessment, implementation of security measures, and ongoing monitoring and management of security protocols.
              </p>
              
              <div className="space-y-4 mb-8">
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Cyber Security is an applied science."
                />
                <FeatureItem
                  icon={<ShieldCheck className="w-6 h-6 text-cyan-500" />}
                  title="Cyber Security is considered an art as much as a science."
                />
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to see how Cyber Security Services can help?"
        description="Need a heightened security program? Fill out our online security needs form to partner with a capable cybersecurity services provider, and you can get access to a team of experienced professionals who can help you identify."
        ctaText="Get Started Now"
        ctaLink="/contact"
      />
    </div>
  );
};

export default HomePage;