import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { withBasePath } from '../utils/basePath'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Topics', href: '/topics' },
  { name: 'Episodes', href: '/episodes' },
  { name: 'Podcast', href: '/podcast' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="hover-scale block">
                <img
                  className="h-14 w-auto"
                  src={withBasePath("/images/greenInfo_Logo.pdf.png")}
                  alt="Green Info"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                Home
              </Link>
              <Link href="/about" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                About Us
              </Link>
              <Link href="/topics" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                Topics
              </Link>
              <Link href="/episodes" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                Episodes
              </Link>
              <Link href="/podcast" className="nav-link px-3 py-2 text-sm font-medium text-gray-900">
                Podcast
              </Link>
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
        </div>
      </footer>
    </div>
  )
} 