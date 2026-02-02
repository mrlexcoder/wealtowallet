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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-emerald-500 bg-opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-purple-500 bg-opacity-20 rounded-full animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Trusted by 500,000+ Users
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart Financial
                <span className="block text-emerald-600">Decisions Made</span>
                <span className="block text-gray-700">Simple</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Compare the best financial products, get expert advice, and save money with our comprehensive platform trusted by millions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-emerald-600 text-white px-8 py-4 font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Free
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200">
                  Watch Demo
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Visual Elements */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">WealtoWallet</div>
                        <div className="text-sm text-gray-500">Premium Account</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">$2,847</div>
                      <div className="text-sm text-emerald-600">+12.5% this month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Credit Score</span>
                      <span className="font-semibold text-emerald-600">Excellent (780)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Savings Rate</span>
                      <span className="font-semibold text-blue-600">4.75% APY</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Investment Return</span>
                      <span className="font-semibold text-purple-600">+18.2%</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-sm font-medium">Credit Card</div>
                  <div className="text-lg font-bold">2% Cash Back</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-sm font-medium">Investment</div>
                  <div className="text-lg font-bold">+$347 Today</div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-3xl opacity-20 transform scale-110"></div>
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
