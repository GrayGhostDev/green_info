import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Image from 'next/image'
import Head from 'next/head'

interface PressKitFormData {
  firstName: string
  lastName: string
  email: string
  organization: string
  mediaType: string
  message: string
  terms: boolean
}

const initialFormState: PressKitFormData = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  mediaType: 'Print Media',
  message: '',
  terms: false
}

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

export default function About() {
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

  const [formData, setFormData] = useState<PressKitFormData>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form after successful submission
      setFormData(initialFormState)
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
      <Head>
        <title>About Us - Green Info Urban Style</title>
        <meta name="description" content="Learn about Green Info Urban Style's mission to enhance urban communities through sustainable practices, green living, and innovative technology solutions." />
        <meta name="keywords" content="green innovation, urban sustainability, community development, environmental solutions, about us" />
        <meta property="og:title" content="About Us - Green Info Urban Style" />
        <meta property="og:description" content="Discover our mission to bridge the gap between urban communities and green space initiatives." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath('/images/greenInfo_Logo.pdf.png')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative min-h-screen">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />
          
          {/* Extended Logo Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={withBasePath("/images/greenInfo_Logo.pdf.png")}
              alt="Background Logo"
              className="w-full h-full object-cover opacity-40 fixed"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-6xl font-bold text-[#00A651] mb-8 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
                About Us
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">
                At Green Info Urban Style DBA Virtual Management Resource Group, our focus is on bridging the gap between urban communities and green space initiatives.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  To enhance the quality of life in our immediate communities by fostering green living practices, improving indoor environments, and advancing health and well-being through innovative, sustainable projects and green energy technology for the urban communities.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300">
                  To be a trusted leader in green innovation and education for urban communities, improving their health and well-being while reducing energy consumption.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-xl font-semibold text-[#00A651] mb-3">Green Innovation</h3>
                  <p className="text-gray-300">Driving creative and impactful solutions to urban communities.</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-xl font-semibold text-[#00A651] mb-3">Sustainability</h3>
                  <p className="text-gray-300">Championing information sharing that enhances urban living.</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-xl font-semibold text-[#00A651] mb-3">Health & Safety</h3>
                  <p className="text-gray-300">Prioritizing well-being in every project.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
                <p className="text-gray-300 mb-6">
                  Want to learn more about our initiatives or get involved? We'd love to hear from you.
                </p>
                <a
                  href="mailto:contact@greeninfourbanstyle.com"
                  className="inline-block px-6 py-3 bg-[#00A651] text-white rounded-xl font-semibold hover:bg-[#00A651]/90 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 