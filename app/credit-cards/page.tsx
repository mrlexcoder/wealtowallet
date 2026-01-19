import Header from "@/components/Header"

export default function CreditCardsPage() {
  const creditCardCategories = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "Top credit cards",
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
      link: "/credit-cards/compare"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/>
        </svg>
      ),
      title: "Top balance transfer credit cards",
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
      link: "/credit-cards/zero-apr"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
          <polyline points="7.5,19.79 7.5,14.6 3,12"/>
          <polyline points="21,12 16.5,14.6 16.5,19.79"/>
        </svg>
      ),
      title: "Top travel rewards cards",
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
      link: "/credit-cards/cash-back"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
      title: "Top rewards credit cards",
      link: "/credit-cards/rewards"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Top airline credit cards",
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
      link: "/credit-cards/student"
    }
  ]

  const reviews = [
    {
      image: "chase-sapphire",
      title: "Chase Sapphire Preferred Review: Strong Option for Travel Rewards",
      author: "Gregory Karp, Claire Tsosie",
      cardColor: "from-blue-900 to-blue-700"
    },
    {
      image: "citi-double-cash", 
      title: "Citi Double Cash Review: A Solid Choice for Everyday Spending",
      author: "Sara Rathner",
      cardColor: "from-blue-600 to-teal-500"
    },
    {
      image: "wells-fargo-reflect",
      title: "Wells Fargo Reflect® Card Review: An Extended Break From Interest", 
      author: "Funto Omojola",
      cardColor: "from-red-600 to-red-500"
    },
    {
      image: "amex-platinum",
      title: "American Express Platinum Review: Top-Notch Lounge Access, Big Credits",
      author: "Sally French",
      cardColor: "from-gray-600 to-gray-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="hover:text-emerald-600 cursor-pointer">Home</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-16 bg-white bg-opacity-10 transform rotate-45 -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 bg-opacity-20 transform rotate-45 translate-x-16 translate-y-16"></div>
        <div className="absolute top-4 left-4 text-xs bg-white bg-opacity-20 px-2 py-1">
          Advertiser disclosure
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Credit Cards</h1>
            <p className="text-xl leading-relaxed opacity-95">
              What are credit cards? How do they work? How do you decide among cash back, travel points and other options — 
              and then maximize the value you get from your card? Browse our card picks, read our reviews and learn more 
              about rewards, points, interest rates and how to apply — all on WealtoWallet.
            </p>
          </div>
        </div>
      </div>

      {/* Find a credit card section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Find a credit card</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditCardCategories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="block border border-gray-200 p-8 hover:shadow-lg hover:border-emerald-200 transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-blue-600 group-hover:text-emerald-600 transition-colors">
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Video</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <div className="relative bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-40 transition-all cursor-pointer">
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
              <p className="text-gray-700 leading-relaxed text-lg">
                Are credit card annual fees worth it? In this video, WealtoWallet Credit Card expert Sally French breaks down 
                why it often makes sense to pay an annual fee for a credit card, and when it may not.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Read our reviews section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Read our reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <article key={index} className="flex gap-4 cursor-pointer hover:shadow-lg transition-all p-4 border border-transparent hover:border-gray-200 group">
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
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">by {review.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Credit Card Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Credit Card Basics</h3>
              <p className="text-gray-600 text-sm">Learn the fundamentals of credit cards, how they work, and what to look for.</p>
            </div>
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Building Credit</h3>
              <p className="text-gray-600 text-sm">Tips and strategies for building and improving your credit score.</p>
            </div>
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3 text-emerald-600">Rewards Maximization</h3>
              <p className="text-gray-600 text-sm">Get the most value from your credit card rewards and points.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}    