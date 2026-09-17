import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold shadow-lg shadow-blue-600/30">
              R
            </div>

            <div>
              <h1 className="font-bold text-lg">
                Rajon<span className="text-blue-500">Dev</span>
              </h1>

              <p className="text-xs text-slate-500">
                Developer & DevOps
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#deployment" className="transition hover:text-white">
              Deployment
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Button */}
          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
            Let's Connect
          </button>

        </div>
      </nav>


      {/* Hero */}
      <main id="home" className="mx-auto max-w-7xl px-6">

        <section className="grid min-h-[80vh] items-center gap-16 py-20 lg:grid-cols-2">

          {/* Left */}
          <div>

            {/* Status */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
              Available for new projects
            </div>


            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

              Build.
              <span className="text-blue-500"> Deploy.</span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Scale.
              </span>
            </h2>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              I build modern web applications using React and deploy
              production-ready applications with Linux, Nginx, AWS EC2
              and GitHub Actions.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500">
                View Projects →
              </button>

              <button className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold transition hover:border-slate-500 hover:bg-slate-900">
                Contact Me
              </button>

            </div>


            {/* Stats */}
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Deployment
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">AWS</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Cloud
                </p>
              </div>

            </div>

          </div>


          {/* Right - Terminal */}
          <div className="relative">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-1 shadow-2xl shadow-blue-950/30">

              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">

                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-3 text-xs text-slate-500">
                  ubuntu@myproject:~
                </span>

              </div>


              {/* Terminal Body */}
              <div className="space-y-4 p-6 font-mono text-sm">

                <p>
                  <span className="text-green-400">
                    ubuntu@server
                  </span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~$</span>
                  <span className="ml-2 text-white">
                    git push origin main
                  </span>
                </p>

                <p className="text-slate-500">
                  Deploying application...
                </p>

                <p>
                  <span className="text-blue-400">
                    ✓
                  </span>
                  <span className="ml-2 text-slate-300">
                    GitHub Actions started
                  </span>
                </p>

                <p>
                  <span className="text-blue-400">
                    ✓
                  </span>
                  <span className="ml-2 text-slate-300">
                    npm run build
                  </span>
                </p>

                <p>
                  <span className="text-blue-400">
                    ✓
                  </span>
                  <span className="ml-2 text-slate-300">
                    Build completed
                  </span>
                </p>

                <p>
                  <span className="text-blue-400">
                    ✓
                  </span>
                  <span className="ml-2 text-slate-300">
                    Deploying to AWS EC2
                  </span>
                </p>

                <p>
                  <span className="text-green-400">
                    ✓ Deployment successful
                  </span>
                </p>

                <p className="pt-2">
                  <span className="text-green-400">
                    ubuntu@server
                  </span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~$</span>
                  <span className="ml-2 animate-pulse text-white">
                    _
                  </span>
                </p>

              </div>

            </div>


            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl md:block">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-xl">
                  🚀
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Production Ready
                  </p>

                  <p className="text-xs text-slate-500">
                    CI/CD Pipeline Active
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Skills */}
        <section id="skills" className="py-24">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              My Stack
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Technologies I work with
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Modern technologies for building, deploying and maintaining
              reliable web applications.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* React */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                ⚛️
              </div>

              <h3 className="text-xl font-semibold">
                React
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Modern component-based frontend development.
              </p>

            </div>


            {/* Tailwind */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/50">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                🎨
              </div>

              <h3 className="text-xl font-semibold">
                Tailwind CSS
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Responsive and modern user interface design.
              </p>

            </div>


            {/* AWS */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-2xl">
                ☁️
              </div>

              <h3 className="text-xl font-semibold">
                AWS
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                EC2, VPC, Security Groups and cloud infrastructure.
              </p>

            </div>


            {/* Nginx */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-green-500/50">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-2xl">
                N
              </div>

              <h3 className="text-xl font-semibold">
                Nginx
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Web server, reverse proxy and production deployment.
              </p>

            </div>

          </div>

        </section>


        {/* Deployment */}
        <section id="deployment" className="py-24">

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="p-8 md:p-12">

                <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                  Automation
                </p>

                <h2 className="mt-4 text-4xl font-bold">
                  From Git Push to Production
                </h2>

                <p className="mt-5 leading-relaxed text-slate-400">
                  Every code change can automatically go through the
                  CI/CD pipeline and reach the production server.
                </p>


                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                    GitHub
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                    Actions
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                    AWS EC2
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                    Nginx
                  </span>

                </div>

              </div>


              {/* Right Pipeline */}
              <div className="border-t border-slate-800 bg-slate-950/50 p-8 md:p-12 lg:border-l lg:border-t-0">

                <div className="space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                      01
                    </div>

                    <div>
                      <p className="font-semibold">
                        Git Push
                      </p>

                      <p className="text-sm text-slate-500">
                        Developer pushes new code
                      </p>
                    </div>
                  </div>


                  <div className="ml-5 h-8 border-l border-dashed border-slate-700" />


                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-sm font-bold text-purple-400">
                      02
                    </div>

                    <div>
                      <p className="font-semibold">
                        GitHub Actions
                      </p>

                      <p className="text-sm text-slate-500">
                        CI/CD pipeline starts
                      </p>
                    </div>
                  </div>


                  <div className="ml-5 h-8 border-l border-dashed border-slate-700" />


                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-orange-400">
                      03
                    </div>

                    <div>
                      <p className="font-semibold">
                        Build & Deploy
                      </p>

                      <p className="text-sm text-slate-500">
                        Build React and send to EC2
                      </p>
                    </div>
                  </div>


                  <div className="ml-5 h-8 border-l border-dashed border-slate-700" />


                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-sm font-bold text-green-400">
                      04
                    </div>

                    <div>
                      <p className="font-semibold text-green-400">
                        Live 🚀
                      </p>

                      <p className="text-sm text-slate-500">
                        Nginx serves the application
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section id="contact" className="py-24">

          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent p-10 text-center md:p-16">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Let's Build Something
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
              Ready to turn your idea into a real application?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Build it, deploy it and make it available to the world.
            </p>

            <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500">
              Start a Project →
            </button>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 md:flex-row">

          <div>
            <p className="font-semibold">
              Rajon<span className="text-blue-500">Dev</span>
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Building modern web applications.
            </p>
          </div>

          <p className="text-sm text-slate-600">
            © 2026 RajonDev · React · AWS · Nginx · GitHub Actions
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;