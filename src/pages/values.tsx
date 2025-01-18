import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const values = [
  {
    name: 'Green Innovation',
    description: 'Driving creative and impactful solutions to urban communities.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      'Innovative air purification solutions',
      'Advanced UVC technology implementation',
      'Smart energy management systems',
      'Sustainable urban development'
    ]
  },
  {
    name: 'Sustainability',
    description: 'Championing information sharing that enhances urban living.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    details: [
      'Environmental responsibility',
      'Resource conservation',
      'Long-term sustainability focus',
      'Community education initiatives'
    ]
  },
  {
    name: 'Health & Safety',
    description: 'Prioritizing well-being in every project.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    details: [
      'Air quality improvement',
      'Safe working environments',
      'Health-focused solutions',
      'Preventive maintenance'
    ]
  },
  {
    name: 'Energy Efficiency',
    description: 'Committing to providing information on how to find smarter and more efficient resources within the city.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      'Energy consumption reduction',
      'Cost-effective solutions',
      'Smart resource utilization',
      'Sustainable practices'
    ]
  },
  {
    name: 'Guest Platform Satisfaction',
    description: 'Bridging the gap between green innovators and exceeding expectations.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    details: [
      'Customer-centric approach',
      'Quality service delivery',
      'Continuous improvement',
      'Responsive support'
    ]
  }
]

export default function Values() {
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
      {/* Hero Section - Enhanced */}
      <div className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="h-full w-full object-cover opacity-15 mix-blend-overlay transform scale-110 rotate-6"
          />
          <div className="absolute inset-0 bg-gradient-radial from-primary-900/90 via-primary-800/90 to-primary-900/95" />
        </div>
        <div className="relative flex min-h-[70vh] items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-2xl backdrop-blur-sm bg-primary-900/20 p-8 rounded-2xl border border-primary-500/10">
              <h1 className="fade-in text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl [text-wrap:balance]">
                Our Values
              </h1>
              <p className="fade-in mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                The core principles that guide our mission to create sustainable, healthy environments for urban communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-grid-primary-900/[0.03] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-6 py-2 text-primary-600 ring-1 ring-inset ring-primary-600/20">
              <span className="text-base font-semibold uppercase tracking-wider">Our Principles</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl [text-wrap:balance]">
              What Drives Us Forward
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Our values shape every decision we make and guide our commitment to creating positive change in urban communities.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {values.map((value, index) => (
                <div
                  key={value.name}
                  className={`group relative ${
                    index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="relative aspect-w-3 aspect-h-2 rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="flex items-center justify-center rounded-lg bg-primary-600 bg-opacity-10 p-4">
                        <div className="h-16 w-16 text-primary-600 transition-transform duration-300 group-hover:scale-110">
                          {value.icon}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {value.name}
                      </h3>
                      <p className="text-lg text-gray-500">{value.description}</p>
                    </div>
                    <ul className="space-y-4 rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      {value.details.map((detail) => (
                        <li key={detail} className="flex items-start group/item">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-primary-500 transition-transform duration-300 group-hover/item:scale-110"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-gray-600 group-hover/item:text-primary-600 transition-colors duration-300">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative bg-primary-900">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/greenInfo_Logo.pdf.png"
            alt="CTA background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800/90 to-primary-800/50 mix-blend-multiply backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <div className="inline-flex items-center rounded-full bg-primary-800 px-6 py-2 text-gray-300 ring-1 ring-inset ring-white/20">
              <span className="text-base font-semibold uppercase tracking-wider">Join Our Mission</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Create Change Together
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Partner with us to create sustainable, healthy environments that benefit our communities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rlb01@svbots.com"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary-600 bg-opacity-60 px-5 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 