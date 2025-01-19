import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const episodes = [
  {
    id: 1,
    title: "Green Innovation in Urban Communities",
    guest: "Dr. Sarah Johnson",
    role: "Environmental Scientist",
    date: "January 2024",
    duration: "45 min",
    description: "Exploring sustainable solutions for urban development and community health.",
    image: "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
    topics: ["Urban Development", "Sustainability", "Community Health"]
  },
  {
    id: 2,
    title: "Future of Clean Energy Technology",
    guest: "Michael Chen",
    role: "Energy Innovation Expert",
    date: "January 2024",
    duration: "38 min",
    description: "Discussing breakthrough technologies in renewable energy and their urban applications.",
    image: "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
    topics: ["Clean Energy", "Technology", "Innovation"]
  },
  {
    id: 3,
    title: "Building Sustainable Communities",
    guest: "Lisa Martinez",
    role: "Urban Planning Director",
    date: "December 2023",
    duration: "42 min",
    description: "Strategies for creating environmentally conscious urban spaces.",
    image: "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
    topics: ["Urban Planning", "Community Development", "Sustainability"]
  }
]

const backgroundImages = [
  "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
  "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
  "/images/Fwd_ GIUS PICS/20241218_152304.jpg"
]

export default function Podcast() {
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
              Green Info Urban Style Podcast
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Join us as we explore sustainable urban development, green technology, and community empowerment through engaging conversations with industry experts.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Episodes */}
      <div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30zm0-30h30v30H0V0zm30 0h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-primary-900/30 px-6 py-2 text-primary-200 ring-1 ring-inset ring-primary-500/20">
              <span className="text-base font-semibold uppercase tracking-wider">Latest Episodes</span>
            </div>
          </div>
          <div className="mt-16">
            <div className="space-y-8">
              {episodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className={`group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="relative aspect-[16/9] md:aspect-square">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-black/0" />
                      <button className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-x-4">
                        <time className="text-sm text-gray-400">{episode.date}</time>
                        <span className="text-sm text-gray-400">{episode.duration}</span>
                      </div>
                      <h2 className="mt-2 text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {episode.title}
                      </h2>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-primary-400">{episode.guest}</h3>
                        <p className="text-sm text-gray-400">{episode.role}</p>
                      </div>
                      <p className="mt-4 text-base text-gray-300">{episode.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {episode.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm text-primary-200 ring-1 ring-inset ring-primary-500/20"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guest Form Section */}
      <div className="relative bg-black">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/greenInfo_Logo.pdf.png"
            alt="Guest Form background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-gray-800/50 mix-blend-multiply backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <div className="inline-flex items-center rounded-full bg-gray-800 px-6 py-2 text-gray-300 ring-1 ring-inset ring-white/20">
              <span className="text-base font-semibold uppercase tracking-wider">Be Our Guest</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Share Your Expertise
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Are you an expert in sustainable technology, urban development, or green innovation? We'd love to have you on our show.
            </p>
            <div className="mt-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-300">
                    Topic
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="topic"
                      id="topic"
                      className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                      placeholder="Tell us about your expertise and what you'd bring to the show"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 