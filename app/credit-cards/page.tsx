'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function CreditCardsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const creditCardCategories = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "Top credit cards",
      description: "Best overall cards for 2024",
      category: "popular",
      link: "/credit-cards/top"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="2" y1="9" x2="22" y2="9"/>
        </svg>
      ),
      title: "Find the right card for you",
      description: "Personalized recommendations",
      category: "tools",
      link: "/credit-cards/finder"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      title: "Compare the top credit cards",
      description: "Side-by-side comparisons",
      category: "tools",
      link: "/credit-cards/compare"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
          <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
        </svg>
      ),
      title: "Top balance transfer credit cards",
      description: "0% intro APR on transfers",
      category: "debt",
      link: "/credit-cards/balance-transfer"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      ),
      title: "Top 0% APR credit cards",
      description: "No interest for up to 21 months",
      category: "debt",
      link: "/credit-cards/zero-apr"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
        </svg>
      ),
      title: "Top travel rewards cards",
      description: "Earn points and miles",
      category: "rewards",
      link: "/credit-cards/travel"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 1v6m0 6v6"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Top cash back credit cards",
      description: "Up to 6% cash back",
      category: "rewards",
      link: "/credit-cards/cash-back"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
      title: "Top rewards credit cards",
      description: "Flexible point programs",
      category: "rewards",
      link: "/credit-cards/rewards"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        </svg>
      ),
      title: "Top airline credit cards",
      description: "Free flights and upgrades",
      category: "travel",
      link: "/credit-cards/airline"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Top business credit cards",
      description: "Rewards for business spending",
      category: "business",
      link: "/credit-cards/business"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="6" x2="12" y2="12"/>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        </svg>
      ),
      title: "Top gas credit cards",
      description: "Save on fuel purchases",
      category: "cashback",
      link: "/credit-cards/gas"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 0 5-1 7-2 2 1 4 2 7 2v-5"/>
        </svg>
      ),
      title: "Top college student credit cards",
      description: "Build credit while in school",
      category: "student",
      link: "/credit-cards/student"
    }
  ]

  const filterCategories = [
    { id: 'all', label: 'All Cards', count: 12 },
    { id: 'popular', label: 'Most Popular', count: 1 },
    { id: 'rewards', label: 'Rewards', count: 3 },
    { id: 'travel', label: 'Travel', count: 1 },
    { id: 'debt', label: 'Debt Payoff', count: 2 },
    { id: 'business', label: 'Business', count: 1 },
  ]

  const filteredCategories = activeFilter === 'all' 
    ? creditCardCategories 
    : creditCardCategories.filter(card => card.category === activeFilter)

  const reviews = [
    {
      image: "chase-sapphire",
      title: "Chase Sapphire Preferred Review: Strong Option for Travel Rewards",
      author: "Gregory Karp, Claire Tsosie",
      cardColor: "from-blue-900 to-blue-700",
      rating: 4.5,
      readTime: "8 min read",
      publishDate: "Updated Jan 15, 2024"
    },
    {
      image: "citi-double-cash", 
      title: "Citi Double Cash Review: A Solid Choice for Everyday Spending",
      author: "Sara Rathner",
      cardColor: "from-blue-600 to-teal-500",
      rating: 4.3,
      readTime: "6 min read",
      publishDate: "Updated Jan 12, 2024"
    },
    {
      image: "wells-fargo-reflect",
      title: "Wells Fargo Reflect® Card Review: An Extended Break From Interest", 
      author: "Funto Omojola",
      cardColor: "from-red-600 to-red-500",
      rating: 4.1,
      readTime: "7 min read",
      publishDate: "Updated Jan 10, 2024"
    },
    {
      image: "amex-platinum",
      title: "American Express Platinum Review: Top-Notch Lounge Access, Big Credits",
      author: "Sally French",
      cardColor: "from-gray-600 to-gray-500",
      rating: 4.7,
      readTime: "10 min read",
      publishDate: "Updated Jan 8, 2024"
    }
  ]

  const featuredCards = [
    {
      name: "Chase Sapphire Preferred®",
      issuer: "Chase",
      rating: 4.5,
      annualFee: "$95",
      bonusOffer: "60,000 points",
      highlights: ["2X on travel & dining", "No foreign transaction fees", "Transfer partners"],
      cardColor: "from-blue-900 to-blue-700"
    },
    {
      name: "Capital One Venture Rewards",
      issuer: "Capital One", 
      rating: 4.3,
      annualFee: "$95",
      bonusOffer: "75,000 miles",
      highlights: ["2X on all purchases", "Global Entry credit", "No blackout dates"],
      cardColor: "from-gray-800 to-gray-600"
    },
    {
      name: "Citi® Double Cash Card",
      issuer: "Citi",
      rating: 4.4,
      annualFee: "$0",
      bonusOffer: "$200 cash back",
      highlights: ["2% cash back", "No annual fee", "Balance transfer option"],
      cardColor: "from-blue-600 to-teal-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="hover:text-emerald-600 cursor-pointer transition-colors">Home</span>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-emerald-600 font-medium">Credit Cards</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section with Parallax */}
      <div 
        className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-5 transform rotate-45 -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 bg-opacity-10 transform rotate-45 translate-x-24 translate-y-24"></div>
        <div className="absolute top-4 left-4 text-xs bg-white bg-opacity-20 px-3 py-1 backdrop-blur-sm">
          Advertiser disclosure
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 mb-6 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-medium">Expert Reviews & Recommendations</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Credit Cards
            </h1>
            <p className="text-xl leading-relaxed opacity-95 mb-8">
              What are credit cards? How do they work? How do you decide among cash back, travel points and other options — 
              and then maximize the value you get from your card? Browse our card picks, read our reviews and learn more 
              about rewards, points, interest rates and how to apply — all on WealtoWallet.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-emerald-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                Find My Card
              </button>
              <button className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Compare Cards
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cards Carousel */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Credit Cards</h2>
            <p className="text-xl text-gray-600">Hand-picked cards with the best offers this month</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`h-48 bg-gradient-to-br ${card.cardColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative p-6 text-white h-full flex flex-col justify-between">
                    <div>
                      <div className="text-sm opacity-80">{card.issuer}</div>
                      <div className="text-xl font-bold">{card.name}</div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-2xl font-bold">VISA</div>
                      <div className="w-12 h-8 bg-white bg-opacity-20 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(card.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{card.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">Annual Fee: <span className="font-semibold">{card.annualFee}</span></div>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-emerald-600 mb-2">Earn {card.bonusOffer}</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {card.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-3 font-semibold hover:bg-emerald-700 transition-colors group-hover:bg-emerald-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Find a credit card section with filters */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find a credit card</h2>
          <p className="text-xl text-gray-600">Browse by category to find the perfect card for your needs</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="block border border-gray-200 p-8 hover:shadow-lg hover:border-emerald-200 transition-all cursor-pointer group bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-emerald-600 transition-colors mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Video</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div 
                      className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-40 transition-all cursor-pointer"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 text-sm font-medium">
                    10:25
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-emerald-600 px-3 py-1 text-xs font-bold">
                    Is it Worth it?
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                    <div className="text-emerald-300 font-bold text-lg">wealtowallet</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Video: Credit Card Annual Fees Explained
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Are credit card annual fees worth it? In this video, WealtoWallet Credit Card expert Sally French breaks down 
                why it often makes sense to pay an annual fee for a credit card, and when it may not.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>10:25 duration</span>
                <span>•</span>
                <span>Updated Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Read our reviews section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Read our reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <article key={index} className="flex gap-4 cursor-pointer hover:shadow-lg transition-all p-6 border border-transparent hover:border-gray-200 group bg-white">
              <div className="w-32 h-20 flex-shrink-0 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${review.cardColor} flex items-center justify-center relative`}>
                  <div className="w-20 h-12 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
                    <div className="w-16 h-8 bg-white bg-opacity-30 rounded"></div>
                  </div>
                  <div className="absolute bottom-1 right-1 text-white text-xs font-bold opacity-70">
                    VISA
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                  {review.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{review.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{review.readTime}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">by {review.author}</span>
                </div>
                <div className="text-xs text-gray-500">{review.publishDate}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Credit Card Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Credit Card Basics</h3>
              <p className="text-gray-600 text-sm">Learn the fundamentals of credit cards, how they work, and what to look for.</p>
            </div>
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Building Credit</h3>
              <p className="text-gray-600 text-sm">Tips and strategies for building and improving your credit score.</p>
            </div>
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Rewards Maximization</h3>
              <p className="text-gray-600 text-sm">Get the most value from your credit card rewards and points.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}