import React from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const values = [
  {
    name: "Green Innovation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: ["Innovative air purification solutions", "Advanced UVC technology implementation", "Smart environmental monitoring"]
  },
  {
    name: "Sustainability",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    details: ["Environmental responsibility", "Resource conservation", "Long-term ecological impact"]
  },
  {
    name: "Health & Safety",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    details: ["Air quality improvement", "Safe working environments", "Health-focused solutions"]
  },
  {
    name: "Energy Efficiency",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: ["Energy consumption reduction", "Cost-effective solutions", "Sustainable practices"]
  }
]

export default function Values() {
  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Logo */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-contain opacity-95 scale-125 transform rotate-6 brightness-125 hover:brightness-150 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative pt-24 pb-32">
          {/* Text Content Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-32">
              <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white mb-10 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
                Our Values
              </h1>
              <p className="text-2xl text-gray-300 animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">
                The core principles that guide our mission and shape our impact.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mx-auto max-w-7xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-20 lg:max-w-none lg:grid-cols-2">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col bg-black/40 rounded-3xl p-12 backdrop-blur-lg hover:bg-black/50 transition-all duration-700 border border-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 animate-fadeIn opacity-0 [animation-fill-mode:forwards]`}
                    style={{ animationDelay: `${(index + 2) * 300}ms` }}
                  >
                    <dt className="flex items-center gap-x-6 text-4xl font-bold leading-7 text-white mb-10 font-graffiti [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)]">
                      <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-orange-700/80 backdrop-blur-lg shadow-lg shadow-orange-700/20 hover:shadow-orange-600/40 transition-all duration-500">
                        {value.icon}
                      </div>
                      {value.name}
                    </dt>
                    <dd className="mt-6 flex flex-auto flex-col text-xl leading-8 text-gray-300">
                      <ul className="mt-2 space-y-8">
                        {value.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex} 
                            className="flex items-center opacity-0 animate-fadeIn [animation-fill-mode:forwards]"
                            style={{ animationDelay: `${(index + 2) * 300 + (detailIndex + 1) * 200}ms` }}
                          >
                            <svg className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="[text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 