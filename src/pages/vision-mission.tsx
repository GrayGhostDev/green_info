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

export default function VisionMission() {
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
              Vision & Mission
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Leading the way in sustainable urban development and community empowerment through innovative green solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30zm0-30h30v30H0V0zm30 0h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
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

      {/* Highlights Section - Enhanced */}
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

      {/* Commitments Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-grid-primary-900/[0.03] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-6 py-2 text-primary-600 ring-1 ring-inset ring-primary-600/20">
              <span className="text-base font-semibold uppercase tracking-wider">Our Commitments</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl [text-wrap:balance]">
              What We Stand For
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Our commitments reflect our dedication to creating positive change in urban communities through sustainable practices and innovative solutions.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment}
                  className={`group relative rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{commitment}</p>
                    </div>
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
              <span className="text-base font-semibold uppercase tracking-wider">Be Part of Our Vision</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Shape the Future Together
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Join us in creating sustainable, healthy environments that benefit our communities for generations to come.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rlb01@svbots.com"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                Contact Us
              </a>
              <a
                href="/values"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary-600 bg-opacity-60 px-5 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                Our Values
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 