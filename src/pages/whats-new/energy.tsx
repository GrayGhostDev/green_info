import React from 'react'
import Layout from '../../components/Layout'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const articles = [
  {
    title: 'Solar Panel Incentives 2024',
    date: 'March 14, 2024',
    description: 'Learn about the latest government incentives and rebates for installing solar panels in your home.',
    image: '/images/solar-panels.jpg',
    category: 'Incentives'
  },
  {
    title: 'Energy-Saving Home Improvements',
    date: 'March 12, 2024',
    description: 'Practical tips and improvements to reduce your home\'s energy consumption and lower utility bills.',
    image: '/images/energy-saving.jpg',
    category: 'Tips'
  },
  {
    title: 'Community Solar Projects',
    date: 'March 8, 2024',
    description: 'How communities are coming together to create shared solar energy solutions.',
    image: '/images/community-solar.jpg',
    category: 'Community'
  }
]

export default function Energy() {
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
              Energy Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest in renewable energy solutions, efficiency programs, and sustainable power initiatives.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="fade-in bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-[#00A651] bg-[#00A651]/10 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300">
                      {article.description}
                    </p>
                    <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-[#00A651] rounded-lg hover:bg-[#00A651]/90 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Content */}
            <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Energy Efficiency Calculator</h2>
              <p className="text-gray-300 mb-6">
                Use our interactive calculator to estimate potential energy savings for your home.
                Input your current energy usage and discover ways to reduce consumption.
              </p>
              <button className="px-6 py-3 text-white bg-[#00A651] rounded-lg hover:bg-[#00A651]/90 transition-colors">
                Try Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 