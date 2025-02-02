import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { InlineWidget } from 'react-calendly'
import { StarIcon, ShareIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

interface QA {
  id: number
  question: string
  answer: string
  author: string
  date: string
}

interface Episode {
  id: number
  title: string
  guest: string
  role: string
  date: string
  duration: string
  description: string
  image: string
  topics: string[]
  audioUrl: string
  comments: Comment[]
  rating: number
  totalRatings: number
  qa: QA[]
}

const topics = [
  {
    title: 'Advancements in Solar Technology',
    description: 'Latest innovations in solar panels, storage solutions, and their applications in urban environments.',
    icon: (
      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  // ... rest of the topics array ...
]

const featuredEpisodes = [
  {
    title: "Urban Sustainability Revolution",
    guest: "Dr. Sarah Chen",
    description: "Exploring innovative solutions for sustainable urban development and green technology integration in modern cities.",
    image: "/images/Fwd_ GIUS PICS/20241019_134006.jpg",
    duration: "1:45:23",
    date: "March 18, 2024"
  },
  // ... rest of the featuredEpisodes array ...
]

const episodes: Episode[] = [
  {
    id: 1,
    title: "Green Innovation in Urban Communities",
    guest: "Dr. Sarah Johnson",
    role: "Environmental Scientist",
    date: "March 2024",
    duration: "45 min",
    description: "Exploring sustainable solutions for urban development and community health.",
    image: "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
    topics: ["Urban Development", "Sustainability", "Community Health"],
    audioUrl: "https://example.com/episodes/green-innovation.mp3",
    rating: 4.5,
    totalRatings: 28,
    comments: [
      {
        id: 1,
        author: "Jane Smith",
        content: "Great insights on urban sustainability! The discussion about community gardens was particularly interesting.",
        date: "March 15, 2024"
      },
      {
        id: 2,
        author: "Michael Brown",
        content: "Dr. Johnson's perspective on integrating green spaces in urban planning is revolutionary.",
        date: "March 16, 2024"
      }
    ],
    qa: [
      {
        id: 1,
        question: "How can small communities start implementing green initiatives?",
        answer: "Start with community gardens and local recycling programs. These initiatives have low barriers to entry but create significant impact.",
        author: "Dr. Sarah Johnson",
        date: "March 16, 2024"
      },
      {
        id: 2,
        question: "What role does technology play in urban sustainability?",
        answer: "Technology enables smart resource management, from water conservation to energy efficiency monitoring.",
        author: "Dr. Sarah Johnson",
        date: "March 17, 2024"
      }
    ]
  },
  {
    id: 2,
    title: "Future of Clean Energy Technology",
    guest: "Michael Chen",
    role: "Energy Innovation Expert",
    date: "March 2024",
    duration: "38 min",
    description: "Discussing breakthrough technologies in renewable energy and their urban applications.",
    image: "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
    topics: ["Clean Energy", "Technology", "Innovation"],
    audioUrl: "https://example.com/episodes/clean-energy.mp3",
    rating: 4.2,
    totalRatings: 20,
    comments: [
      {
        id: 1,
        author: "David Wilson",
        content: "The section on microgrids was eye-opening. Great discussion!",
        date: "March 18, 2024"
      }
    ],
    qa: []
  },
  {
    id: 3,
    title: "Building Sustainable Communities",
    guest: "Lisa Martinez",
    role: "Urban Planning Director",
    date: "March 2024",
    duration: "42 min",
    description: "Strategies for creating environmentally conscious urban spaces.",
    image: "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
    topics: ["Urban Planning", "Community Development", "Sustainability"],
    audioUrl: "https://example.com/episodes/sustainable-communities.mp3",
    rating: 4.8,
    totalRatings: 35,
    comments: [
      {
        id: 1,
        author: "Sarah Thompson",
        content: "Love the practical approach to community-led development initiatives.",
        date: "March 14, 2024"
      }
    ],
    qa: []
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
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [newQuestion, setNewQuestion] = useState("")
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)

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

  const handlePlayEpisode = (episode: Episode) => {
    setCurrentEpisode(episode)
    setIsPlaying(true)
  }

  const handleAddComment = (episodeId: number) => {
    if (!newComment.trim()) return

    const updatedEpisodes = episodes.map(episode => {
      if (episode.id === episodeId) {
        return {
          ...episode,
          comments: [
            ...episode.comments,
            {
              id: episode.comments.length + 1,
              author: "Guest User", // In a real app, this would come from auth
              content: newComment,
              date: new Date().toLocaleDateString()
            }
          ]
        }
      }
      return episode
    })

    // In a real app, this would be an API call
    console.log("Adding comment:", newComment)
    setNewComment("")
  }

  const handleRateEpisode = (episodeId: number, rating: number) => {
    // In a real app, this would be an API call
    console.log("Rating episode:", episodeId, "with", rating, "stars")
  }

  const handleShare = (episode: Episode) => {
    if (navigator.share) {
      navigator.share({
        title: episode.title,
        text: `Listen to ${episode.title} with ${episode.guest} on Green Info Urban Style Podcast`,
        url: window.location.href
      })
    }
  }

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Layout>
      {/* Hero Section */}
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
              Join us as we explore sustainable urban development, green technology, and community innovation through engaging discussions with industry experts.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Episodes Section */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Episodes</h2>
            <p className="mt-4 text-lg text-gray-300">Stay up to date with our newest conversations and insights.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEpisodes.map((episode, index) => (
              <div
                key={episode.title}
                className={`group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                }`}
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between text-sm text-white">
                      <span>{episode.duration}</span>
                      <span>{episode.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {episode.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">with {episode.guest}</p>
                  <p className="mt-4 text-base text-gray-300">{episode.description}</p>
                  <button className="mt-6 inline-flex items-center text-primary-400 hover:text-primary-300">
                    Listen now
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Topics</h2>
            <p className="mt-4 text-lg text-gray-300">Explore our key areas of discussion and expertise.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <div
                key={topic.title}
                className={`group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  index % 3 === 0 ? 'fade-in-left' : index % 3 === 2 ? 'fade-in-right' : 'fade-in'
                }`}
              >
                <div className="absolute -top-4 left-4 transition-transform duration-300 group-hover:scale-110">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg ring-4 ring-black">
                    {topic.icon}
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-300">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Episode Player Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Full Episodes</h2>
            <p className="mt-4 text-lg text-gray-300">Dive deep into our complete collection of episodes.</p>
          </div>
          <div className="space-y-8">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="relative aspect-[16/9] lg:aspect-square rounded-xl overflow-hidden">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white">{episode.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">with {episode.guest} - {episode.role}</p>
                    <p className="mt-4 text-base text-gray-300">{episode.description}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {episode.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm text-primary-200 ring-1 ring-inset ring-primary-500/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <button
                        onClick={() => handlePlayEpisode(episode)}
                        className="inline-flex items-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-all duration-300"
                      >
                        Listen Now
                      </button>
                      <button
                        onClick={() => handleShare(episode)}
                        className="inline-flex items-center rounded-xl bg-gray-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-all duration-300"
                      >
                        <ShareIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Player Modal */}
      {currentEpisode && (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Player controls here */}
          </div>
        </div>
      )}
    </Layout>
  )
} 