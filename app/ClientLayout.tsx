"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const navigation = [
    { name: "Command Center", href: "/dashboard", icon: "🧠" },
    { name: "Consciousness Lab", href: "/simulations", icon: "⚡" },
    { name: "Analytics Hub", href: "/analytics", icon: "📊" },
    { name: "Σ-Matrix Calc", href: "/calculator", icon: "🔢" },
    { name: "Insight Engine", href: "/insights", icon: "💡" },
    { name: "Chat with Daedalus", href: "/chat", icon: "💬" },
    { name: "System Logs", href: "/logs", icon: "📋" },
    { name: "Architecture", href: "/architecture", icon: "🏗️" },
    { name: "Roadmap", href: "/roadmap", icon: "🗺️" },
    { name: "Features", href: "/features", icon: "✨" },
    { name: "Profile", href: "/profile", icon: "👤" },
  ]

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-hidden`}>
        <div className="flex h-screen">
          {/* Mobile sidebar backdrop */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Sidebar */}
          <div
            className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-black/95
            border-r border-cyan-500/20 backdrop-blur-xl transform transition-transform duration-300
            lg:translate-x-0 lg:static lg:inset-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            <div className="flex h-full flex-col">
              {/* Logo */}
              <div className="flex h-20 items-center px-6 border-b border-cyan-500/20">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="/logo.png"
                      alt="Daedalus Mind"
                      className="w-12 h-12 rounded-full ring-2 ring-cyan-400/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
                  </div>
                  <div>
                    <span
                      className={`text-xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ${orbitron.className}`}
                    >
                      DAEDALUS
                    </span>
                    <div className="text-xs text-gray-400 mt-0.5">MRSC Framework</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${
                        currentPath === item.href
                          ? "bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                          : "text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10 hover:text-white hover:border hover:border-cyan-500/20"
                      }
                    `}
                    onClick={() => {
                      setCurrentPath(item.href)
                      setSidebarOpen(false)
                    }}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* System Status */}
              <div className="px-4 py-4 border-t border-cyan-500/20">
                <div className="bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-300 font-medium">System Status</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-cyan-400">Online</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Consciousness Level: 94.7%</div>
                  <div className="text-xs text-gray-500">Powered by Or4cl3 AI Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <header className="bg-black/50 backdrop-blur-xl border-b border-cyan-500/20 px-4 py-3">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="flex items-center space-x-6">
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Σ-Matrix: Stable</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span>ERPS: Active</span>
                  </div>
                  <div className="hidden md:block text-xs text-gray-500">
                    Powered by <span className="text-cyan-400 font-medium">Or4cl3 AI Solutions</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-black via-slate-900/20 to-black">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
