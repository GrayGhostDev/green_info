import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const categories = [
  {
    title: 'Gardening',
    description: 'Latest trends in urban gardening, sustainable practices, and community gardens.',
    href: '/whats-new/gardening',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    updates: [
      'New community garden initiatives',
      'Urban farming techniques',
      'Seasonal planting guides'
    ]
  },
  {
    title: 'Energy',
    description: 'Updates on renewable energy solutions and energy efficiency programs.',
    href: '/whats-new/energy',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    updates: [
      'Solar panel incentives',
      'Energy-saving tips',
      'Green energy programs'
    ]
  },
  {
    title: 'Services',
    description: 'New and updated services for sustainable living and community development.',
    href: '/whats-new/services',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    updates: [
      'Home energy audits',
      'Recycling programs',
      'Consultation services'
    ]
  },
  {
    title: 'Grants & Funding',
    description: 'Available grants, funding opportunities, and financial resources.',
    href: '/whats-new/grants',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    updates: [
      'Government grants',
      'Community funding',
      'Sustainability incentives'
    ]
  }
]

export default function WhatsNew() {
  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Logo */}
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
              What's New
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in sustainable living, community initiatives, and green technology.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-[#00A651]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00A651]/30 transition-colors">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-[#00A651] transition-colors">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {category.updates.map((update, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <svg className="h-5 w-5 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{update}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 