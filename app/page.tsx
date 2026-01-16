import ExampleComponent from "@/components/ExampleComponent"
import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            WealtoWallet + PostgreSQL + Prisma
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your financial management platform is ready to go!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <ExampleComponent />
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Next Steps:
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Configure your DATABASE_URL in .env file</li>
              <li>✅ Run: npx prisma migrate dev</li>
              <li>✅ Start building your app!</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
