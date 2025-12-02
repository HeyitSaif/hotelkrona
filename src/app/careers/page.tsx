"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { JOB_POSITIONS, HOTEL_INFO } from '@/lib/constants';
import JobCard from '@/components/ui/JobCard';

const CareersPage: React.FC = () => {
  // Generate JSON-LD structured data for job postings
  const jobPostingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": JOB_POSITIONS.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": "2025-11-30",
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
            "addressCountry": "UA"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "RUB",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": "Competitive"
          }
        }
      }
    }))
  };

  return (
    <main className="min-h-screen bg-sand-light">
      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bronze-dark via-deep-bronze to-bronze-dark text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')"
          }}
        />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Careers at Hotel Korona
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-sand-light">
              Join our team and help us create unforgettable stays for our guests. 
              We offer a friendly work environment, fair pay, and opportunities to 
              grow within the hotel.
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,60 350,0 600,40 C850,80 1050,20 1200,60 L1200,120 L0,120 Z"
              fill="#FAF8F3"
            />
          </svg>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bronze-dark mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find your perfect role at Hotel Korona
            </p>
          </motion.div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {JOB_POSITIONS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working at Hotel Korona Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bronze-dark mb-4">
              Working at Hotel Korona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our hotel a great place to build your career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-sand-light rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl font-bold text-bronze-dark mb-3">
                Team Culture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We foster a supportive and collaborative environment where every team 
                member is valued. Join a diverse group of professionals who share a 
                passion for hospitality and excellence.
              </p>
            </motion.div>

            {/* Development & Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-sand-light rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-serif text-xl font-bold text-bronze-dark mb-3">
                Development & Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We invest in our employees through comprehensive training programs and 
                ongoing professional development. Grow your skills and advance your 
                career with us.
              </p>
            </motion.div>

            {/* Location & Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-sand-light rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="font-serif text-xl font-bold text-bronze-dark mb-3">
                Location & Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Work in a beautiful coastal location just 150 meters from the beach. 
                Enjoy staff meals, competitive wages, and the opportunity to be part 
                of Crimea's premier hospitality destination.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-bronze-dark to-deep-bronze text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-sand-light max-w-2xl mx-auto">
              Our simple application process makes it easy to join our team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-gold-darker text-bronze-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Send Application</h3>
                <p className="text-sand-light text-sm">
                  Choose your desired position and submit your application with CV
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-gold-darker text-bronze-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">We Review</h3>
                <p className="text-sand-light text-sm">
                  Our HR team carefully reviews all applications
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-gold-darker text-bronze-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Interview</h3>
                <p className="text-sand-light text-sm">
                  Meet with our team to discuss your experience and the role
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-gold-darker text-bronze-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2">Trial Shift</h3>
                <p className="text-sand-light text-sm">
                  Experience a day with our team before starting officially
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-sand-light mb-6">
              Ready to start your journey with Hotel Korona?
            </p>
            <a 
              href="#positions" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block bg-gold-darker text-bronze-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Browse Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
