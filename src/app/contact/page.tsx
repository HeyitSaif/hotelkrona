'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { HOTEL_INFO } from '@/lib/constants';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request and subject to availability."
  },
  {
    question: "Is breakfast included in the room rate?",
    answer: "Breakfast is available for an additional 450₽ per person. We offer a variety of continental and hot breakfast options in our restaurant."
  },
  {
    question: "How far is the hotel from the beach?",
    answer: "Hotel Korona is located just 150 meters from the pristine pebble beach. It's a short 2-minute walk to crystal-clear waters."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we offer free on-site parking for all our guests. The parking area is secure and monitored 24/7."
  },
  {
    question: "Are pets allowed at the hotel?",
    answer: "We welcome well-behaved pets in select rooms. Please contact us in advance to arrange pet-friendly accommodations. Additional cleaning fees may apply."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash (Russian Rubles), bank transfers, and major credit cards. A 30% deposit is required to confirm your booking."
  },
  {
    question: "Is there airport transfer available?",
    answer: "Yes, we offer airport transfer services from Simferopol Airport for 3,000₽ one-way. Please book at least 24 hours in advance."
  },
  {
    question: "Do rooms have air conditioning?",
    answer: "Yes, all our rooms are equipped with individual climate control air conditioning units for your comfort."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-deep-bronze/50 border border-gold-dark/20 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-sand/50";
  const labelClasses = "block text-sm font-medium text-ivory mb-2";

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="Contact Hotel Korona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Get in Touch</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              We&apos;re here to help. Reach out to us for reservations, inquiries, or any assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-deep-bronze relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
           <div 
             className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
           />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                icon: '📞', 
                title: 'Phone', 
                content: HOTEL_INFO.contact.phone,
                href: `tel:${HOTEL_INFO.contact.phone}`,
                action: 'Call Now'
              },
              { 
                icon: '✉️', 
                title: 'Email', 
                content: HOTEL_INFO.contact.email,
                href: `mailto:${HOTEL_INFO.contact.email}`,
                action: 'Send Email'
              },
              { 
                icon: '📍', 
                title: 'Address', 
                content: HOTEL_INFO.location.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.location.address)}`,
                action: 'Get Directions'
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism-dark rounded-2xl p-8 text-center border border-gold-dark/10 hover:border-gold-dark/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-gold-darker mb-2">{item.title}</h3>
                <p className="text-ivory mb-4">{item.content}</p>
                <span className="text-gold-darker text-sm group-hover:underline">{item.action} →</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10"
            >
              <h2 className="font-serif text-2xl font-bold text-ivory mb-2">Send Us a Message</h2>
              <p className="text-sand mb-8">We&apos;ll get back to you within 24 hours</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-serif text-xl text-gold-darker mb-2">Message Sent!</h3>
                  <p className="text-sand">Thank you for contacting us. We&apos;ll respond shortly.</p>
                  <Button 
                    variant="secondary" 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Your name"
                      className="bg-deep-bronze/50 border-gold-dark/20 text-ivory placeholder:text-sand/50"
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="your@email.com"
                      className="bg-deep-bronze/50 border-gold-dark/20 text-ivory placeholder:text-sand/50"
                    />
                  </div>
                  
                  <div>
                    <label className={labelClasses}>
                      Subject <span className="text-gold">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className={inputClasses}
                    >
                      <option value="" className="bg-deep-bronze">Select a subject</option>
                      <option value="reservation" className="bg-deep-bronze">Reservation Inquiry</option>
                      <option value="general" className="bg-deep-bronze">General Question</option>
                      <option value="feedback" className="bg-deep-bronze">Feedback</option>
                      <option value="event" className="bg-deep-bronze">Event Inquiry</option>
                      <option value="other" className="bg-deep-bronze">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full disabled:opacity-60"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3 justify-center">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-deep-bronze/50 rounded-2xl overflow-hidden border border-gold-dark/10 h-64 relative group">
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
                  alt="Map location"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={`https://maps.google.com/?q=${HOTEL_INFO.location.coordinates.lat},${HOTEL_INFO.location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-deep-bronze px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors shadow-lg transform hover:scale-105"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-morphism-dark rounded-2xl p-6 border border-gold-dark/10">
                <h3 className="font-serif text-lg font-semibold text-gold-darker mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-sand">Reception</span>
                    <span className="text-ivory">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand">Restaurant</span>
                    <span className="text-ivory">7:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand">Pool</span>
                    <span className="text-ivory">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand">Beach Access</span>
                    <span className="text-ivory">Sunrise - Sunset</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] p-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-[#25D366]/30"
              >
                <span className="text-2xl">💬</span>
                Chat with us on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-sand max-w-xl mx-auto">
              Find answers to common questions about your stay at Hotel Korona
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-deep-bronze/30 rounded-xl border border-gold-dark/10 overflow-hidden hover:border-gold-dark/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-ivory">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 text-gold" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sand leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
