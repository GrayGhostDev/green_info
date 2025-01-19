import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const backgroundImages = [
  "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
  "/images/Fwd_ GIUS PICS/20241019_134006.jpg",
  "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
  "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
  "/images/Fwd_ GIUS PICS/20241218_151736.jpg"
]

const featuredEpisodes = [
  {
    title: "Urban Sustainability Revolution",
    guest: "Dr. Sarah Chen",
    description: "Exploring innovative solutions for sustainable urban development and green technology integration in modern cities.",
    image: "/images/Fwd_ GIUS PICS/20241019_134006.jpg",
    duration: "1:45:23",
    date: "Mar 15, 2024"
  },
  {
    title: "Green Energy Transformation",
    guest: "Michael Rodriguez",
    description: "Discussing the future of renewable energy and its impact on urban communities.",
    image: "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
    duration: "2:12:45",
    date: "Mar 10, 2024"
  },
  {
    title: "Smart Cities & Sustainability",
    guest: "Dr. James Wilson",
    description: "How smart technology is revolutionizing urban planning and environmental conservation.",
    image: "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
    duration: "1:58:30",
    date: "Mar 5, 2024"
  }
]

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 1500) // Match transition duration
  }

  const prevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 1500) // Match transition duration
  }

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return
    setIsTransitioning(true)
    setCurrentImageIndex(index)
    setTimeout(() => setIsTransitioning(false), 1500) // Match transition duration
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 7000) // Changed from 5000 to 7000ms
    return () => clearInterval(timer)
  }, [])

  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
              index === currentImageIndex 
                ? 'opacity-30 scale-100' // Changed opacity from 40 to 30
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

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white/90 transition-colors z-20"
          disabled={isTransitioning}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white/90 transition-colors z-20"
          disabled={isTransitioning}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              disabled={isTransitioning}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-56">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary-600/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-600/20">
              Latest Episode
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Urban Sustainability Revolution
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Join us as we explore innovative solutions for sustainable urban development with Dr. Sarah Chen.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Play Episode
              </button>
              <button className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 text-lg font-medium text-white backdrop-blur-sm hover:bg-white/20">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Episodes */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Episodes</h2>
            <p className="mt-4 text-lg text-gray-400">
              Dive into our most impactful conversations about urban sustainability and green innovation.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEpisodes.map((episode) => (
              <div
                key={episode.title}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-h-9 aspect-w-16 relative">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-sm text-gray-400">
                      <svg className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {episode.duration}
                    </span>
                    <span className="text-sm text-gray-400">{episode.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-primary-400">
                    {episode.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">with {episode.guest}</p>
                  <p className="mt-4 text-base text-gray-300">{episode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-black p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10 text-primary-400 transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-white group-hover:text-primary-400">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-black">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/Fwd_ GIUS PICS/20241218_151736.jpg"
            alt="Newsletter background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-primary-400">Stay Connected</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Never Miss an Episode
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Subscribe to our newsletter for updates on new episodes, behind-the-scenes content, and exclusive insights.
            </p>
            <div className="mt-8">
              <div className="flex max-w-md gap-x-4">
                <input
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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