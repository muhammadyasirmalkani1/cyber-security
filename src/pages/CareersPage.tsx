import { useEffect } from 'react';
import CareersPage from './pages/CareersPage';
import { Link } from 'react-router-dom';
import { ShieldCheck, Shield, Lock, Eye, Database, FileText, Server, UserCheck } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/cards/ServiceCard';
import ComplianceCard from '../components/cards/ComplianceCard';
import IndustryCard from '../components/cards/IndustryCard';
import FeatureItem from '../components/elements/FeatureItem';
import CTASection from '../components/sections/CTASection';

const CareersPage = () => {
  useEffect(() => {
    document.title = 'About Us | Cyber Security Services';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="About Cyber Security Services"
        subtitle="Leading the way in modern security solutions"
        description="We are a team of dedicated security professionals committed to protecting organizations from evolving cyber threats through innovative solutions and expert services."
        ctaText="Join Our Team"
        ctaLink="/contact"
      />

      {/* Our Story Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2010, Cyber Security Services began with a vision to make enterprise-grade security accessible to organizations of all sizes. What started as a small team of security experts has grown into a leading cybersecurity provider serving clients across multiple industries.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey has been marked by a commitment to innovation, excellence, and client partnership. As cyber threats have evolved, we've continuously expanded our capabilities to stay ahead of emerging risks and provide our clients with the protection they need.
              </p>
              <p className="text-gray-300">
                Today, we're proud to be trusted by hundreds of organizations worldwide, from Fortune 500 companies to growing businesses, all relying on our expertise to safeguard their digital assets and operations.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden relative h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cyber Security Services team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-400">The principles that guide our work and define our company culture.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Leadership Team</h2>
            <p className="text-gray-400">Meet the experts leading our mission to create a more secure digital world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="mb-6 rounded-full overflow-hidden w-32 h-32 mx-auto">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-cyan-400 text-sm mb-4">{person.title}</p>
                <p className="text-gray-400 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden relative h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Security operations center" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="mb-6">Why Choose Us</h2>
              <p className="text-gray-300 mb-6">
                In a landscape filled with security vendors, our approach sets us apart. We don't just provide tools or software – we deliver comprehensive security programs tailored to your specific needs and challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-2 mr-4 mt-1">
                    <Shield className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Expert Team</h4>
                    <p className="text-gray-400 text-sm">
                      Our team includes certified security professionals with experience across industries and technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-2 mr-4 mt-1">
                    <Shield className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Comprehensive Approach</h4>
                    <p className="text-gray-400 text-sm">
                      We address security holistically, from risk assessment and planning to implementation and ongoing management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-2 mr-4 mt-1">
                    <Shield className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Proven Results</h4>
                    <p className="text-gray-400 text-sm">
                      Our clients experience measurable improvements in their security posture and reduced risk exposure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-2 mr-4 mt-1">
                    <Shield className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Client Partnership</h4>
                    <p className="text-gray-400 text-sm">
                      We work as an extension of your team, providing ongoing support and guidance as your security needs evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with us?"
        description="Contact our team today to learn more about our services and how we can help protect your organization from evolving cyber threats."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </div>
  );
};

export default CareersPage;
