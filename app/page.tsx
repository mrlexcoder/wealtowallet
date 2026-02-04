'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [animationIndex, setAnimationIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const heroSlides = [
    {
      title: "Smart Financial Decisions",
      subtitle: "Start Here",
      description: "Compare financial products, get expert advice, and make smarter money decisions with confidence.",
      cta: "Get Started",
      image: "dashboard"
    },
    {
      title: "Find Your Perfect",
      subtitle: "Credit Card",
      description: "Discover the best credit cards with rewards, low rates, and benefits tailored to your lifestyle.",
      cta: "Compare Cards",
      image: "creditcard"
    },
    {
      title: "Maximize Your",
      subtitle: "Savings Rate",
      description: "Find high-yield savings accounts and investment options to grow your money faster.",
      cta: "View Rates",
      image: "savings"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % categories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [categories.length])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left Content - Dynamic Slides */}
            <div className="space-y-10 text-white">
              {/* Trust Indicators */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  500K+ Users Trust Us
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-300">4.9/5 Rating</span>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                    <div className="transform transition-all duration-1000 ease-in-out" style={{
                      transform: `translateY(${currentSlide * -100}%)`,
                    }}>
                      {heroSlides.map((slide, index) => (
                        <div key={index} className="h-full">
                          <span className="text-white">{slide.title}</span>
                          <br />
                          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            {slide.subtitle}
                          </span>
                        </div>
                      ))}
                    </div>
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <div className="transform transition-all duration-1000 ease-in-out" style={{
                    transform: `translateY(${currentSlide * -100}%)`,
                  }}>
                    {heroSlides.map((slide, index) => (
                      <p key={index} className="text-2xl text-gray-300 font-light max-w-lg leading-relaxed">
                        {slide.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10">
                      {heroSlides[currentSlide].cta}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button className="px-10 py-5 border-2 border-white/30 text-white font-bold text-lg hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 backdrop-blur-sm">
                    Watch Demo
                  </button>
                </div>
                
                {/* Live Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-1">$2.5B+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Money Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-400 mb-1">500K+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Support</div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-1 transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-emerald-400' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Dashboard */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">WealtoWallet</h3>
                      <p className="text-sm text-gray-500">Premium Dashboard</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-gray-900 animate-pulse">$24,847</div>
                    <div className="text-sm text-emerald-600 font-bold flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                      +18.2%
                    </div>
                  </div>
                </div>

                {/* Credit Score Gauge */}
                <div className="mb-8">
                  <div className="flex items-end justify-between mb-4">
                    <span className="text-gray-600 font-semibold">Credit Score</span>
                    <span className="text-6xl font-black text-gray-900">780</span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-4 bg-gray-200 overflow-hidden">
                      <div className="h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-2000 animate-expand-width" style={{width: '78%'}}></div>
                    </div>
                    <div className="absolute -top-10 right-0 text-xs font-black text-emerald-600 bg-emerald-100 px-3 py-1">
                      EXCELLENT
                    </div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                    <div className="text-sm text-blue-600 font-semibold mb-1">Savings APY</div>
                    <div className="text-3xl font-black text-blue-700">4.75%</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4">
                    <div className="text-sm text-purple-600 font-semibold mb-1">Portfolio</div>
                    <div className="text-3xl font-black text-purple-700">+18.2%</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors">
                    View Details
                  </button>
                  <button className="py-3 border-2 border-gray-300 text-gray-700 font-bold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                    Compare
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 shadow-2xl animate-float">
                <div className="text-xs font-bold opacity-90 mb-2">CREDIT CARD</div>
                <div className="text-2xl font-black mb-1">2% Cash Back</div>
                <div className="text-xs opacity-80">+$127 this month</div>
                <div className="absolute top-4 right-4 w-8 h-5 bg-white/20"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 shadow-2xl animate-float-delayed">
                <div className="text-xs font-bold opacity-90 mb-2">INVESTMENT</div>
                <div className="text-2xl font-black mb-1">+$347</div>
                <div className="flex items-center gap-1 text-xs">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Today</span>
                </div>
              </div>

              {/* Particle Effects */}
              <div className="absolute top-1/2 -right-12 space-y-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-4 h-4 rounded-full shadow-lg animate-pulse`} style={{
                    backgroundColor: ['#ef4444', '#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#06b6d4'][i],
                    animationDelay: `${i * 0.5}s`
                  }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Logo Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Trusted by millions, partnered with industry leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare products from the most trusted names in finance and discover exclusive offers
            </p>
          </div>

          {/* Enhanced Logo Slider */}
          <div className="relative overflow-hidden bg-white shadow-lg border border-gray-200 py-8">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* Tier 1 Financial Institutions */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-600 group-hover:scale-110 transition-transform">CHASE</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-red-600 group-hover:scale-110 transition-transform">CAPITAL ONE</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-800 group-hover:scale-110 transition-transform">AMEX</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-700 group-hover:scale-110 transition-transform">CITI</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-orange-600 group-hover:scale-110 transition-transform">DISCOVER</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-red-700 group-hover:scale-110 transition-transform">WELLS FARGO</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-900 group-hover:scale-110 transition-transform">BANK OF AMERICA</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-green-600 group-hover:scale-110 transition-transform">FIDELITY</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-800 group-hover:scale-110 transition-transform">SCHWAB</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-purple-700 group-hover:scale-110 transition-transform">VANGUARD</div>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-600 group-hover:scale-110 transition-transform">CHASE</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-red-600 group-hover:scale-110 transition-transform">CAPITAL ONE</div>
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center group">
                <div className="text-2xl font-black text-blue-800 group-hover:scale-110 transition-transform">AMEX</div>
              </div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          {/* Category Icons */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="2" y1="9" x2="22" y2="9"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Credit Cards</h3>
              <p className="text-gray-600 text-sm">Compare rewards, rates, and benefits</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Banking</h3>
              <p className="text-gray-600 text-sm">High-yield savings and checking</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Investing</h3>
              <p className="text-gray-600 text-sm">Brokers and investment platforms</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance</h3>
              <p className="text-gray-600 text-sm">Auto, home, and life coverage</p>
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

      {/* Premium Featured Products */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              EDITOR'S CHOICE AWARDS
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Featured Best Picks
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Top-rated products across all categories, handpicked by our financial experts and trusted by millions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Credit Cards Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <rect x="2" y="4" width="16" height="12" rx="2" ry="2"/>
                      <line x1="2" y1="8" x2="18" y2="8"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 border border-emerald-200">EDITOR'S CHOICE</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Chase Sapphire Preferred</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Best overall travel rewards credit card with 2X points on travel and dining worldwide</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Annual Fee</span>
                    <span className="font-black text-lg">$95</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Welcome Bonus</span>
                    <span className="font-black text-lg text-emerald-600">80,000 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">APR Range</span>
                    <span className="font-black text-lg">21.49% - 28.49%</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  View Details
                </button>
              </div>
            </div>

            {/* Banking Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-green-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 border border-blue-200">HIGHEST APY</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Marcus High-Yield Savings</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Top-rated online savings account with competitive rates and zero fees or minimums</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Current APY</span>
                    <span className="font-black text-lg text-emerald-600">4.75%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Minimum Balance</span>
                    <span className="font-black text-lg">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">Monthly Fee</span>
                    <span className="font-black text-lg text-emerald-600">$0</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  Open Account
                </button>
              </div>
            </div>

            {/* Mortgage Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 border border-purple-200">BEST RATES</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Rocket Mortgage</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Fast online mortgage process with competitive rates and award-winning customer service</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">30-Year Fixed</span>
                    <span className="font-black text-lg text-emerald-600">6.875%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">15-Year Fixed</span>
                    <span className="font-black text-lg">6.125%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">Avg. Close Time</span>
                    <span className="font-black text-lg">30 days</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Personal Loans Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-orange-600 bg-orange-50 px-3 py-1 border border-orange-200">FAST FUNDING</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">SoFi Personal Loans</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">No fees personal loans with competitive rates, flexible terms, and member benefits</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">APR Range</span>
                    <span className="font-black text-lg text-emerald-600">8.99% - 29.99%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Loan Amount</span>
                    <span className="font-black text-lg">$5K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">Origination Fee</span>
                    <span className="font-black text-lg text-emerald-600">$0</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  Check Rates
                </button>
              </div>
            </div>

            {/* Insurance Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-red-600 bg-red-50 px-3 py-1 border border-red-200">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">GEICO Auto Insurance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Affordable auto insurance with excellent customer service and extensive discount options</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Avg. Annual Cost</span>
                    <span className="font-black text-lg text-emerald-600">$1,348</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Max Discounts</span>
                    <span className="font-black text-lg">Up to 25%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">Customer Rating</span>
                    <span className="font-black text-lg">4.2/5</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Investing Featured */}
            <div className="group relative bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1 border border-indigo-200">TOP RATED</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Fidelity Brokerage</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Commission-free trading with excellent research tools and award-winning customer service</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Stock Trades</span>
                    <span className="font-black text-lg text-emerald-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Account Minimum</span>
                    <span className="font-black text-lg text-emerald-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 font-medium">Mutual Funds</span>
                    <span className="font-black text-lg">3,000+</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg hover:bg-emerald-600 transition-all duration-300 group-hover:scale-105">
                  Open Account
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-2 border-emerald-200 p-12 max-w-4xl mx-auto shadow-xl">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Explore All Categories & Get Personalized Recommendations
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Compare hundreds of financial products across all categories. Our AI-powered recommendation engine finds the perfect match for your unique financial situation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-lg">
                  View All Products
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 hover:scale-105 transition-all duration-300">
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
