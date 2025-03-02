import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-green-500 to-green-300 text-primary py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info Section */}
          <div className="md:col-span-3 section-fade">
            <h3 className="text-xl font-serif font-bold mb-4 text-navy">Raiyan Global</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p>E-3, Gulshan CHS</p>
                  <p>Versova, Andheri (West)</p>
                  <p>Mumbai: 400061, Maharashtra </p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <p>+91 59562629</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <p>+91 25926255</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-accent" />
                <p>sales.raiyanglobal@gmail.com</p>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="md:col-span-3 section-fade" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 text-navy">About Us</h3>
            <p className="text-primary">
              Raiyan Global is the best exporter of premium fruits and vegetables, committed to delivering fresh, high-quality produce to customers worldwide..
              We Ensure the Quality of product, Packaging and Trust of of valued customers for variety of products that is fulfilled by us.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2 section-fade" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 text-navy">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <Link to="/" className="hover:text-accent transition-colors">→ Home</Link>
              </div>
              <div>
                <Link to="/about" className="hover:text-accent transition-colors">→ About</Link>
              </div>
              <div>
                <Link to="/products" className="hover:text-accent transition-colors">→ Products</Link>
              </div>
              <div>
                <Link to="/contact" className="hover:text-accent transition-colors">→ Contact</Link>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="md:col-span-4 section-fade" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 text-navy">Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24069.375111599555!2d72.79424769289867!3d19.132682498781442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b60f4811515b%3A0x4756dfde731c2c8f!2sVersova%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1738417172330!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="bg-green-500 py-4 text-primary border-t border-aqua/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>All Rights Reserved by Raiyan Global</p>
          <p>Managed by Raiyan Global</p>
        </div>
      </div>
    </>
  );
}