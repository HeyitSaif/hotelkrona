'use client';

import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="Contact Hotel Korona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-12 left-12 w-32 h-32 border-l-[2px] border-t-[2px] border-gold-light/50 z-20 hidden md:block" />
        <div className="absolute top-12 right-12 w-32 h-32 border-r-[2px] border-t-[2px] border-gold-light/50 z-20 hidden md:block" />
        <div className="absolute bottom-12 left-12 w-32 h-32 border-l-[2px] border-b-[2px] border-gold-light/50 z-20 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-32 h-32 border-r-[2px] border-b-[2px] border-gold-light/50 z-20 hidden md:block" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Get in Touch</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              We&apos;re here to help. Reach out to us for reservations, inquiries, or any assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
          >
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">Call Us</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.phone}
              </p>
            </a>

            <a
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">Email Us</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.email}
              </p>
            </a>

            <a
              href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">WhatsApp</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.whatsapp}
              </p>
            </a>
          </motion.div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border-[1.5px] border-white/20"
            >
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-white/70 mb-8">We&apos;ll get back to you within 24 hours</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-serif text-xl text-gold-light mb-2">Message Sent!</h3>
                  <p className="text-white/70">Thank you for contacting us. We&apos;ll respond shortly.</p>
                  <Button
                    variant="outline"
                    className="mt-6 !border-white !text-white hover:!bg-white hover:!text-black"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name <span className="text-gold-light">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email <span className="text-gold-light">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Subject <span className="text-gold-light">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-light transition-colors"
                    >
                      <option value="" className="bg-black">Select a subject</option>
                      <option value="reservation" className="bg-black">Reservation Inquiry</option>
                      <option value="general" className="bg-black">General Question</option>
                      <option value="feedback" className="bg-black">Feedback</option>
                      <option value="event" className="bg-black">Event Inquiry</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-gold-light">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/40 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full disabled:opacity-60 shadow-gold hover:shadow-glow"
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
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border-[1.5px] border-white/20 h-64 relative group">
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
                  alt="Map location"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={`https://maps.google.com/?q=${HOTEL_INFO.location.coordinates.lat},${HOTEL_INFO.location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold-light text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold transition-colors shadow-lg transform hover:scale-105"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-[1.5px] border-white/20">
                <h3 className="font-serif text-xl font-semibold text-gold-light mb-4">Visit Us</h3>
                <p className="text-white text-lg leading-relaxed">{HOTEL_INFO.location.address}</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-[1.5px] border-white/20">
                <h3 className="font-serif text-xl font-semibold text-gold-light mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Reception</span>
                    <span className="text-white font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Restaurant</span>
                    <span className="text-white font-medium">7:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Pool</span>
                    <span className="text-white font-medium">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Beach Access</span>
                    <span className="text-white font-medium">Sunrise - Sunset</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-charcoal relative overflow-hidden">
        {/* Background decoration */}
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
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold">FAQ</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Questions</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Find answers to common questions about your stay at Hotel Korona
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl border-[1.5px] border-white/20 overflow-hidden hover:border-gold-light/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-medium text-white group-hover:text-gold-light transition-colors text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-6 h-6 text-gold-light" />
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
                      <p className="px-6 pb-6 text-white/70 leading-relaxed text-base">
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
