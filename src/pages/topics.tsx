import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const topics = [
  {
    title: 'Advancements in Solar Technology',
    description: 'Latest innovations in solar panels, storage solutions, and their applications in urban environments.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Smart Grids and Urban Energy Management',
    description: 'How smart grids and advanced energy management systems are transforming urban energy infrastructure.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Energy Efficiency in Buildings',
    description: 'Strategies and technologies for improving energy efficiency in urban buildings, including smart HVAC systems and passive design.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Community Solar Projects',
    description: 'Successful community-based solar initiatives in urban areas and their impact on local communities.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Electric Vehicles and Urban Mobility',
    description: 'The role of electric vehicles in urban transportation systems and their integration with renewable energy sources.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Green Infrastructure and Urban Planning',
    description: 'How green infrastructure, like green roofs and urban forests, contributes to renewable energy generation and urban sustainability.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Policy and Regulation in Urban Energy',
    description: 'The role of policy frameworks and regulations in promoting green energy adoption in cities.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Circular Economy and Energy',
    description: 'How principles of the circular economy can be applied to urban energy systems to reduce waste and enhance sustainability.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Renewable Energy Microgrids',
    description: 'Case studies on urban microgrids powered by renewable sources and their resilience benefits.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Energy Justice and Equity',
    description: 'The importance of ensuring equitable access to green energy solutions in urban communities.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
]

const backgroundImages = [
  "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
  "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
  "/images/Fwd_ GIUS PICS/20241218_151736.jpg"
]

export default function Topics() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 1500)
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 7000)
    return () => clearInterval(timer)
  }, [])

  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  useIntersectionObserver({
    targetSelector: '.fade-in-left',
    onIntersect: (entry, observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInLeft')
        observer.unobserve(entry.target)
      }
    },
    threshold: 0.2
  })

  useIntersectionObserver({
    targetSelector: '.fade-in-right',
    onIntersect: (entry, observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInRight')
        observer.unobserve(entry.target)
      }
    },
    threshold: 0.2
  })

  return (
    <Layout>
      <div className="relative min-h-screen bg-black">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
              index === currentImageIndex 
                ? 'opacity-30 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          </div>
        ))}

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-56">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Topics & Insights
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Explore our knowledge hub covering sustainable technology, urban development, and environmental innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Topics Grid - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-grid-primary-900/[0.03] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-6 py-2 text-primary-600 ring-1 ring-inset ring-primary-600/20">
              <span className="text-base font-semibold uppercase tracking-wider">Knowledge Hub</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl [text-wrap:balance]">
              Sustainable Urban Development
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Discover our extensive collection of resources and insights on sustainable technology, urban planning, and green innovation.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <div
                  key={topic.title}
                  className={`group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <div className="absolute -top-4 left-4 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-white">
                      {topic.icon}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {topic.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">{topic.description}</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center text-primary-600 hover:text-primary-500 transition-all duration-300 group-hover:gap-2"
                      >
                        Learn more
                        <svg
                          className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section - Enhanced */}
      <div className="relative bg-primary-900">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/greenInfo_Logo.pdf.png"
            alt="Newsletter background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800/90 to-primary-800/50 mix-blend-multiply backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <div className="inline-flex items-center rounded-full bg-primary-800 px-6 py-2 text-gray-300 ring-1 ring-inset ring-white/20">
              <span className="text-base font-semibold uppercase tracking-wider">Stay Informed</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Get the latest updates
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Subscribe to our newsletter for the latest updates on sustainable urban development and green technology.
            </p>
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border-0 bg-white/5 px-5 py-3 text-white placeholder-gray-400 backdrop-blur-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:max-w-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-900"
                >
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