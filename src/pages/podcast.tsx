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

const episodes: Episode[] = [
  {
    id: 1,
    title: "Green Innovation in Urban Communities",
    guest: "Dr. Sarah Johnson",
    role: "Environmental Scientist",
    date: "January 2024",
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
        date: "January 15, 2024"
      },
      {
        id: 2,
        author: "Michael Brown",
        content: "Dr. Johnson's perspective on integrating green spaces in urban planning is revolutionary.",
        date: "January 16, 2024"
      }
    ],
    qa: [
      {
        id: 1,
        question: "How can small communities start implementing green initiatives?",
        answer: "Start with community gardens and local recycling programs. These initiatives have low barriers to entry but create significant impact.",
        author: "Dr. Sarah Johnson",
        date: "January 16, 2024"
      },
      {
        id: 2,
        question: "What role does technology play in urban sustainability?",
        answer: "Technology enables smart resource management, from water conservation to energy efficiency monitoring.",
        author: "Dr. Sarah Johnson",
        date: "January 17, 2024"
      }
    ]
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
    topics: ["Clean Energy", "Technology", "Innovation"],
    audioUrl: "https://example.com/episodes/clean-energy.mp3",
    rating: 4.2,
    totalRatings: 20,
    comments: [
      {
        id: 1,
        author: "David Wilson",
        content: "The section on microgrids was eye-opening. Great discussion!",
        date: "January 18, 2024"
      }
    ],
    qa: []
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
    topics: ["Urban Planning", "Community Development", "Sustainability"],
    audioUrl: "https://example.com/episodes/sustainable-communities.mp3",
    rating: 4.8,
    totalRatings: 35,
    comments: [
      {
        id: 1,
        author: "Sarah Thompson",
        content: "Love the practical approach to community-led development initiatives.",
        date: "January 10, 2024"
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

      {/* Enhanced Audio Player */}
      {currentEpisode && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-4 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={currentEpisode.image}
                  alt={currentEpisode.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium text-white">{currentEpisode.title}</h3>
                  <p className="text-xs text-gray-400">{currentEpisode.guest}</p>
                </div>
              </div>
              <div className="flex-1 max-w-2xl">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
                  <div className="flex-1">
                    <input
                      type="range"
                      min={0}
                      max={duration}
                      value={currentTime}
                      onChange={(e) => handleSeek(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <span className="text-xs text-gray-400">{formatTime(duration)}</span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleSkip(-10)}
                    className="p-1 text-white hover:text-primary-400"
                  >
                    <BackwardIcon className="h-5 w-5" />
                  </button>
                  <audio
                    ref={audioRef}
                    src={currentEpisode.audioUrl}
                    onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
                    onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="hidden"
                  />
                  <button
                    onClick={() => audioRef.current?.paused ? audioRef.current?.play() : audioRef.current?.pause()}
                    className="p-2 bg-primary-600 rounded-full text-white hover:bg-primary-500"
                  >
                    {isPlaying ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => handleSkip(10)}
                    className="p-1 text-white hover:text-primary-400"
                  >
                    <ForwardIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <select
                    value={playbackRate}
                    onChange={(e) => {
                      setPlaybackRate(Number(e.target.value))
                      if (audioRef.current) audioRef.current.playbackRate = Number(e.target.value)
                    }}
                    className="bg-transparent text-white text-sm border border-white/10 rounded px-2 py-1"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                  </select>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value))
                      if (audioRef.current) audioRef.current.volume = Number(e.target.value)
                    }}
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                      <button 
                        onClick={() => handlePlayEpisode(episode)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
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

                      {/* Rating and Share */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => handleRateEpisode(episode.id, star)}
                              className="text-primary-400 hover:text-primary-300"
                            >
                              {star <= episode.rating ? (
                                <StarIconSolid className="h-5 w-5" />
                              ) : (
                                <StarIcon className="h-5 w-5" />
                              )}
                            </button>
                          ))}
                          <span className="ml-2 text-sm text-gray-400">
                            ({episode.totalRatings} ratings)
                          </span>
                        </div>
                        <button
                          onClick={() => handleShare(episode)}
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
                        >
                          <ShareIcon className="h-5 w-5" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Q&A Section */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold text-white">Q&A</h3>
                    <div className="mt-4 space-y-4">
                      {episode.qa.map((item) => (
                        <div key={item.id} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-1 bg-primary-900/50 rounded-full">
                              <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-white">{item.question}</p>
                                <time className="text-xs text-gray-400">{item.date}</time>
                              </div>
                              <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
                              <p className="mt-1 text-xs text-primary-400">Answered by {item.author}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="Ask a question..."
                          value={newQuestion}
                          onChange={(e) => setNewQuestion(e.target.value)}
                          className="flex-1 min-w-0 rounded-lg border-0 bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                        />
                        <button
                          onClick={() => {
                            // In a real app, this would be an API call
                            console.log("Submitting question:", newQuestion)
                            setNewQuestion("")
                          }}
                          className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                          Ask
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold text-white">Comments</h3>
                    <div className="mt-4 space-y-4">
                      {episode.comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-400">{comment.author}</span>
                            <time className="text-xs text-gray-400">{comment.date}</time>
                          </div>
                          <p className="mt-2 text-sm text-gray-300">{comment.content}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="flex-1 min-w-0 rounded-lg border-0 bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-500 sm:text-sm"
                        />
                        <button
                          onClick={() => handleAddComment(episode.id)}
                          className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guest Form Section with Calendly */}
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
              <span className="text-base font-semibold uppercase tracking-wider">Schedule Your Appearance</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Book Your Podcast Slot
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Ready to share your expertise? Schedule a time that works best for you using our calendar below.
            </p>
            <div className="mt-8 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <InlineWidget 
                url="https://calendly.com/your-calendar-url"
                styles={{
                  height: '650px',
                  borderRadius: '0.75rem',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 