import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'

interface Episode {
  title: string
  guest: string
  description: string
  image: string
  duration: string
  date: string
}

const featuredEpisodes: Episode[] = [
  {
    title: "Sustainable Urban Development",
    guest: "Dr. Sarah Chen",
    description: "Exploring innovative solutions for sustainable urban development and green technology integration.",
    image: "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
    duration: "1:55:30",
    date: "March 13, 2024"
  },
  {
    title: "Urban Agriculture Revolution",
    guest: "Prof. David Martinez",
    description: "Innovative approaches to urban farming and sustainable food production in city environments.",
    image: "/images/Fwd_ GIUS PICS/20241218_152321.jpg",
    duration: "2:05:40",
    date: "March 6, 2024"
  },
  {
    title: "Clean Air Technologies",
    guest: "Dr. Emily Chang",
    description: "Breaking down the latest innovations in air purification and their implementation in urban spaces.",
    image: "/images/Fwd_ GIUS PICS/20241019_134006.jpg",
    duration: "1:48:55",
    date: "February 28, 2024"
  },
  {
    title: "Sustainable Transportation",
    guest: "Marcus Johnson",
    description: "The future of urban mobility and eco-friendly transportation solutions for growing cities.",
    image: "/images/Fwd_ GIUS PICS/20241218_150055.jpg",
    duration: "2:15:20",
    date: "February 21, 2024"
  },
  {
    title: "Green Building Innovation",
    guest: "Architect Maria Garcia",
    description: "Exploring cutting-edge sustainable architecture and eco-friendly construction practices.",
    image: "/images/Fwd_ GIUS PICS/20241218_152304.jpg",
    duration: "1:52:10",
    date: "February 14, 2024"
  }
]

export default function Episodes() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)

  const openEpisodeModal = (episode: Episode) => {
    setSelectedEpisode(episode)
    document.body.style.overflow = 'hidden'
  }

  const closeEpisodeModal = () => {
    setSelectedEpisode(null)
    document.body.style.overflow = 'auto'
  }

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
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Latest Episodes
              </h1>
              <p className="text-xl text-gray-300">
                Join us as we explore sustainable urban development and green technology.
              </p>
            </div>
          </div>

          {/* Globe Carousel */}
          <div className="relative">
            <div className="relative w-full h-[800px] overflow-hidden" style={{ perspective: '2000px' }}>
              <div 
                className="absolute w-full h-full animate-globeRotate"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                {featuredEpisodes.map((episode, index) => {
                  const angleY = (360 / featuredEpisodes.length) * index;
                  const angleX = Math.sin(angleY * (Math.PI / 180)) * 20;
                  return (
                    <div 
                      key={index}
                      className="absolute inset-0 w-full h-full transition-transform duration-500"
                      style={{ 
                        transform: `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(600px)`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div 
                        className="w-full md:w-[400px] mx-auto cursor-pointer hover:scale-105 transition-all duration-300"
                        onClick={() => openEpisodeModal(episode)}
                      >
                        <article className="flex flex-col items-start justify-between bg-black/40 rounded-2xl p-6 backdrop-blur-md hover:bg-black/50 transition-all duration-300 h-full border border-white/20">
                          <div className="relative w-full">
                            <img
                              src={episode.image}
                              alt={episode.title}
                              className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                              <div className="flex justify-between items-center text-white">
                                <span>{episode.duration}</span>
                                <span>{episode.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                              <span className="text-gray-300">with {episode.guest}</span>
                            </div>
                            <div className="group relative">
                              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                {episode.title}
                              </h3>
                              <p className="mt-5 text-sm leading-6 text-gray-300">{episode.description}</p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Episode Modal */}
          {selectedEpisode && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ perspective: '1500px' }}
            >
              <div 
                className="absolute inset-0 bg-black/80 animate-modalBgIn"
                onClick={closeEpisodeModal}
              />
              <div 
                className="relative w-full max-w-4xl animate-modalIn"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="relative aspect-video">
                    <img
                      src={selectedEpisode.image}
                      alt={selectedEpisode.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <button
                      onClick={closeEpisodeModal}
                      className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white">{selectedEpisode.title}</h2>
                      <div className="flex items-center gap-4 text-gray-300">
                        <span>{selectedEpisode.duration}</span>
                        <span>{selectedEpisode.date}</span>
                      </div>
                    </div>
                    <div className="text-gray-300 mb-6">with {selectedEpisode.guest}</div>
                    <p className="text-gray-200 text-lg leading-relaxed">{selectedEpisode.description}</p>
                    <div className="mt-8 flex justify-end">
                      <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-500 transition-colors">
                        Listen Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
} 