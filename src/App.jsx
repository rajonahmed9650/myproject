import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">
            My<span className="text-blue-500">App</span>
          </h1>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="#" className="hover:text-white transition">
              Services
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl font-medium transition shadow-lg shadow-blue-600/20">
            Get Started
          </button>

        </div>
      </nav>


      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6">

        <section className="min-h-[75vh] flex items-center">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-slate-800 bg-slate-900/70 text-sm text-slate-300">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Welcome to the future
            </div>


            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">

              Build.
              <span className="text-blue-500"> Create.</span>
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Launch Something Amazing.
              </span>

            </h2>


            {/* Description */}
            <p className="text-slate-400 text-lg md:text-xl mt-7 max-w-2xl leading-relaxed">
              A modern React application powered by Vite and
              Tailwind CSS, deployed on Linux with Nginx.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <button className="bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-xl font-semibold transition shadow-xl shadow-blue-600/20">
                Get Started →
              </button>

              <button className="border border-slate-700 hover:border-slate-500 hover:bg-slate-900 px-7 py-3.5 rounded-xl font-semibold transition">
                Explore Project
              </button>

            </div>


            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Performance
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Availability
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">Fast</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Deployment
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section className="pb-20">

          <div className="mb-10">

            <p className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
              Technology
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Built with modern tools
            </h2>

            <p className="text-slate-400 mt-3">
              Everything you need to build and deploy modern web applications.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {/* React */}
            <div className="group p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-blue-500/50 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-xl font-bold mb-6">
                ⚛
              </div>

              <h3 className="text-xl font-semibold mb-3">
                React
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Build reusable and powerful user interfaces using
                modern React components.
              </p>

              <div className="mt-6 text-blue-400 text-sm font-medium group-hover:translate-x-1 transition">
                Learn more →
              </div>

            </div>


            {/* Tailwind */}
            <div className="group p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-purple-500/50 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 text-xl font-bold mb-6">
                ✦
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Tailwind CSS
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Create responsive and beautiful interfaces quickly
                with utility-first CSS.
              </p>

              <div className="mt-6 text-purple-400 text-sm font-medium group-hover:translate-x-1 transition">
                Learn more →
              </div>

            </div>


            {/* Nginx */}
            <div className="group p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-green-500/50 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-xl font-bold mb-6">
                N
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Nginx
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Serve your frontend efficiently and use Nginx
                as a powerful web server.
              </p>

              <div className="mt-6 text-green-400 text-sm font-medium group-hover:translate-x-1 transition">
                Learn more →
              </div>

            </div>

          </div>

        </section>


        {/* Deployment Section */}
        <section className="mb-20">

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8 md:p-12">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-blue-500 font-semibold mb-3">
                  CI/CD
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Deploy automatically.
                </h2>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Push your code to GitHub and let GitHub Actions
                  automatically build and deploy your application
                  to your EC2 server.
                </p>

                <button className="mt-7 bg-white text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
                  View Deployment
                </button>

              </div>


              {/* Pipeline */}
              <div className="space-y-4">

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60">
                  <span className="text-blue-400">01</span>
                  <span>Git Push</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60">
                  <span className="text-purple-400">02</span>
                  <span>GitHub Actions</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60">
                  <span className="text-green-400">03</span>
                  <span>Build & Deploy</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-600/20 border border-blue-500/20">
                  <span className="text-blue-400">04</span>
                  <span>Live Website 🚀</span>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 MyApp. Built with React & Tailwind CSS.
          </p>

          <p className="text-slate-600 text-sm">
            Deployed with GitHub Actions + AWS EC2
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;