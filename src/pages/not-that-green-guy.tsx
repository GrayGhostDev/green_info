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

const STORAGE_KEY = 'gius_comments'

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

  // Load comments from localStorage on component mount
  useEffect(() => {
    try {
      const savedComments = localStorage.getItem(STORAGE_KEY)
      if (savedComments) {
        setComments(JSON.parse(savedComments))
      }
    } catch (err) {
      console.error('Error loading comments:', err)
      setError('Failed to load comments')
    }
  }, [])

  // Save comments to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
    } catch (err) {
      console.error('Error saving comments:', err)
    }
  }, [comments])

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
      // Create new comment
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        ...newComment,
        timestamp: new Date().toISOString()
      }
      
      // Add to comments list
      setComments(prev => [newCommentObj, ...prev])
      
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

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Comment Form Section */}
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/10">
                  <h2 className="text-3xl font-bold text-[#00A651] mb-6 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">Share Your Thoughts</h2>
                  
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-lg mb-6 animate-fadeIn">
                      {error}
                    </div>
                  )}
                  
                  {/* Success Message */}
                  {successMessage && (
                    <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-lg mb-6 animate-fadeIn">
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
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition-all duration-200 resize-y"
                        placeholder="Share your thoughts..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00A651] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#00A651]/90 transition-all duration-300 disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Posting...
                        </span>
                      ) : 'Post Comment'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Comments Display Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-[#00A651] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">Community Discussion</h2>
                  <span className="text-white bg-black/40 px-4 py-2 rounded-full text-sm">
                    {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
                  </span>
                </div>
                
                {comments.length === 0 ? (
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10">
                    <svg className="w-16 h-16 text-[#00A651]/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-white text-xl font-semibold mb-2">No Comments Yet</p>
                    <p className="text-gray-400">Be the first to start the conversation!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {comments.map(comment => (
                      <div key={comment.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:bg-black/40">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-[#00A651] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)]">{comment.name}</h3>
                            <p className="text-gray-400 text-sm">{formatTimestamp(comment.timestamp)}</p>
                          </div>
                        </div>
                        <p className="text-white leading-relaxed">{comment.comment}</p>
                      </div>
                    ))}
                  </div>
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