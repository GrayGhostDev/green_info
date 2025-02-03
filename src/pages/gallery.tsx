import React from 'react'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'
import Image from 'next/image'

export default function Gallery() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Logo */}
        <div className="absolute inset-0">
          <Image
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            fill
            className="opacity-15 fixed object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of images showcasing our community events, sustainable initiatives, and environmental projects.
            </p>
          </div>

          {/* Gallery */}
          <div className="max-w-[90vw] mx-auto">
            <PhotoGallery />
          </div>
        </div>
      </div>
    </Layout>
  )
} 