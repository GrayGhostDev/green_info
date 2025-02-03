import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const photos = [
  {
    src: '/images/Fwd_ GIUS PICS/20241120_153523.jpg',
    alt: 'Community Garden Project',
    description: 'Our thriving community garden project'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241120_153533.jpg',
    alt: 'Sustainable Energy Initiative',
    description: 'Solar panel installation workshop'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153950.jpg',
    alt: 'Urban Farming',
    description: 'Urban farming techniques demonstration'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153911.jpg',
    alt: 'Community Workshop',
    description: 'Community members learning about sustainability'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153904.jpg',
    alt: 'Green Technology',
    description: 'Implementing green technology solutions'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153838.jpg',
    alt: 'Recycling Program',
    description: 'Community recycling initiative'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153834.jpg',
    alt: 'Energy Conservation',
    description: 'Energy conservation workshop'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153803.jpg',
    alt: 'Sustainable Living',
    description: 'Sustainable living practices'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153746.jpg',
    alt: 'Community Event',
    description: 'Community gathering for environmental awareness'
  },
  {
    src: '/images/Fwd_ GIUS PICS/20241106_153724.jpg',
    alt: 'Garden Workshop',
    description: 'Garden maintenance workshop'
  }
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlay) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000) // Increased to 5 seconds for better viewing
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlay])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Main Carousel */}
      <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden">
        <Image
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          fill
          className="object-contain"
          priority
        />
        
        {/* Image Description */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
          <p className="text-lg font-semibold">{photos[currentIndex].alt}</p>
          <p className="text-sm text-gray-300">{photos[currentIndex].description}</p>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Autoplay Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => goToSlide(index)}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              currentIndex === index ? 'ring-2 ring-[#00A651]' : ''
            }`}
            aria-label={`View ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 