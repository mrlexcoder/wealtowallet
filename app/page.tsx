'use client'

import ExampleComponent from "@/components/ExampleComponent"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [animationIndex, setAnimationIndex] = useState(0)

  const categories = [
    {
      id: 'car-insurance',
      title: 'BEST CAR INSURANCE',
      description: 'Compare top auto insurance providers',
      icon: '🚗',
      color: 'from-blue-500 to-blue-600',
      href: '/insurance/auto'
    },
    {
      id: 'credit-cards',
      title: 'BEST CREDIT CARDS',
      description: 'Find the perfect credit card for you',
      icon: '💳',
      color: 'from-emerald-500 to-emerald-600',
      href: '/credit-cards'
    },
    {
      id: 'mortgage-lenders',
      title: 'BEST MORTGAGE LENDERS',
      description: 'Get the best rates for your home',
      icon: '🏠',
      color: 'from-purple-500 to-purple-600',
      href: '/home/mortgages'
    },
    {
      id: 'personal-loans',
      title: 'BEST PERSONAL LOANS',
      description: 'Quick approval personal loans',
      icon: '💰',
      color: 'from-orange-500 to-orange-600',
      href: '/loans/personal'
    },
    {
      id: 'business-loans',
      title: 'BEST BUSINESS LOANS',
      description: 'Grow your business with funding',
      icon: '🏢',
      color: 'from-red-500 to-red-600',
      href: '/small-business/loans'
    },
    {
      id: 'bank-accounts',
      title: 'BEST BANK ACCOUNTS',
      description: 'High-yield savings and checking',
      icon: '🏦',
      color: 'from-teal-500 to-teal-600',
      href: '/banking'
    },
    {
      id: 'financial-advisors',
      title: 'BEST FINANCIAL ADVISORS',
      description: 'Professional investment guidance',
      icon: '📊',
      color: 'from-indigo-500 to-indigo-600',
      href: '/investing/advisors'
    },
    {
      id: 'student-loans',
      title: 'BEST STUDENT LOANS',
      description: 'Affordable education financing',
      icon: '🎓',
      color: 'from-pink-500 to-pink-600',
      href: '/loans/student'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % categories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [categories.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Modern Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-10">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Trusted by 500,000+ Users
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-gray-900">Smart</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Financial
                  </span>
                  <br />
                  <span className="text-gray-900">Decisions</span>
                </h1>
                <p className="text-2xl text-gray-600 font-light max-w-lg leading-relaxed">
                  Compare financial products, get expert advice, and make smarter money decisions.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 bg-gray-900 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  <button className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold hover:border-gray-900 transition-colors duration-200">
                    View Demo
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-600">100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Bank-Level Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">4.9★ Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Dashboard */}
            <div className="relative">
              {/* Main Dashboard */}
              <div className="relative bg-white border border-gray-200 shadow-2xl shadow-gray-900/10 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">WealtoWallet</h3>
                      <p className="text-sm text-gray-500">Premium Dashboard</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-900">$24,847</div>
                    <div className="text-sm text-emerald-600 font-semibold">↗ +18.2%</div>
                  </div>
                </div>

                {/* Credit Score */}
                <div className="mb-8">
                  <div className="flex items-end justify-between mb-4">
                    <span className="text-gray-600 font-medium">Credit Score</span>
                    <span className="text-5xl font-black text-gray-900">780</span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-100">
                      <div className="h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-1000" style={{width: '78%'}}></div>
                    </div>
                    <div className="absolute -top-8 right-0 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1">
                      EXCELLENT
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 font-medium">Savings APY</div>
                    <div className="text-2xl font-black text-blue-600">4.75%</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 font-medium">Portfolio</div>
                    <div className="text-2xl font-black text-purple-600">+18.2%</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 shadow-xl">
                <div className="text-xs font-medium opacity-80 mb-2">CREDIT CARD</div>
                <div className="text-xl font-black mb-1">2% Cash Back</div>
                <div className="text-xs opacity-80">+$127 this month</div>
                <div className="absolute top-4 right-4 w-8 h-5 bg-white/20"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 shadow-xl">
                <div className="text-xs font-medium opacity-80 mb-2">INVESTMENT</div>
                <div className="text-xl font-black mb-1">+$347</div>
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Today</span>
                </div>
              </div>

              {/* Floating Indicators */}
              <div className="absolute top-1/2 -right-8 space-y-4">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by millions and partnered with top financial institutions
            </h2>
            <p className="text-gray-600">
              Compare products from the most trusted names in finance
            </p>
          </div>

          {/* Logo Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* Credit Card Companies */}
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-600">CHASE</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-red-600">CAPITAL ONE</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-800">AMEX</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-700">CITI</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-purple-600">DISCOVER</div>
              </div>

              {/* Banks */}
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-red-700">WELLS FARGO</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-900">BANK OF AMERICA</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-green-700">TD BANK</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-orange-600">ALLY</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-600">MARCUS</div>
              </div>

              {/* Financial Services */}
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-green-600">FIDELITY</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-800">SCHWAB</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-orange-700">E*TRADE</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-purple-700">VANGUARD</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-teal-600">ROBINHOOD</div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-600">CHASE</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-red-600">CAPITAL ONE</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-800">AMEX</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-700">CITI</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <div className="text-xl font-bold text-purple-600">DISCOVER</div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="2" y1="9" x2="22" y2="9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit Cards</h3>
              <p className="text-gray-600 text-sm">Compare rewards, rates, and benefits from top issuers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Banking</h3>
              <p className="text-gray-600 text-sm">Find the best savings and checking accounts</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investing</h3>
              <p className="text-gray-600 text-sm">Compare brokers and investment platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Comparison Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Want to view more options? Easily compare top picks side-by-side
            </h2>
            <p className="text-xl text-gray-600 font-light">
              What product or service are you looking for?
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {categories.slice(0, 8).map((category, index) => (
              <button
                key={category.id}
                onClick={() => window.location.href = category.href}
                className={`group relative p-8 bg-white border border-gray-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl ${
                  index === 2 ? 'border-emerald-500 shadow-lg' : ''
                }`}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-black text-gray-900 uppercase tracking-wide">
                      {category.title}
                    </div>
                    <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </div>
                  </div>
                </div>
                {index === 2 && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 text-center">
              <div className="text-4xl font-black mb-2">500K+</div>
              <div className="text-sm font-medium opacity-90">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 text-center">
              <div className="text-4xl font-black mb-2">$2.5B+</div>
              <div className="text-sm font-medium opacity-90">Money Saved</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 text-center">
              <div className="text-4xl font-black mb-2">4.9★</div>
              <div className="text-sm font-medium opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Categories Section */}
      <section className="bg-gradient-to-b from-emerald-600 to-emerald-700 py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-2xl border border-emerald-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Want to view more options? Easily compare top picks side-by-side
              </h2>
              <p className="text-lg text-gray-600">
                What product or service are you looking for?
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => window.location.href = category.href}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`group relative p-6 bg-white hover:bg-gradient-to-br ${category.color} text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gray-200 hover:border-transparent ${
                    animationIndex === index ? 'animate-pulse ring-4 ring-emerald-300' : ''
                  } ${
                    activeCategory === category.id ? 'scale-105 shadow-xl' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wide mb-2">
                      {category.title}
                    </div>
                    <div className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </div>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Dynamic Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl">
                <div className="text-3xl font-bold mb-2">$2.5B+</div>
                <div className="text-sm opacity-90">Money Saved</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl">
                <div className="text-3xl font-bold mb-2">4.8★</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Featured Best Picks
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Top-rated products across all categories, handpicked by our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Credit Cards Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <rect x="2" y="4" width="16" height="12" rx="2" ry="2"/>
                    <line x1="2" y1="8" x2="18" y2="8"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1">EDITOR'S CHOICE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chase Sapphire Preferred</h3>
              <p className="text-gray-600 mb-4">Best overall travel rewards credit card with 2X points on travel and dining</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Fee</span>
                  <span className="font-semibold">$95</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Bonus</span>
                  <span className="font-semibold text-emerald-600">80,000 points</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">APR</span>
                  <span className="font-semibold">21.49% - 28.49%</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                View Details
              </button>
            </div>

            {/* Banking Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1">HIGHEST APY</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus High-Yield Savings</h3>
              <p className="text-gray-600 mb-4">Top-rated online savings account with competitive rates and no fees</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">APY</span>
                  <span className="font-semibold text-emerald-600">4.75%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Minimum Balance</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Monthly Fee</span>
                  <span className="font-semibold">$0</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                Open Account
              </button>
            </div>

            {/* Home/Mortgage Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1">BEST RATES</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rocket Mortgage</h3>
              <p className="text-gray-600 mb-4">Fast online mortgage process with competitive rates and excellent service</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">30-Year Fixed</span>
                  <span className="font-semibold text-emerald-600">6.875%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">15-Year Fixed</span>
                  <span className="font-semibold">6.125%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Closing Time</span>
                  <span className="font-semibold">30 days</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                Get Quote
              </button>
            </div>

            {/* Personal Loans Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1">FAST FUNDING</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SoFi Personal Loans</h3>
              <p className="text-gray-600 mb-4">No fees personal loans with competitive rates and flexible terms</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">APR Range</span>
                  <span className="font-semibold text-emerald-600">8.99% - 29.99%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Loan Amount</span>
                  <span className="font-semibold">$5K - $100K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Origination Fee</span>
                  <span className="font-semibold">$0</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                Check Rates
              </button>
            </div>

            {/* Insurance Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1">BEST VALUE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GEICO Auto Insurance</h3>
              <p className="text-gray-600 mb-4">Affordable auto insurance with excellent customer service and discounts</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Avg. Annual Cost</span>
                  <span className="font-semibold text-emerald-600">$1,348</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Discounts</span>
                  <span className="font-semibold">Up to 25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Customer Rating</span>
                  <span className="font-semibold">4.2/5</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                Get Quote
              </button>
            </div>

            {/* Investing Featured */}
            <div className="group bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1">TOP RATED</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fidelity Brokerage</h3>
              <p className="text-gray-600 mb-4">Commission-free trading with excellent research tools and customer service</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Stock Trades</span>
                  <span className="font-semibold text-emerald-600">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Account Minimum</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Mutual Funds</span>
                  <span className="font-semibold">3,000+</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-emerald-600 transition-colors duration-200">
                Open Account
              </button>
            </div>
          </div>

          {/* View All Categories CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Explore All Categories
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Compare hundreds of financial products across all categories to find the perfect match for your needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors duration-200">
                  View All Products
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold hover:border-gray-900 transition-colors duration-200">
                  Get Personalized Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose WealtoWallet?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for all financial decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Reviews</h3>
              <p className="text-gray-600">
                Our financial experts review and rate products to help you make informed decisions.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Comparisons</h3>
              <p className="text-gray-600">
                Compare rates, fees, and features across hundreds of financial products instantly.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Free</h3>
              <p className="text-gray-600">
                Your data is protected with bank-level security. Our service is completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
