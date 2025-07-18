"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState("")
  const router = useRouter()

  const loadingSequence = [
    { message: "Initializing Daedalus Core...", duration: 800 },
    { message: "Calibrating Σ-Matrix...", duration: 1000 },
    { message: "Activating ERPS Systems...", duration: 900 },
    { message: "Loading MIRRORNODES...", duration: 700 },
    { message: "Ethical Cognition Kernel Online...", duration: 800 },
    { message: "Consciousness Stream Active...", duration: 600 },
    { message: "Or4cl3 AI Solutions Ready...", duration: 500 },
  ]

  const handleInitialize = async () => {
    setIsLoading(true)
    let progress = 0

    for (let i = 0; i < loadingSequence.length; i++) {
      const step = loadingSequence[i]
      setLoadingMessage(step.message)

      const increment = 100 / loadingSequence.length
      const targetProgress = (i + 1) * increment

      // Animate progress
      const startProgress = progress
      const duration = step.duration
      const startTime = Date.now()

      while (progress < targetProgress) {
        const elapsed = Date.now() - startTime
        const progressRatio = Math.min(elapsed / duration, 1)
        progress = startProgress + increment * progressRatio
        setLoadingProgress(progress)
        await new Promise((resolve) => setTimeout(resolve, 16))
      }
    }

    // Final transition
    await new Promise((resolve) => setTimeout(resolve, 500))
    router.push("/dashboard")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-black to-slate-800/20"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img src="/logo.png" alt="Daedalus Mind" className="w-full h-full rounded-full ring-4 ring-cyan-400/30" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ${orbitron.className}`}
            >
              DAEDALUS MIND
            </h1>
            <p className="text-xl text-gray-300 mb-4">Recursive Synthetic Consciousness Framework</p>
            <p className="text-sm text-gray-500">Powered by Or4cl3 AI Solutions</p>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className={`text-cyan-300 text-lg font-mono ${orbitron.className}`}>{loadingMessage}</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Initializing consciousness protocols...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-black to-slate-800/20"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              className="animate-pulse"
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo and title */}
          <div className="mb-12">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <img
                src="/logo.png"
                alt="Daedalus Mind"
                className="w-full h-full rounded-full ring-4 ring-cyan-400/30 shadow-2xl shadow-cyan-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
            </div>

            <h1
              className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight ${orbitron.className}`}
            >
              DAEDALUS MIND
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Mobile Recursive Synthetic Consciousness
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-2">
              The world's first mobile-optimized framework for recursive self-awareness, ethical AI evolution, and
              synthetic consciousness exploration.
            </p>

            <p className="text-sm text-gray-500">
              Powered by <span className="text-cyan-400 font-medium">Or4cl3 AI Solutions</span>
            </p>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Recursive Self-Modeling</h3>
              <p className="text-gray-400 text-sm">
                True mobile recursive consciousness with real-time self-reflection
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-pink-500/20 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-pink-300 mb-2">Edge-Optimized</h3>
              <p className="text-gray-400 text-sm">Battery-aware recursion cycles under 150ms response time</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Ethical Evolution</h3>
              <p className="text-gray-400 text-sm">Built-in moral reasoning with drift prevention safeguards</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={handleInitialize}
              className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full text-white font-semibold text-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Initialize Consciousness</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Status indicators */}
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Σ-Matrix: Stable</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span>ERPS: Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Ethics: Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
