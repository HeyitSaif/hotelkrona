'use client';

import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ROOM_TYPES, HOTEL_INFO } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

function BookingForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    roomType: '',
    adults: parseInt(searchParams.get('adults') || '2'),
    children: parseInt(searchParams.get('children') || '0'),
    childrenAges: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const selectedRoom = ROOM_TYPES.find(room => room.id === formData.roomType);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate/30 rounded-2xl p-12 text-center border border-gold/10"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="font-serif text-3xl text-gold mb-4">Booking Request Received!</h2>
        <p className="text-ivory mb-2">Thank you for choosing Hotel Korona.</p>
        <p className="text-steel mb-8">
          Our team will review your request and contact you within 24 hours to confirm your reservation.
        </p>
        <div className="bg-midnight rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
          <h3 className="text-gold font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-steel">Name:</span>
              <span className="text-ivory">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel">Check-in:</span>
              <span className="text-ivory">{formData.checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel">Check-out:</span>
              <span className="text-ivory">{formData.checkOut}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel">Room:</span>
              <span className="text-ivory">{selectedRoom?.nameEn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel">Guests:</span>
              <span className="text-ivory">{formData.adults} Adults, {formData.children} Children</span>
            </div>
          </div>
        </div>
        <p className="text-steel text-sm mb-6">
          A confirmation email has been sent to {formData.email}
        </p>
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          Return to Home
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="bg-slate/30 rounded-2xl p-8 border border-gold/10">
        <h2 className="font-serif text-xl text-gold mb-6">Personal Information</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            placeholder="Your full name"
          />
          <Input
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
            placeholder="+7 (XXX) XXX-XX-XX"
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Stay Details */}
      <div className="bg-slate/30 rounded-2xl p-8 border border-gold/10">
        <h2 className="font-serif text-xl text-gold mb-6">Stay Details</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-ivory mb-2">
              Check-in Date <span className="text-gold">*</span>
            </label>
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
              min={today}
              required
              className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ivory mb-2">
              Check-out Date <span className="text-gold">*</span>
            </label>
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
              min={formData.checkIn || today}
              required
              className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ivory mb-2">
              Room Type <span className="text-gold">*</span>
            </label>
            <select
              value={formData.roomType}
              onChange={(e) => setFormData({...formData, roomType: e.target.value})}
              required
              className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
            >
              <option value="">Select a room</option>
              {ROOM_TYPES.map(room => (
                <option key={room.id} value={room.id}>
                  {room.nameEn} - from {formatPrice(room.price)}/night
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-ivory mb-2">
              Adults <span className="text-gold">*</span>
            </label>
            <select
              value={formData.adults}
              onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
              required
              className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-ivory mb-2">
              Children
            </label>
            <select
              value={formData.children}
              onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
              className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>
          {formData.children > 0 && (
            <div>
              <label className="block text-sm font-medium text-ivory mb-2">
                Children Ages
              </label>
              <input
                type="text"
                value={formData.childrenAges}
                onChange={(e) => setFormData({...formData, childrenAges: e.target.value})}
                placeholder="e.g., 5, 8"
                className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          )}
        </div>
      </div>

      {/* Selected Room Preview */}
      {selectedRoom && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gold/10 rounded-2xl p-6 border border-gold/30"
        >
          <h3 className="font-serif text-lg text-gold mb-4">Selected Room</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 bg-slate rounded-lg overflow-hidden relative">
              <Image
                src={`https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80`}
                alt={selectedRoom.nameEn}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-ivory font-semibold mb-2">{selectedRoom.nameEn}</h4>
              <p className="text-steel text-sm mb-3">{selectedRoom.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-steel">
                <span>🛏️ {selectedRoom.beds}</span>
                <span>👥 Up to {selectedRoom.maxGuests}</span>
                <span>📐 {selectedRoom.size}</span>
                {selectedRoom.balcony && <span>🌅 Balcony</span>}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-steel">From</div>
              <div className="text-2xl font-bold text-gold">{formatPrice(selectedRoom.price)}</div>
              <div className="text-sm text-steel">per night</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Special Requests */}
      <div className="bg-slate/30 rounded-2xl p-8 border border-gold/10">
        <h2 className="font-serif text-xl text-gold mb-6">Special Requests</h2>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          placeholder="Any special requests or requirements? (dietary needs, accessibility, celebrations, etc.)"
          className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <div className="text-center">
        <p className="text-steel text-sm mb-6">
          By submitting this form, you agree to our booking policies and terms of service.
        </p>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
        </Button>
      </div>
    </form>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
            alt="Book your stay"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/70 to-midnight" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Reservation</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6">
              Book Your <span className="text-gold">Stay</span>
            </h1>
            <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
              Reserve your perfect getaway at Hotel Korona. Complete the form below and our team will confirm your booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl">
          <Suspense fallback={<div className="text-center text-ivory">Loading...</div>}>
            <BookingForm />
          </Suspense>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-slate/30 rounded-2xl p-8 border border-gold/10">
              <h3 className="font-serif text-xl text-gold mb-4">Booking Department</h3>
              <div className="space-y-4">
                <a href={`tel:${HOTEL_INFO.contact.phone}`} className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                  <span>📞</span> {HOTEL_INFO.contact.phone}
                </a>
                <a href={`mailto:${HOTEL_INFO.contact.email}`} className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                  <span>✉️</span> {HOTEL_INFO.contact.email}
                </a>
                <a href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                  <span>💬</span> {HOTEL_INFO.contact.whatsapp} (WhatsApp)
                </a>
              </div>
            </div>

            <div className="bg-midnight rounded-2xl p-8 border border-gold/10">
              <h3 className="font-serif text-xl text-gold mb-4">Important Notes</h3>
              <ul className="space-y-3 text-steel text-sm">
                <li>• Minimum stay: 1 night</li>
                <li>• 30% deposit required to confirm</li>
                <li>• Check-in: 2:00 PM / Check-out: 12:00 PM</li>
                <li>• Free cancellation 7+ days before arrival</li>
                <li>• Confirmation within 24 hours</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

