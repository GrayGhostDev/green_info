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
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-contain opacity-95 scale-125 transform rotate-6 brightness-125 hover:brightness-150 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative h-screen flex flex-col justify-center items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white mb-8 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
              Bridging Urban Communities
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">
              Connecting communities with sustainable solutions that promote environmental awareness and green living.
            </p>
            <div className="flex justify-center gap-6 animate-fadeIn opacity-0 [animation-delay:750ms] [animation-fill-mode:forwards]">
              <a
                href="/services"
                className="rounded-xl bg-orange-700/90 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-700/20 hover:bg-orange-600/90 transition-all duration-300 hover:shadow-orange-600/40 backdrop-blur-sm"
              >
                Our Services
              </a>
              <a
                href="/about"
                className="rounded-xl bg-black/50 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 hover:bg-black/70 transition-all duration-300 hover:shadow-black/40 backdrop-blur-sm"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 