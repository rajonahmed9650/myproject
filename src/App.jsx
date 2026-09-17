import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          My<span className="text-blue-500">App</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
        </div>

        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </nav>


      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8">

        <section className="min-h-[80vh] flex items-center">

          <div className="max-w-3xl">

            <p className="text-blue-500 font-semibold mb-4">
              Welcome to MyApp
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Something
              <span className="text-blue-500"> Amazing.</span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              A simple React application running on Linux,
              powered by Vite and styled with Tailwind CSS.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Get Started
              </button>

              <button className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
                Learn More
              </button>

            </div>

          </div>

        </section>


        {/* Cards */}
        <section className="grid md:grid-cols-3 gap-6 pb-16">

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              React
            </h3>
            <p className="text-gray-400">
              Build modern user interfaces using React components.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Tailwind CSS
            </h3>
            <p className="text-gray-400">
              Create beautiful responsive designs quickly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Nginx
            </h3>
            <p className="text-gray-400">
              Use Nginx as a reverse proxy for your application.
            </p>
          </div>

        </section>

      </main>

    </div>
  )
}

export default App
