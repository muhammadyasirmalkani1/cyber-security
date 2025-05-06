import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import HeroSection from '../components/sections/HeroSection';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Cyber Security Services';
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you for your message! We will be in touch shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our security experts"
        description="Have questions about our services or want to schedule a consultation? Contact us today and our team will be happy to assist you."
        ctaText="Call Us Now"
        ctaLink="tel:+923354883737"
      />

      {/* Contact Form Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form and one of our security experts will contact you shortly to discuss your needs and how we can help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-3 mr-4">
                    <Phone className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <a href="tel:+18005559876" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +92 (335) 488-3737
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-3 mr-4">
                    <Mail className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <a href="mailto:info@cybersecurity.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      muhammadyasirmalkani1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-3 mr-4">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                    <address className="text-gray-300 not-italic">
                      Dera Ghazi Khan<br />
                      Punjab City, Pakistan
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-cyan-900/30 p-3 mr-4">
                    <MessageSquare className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Support Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 8am - 8pm EST<br />
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="card bg-gray-800/60 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service of Interest <span className="text-cyan-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="managed-detection">Managed Detection and Response</option>
                    <option value="virtual-ciso">Virtual CISO</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="cyber-security">Cyber Security Operations</option>
                    <option value="compliance">Compliance Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-900 pb-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Location</h2>
            <p className="text-gray-400">Visit our headquarters to meet with our team and discuss your security needs in person.</p>
          </div>
        </div>
        
        <div className="h-[400px] w-full bg-gray-800 relative overflow-hidden">
          {/* This would typically be a map integration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-400 text-lg">Map integration would be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;