import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { withBasePath } from '../utils/basePath'
import Head from 'next/head'

interface Comment {
  id: string
  name: string
  email: string
  comment: string
  timestamp: string
}

const NotThatGreenGuy: NextPage = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments')
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data = await response.json()
      setComments(data)
    } catch (err) {
      console.error('Error fetching comments:', err)
      setError('Failed to load comments. Please try again later.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to post comment')
      }

      const data = await response.json()
      
      // Update comments list with new comment
      setComments(prev => [data, ...prev])
      
      // Reset form
      setNewComment({
        name: '',
        email: '',
        comment: ''
      })
      
      setSuccessMessage('Comment posted successfully!')
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null)
      }, 3000)
    } catch (err) {
      console.error('Error posting comment:', err)
      setError('Failed to post comment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format timestamp to a more readable format
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <Layout>
      <Head>
        <title>I'm Not That Green Guy - Green Info Urban Style</title>
        <meta name="description" content="Join the conversation about urban sustainability and community development." />
      </Head>

      <div className="relative min-h-screen">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50" />
          
          {/* Brick Wall Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={withBasePath("/images/GUIS_Bricks.jpg")}
              alt="Brick Background"
              className="w-full h-full object-cover opacity-60 fixed contrast-125 brightness-110"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-7xl font-bold text-[#00A651] mb-8 font-graffiti animate-fadeIn opacity-0 [animation-fill-mode:forwards] [text-shadow:_4px_4px_14px_rgb(0_0_0_/_100%),_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]">
                I'm Not That Green Guy
              </h1>
              <p className="text-2xl text-white font-semibold max-w-3xl mx-auto animate-fadeIn opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">
                Join the conversation about urban sustainability and share your thoughts
              </p>
            </div>

            {/* Comments Section */}
            <div className="max-w-4xl mx-auto">
              {/* Comment Form */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">Leave a Comment</h2>
                
                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}
                
                {/* Success Message */}
                {successMessage && (
                  <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-lg mb-6">
                    {successMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newComment.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-white font-semibold mb-2">Comment</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={newComment.comment}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                      placeholder="Share your thoughts..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00A651] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#00A651]/90 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Posting...' : 'Post Comment'}
                  </button>
                </form>
              </div>

              {/* Comments Display */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">Comments</h2>
                {comments.length === 0 ? (
                  <p className="text-white text-center py-8">Be the first to comment!</p>
                ) : (
                  comments.map(comment => (
                    <div key={comment.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">{comment.name}</h3>
                          <p className="text-gray-400 text-sm">{formatTimestamp(comment.timestamp)}</p>
                        </div>
                      </div>
                      <p className="text-white">{comment.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotThatGreenGuy 