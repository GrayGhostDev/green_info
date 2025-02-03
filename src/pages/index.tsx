import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Link from 'next/link'

const categories = [
  {
    name: "Urban Development",
    description: "Innovative solutions for sustainable urban growth and community development.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "Green Technology",
    description: "Cutting-edge solutions for energy efficiency and environmental sustainability.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: "Sustainability",
    description: "Promoting eco-friendly practices and sustainable resource management.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    name: "Community Impact",
    description: "Creating positive change through community engagement and education.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

const Home: NextPage = () => {
  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />
          
          {/* Extended Logo Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={withBasePath("/images/greenInfo_Logo.pdf.png")}
              alt="Background Logo"
              className="w-full h-full object-cover opacity-15 fixed"
            />
          </div>
        </div>

        {/* Header Section */}
        <header className="relative z-30 min-h-[90vh] flex items-center justify-center pt-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-[#00A651] mb-8 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
              Bridging the Gap between Communities and Green Space
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">
              Connecting communities with sustainable solutions that promote environmental awareness and green living.
            </p>
            <div className="flex justify-center gap-6 animate-fadeIn opacity-0 [animation-delay:750ms] [animation-fill-mode:forwards]">
              <Link
                href="/podcast"
                className="rounded-xl bg-orange-700/90 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-700/20 hover:bg-orange-600/90 transition-all duration-300 hover:shadow-orange-600/40 backdrop-blur-sm hover:scale-105"
              >
                Listen Now
              </Link>
              <Link
                href="/about"
                className="rounded-xl bg-black/50 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-black/20 hover:bg-black/70 transition-all duration-300 hover:shadow-black/40 backdrop-blur-sm hover:scale-105"
              >
                About Us
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-30">
          {/* Focus Areas Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#00A651] mb-4">Our Focus Areas</h2>
              <p className="text-xl text-gray-300">Driving sustainable change through innovation and community engagement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="h-12 w-12 bg-[#00A651]/20 rounded-xl flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Podcast Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#00A651] mb-6">Green Info Urban Style Podcast</h2>
                <p className="text-xl text-gray-300 mb-8">Join us for insightful discussions on urban sustainability, green technology, and community development.</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="/podcast"
                    className="rounded-xl bg-[#00A651] px-6 py-3 text-white font-semibold hover:bg-[#00A651]/90 transition-all duration-300 hover:scale-105"
                  >
                    Listen Now
                  </a>
                  <a
                    href="/episodes"
                    className="rounded-xl bg-black/50 px-6 py-3 text-white font-semibold hover:bg-black/70 transition-all duration-300 hover:scale-105"
                  >
                    View Episodes
                  </a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={withBasePath("/images/Fwd_ GIUS PICS/20241218_150055.jpg")}
                  alt="Podcast Studio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <div className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[#00A651]/10 backdrop-blur-sm rounded-2xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Ready to Make a Difference?</h2>
                <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                  Join us in creating sustainable urban communities through innovative solutions and community engagement.
                </p>
                <div className="flex justify-center gap-6">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-white px-8 py-4 text-[#00A651] font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-xl bg-black/50 px-8 py-4 text-white font-semibold hover:bg-black/70 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A651] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home 