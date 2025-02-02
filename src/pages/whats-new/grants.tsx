import React from 'react'
import Layout from '../../components/Layout'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const grants = [
  {
    title: 'Green Home Improvement Grant',
    deadline: 'April 30, 2024',
    description: 'Financial assistance for homeowners looking to implement energy-efficient improvements.',
    amount: 'Up to $10,000',
    category: 'Residential',
    eligibility: [
      'Homeowners in eligible areas',
      'Projects meeting energy efficiency criteria',
      'Income requirements apply'
    ]
  },
  {
    title: 'Community Garden Initiative Fund',
    deadline: 'May 15, 2024',
    description: 'Supporting the development and maintenance of community gardens in urban areas.',
    amount: 'Up to $25,000',
    category: 'Community',
    eligibility: [
      'Registered community organizations',
      'Public access requirement',
      'Sustainable design plan'
    ]
  },
  {
    title: 'Solar Energy Adoption Program',
    deadline: 'Ongoing',
    description: 'Subsidies and tax incentives for residential and commercial solar installations.',
    amount: '30% of project cost',
    category: 'Energy',
    eligibility: [
      'Property owners',
      'Approved solar installations',
      'Grid connection requirements'
    ]
  }
]

const resources = [
  {
    title: 'Grant Writing Workshop',
    date: 'March 25, 2024',
    type: 'Virtual Event'
  },
  {
    title: 'Funding Application Guide',
    date: 'Updated Weekly',
    type: 'Resource'
  },
  {
    title: 'Expert Consultation',
    date: 'By Appointment',
    type: 'Service'
  }
]

export default function Grants() {
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
              Grants & Funding
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover financial opportunities to support your sustainable initiatives and green projects.
            </p>
          </div>

          {/* Grants Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {grants.map((grant) => (
                <div
                  key={grant.title}
                  className="fade-in bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-[#00A651] bg-[#00A651]/10 rounded-full">
                        {grant.category}
                      </span>
                      <span className="text-sm text-gray-400">Deadline: {grant.deadline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {grant.title}
                    </h3>
                    <div className="text-[#00A651] font-semibold mb-4">
                      {grant.amount}
                    </div>
                    <p className="text-gray-300 mb-4">
                      {grant.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Eligibility:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {grant.eligibility.map((item, index) => (
                          <li key={index} className="text-sm text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#00A651] rounded-lg hover:bg-[#00A651]/90 transition-colors">
                        Apply Now
                      </button>
                      <button className="flex-1 px-4 py-2 text-sm font-medium text-[#00A651] border border-[#00A651] rounded-lg hover:bg-[#00A651]/10 transition-colors">
                        Download Guide
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Section */}
            <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {resources.map((resource) => (
                  <div
                    key={resource.title}
                    className="p-4 bg-black/30 rounded-lg"
                  >
                    <div className="text-sm text-[#00A651] mb-2">{resource.type}</div>
                    <h3 className="text-lg font-medium text-white mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-400">{resource.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates about new funding opportunities and grant deadlines.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/30 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-[#00A651]"
                />
                <button className="px-6 py-2 bg-[#00A651] text-white rounded-r-lg hover:bg-[#00A651]/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 