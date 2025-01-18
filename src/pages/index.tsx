import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const highlights = [
  {
    title: 'Air Purification',
    description: 'Comprehensive solutions for commercial, mobile, and residential spaces using advanced UVC technology.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: 'Energy Reduction',
    description: 'Innovative solutions to reduce energy consumption and maintenance costs while improving air quality.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Local Impact',
    description: '60% minority workforce based in Detroit, contributing to local employment and economic growth.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

const features = [
  {
    name: 'UVC Technology',
    description: 'Remove 99.9% of airborne pathogens',
  },
  {
    name: 'Energy Efficiency',
    description: 'Reduce energy and maintenance costs',
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored for your specific needs',
  },
  {
    name: 'Expert Installation',
    description: 'Professional setup and maintenance',
  }
]

export default function Home() {
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
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-gradient-to-br from-primary-700/80 via-primary-600/80 to-primary-800/80">
        <div className="absolute inset-0 transform transition-transform duration-[3s] hover:scale-102">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/50 backdrop-blur-[2px]" />
        </div>
        <div className="relative mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 px-6 flex flex-col items-center text-center">
          <h1 className="fade-in text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8">
            Bridging Urban Communities with Green Solutions
          </h1>
          <p className="fade-in mt-6 max-w-3xl text-xl text-gray-100 leading-8">
            Connecting communities with sustainable solutions that promote environmental awareness and healthier living spaces through advanced air purification technology.
          </p>
          <div className="fade-in mt-10 flex items-center gap-x-6">
            <a
              href="/servicebot"
              className="hover-scale rounded-md bg-white/90 backdrop-blur-sm px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-white transition-all"
            >
              Our Solutions
            </a>
            <a href="/about" className="text-base font-semibold leading-6 text-white hover:text-gray-100">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center fade-in">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Advanced Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Innovative Air Purification Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our cutting-edge solutions combine UVC technology with energy efficiency to create healthier environments while reducing costs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`flex flex-col ${
                    index === 0 ? 'fade-in-left' : index === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {highlight.icon}
                    {highlight.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{highlight.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg fade-in">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Detroit-Based Excellence</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Certified Quality</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  As a certified CRIO Detroit Based Business, we're committed to excellence, diversity, and community impact.
                </p>
                <div className="mt-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9 fade-in">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature.name}
                      </dt>
                      <dd className="inline ml-2 text-gray-600">{feature.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 fade-in-right">
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-900/5">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:gap-x-8">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                    <ul className="mt-4 space-y-4">
                      <li className="text-sm text-gray-600">CRIO Detroit Based Business</li>
                      <li className="text-sm text-gray-600">Minority Business Enterprise</li>
                      <li className="text-sm text-gray-600">Small Business Enterprise</li>
                      <li className="text-sm text-gray-600">Disadvantaged Business Enterprise</li>
                    </ul>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-900">Local Impact</h3>
                    <ul className="mt-4 space-y-4">
                      <li className="text-sm text-gray-600">60% Minority Workforce</li>
                      <li className="text-sm text-gray-600">Detroit-Based Operations</li>
                      <li className="text-sm text-gray-600">Community Engagement</li>
                      <li className="text-sm text-gray-600">Economic Growth Support</li>
                    </ul>
                  </div>
                </div>
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
              Contact us today to discuss how our solutions can create a healthier environment for your space.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:rlb01@svbots.com"
                className="hover-scale rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="tel:866-778-3268" className="text-sm font-semibold leading-6 text-white">
                Call Now <span aria-hidden="true">→</span>
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