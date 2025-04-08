import React from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { withBasePath } from '../utils/basePath'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Podcast', href: '/podcast' },
  { name: "What's New", href: '/whats-new' },
  { name: "I'm Not That Green Guy", href: '/community' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="sm:flex sm:space-x-8">
                <Link href="/" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                  Home
                </Link>
                <Link href="/about" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                  About Us
                </Link>
                <Link href="/podcast" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                  Podcast
                </Link>
                <Link href="/whats-new" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                  What's New
                </Link>
                <Link href="/community" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                  I'm Not That Green Guy
                </Link>
              </div>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 transition-all duration-300 hover:scale-105"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        {children}
      </main>

      <footer className="bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Green Info Urban Style. All rights reserved.
            </p>
          </div>
          <div className="mt-8 md:order-2 md:mt-0">
            <div className="flex justify-center">
              <p className="text-sm leading-5 text-gray-700 mr-4">
                Support our mission:
              </p>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-500"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 