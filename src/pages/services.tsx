import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Head from 'next/head'

const solutions = [
  {
    name: 'UVC Technology',
    description: 'Custom-designed UVC systems that effectively remove 99.9% of persistent threats including bacteria, fungi, and molds. Our systems utilize powerful ultraviolet-C technology for reliable, long-lasting air purification.',
    features: [
      'Advanced UV-C light technology',
      'Eliminates 99.9% of airborne pathogens',
      'Energy-efficient operation',
      'Reduces maintenance costs',
      'Long-lasting performance'
    ],
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: 'HVAC Air Filters',
    description: 'High-quality air filters specifically designed for HVAC systems, ensuring comprehensive removal of dust, allergens, and pollutants from circulated air throughout your space.',
    features: [
      'Superior filtration efficiency',
      'Compatible with most HVAC systems',
      'Removes multiple pollutant types',
      'Improves air circulation',
      'Easy installation and maintenance'
    ],
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    name: 'Portable Units',
    description: 'Versatile portable air purification units designed for various indoor spaces, providing efficient air purification to create healthier and more comfortable environments.',
    features: [
      'Flexible placement options',
      'Multiple room size coverage',
      'Quiet operation',
      'Real-time air quality monitoring',
      'Smart controls and settings'
    ],
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
]

const certifications = [
  'CRIO Detroit Based Business',
  'Minority Business Enterprise',
  'Small Business Enterprise',
  'Disadvantaged Business Enterprise'
]

export default function Services() {
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
      <Head>
        <title>Services - Green Info Urban Style</title>
        <meta name="description" content="Explore our comprehensive range of green services including energy audits, sustainable solutions, and environmental consulting. Transform your space with our expert services." />
        <meta name="keywords" content="green services, energy audits, sustainability consulting, environmental services, green solutions, urban sustainability" />
        <meta property="og:title" content="Services - Green Info Urban Style" />
        <meta property="og:description" content="Transform your space with our comprehensive range of green services and sustainable solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath('/images/greenInfo_Logo.pdf.png')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-primary-700/80 via-primary-600/80 to-primary-800/80">
        <div className="absolute inset-0 transform transition-transform duration-[3s] hover:scale-102">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/50 backdrop-blur-[2px]" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="fade-in text-4xl font-bold tracking-tight text-white sm:text-6xl">ServiceBot Solutions</h1>
            <p className="fade-in mt-6 text-xl leading-8 text-gray-300">
              Advanced air purification solutions for commercial, mobile, and residential spaces, focused on creating healthier and safer environments.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center fade-in">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Air Purification
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our range of innovative air purification solutions designed to create cleaner, healthier environments while reducing energy consumption.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <div
                  key={solution.name}
                  className={`flex flex-col ${
                    index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {solution.icon}
                    {solution.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{solution.description}</p>
                    <ul className="mt-4 space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg fade-in-left">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Local Impact</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Detroit-Based Excellence
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  As a Detroit-based business, we're deeply invested in our community with a 60% minority workforce. We contribute to local employment and economic growth while delivering exceptional air purification solutions.
                </p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                  <ul className="mt-4 space-y-2">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex items-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Client Benefits</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Measurable Results
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 text-primary-600 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Reduced energy consumption and maintenance costs</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 text-primary-600 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">99.9% removal of airborne pathogens</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 text-primary-600 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Healthier and more productive environments</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 text-primary-600 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Customized solutions for your specific needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 fade-in">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to improve your air quality?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how our solutions can benefit your space with energy reduction and superior air purification.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-[#00A651] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00A651]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a
                href="tel:866-778-3268"
                className="text-sm font-semibold leading-6 text-white"
              >
                Call (866) 778-3268 <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.15" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  )
} 