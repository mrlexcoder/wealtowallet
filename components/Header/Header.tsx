'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Credit cards', href: '/credit-cards', bold: true },
    { label: 'Banking', href: '/banking', bold: true },
    { label: 'Home', href: '/home', bold: false },
    { label: 'Loans', href: '/loans', bold: false },
    { label: 'Insurance', href: '/insurance', bold: true },
    { label: 'Personal finance', href: '/personal-finance', bold: false },
    { label: 'Investing', href: '/investing', bold: true },
    { label: 'Small business', href: '/small-business', bold: false },
    { label: 'Taxes', href: '/taxes', bold: false },
  ]

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-emerald-600 hover:opacity-80 transition-opacity duration-200">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
          </svg>
          <span className="text-xl font-bold">wealtowallet</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center flex-1 ml-12">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`text-sm text-gray-700 hover:text-emerald-600 transition-all duration-200 relative group ${item.bold ? 'font-semibold' : 'font-medium'}`}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            className="p-2 text-gray-700 hover:text-emerald-600 hover:scale-110 transition-all duration-200" 
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          <button className="hidden md:block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gray-900 uppercase tracking-wide">
            Sign In
          </button>

          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-800 hover:text-yellow-300 uppercase tracking-wide">
            Sign Up
          </button>

          <button 
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
