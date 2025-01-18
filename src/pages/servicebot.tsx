import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const products = [
  {
    name: 'UVC Technology',
    description: 'Custom-designed UVC systems that remove 99.9% of persistent threats including bacteria, fungi, and molds.',
    features: [
      'Powerful ultraviolet-C technology',
      'Long-lasting air purification',
      'Energy-efficient operation',
      'Custom installation options'
    ],
    image: '/images/uvc-tech.jpg'
  },
  {
    name: 'HVAC Air Filters',
    description: 'High-quality air filters designed specifically for HVAC systems to remove dust, allergens, and pollutants.',
    features: [
      'Superior filtration efficiency',
      'Compatible with most HVAC systems',
      'Regular maintenance programs',
      'Energy consumption reduction'
    ],
    image: '/images/hvac-filters.jpg'
  },
  {
    name: 'Portable Units',
    description: 'Efficient portable air purification units designed for various indoor space sizes.',
    features: [
      'Flexible placement options',
      'Multiple room sizes coverage',
      'Easy maintenance',
      'Quiet operation'
    ],
    image: '/images/portable-units.jpg'
  }
]

const certifications = [
  'CRIO Detroit Based Business',
  'Minority Business Enterprise',
  'Small Business Enterprise',
  'Disadvantaged Business Enterprise'
]

export default function ServiceBot() {
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
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-primary-800/90 via-primary-700/90 to-primary-900/90">
        <div className="absolute inset-0">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-800/80 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ServiceBot Solutions
          </h1>
          <p className="fade-in mt-6 max-w-3xl text-xl text-gray-100">
            Specializing in providing an extensive range of air purification products for commercial, mobile, and residential spaces.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white/95 backdrop-blur-sm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center fade-in">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Products</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Air Purification Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We focus on eliminating environmental growth generators such as bacteria, fungi, molds, and other respiratory threats, creating healthier and safer environments.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {products.map((product, index) => (
              <div key={product.name} className={`relative mt-16 ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                  <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                    <div className="mt-6 lg:mt-0">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h3>
                      <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                      <ul className="mt-6 space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="ml-3 text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center fade-in">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Certifications</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recognized Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our certifications demonstrate our commitment to excellence, diversity, and community impact.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={cert} className={`fade-in-${index % 2 === 0 ? 'left' : 'right'} relative pl-16`}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {cert}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to improve your air quality? Contact us to discuss how ServiceBot Solutions can help create a healthier environment for your space.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:rlb01@svbots.com"
                className="hover-scale rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Contact Us
              </a>
              <a href="tel:866-778-3268" className="text-sm font-semibold leading-6 text-gray-900">
                Call Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 