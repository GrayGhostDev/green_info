import React from 'react'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'
import Image from 'next/image'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Head from 'next/head'

export default function Gallery() {
  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      <Head>
        <title>Gallery - Green Info Urban Style</title>
        <meta name="description" content="Explore our visual journey through sustainable urban development, community projects, and green initiatives. See the impact of our work in transforming urban spaces." />
        <meta name="keywords" content="green gallery, sustainability projects, urban development photos, environmental initiatives, community impact" />
        <meta property="og:title" content="Gallery - Green Info Urban Style" />
        <meta property="og:description" content="Visual showcase of our sustainable urban development projects and community initiatives." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath('/images/greenInfo_Logo.pdf.png')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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