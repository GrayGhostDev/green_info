import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Head from 'next/head'
import Image from 'next/image'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialFormState: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Construct email body from form data
      const emailBody = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
      `.trim()

      // Encode the email body for mailto link
      const mailtoLink = `mailto:info@giurbanstyle.com?subject=${encodeURIComponent(
        `Website Contact Form: ${formData.subject}`
      )}&body=${encodeURIComponent(emailBody)}`

      // Open email client
      window.location.href = mailtoLink
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your email client should open to send the message.'
      })
      setFormData(initialFormState)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error preparing your message. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - Green Info Urban Style</title>
        <meta
          name="description"
          content="Get in touch with Green Info Urban Style. We're here to help with your sustainable urban development needs."
        />
        <meta
          name="keywords"
          content="contact, sustainable development, urban planning, green initiatives, community support"
        />
        <meta property="og:title" content="Contact Us - Green Info Urban Style" />
        <meta
          property="og:description"
          content="Get in touch with Green Info Urban Style. We're here to help with your sustainable urban development needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={withBasePath('/images/greenInfo_Logo.pdf.png')}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={withBasePath('/images/GUIS_Bricks.jpg')}
            alt="Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40 fixed"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about sustainable urban development? We're here to help!
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-[#00A651] text-white rounded-lg font-medium transition-all duration-300 
                      ${
                        isSubmitting
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-[#00A651]/90 hover:scale-105'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-[#00A651]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <p className="text-gray-300">info@giurbanstyle.com</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-[#00A651]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                <p className="text-gray-300">(866) 778-3268</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-[#00A651]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                <p className="text-gray-300">
                  535 Griswold St
                  <br />
                  Suite #111541
                  <br />
                  Detroit, MI 48226
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 