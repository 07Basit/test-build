import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, AlertCircle } from 'lucide-react';

// API URL for the contact form
const API_URL = '/.netlify/functions/sendEmail';

// const API_URL = 'http://localhost:3001/api/contact';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    contact: '',
    productInterest: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('unknown');

  // Check if the server is running
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/test', { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('error');
        }
      } catch (error) {
        setServerStatus('offline');
      }
    };
    
    checkServer();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // If server is offline, show a message
    if (serverStatus === 'offline') {
      setStatus({
        submitted: true,
        success: false,
        message: 'The email server is currently offline. Please try again later or contact us directly via phone or email.'
      });
      setLoading(false);
      return;
    }
    
    try {
      // Send the form data to our Node.js backend
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        // Reset form and show success message
        setFormData({ name: '', businessName: '', email: '', contact: '', productInterest: '', message: '' });
        setStatus({
          submitted: true,
          success: true,
          message: data.message || 'Thank you! Your message has been sent successfully.'
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus({
        submitted: true,
        success: false,
        message: error instanceof Error ? error.message : 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Alternative submission method for when server is offline
  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sales.raiyanglobal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          
          {serverStatus === 'offline' && !status.submitted && (
            <div className="p-4 rounded-md mb-6 bg-yellow-100 text-yellow-800">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <p>Our server is currently offline. You can still fill out the form and we'll send your message directly.</p>
              </div>
            </div>
          )}
          
          {status.submitted ? (
            <div className={`p-4 rounded-md mb-6 ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <div className="flex items-center">
                {status.success ? (
                  <Check className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <p>{status.message}</p>
              </div>
              {status.success && (
                <button 
                  onClick={() => setStatus({ submitted: false, success: false, message: '' })}
                  className="mt-4 text-green-700 underline"
                >
                  Send another message
                </button>
              )}
              {!status.success && serverStatus === 'offline' && (
                <button 
                  onClick={handleDirectEmail}
                  className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Send via Email Client
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Business Name in One Line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Email & Contact Number in One Line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Product Interest (Optional) */}
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700">Product Interest</label>
                <input
                  type="text"
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Message Box (Optional) */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {serverStatus === 'offline' && (
                <button
                  type="button"
                  onClick={handleDirectEmail}
                  className="w-full mt-2 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Open Email Client Instead
                </button>
              )}
            </form>
          )}
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              We'll get back to you as soon as possible. <br></br> For urgent inquiries, Please contact us directly via Phone.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">E-3, Gulshan CHS, Versova, Andheri (West), Mumbai: 400061, Maharashtra, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91 59562629</p>
                <p className="text-gray-600">+91 25926255</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-green-600 mr-4" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">sales.raiyanglobal@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}