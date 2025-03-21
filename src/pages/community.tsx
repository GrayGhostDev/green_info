import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { withBasePath } from '../utils/basePath'
import Head from 'next/head'

interface Topic {
  id: number
  title: string
  description: string
  votes: number
  comments: number
  category: 'question' | 'story' | 'knowledge'
}

const sampleTopics: Topic[] = [
  {
    id: 1,
    title: "What's the easiest way to start composting in an apartment?",
    description: "I want to reduce my waste but don't have much space. Looking for practical tips!",
    votes: 45,
    comments: 12,
    category: 'question'
  },
  {
    id: 2,
    title: "My journey from skeptic to urban gardener",
    description: "How I transformed my concrete balcony into a thriving garden space.",
    votes: 38,
    comments: 8,
    category: 'story'
  },
  {
    id: 3,
    title: "Simple energy-saving hacks for renters",
    description: "Sharing some easy ways to reduce energy consumption without making permanent changes.",
    votes: 62,
    comments: 15,
    category: 'knowledge'
  }
]

const services = [
  {
    title: 'Energy Audit Services',
    description: 'Professional assessment of your property\'s energy efficiency.',
    image: '/images/Fwd_ GIUS PICS/20241218_150055.jpg',
    category: 'Energy'
  },
  {
    title: 'Garden Consultation',
    description: 'Expert advice on creating and maintaining sustainable gardens.',
    image: '/images/Fwd_ GIUS PICS/20241218_152321.jpg',
    category: 'Gardening'
  },
  {
    title: 'Recycling Program Setup',
    description: 'Assistance in establishing effective recycling systems.',
    image: '/images/Fwd_ GIUS PICS/20241218_152304.jpg',
    category: 'Waste Management'
  }
]

export default function Community() {
  const [activeTab, setActiveTab] = useState<'all' | 'questions' | 'stories' | 'knowledge'>('all')
  const [showSubmitForm, setShowSubmitForm] = useState(false)

  useIntersectionObserver({
    targetSelector: '.fade-in',
    threshold: 0.2
  })

  const filteredTopics = activeTab === 'all' 
    ? sampleTopics 
    : sampleTopics.filter(topic => 
        activeTab === 'questions' ? topic.category === 'question' :
        activeTab === 'stories' ? topic.category === 'story' :
        topic.category === 'knowledge'
      )

  return (
    <Layout>
      <Head>
        <title>Community - I'm Not That Green Guy | Green Info Urban Style</title>
        <meta name="description" content="Join our community space where everyone can learn, share, and grow together in their green journey. Share your stories, ask questions, and connect with like-minded individuals." />
        <meta name="keywords" content="green community, sustainability learning, environmental education, community stories, green knowledge sharing" />
        <meta property="og:title" content="Community - I'm Not That Green Guy | Green Info Urban Style" />
        <meta property="og:description" content="A space for everyone to learn, share, and grow together in their green journey." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath('/images/greenInfo_Logo.pdf.png')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Background Logo */}
        <div className="absolute inset-0">
          <img
            src="/images/greenInfo_Logo.pdf.png"
            alt="Background Logo"
            className="w-full h-full object-cover opacity-15 fixed"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-white mb-6 [text-shadow:_-1px_-1px_0_#00A651,_1px_-1px_0_#00A651,_-1px_1px_0_#00A651,_1px_1px_0_#00A651]">
              I'm Not That Green Guy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A space for everyone to learn, share, and grow together. Whether you're just starting your green journey or want to share your experiences, you're welcome here.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs and Submit Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex space-x-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'all'
                      ? 'bg-[#00A651] text-white'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50'
                  }`}
                >
                  All Topics
                </button>
                <button
                  onClick={() => setActiveTab('questions')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'questions'
                      ? 'bg-[#00A651] text-white'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50'
                  }`}
                >
                  Questions
                </button>
                <button
                  onClick={() => setActiveTab('stories')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'stories'
                      ? 'bg-[#00A651] text-white'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50'
                  }`}
                >
                  Stories
                </button>
                <button
                  onClick={() => setActiveTab('knowledge')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'knowledge'
                      ? 'bg-[#00A651] text-white'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50'
                  }`}
                >
                  Knowledge Share
                </button>
              </div>
              <button
                onClick={() => setShowSubmitForm(true)}
                className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
              >
                Share Your Story
              </button>
            </div>

            {/* Topics Grid */}
            <div className="grid gap-6">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                        topic.category === 'question'
                          ? 'bg-blue-500/20 text-blue-300'
                          : topic.category === 'story'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-green-500/20 text-green-300'
                      }`}>
                        {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                      <p className="text-gray-300">{topic.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      {topic.votes}
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {topic.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowSubmitForm(false)} />
          <div className="relative bg-gray-900 rounded-xl p-8 max-w-2xl w-full mx-4">
            <button
              onClick={() => setShowSubmitForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">Share Your Story</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white">
                  <option value="question">Question</option>
                  <option value="story">Story</option>
                  <option value="knowledge">Knowledge Share</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter your title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white h-32"
                  placeholder="Share your thoughts..."
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#00A651] text-white rounded-lg hover:bg-[#00A651]/90 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  )
} 