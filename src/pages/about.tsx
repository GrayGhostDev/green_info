import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const highlights = [
  {
    name: 'Green Innovation Leadership',
    description: 'Leading the way in sustainable technology and education for urban communities.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: 'Health & Well-being',
    description: 'Improving community health through better indoor environments and sustainable practices.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'Energy Efficiency',
    description: 'Reducing energy consumption while maintaining optimal performance and comfort.',
    icon: (
      <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const commitments = [
  'Fostering green living practices',
  'Improving indoor environments',
  'Advancing health and well-being',
  'Implementing innovative solutions',
  'Promoting sustainable technology',
  'Supporting urban communities',
  'Reducing energy consumption',
  'Delivering exceptional value'
]

const backgroundImages = [
  "/images/Fwd_ GIUS PICS/20241218_151736.jpg",
  "/images/Fwd_ GIUS PICS/20241019_134006.jpg",
  "/images/Fwd_ GIUS PICS/20241218_152304.jpg"
]

export default function About() {
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
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30zm0-30h30v30H0V0zm30 0h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            backgroundRepeat: 'repeat'
          }} />
        </div>

        {/* Content */}
        <div className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:col-start-1">
                <div className="relative mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:gap-8">
                  <div className="fade-in-left group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-4 transition-transform duration-300 group-hover:scale-110">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-black">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                    </div>
                    <div className="pt-4">
                      <h2 className="text-base font-semibold uppercase tracking-wider text-primary-400">Our Vision</h2>
                      <p className="mt-2 text-3xl font-extrabold tracking-tight text-white group-hover:text-primary-400 transition-colors duration-300">
                        Leading Green Innovation
                      </p>
                      <p className="mt-4 text-lg text-gray-300">
                        To be a trusted leader in green innovation and education for urban communities, improving their health and well-being while reducing energy consumption.
                      </p>
                    </div>
                  </div>
                  <div className="fade-in-right group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-4 transition-transform duration-300 group-hover:scale-110">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-black">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                    </div>
                    <div className="pt-4">
                      <h2 className="text-base font-semibold uppercase tracking-wider text-primary-400">Our Mission</h2>
                      <p className="mt-2 text-3xl font-extrabold tracking-tight text-white group-hover:text-primary-400 transition-colors duration-300">
                        Enhancing Communities
                      </p>
                      <p className="mt-4 text-lg text-gray-300">
                        To enhance the quality of life in our immediate communities by fostering green living practices, improving indoor environments, and advancing health and well-being through innovative, sustainable projects and green energy technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30zm0-30h30v30H0V0zm30 0h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-900/30 px-6 py-2 text-primary-200 ring-1 ring-inset ring-primary-500/20">
              <span className="text-base font-semibold uppercase tracking-wider">Our Focus</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Key Areas of Impact
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300">
              We are dedicated to leading the way in promoting green information and energy efficiency innovations while delivering exceptional value to the community.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.name}
                  className={`group relative ${
                    index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="absolute -top-4 left-4 transition-transform duration-300 group-hover:scale-110">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-black">
                        {highlight.icon}
                      </span>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors duration-300">
                        {highlight.name}
                      </h3>
                      <p className="mt-4 text-lg text-gray-300">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30zm0-30h30v30H0V0zm30 0h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-900/30 px-6 py-2 text-primary-200 ring-1 ring-inset ring-primary-500/20">
              <span className="text-base font-semibold uppercase tracking-wider">Our Commitments</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              What We Stand For
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-300">
              Our commitments reflect our dedication to creating positive change in urban communities through sustainable practices and innovative solutions.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment}
                  className={`group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-4 text-lg font-medium text-white group-hover:text-primary-400 transition-colors duration-300">
                      {commitment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 