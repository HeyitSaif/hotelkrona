"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { JOB_POSITIONS, HOTEL_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const JobDetailsPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const jobId = params.slug as string;

  const job = JOB_POSITIONS.find((j) => j.id === jobId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: job?.title || '',
    message: '',
    cv: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!job) {
    return (
      <main className="min-h-screen bg-sand-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-bronze-dark mb-4">
            Position Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The job position you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push('/careers')} variant="primary">
            View All Positions
          </Button>
        </div>
      </main>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // In a real application, you would send this to an API endpoint
      console.log('Application submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: job.title,
        message: '',
        cv: null
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate JSON-LD structured data for this specific job
  const jobPostingSchema = job ? {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": HOTEL_INFO.name,
      "value": job.id
    },
    "datePosted": "2025-11-30",
    "validThrough": "2026-12-31",
    "employmentType": job.employmentType.toUpperCase().replace('-', '_'),
    "hiringOrganization": {
      "@type": "Organization",
      "name": HOTEL_INFO.name,
      "sameAs": "https://hotelkorona.com",
      "logo": "https://hotelkorona.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": HOTEL_INFO.location.address,
        "addressLocality": "Alushta",
        "addressRegion": "Crimea",
        "postalCode": "298600",
        "addressCountry": "UA"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "RUB",
      "value": {
        "@type": "QuantitativeValue",
        "value": "Competitive",
        "unitText": "MONTH"
      }
    },
    "responsibilities": job.responsibilities.join('; '),
    "skills": job.requirements.join('; '),
    "benefits": job.weOffer.join('; ')
  } : null;

  return (
    <main className="min-h-screen bg-sand-light">
      {/* SEO: JSON-LD Structured Data */}
      {jobPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
      )}
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gold-dark/20 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <button
              onClick={() => router.push('/careers')}
              className="hover:text-bronze-dark transition-colors"
            >
              Careers
            </button>
            <span className="mx-2">/</span>
            <span className="text-bronze-dark font-semibold">{job.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details - Left Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Job Header */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-bronze-dark mb-4">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-block bg-sand text-bronze-dark text-sm font-semibold px-4 py-2 rounded-full">
                    {job.category}
                  </span>
                  <span className="inline-block bg-gold-lighter text-bronze-dark text-sm font-semibold px-4 py-2 rounded-full">
                    {job.employmentType}
                  </span>
                  <span className="inline-block bg-bronze-dark/10 text-bronze-dark text-sm font-semibold px-4 py-2 rounded-full">
                    📍 {job.location}
                  </span>
                </div>

                {job.startDate && (
                  <div className="bg-sand-light rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-bronze-dark">
                      <span className="text-gold-darker">Start Date:</span> {job.startDate}
                    </p>
                  </div>
                )}

                <p className="text-gray-700 leading-relaxed text-lg">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-gold-darker mr-3 mt-1 text-xl">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-4">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-gold-darker mr-3 mt-1 text-xl">•</span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Offer */}
              <div className="bg-gradient-to-br from-bronze-dark to-deep-bronze rounded-lg shadow-md p-8 text-white">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  What We Offer
                </h2>
                <ul className="space-y-3">
                  {job.weOffer.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-lighter mr-3 mt-1 text-xl">✓</span>
                      <span className="text-sand-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Application Form - Right Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-6">
                  Apply Now
                </h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-semibold">
                      ✓ Application Submitted!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll review your application and get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-semibold">
                      ✗ Submission Failed
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                      Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Position
                    </label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      value={formData.position}
                      onChange={handleInputChange}
                      disabled
                      className="bg-gray-100"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label htmlFor="cv" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Upload CV *
                    </label>
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sand file:text-bronze-dark hover:file:bg-sand-dark file:cursor-pointer cursor-pointer border border-gold-dark/30 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, or DOCX (max 5MB)
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-bronze-dark mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us why you're a great fit for this position..."
                      className="w-full px-4 py-3 border border-gold-dark/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-darker focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-sand-light rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-bronze-dark mb-3">
                  Questions?
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Contact our HR department for more information about this position.
                </p>
                <a
                  href="mailto:hotelkorona.crimea@gmail.com"
                  className="text-sm text-gold-darker hover:text-gold-darker/80 font-semibold transition-colors"
                >
                  hotelkorona.crimea@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsPage;
