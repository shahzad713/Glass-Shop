import React from 'react';
import { Reveal } from './Reveal';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactProps {
  isPage?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isPage = false }) => {
  return (
    <section id="contact" className={`bg-apple-gray relative ${isPage ? 'pt-32 pb-24' : 'py-24'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-apple-dark mb-4">Start Your Project With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ready to transform your space? Contact Labbyak Glass & Aluminum for a free consultation and quote in Lahore.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Reveal>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-bold text-apple-dark mb-6">Contact Information</h3>
                 <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">Showroom & Office</h4>
                      <p className="text-gray-500 text-sm mt-1">Toheed Block, Bahria Town<br />Lahore, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">Phone</h4>
                      <p className="text-gray-500 text-sm mt-1">+92 302 099 9713</p>
                      <a href="tel:+923020999713" className="text-blue-600 text-xs font-medium mt-1 inline-block">Call Now</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">WhatsApp</h4>
                      <p className="text-gray-500 text-sm mt-1">Chat for quick quotes</p>
                      <a 
                        href="https://wa.me/923020999713?text=Hi,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20services." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 text-xs font-medium mt-1 inline-block hover:underline"
                      >
                        Open WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apple-dark">Email</h4>
                      <p className="text-gray-500 text-sm mt-1">info@labbyakglass.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
               <div className="rounded-3xl overflow-hidden shadow-sm h-[300px] w-full bg-gray-200 relative">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src="https://maps.google.com/maps?q=Toheed+Block+Bahria+Town+Lahore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                   className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Labbyak Glass Location"
                 />
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-apple-dark mb-6">Get a Free Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="0300 xxxxxxx"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Location / Area</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="e.g. Bahria Town, DHA"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-apple-dark transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-apple-dark text-white font-medium py-4 rounded-lg hover:bg-gray-800 transition-transform transform active:scale-95 shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};