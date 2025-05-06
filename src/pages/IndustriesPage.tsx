import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import IndustryCard from '../components/cards/IndustryCard';
import CTASection from '../components/sections/CTASection';

const IndustriesPage = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | Cyber Security Services';
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Protect sensitive patient data and ensure HIPAA compliance',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Our healthcare security solutions help medical organizations protect sensitive patient data, comply with HIPAA regulations, and maintain the integrity of electronic health records and clinical systems.'
    },
    {
      id: 'education',
      title: 'Higher Education',
      description: 'Secure academic environments and research data',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Educational institutions face unique security challenges with open networks, sensitive research data, and diverse user populations. Our solutions help protect academic environments while maintaining accessibility.'
    },
    {
      id: 'banking',
      title: 'Banking',
      description: 'Defend financial systems and customer transactions',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'We provide robust security solutions for financial institutions to protect customer data, secure online transactions, and comply with industry regulations while maintaining customer trust.'
    },
    {
      id: 'software',
      title: 'Software',
      description: 'Build security into your development lifecycle',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Our DevSecOps approach helps software companies integrate security throughout the development lifecycle, ensuring your applications are secure from design through deployment.'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Secure industrial control systems and operations',
      image: 'https://images.pexels.com/photos/3846033/pexels-photo-3846033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'We help manufacturing organizations protect their operational technology (OT) environments, industrial control systems, and intellectual property from cyber threats.'
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Protect customer data and payment systems',
      image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Our retail security solutions help protect point-of-sale systems, customer data, and e-commerce platforms while ensuring PCI DSS compliance and maintaining customer trust.'
    },
    {
      id: 'government',
      title: 'Government',
      description: 'Secure critical infrastructure and citizen data',
      image: 'https://images.pexels.com/photos/64271/capitol-what-is-it-washington-dc-district-of-columbia-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'We provide specialized security services for government agencies to protect sensitive information, secure critical infrastructure, and maintain compliance with stringent regulations.'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Protect policyholder data and claims systems',
      image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Our insurance industry solutions help carriers protect sensitive policyholder information, secure claims processing systems, and maintain regulatory compliance.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Industries We Serve"
        subtitle="Tailored security solutions for your sector"
        description="We understand that different industries face unique security challenges. Our specialized solutions are designed to address the specific needs of your business sector."
        ctaText="Find Your Industry Solution"
        ctaLink="#industry-solutions"
      />

      {/* Industries Section */}
      <section id="industry-solutions" className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Industry-Specific Security Solutions</h2>
            <p className="text-gray-400">Our cybersecurity expertise spans across multiple industries, providing tailored solutions for each sector's unique challenges.</p>
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

      {/* Industry Challenges Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Common Industry Challenges</h2>
            <p className="text-gray-400">Understanding the unique security challenges faced by different industries is essential for effective protection.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400 mb-4">
                Industries like healthcare, finance, and government face strict regulatory requirements for data protection and privacy. Staying compliant requires specialized knowledge and ongoing monitoring.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  HIPAA for healthcare organizations
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  PCI DSS for payment processing
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  GDPR and CCPA for consumer data protection
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  CMMC for defense contractors
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Targeted Attacks</h3>
              <p className="text-gray-400 mb-4">
                Different industries face unique threats from cybercriminals who target specific types of valuable data or critical infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Healthcare: Patient records and medical research
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Financial services: Customer financial data and transaction systems
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Manufacturing: Intellectual property and production systems
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Government: Citizen data and critical infrastructure
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Legacy Systems</h3>
              <p className="text-gray-400 mb-4">
                Many industries rely on legacy systems that were not designed with modern security requirements in mind, creating unique protection challenges.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Healthcare: Outdated medical devices and systems
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Manufacturing: Industrial control systems
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Banking: Core banking platforms
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Government: Critical infrastructure systems
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Distributed Environments</h3>
              <p className="text-gray-400 mb-4">
                Modern business environments often include remote workers, cloud services, and third-party vendors, expanding the attack surface.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Retail: E-commerce platforms and supply chain systems
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Education: Remote learning platforms and research networks
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Software: Development environments and cloud infrastructure
                </li>
                <li className="text-gray-300 text-sm flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  Insurance: Agent networks and claims processing systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Find your industry-specific security solution"
        description="Contact us today to learn how our specialized security services can address the unique challenges of your industry and help protect your organization from cyber threats."
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default IndustriesPage;