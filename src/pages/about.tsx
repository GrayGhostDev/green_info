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
              <h1 className="text-5xl sm:text-7xl font-bold text-[#00A651] mb-8 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
                About Us
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">
                At Green Info Urban Style DBA Virtual Management Resource Group, our focus is on bridging the gap between urban communities and green space initiatives.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-xl text-gray-300">
                  To enhance the quality of life in our immediate communities by fostering green living practices, improving indoor environments, and advancing health and well-being through innovative, sustainable projects and green energy technology for the urban communities.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-xl text-gray-300">
                  To be a trusted leader in green innovation and education for urban communities, improving their health and well-being while reducing energy consumption.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-8">Our Values</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-2xl font-semibold text-[#00A651] mb-3">Green Innovation</h3>
                  <p className="text-xl text-gray-300">Driving creative and impactful solutions to urban communities.</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-2xl font-semibold text-[#00A651] mb-3">Sustainability</h3>
                  <p className="text-xl text-gray-300">Championing information sharing that enhances urban living.</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <h3 className="text-2xl font-semibold text-[#00A651] mb-3">Health & Safety</h3>
                  <p className="text-xl text-gray-300">Prioritizing well-being in every project.</p>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-8">Our Leadership</h2>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3">
                    <div className="relative w-64 h-64 mx-auto">
                      <img
                        src={withBasePath("/images/Fwd_ GIUS PICS/20241218_150055.jpg")}
                        alt="Robert L. Barksdale"
                        className="w-full h-full object-cover rounded-full border-4 border-[#00A651]"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-[#00A651] text-center mt-4">Robert L. Barksdale</h3>
                    <p className="text-xl text-gray-300 text-center">Chief Executive Officer</p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-xl text-gray-300 mb-4">
                      Robert L. Barksdale is a visionary leader at the intersection of environmental sustainability, clean air technology, and urban community advocacy. As the Chief Executive Officer of ServiceBot Solutions, Robert is revolutionizing indoor air quality in apartment buildings, churches, nursing homes, hospitals, and schools. His company's patented, custom-designed air purification systems extend the lifespan of existing HVAC units while reducing energy consumption—offering a sustainable solution that improves health outcomes and lowers operational costs.
                    </p>
                    <p className="text-xl text-gray-300 mb-4">
                      Robert's commitment to environmental health stems from his own journey as a respiratory patient, which fueled his passion for cleaner air and healthier communities. His leadership has propelled ServiceBot Solutions to the forefront of air quality innovation, delivering measurable improvements in energy efficiency and air purification in underserved communities.
                    </p>
                    <p className="text-xl text-gray-300 mb-4">
                      In addition to his work at ServiceBot Solutions, Robert amplifies his impact through Green Info-Urban Style, a powerful podcast dedicated to educating and empowering urban communities on environmental sustainability, public health, and clean energy solutions. Through thought-provoking discussions with industry leaders, policymakers, and grassroots advocates, Green Info-Urban Style sheds light on critical issues affecting urban populations while inspiring actionable change.
                    </p>
                    <p className="text-xl text-gray-300">
                      Robert's work is driven by a commitment to sustainability, community empowerment, and innovative solutions that create lasting impact. Whether through groundbreaking air purification technology or transformative conversations on his podcast, he remains dedicated to fostering healthier, more informed, and more resilient communities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Jason Cole's Profile */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300 mt-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3">
                    <div className="relative w-64 h-64 mx-auto">
                      <img
                        src={withBasePath("/images/Fwd_ GIUS PICS/20241218_152321.jpg")}
                        alt="Jason Cole"
                        className="w-full h-full object-cover rounded-full border-4 border-[#00A651] object-top"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-[#00A651] text-center mt-4">Jason Cole</h3>
                    <p className="text-xl text-gray-300 text-center">Economic Development Strategist</p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-xl text-gray-300 mb-4">
                      Jason Cole is a seasoned economic development strategist, real estate developer, and community empowerment advocate with over three decades of experience. As the National Executive Director of several influential minority contractors and real estate associations, Jason has led major diversity and inclusion initiatives across Detroit and the nation. Currently serving as Vice President at Commercial Financial Specialists LLC and Barno Cole Land Development Group, they have organized over $10 million in capital for commercial and residential real estate projects.
                    </p>
                    <p className="text-xl text-gray-300 mb-4">
                      Founder of Funding Roots, a crowd-capital platform supporting Detroit-based development under the JOBS and Mile Acts, Jason Cole is also a small-scale developer with Cole Development Group, advancing missing-middle and workforce housing projects. A certified facilitator and SBA-recognized specialist, they have trained thousands through real estate, financial literacy, and entrepreneurial programs. Their dedication to equitable development has earned recognition from Corp! Magazine and the Women's Informal Network, among others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Our Team</h2>
              
              {/* Team Photo */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mb-12 hover:bg-black/40 transition-all duration-300">
                <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
                  <img
                    src={withBasePath("/images/Fwd_ GIUS PICS/20241019_134006.jpg")}
                    alt="Green Info Urban Style Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">The Green Info Urban Style Team</h3>
                    <p className="text-gray-300">Passionate advocates for sustainable urban communities</p>
                  </div>
                </div>
              </div>
              
              {/* Team Members */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 mb-4">
                      <img
                        src={withBasePath("/images/greenInfo_Logo.pdf.png")}
                        alt="Donald T. Robinson II"
                        className="w-full h-full object-contain rounded-full border-2 border-[#00A651]"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#00A651] mb-1">Donald T. Robinson II</h3>
                    <p className="text-sm text-gray-400 mb-3">Podcast Engineer</p>
                  </div>
                  <p className="text-gray-300 text-center">
                    Expert audio engineer responsible for the technical production of the Green Info Urban Style podcast, ensuring crystal-clear sound quality and seamless production.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 mb-4">
                      <img
                        src={withBasePath("/images/greenInfo_Logo.pdf.png")}
                        alt="Sarah Johnson"
                        className="w-full h-full object-contain rounded-full border-2 border-[#00A651]"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#00A651] mb-1">Sarah Johnson</h3>
                    <p className="text-sm text-gray-400 mb-3">Community Outreach Manager</p>
                  </div>
                  <p className="text-gray-300 text-center">
                    Passionate about connecting urban communities with sustainable resources, Sarah leads our community engagement initiatives and educational programs.
                  </p>
                </div>
                
                {/* Team Member 3 */}
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-102">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 mb-4">
                      <img
                        src={withBasePath("/images/greenInfo_Logo.pdf.png")}
                        alt="Michael Thompson"
                        className="w-full h-full object-contain rounded-full border-2 border-[#00A651]"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#00A651] mb-1">Michael Thompson</h3>
                    <p className="text-sm text-gray-400 mb-3">Sustainability Specialist</p>
                  </div>
                  <p className="text-gray-300 text-center">
                    With expertise in green technology and urban sustainability solutions, Michael advises on practical approaches to integrating eco-friendly practices in urban environments.
                  </p>
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
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:contact@greeninfourbanstyle.com"
                    className="inline-block px-6 py-3 bg-[#00A651] text-white rounded-xl font-semibold hover:bg-[#00A651]/90 transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 