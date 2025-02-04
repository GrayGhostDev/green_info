import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'

const guests = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Environmental Scientist",
    company: "Urban Sustainability Institute",
    bio: "Dr. Johnson specializes in sustainable urban development and has led numerous projects focused on improving community health through environmental initiatives.",
    expertise: ["Urban Development", "Environmental Science", "Community Health"],
    image: "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
    episode: {
      title: "Green Innovation in Urban Communities",
      date: "January 2024"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Energy Innovation Expert",
    company: "Future Energy Solutions",
    bio: "With over 15 years of experience in renewable energy, Michael leads research into breakthrough technologies for urban energy systems.",
    expertise: ["Renewable Energy", "Technology Innovation", "Urban Planning"],
    image: "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
    episode: {
      title: "Future of Clean Energy Technology",
      date: "January 2024"
    }
  },
  {
    id: 3,
    name: "Lisa Martinez",
    role: "Urban Planning Director",
    company: "City Development Board",
    bio: "Lisa has pioneered several sustainable urban development projects and advocates for green spaces in urban environments.",
    expertise: ["Urban Planning", "Sustainable Development", "Community Engagement"],
    image: "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
    episode: {
      title: "Building Sustainable Communities",
      date: "December 2023"
    }
  }
]

const backgroundImages = [
  "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
  "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
  "/images/Fwd_ GIUS PICS/20241218_152304.jpg"
]

export default function Guests() {
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
              Our Guests
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Meet the industry experts and thought leaders who share their insights on sustainable urban development and green innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Guests */}
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
              <span className="text-base font-semibold uppercase tracking-wider">Featured Guests</span>
            </div>
          </div>
          <div className="mt-16">
            <div className="space-y-8">
              {guests.map((guest, index) => (
                <div
                  key={guest.id}
                  className={`group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="relative aspect-square">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-black/0" />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                            {guest.name}
                          </h2>
                          <div className="mt-2">
                            <p className="text-lg font-semibold text-primary-400">{guest.role}</p>
                            <p className="text-sm text-gray-400">{guest.company}</p>
                          </div>
                          <p className="mt-4 text-base text-gray-300">{guest.bio}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {guest.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm text-primary-200 ring-1 ring-inset ring-primary-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">{guest.episode.title}</p>
                            <p className="text-sm text-gray-400">{guest.episode.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Become a Guest CTA */}
      <div className="relative bg-black">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/greenInfo_Logo.pdf.png"
            alt="CTA background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-gray-800/50 mix-blend-multiply backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <div className="inline-flex items-center rounded-full bg-gray-800 px-6 py-2 text-gray-300 ring-1 ring-inset ring-white/20">
              <span className="text-base font-semibold uppercase tracking-wider">Join Our Community</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Share Your Story
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Are you passionate about sustainable urban development and green innovation? We're always looking for experts to share their insights.
            </p>
            <div className="mt-8 flex gap-x-6">
              <a
                href="/podcast#guest-form"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Apply to be a Guest
              </a>
              <a
                href="/podcast"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Listen to Episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 