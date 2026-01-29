'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      label: 'Credit cards', 
      href: '/credit-cards', 
      bold: true,
      dropdown: [
        { label: 'Best Credit Cards', href: '/credit-cards/best' },
        { label: 'Cash Back Cards', href: '/credit-cards/cash-back' },
        { label: 'Travel Cards', href: '/credit-cards/travel' },
        { label: 'Balance Transfer', href: '/credit-cards/balance-transfer' },
        { label: 'Student Cards', href: '/credit-cards/student' },
      ]
    },
    { 
      label: 'Banking', 
      href: '/banking', 
      bold: true,
      dropdown: [
        { label: 'Best Banks', href: '/banking/best' },
        { label: 'Savings Accounts', href: '/banking/savings' },
        { label: 'Checking Accounts', href: '/banking/checking' },
        { label: 'CDs', href: '/banking/cds' },
        { label: 'Money Market', href: '/banking/money-market' },
      ]
    },
    { 
      label: 'Home', 
      href: '/home', 
      bold: false,
      dropdown: [
        { label: 'Mortgages', href: '/home/mortgages' },
        { label: 'Refinancing', href: '/home/refinancing' },
        { label: 'Home Equity', href: '/home/equity' },
        { label: 'First-Time Buyers', href: '/home/first-time' },
      ]
    },
    { 
      label: 'Loans', 
      href: '/loans', 
      bold: false,
      dropdown: [
        { label: 'Personal Loans', href: '/loans/personal' },
        { label: 'Student Loans', href: '/loans/student' },
        { label: 'Auto Loans', href: '/loans/auto' },
        { label: 'Business Loans', href: '/loans/business' },
      ]
    },
    { 
      label: 'Insurance', 
      href: '/insurance', 
      bold: true,
      dropdown: [
        { label: 'Auto Insurance', href: '/insurance/auto' },
        { label: 'Home Insurance', href: '/insurance/home' },
        { label: 'Life Insurance', href: '/insurance/life' },
        { label: 'Health Insurance', href: '/insurance/health' },
      ]
    },
    { 
      label: 'Personal finance', 
      href: '/personal-finance', 
      bold: false,
      dropdown: [
        { label: 'Budgeting', href: '/personal-finance/budgeting' },
        { label: 'Debt Management', href: '/personal-finance/debt' },
        { label: 'Financial Planning', href: '/personal-finance/planning' },
        { label: 'Credit Scores', href: '/personal-finance/credit-scores' },
      ]
    },
    { 
      label: 'Investing', 
      href: '/investing', 
      bold: true,
      dropdown: [
        { label: 'Brokers', href: '/investing/brokers' },
        { label: 'Robo-Advisors', href: '/investing/robo-advisors' },
        { label: 'Retirement', href: '/investing/retirement' },
        { label: 'Stocks', href: '/investing/stocks' },
      ]
    },
    { 
      label: 'Small business', 
      href: '/small-business', 
      bold: false,
      dropdown: [
        { label: 'Business Credit Cards', href: '/small-business/credit-cards' },
        { label: 'Business Loans', href: '/small-business/loans' },
        { label: 'Business Banking', href: '/small-business/banking' },
        { label: 'Accounting Software', href: '/small-business/accounting' },
      ]
    },
    { 
      label: 'Taxes', 
      href: '/taxes', 
      bold: false,
      dropdown: [
        { label: 'Tax Software', href: '/taxes/software' },
        { label: 'Tax Preparation', href: '/taxes/preparation' },
        { label: 'Tax Calculators', href: '/taxes/calculators' },
        { label: 'Tax Tips', href: '/taxes/tips' },
      ]
    },
  ]

  const popularSearches = [
    'Best credit cards 2024',
    'High yield savings accounts',
    'Mortgage rates today',
    'Personal loan calculator',
    'Auto insurance quotes'
  ]

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      <header className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg border-b border-gray-200' : 'border-b border-gray-200'
      }`}>
        <div className="px-4 flex items-center justify-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="absolute left-4 flex items-center gap-2 text-emerald-600 hover:opacity-80 transition-all duration-200 group">
            <div className="relative">
              <svg className="w-7 h-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
              <div className="absolute -inset-1 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold">wealtowallet</span>
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className={`text-sm text-gray-700 hover:text-emerald-600 transition-all duration-200 relative group py-2 ${item.bold ? 'font-semibold' : 'font-medium'}`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                    {item.dropdown && (
                      <svg className="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="absolute right-4 flex items-center gap-4">
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-all duration-200 relative ${isSearchOpen ? 'bg-[#e3faf2] scale-110' : 'hover:bg-[#e3faf2] hover:scale-105'}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isSearchOpen ? 'scale-110' : ''}`}>
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              {isSearchOpen && (
                <div className="absolute -inset-2 bg-emerald-600 rounded-full opacity-20 animate-ping"></div>
              )}
            </button>

            <button className="hidden md:block px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-300 transition-all duration-200 uppercase tracking-wide btn-animated-border relative overflow-hidden group">
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold uppercase tracking-wide">Sign In</span>
            </button>

            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-800 transition-all duration-200 uppercase tracking-wide btn-animated-border relative overflow-hidden group">
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>

            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}>
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        {isSearchOpen && (
          <div className="bg-white border-t border-gray-200 relative animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 max-w-5xl mx-auto">
                <div className="flex-1 relative">
                  <div className="flex items-center bg-white border-2 border-gray-300 px-4 py-3.5 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-100 transition-all duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input 
                      type="text" 
                      placeholder='Try "Best savings account?" or "Credit card rewards"'
                      className="flex-1 ml-3 outline-none text-gray-700 placeholder-gray-400 text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <button 
                  type="submit"
                  className="px-8 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transition-all duration-200 uppercase tracking-wide"
                >
                  Search
                </button>
              </form>
              
              {/* Popular Searches */}
              <div className="max-w-5xl mx-auto mt-6">
                <div className="text-sm text-gray-600 mb-3">Popular searches:</div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-200 border border-gray-200 hover:border-emerald-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
              aria-label="Close search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link 
                    href={item.href}
                    className={`block text-gray-700 hover:text-emerald-600 transition-colors py-2 ${item.bold ? 'font-semibold' : 'font-medium'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors uppercase tracking-wide">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors uppercase tracking-wide">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for mobile menu */}
      {(isMenuOpen || isSearchOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 lg:hidden"
          onClick={() => {
            setIsMenuOpen(false)
            setIsSearchOpen(false)
          }}
        />
      )}
    </>
  )
}