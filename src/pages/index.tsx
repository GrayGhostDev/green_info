import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const categories = [
  {
    name: "Urban Development",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "Green Technology",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: "Sustainability",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    name: "Community Impact",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function Home() {
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
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Hero Section with Topics */}
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-wrap justify-center gap-x-4 overflow-hidden">
                  <div className="flex animate-slideInLeft opacity-0 [animation-fill-mode:forwards]">
                    <span className="whitespace-nowrap">Bridging Urban</span>
                    <span className="ml-4">with</span>
                  </div>
                  <div className="flex animate-slideInRight opacity-0 [animation-fill-mode:forwards]">
                    <span className="whitespace-nowrap">Communities</span>
                    <span className="ml-4 text-primary-400">Green Solutions</span>
                  </div>
                </h1>
                <p className="mt-6 text-xl text-gray-300 text-center animate-fadeIn opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                  Empowering sustainable development through innovative technology and community engagement.
                </p>
                <div className="mt-10 flex gap-x-6 animate-fadeIn opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]">
                  <a
                    href="/services"
                    className="rounded-xl bg-primary-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Our Services
                  </a>
                  <a
                    href="/about"
                    className="rounded-xl bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/20"
                  >
                    Learn More
                  </a>
                </div>

                {/* Topics Section */}
                <div className="mt-24 w-full">
                  <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Topics We Cover</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-300">
                      Explore our diverse range of sustainability and urban development topics.
                    </p>
                  </div>
                  <div className="mx-auto max-w-7xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                      {categories.map((category, index) => (
                        <div key={index} className="flex flex-col bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                              {category.icon}
                            </div>
                            {category.name}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 