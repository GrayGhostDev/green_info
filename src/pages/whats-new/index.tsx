import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { withBasePath } from '../../utils/basePath'
import Head from 'next/head'

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

// Articles data for each category
const gardeningArticles = [
  {
    title: 'Urban Garden Design Trends 2024',
    date: 'March 18, 2024',
    description: 'Discover the latest trends in urban gardening, from vertical gardens to smart irrigation systems.',
    image: '/images/Fwd_ GIUS PICS/20241106_153950.jpg',
    category: 'Trends'
  },
  {
    title: 'Starting Your Community Garden',
    date: 'March 15, 2024',
    description: 'A comprehensive guide to initiating and managing a successful community garden project.',
    image: '/images/Fwd_ GIUS PICS/20241106_153911.jpg',
    category: 'Community'
  },
  {
    title: 'Seasonal Planting Guide: Spring',
    date: 'March 12, 2024',
    description: 'What to plant this spring for a bountiful summer harvest in your urban garden.',
    image: '/images/Fwd_ GIUS PICS/20241106_153904.jpg',
    category: 'Guides'
  }
]

const energyArticles = [
  {
    title: 'Solar Panel Incentives 2024',
    date: 'March 17, 2024',
    description: 'Learn about the latest government incentives and rebates for installing solar panels in your home.',
    image: '/images/Fwd_ GIUS PICS/20241106_153838.jpg',
    category: 'Incentives'
  },
  {
    title: 'Energy-Saving Home Improvements',
    date: 'March 14, 2024',
    description: 'Practical tips and improvements to reduce your home\'s energy consumption and lower utility bills.',
    image: '/images/Fwd_ GIUS PICS/20241106_153834.jpg',
    category: 'Tips'
  },
  {
    title: 'Community Solar Projects',
    date: 'March 11, 2024',
    description: 'How communities are coming together to create shared solar energy solutions.',
    image: '/images/Fwd_ GIUS PICS/20241106_153803.jpg',
    category: 'Community'
  }
]

const grants = [
  {
    title: 'Community Garden Grants',
    description: 'Available funding for starting and maintaining community gardens.',
    deadline: 'April 30, 2024',
    amount: '$5,000 - $15,000'
  },
  {
    title: 'Solar Energy Installation Support',
    description: 'Financial assistance for residential solar panel installations.',
    deadline: 'May 15, 2024',
    amount: 'Up to $10,000'
  },
  {
    title: 'Green Business Innovation Fund',
    description: 'Grants for businesses implementing sustainable practices.',
    deadline: 'June 1, 2024',
    amount: '$20,000 - $50,000'
  }
]

const services = [
  {
    title: 'Energy Audit Services',
    description: 'Professional assessment of your property\'s energy efficiency.',
    image: '/images/Fwd_ GIUS PICS/20241106_153746.jpg',
    category: 'Energy'
  },
  {
    title: 'Garden Consultation',
    description: 'Expert advice on creating and maintaining sustainable gardens.',
    image: '/images/Fwd_ GIUS PICS/20241106_153724.jpg',
    category: 'Gardening'
  },
  {
    title: 'Recycling Program Setup',
    description: 'Assistance in establishing effective recycling systems.',
    image: '/images/Fwd_ GIUS PICS/20241106_153705.jpg',
    category: 'Waste Management'
  }
]

export default function WhatsNew() {
  const [activeTab, setActiveTab] = useState('gardening')

  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  const renderArticleCard = (article: any) => (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300 hover:scale-102">
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00A651]/20 text-[#00A651]">
            {article.category}
          </span>
          <span className="text-sm text-gray-400">{article.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
        <p className="text-gray-300">{article.description}</p>
      </div>
    </div>
  )

  const renderGrantCard = (grant: any) => (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
      <h3 className="text-xl font-semibold text-white mb-2">{grant.title}</h3>
      <p className="text-gray-300 mb-4">{grant.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-[#00A651]">Deadline: {grant.deadline}</span>
        <span className="text-orange-400">{grant.amount}</span>
      </div>
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>What's New - Green Info Urban Style</title>
        <meta name="description" content="Stay updated with the latest in sustainable living, community initiatives, and green technology. Explore our latest updates on gardening, energy, services, and funding opportunities." />
        <meta name="keywords" content="sustainable living, green updates, community initiatives, urban gardening, green energy, sustainability services, environmental grants" />
        <meta property="og:title" content="What's New - Green Info Urban Style" />
        <meta property="og:description" content="Stay updated with the latest in sustainable living, community initiatives, and green technology." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath('/images/greenInfo_Logo.pdf.png')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={withBasePath('/images/greenInfo_Logo.pdf.png')}
            alt="Green Info Urban Style Logo"
            width={800}
            height={800}
            className="w-full h-full object-cover opacity-40 fixed"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              What's New
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest in sustainable living, community initiatives, and green technology.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-12 justify-center overflow-x-auto pb-20 mb-16">
              <button
                onClick={() => setActiveTab('gardening')}
                className={`px-10 py-5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-lg ${
                  activeTab === 'gardening'
                    ? 'bg-[#00A651] text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-black/50'
                }`}
              >
                Gardening
              </button>
              <button
                onClick={() => setActiveTab('energy')}
                className={`px-10 py-5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-lg ${
                  activeTab === 'energy'
                    ? 'bg-[#00A651] text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-black/50'
                }`}
              >
                Energy
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-10 py-5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-lg ${
                  activeTab === 'services'
                    ? 'bg-[#00A651] text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-black/50'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('grants')}
                className={`px-10 py-5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-lg ${
                  activeTab === 'grants'
                    ? 'bg-[#00A651] text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-black/50'
                }`}
              >
                Grants & Funding
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activeTab === 'gardening' && gardeningArticles.map((article, index) => (
                <div key={index}>
                  {renderArticleCard(article)}
                </div>
              ))}
              
              {activeTab === 'energy' && energyArticles.map((article, index) => (
                <div key={index}>
                  {renderArticleCard(article)}
                </div>
              ))}
              
              {activeTab === 'services' && services.map((service, index) => (
                <div key={index}>
                  {renderArticleCard(service)}
                </div>
              ))}
              
              {activeTab === 'grants' && grants.map((grant, index) => (
                <div key={index}>
                  {renderGrantCard(grant)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 