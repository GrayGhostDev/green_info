import React from 'react'
import Layout from '../../components/Layout'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const services = [
  {
    title: 'Home Energy Audit Service',
    date: 'March 13, 2024',
    description: 'Professional assessment of your home\'s energy efficiency with personalized recommendations.',
    image: '/images/energy-audit.jpg',
    category: 'Energy',
    features: [
      'Thermal imaging analysis',
      'Air leak detection',
      'Insulation assessment',
      'Energy consumption review'
    ]
  },
  {
    title: 'Green Space Consultation',
    date: 'March 11, 2024',
    description: 'Expert guidance on transforming your outdoor space into a sustainable urban garden.',
    image: '/images/garden-consultation.jpg',
    category: 'Gardening',
    features: [
      'Site analysis',
      'Plant selection',
      'Irrigation planning',
      'Maintenance guidance'
    ]
  },
  {
    title: 'Recycling Program Setup',
    date: 'March 9, 2024',
    description: 'Comprehensive assistance in establishing effective recycling systems for communities.',
    image: '/images/recycling-program.jpg',
    category: 'Waste Management',
    features: [
      'Waste audit',
      'Collection system design',
      'Education materials',
      'Progress tracking'
    ]
  }
]

export default function Services() {
  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-cover opacity-15 fixed"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our range of professional services designed to help you achieve your sustainability goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="fade-in bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-[#00A651] bg-[#00A651]/10 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-sm text-gray-400">{service.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-300">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#00A651] rounded-lg hover:bg-[#00A651]/90 transition-colors">
                        Book Now
                      </button>
                      <button className="flex-1 px-4 py-2 text-sm font-medium text-[#00A651] border border-[#00A651] rounded-lg hover:bg-[#00A651]/10 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our team of experts to discuss your specific requirements and how we can help you achieve your sustainability goals.
              </p>
              <button className="px-6 py-3 text-white bg-[#00A651] rounded-lg hover:bg-[#00A651]/90 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 