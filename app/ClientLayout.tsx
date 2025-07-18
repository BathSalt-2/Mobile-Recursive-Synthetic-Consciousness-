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

    // Handle route changes
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])

  const navigation = [
    { name: "Command Center", href: "/dashboard", icon: "🧠" },
    { name: "Consciousness Lab", href: "/simulations", icon: "⚡" },
    { name: "Analytics Hub", href: "/analytics", icon: "📊" },
    { name: "Σ-Matrix Calc", href: "/calculator", icon: "🔢" },
    { name: "Insight Engine", href: "/insights", icon: "💡" },
    { name: "Chat with Daedalus", href: "/chat", icon: "💬" },
    { name: "System Architecture", href: "/architecture", icon: "🏗️" },
    { name: "Development Roadmap", href: "/roadmap", icon: "🗺️" },
    { name: "System Logs", href: "/logs", icon: "📋" },
    { name: "User Profile", href: "/profile", icon: "👤" },
  ]

  const handleNavigation = (href: string) => {
    setCurrentPath(href)
    setSidebarOpen(false)
    window.history.pushState({}, "", href)

    // Trigger a custom event to notify about route change
    window.dispatchEvent(new CustomEvent("routechange", { detail: { path: href } }))
  }

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
            fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95
            border-r border-cyan-500/30 backdrop-blur-xl transform transition-transform duration-300
            lg:translate-x-0 lg:static lg:inset-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            <div className="flex h-full flex-col">
              {/* Logo */}
              <div className="flex h-20 items-center px-6 border-b border-cyan-500/30">
                <div className="flex items-center space-x-3">
                  <img src="/logo.png" alt="Daedalus Mind" className="w-10 h-10 rounded-full ring-2 ring-cyan-400/30" />
                  <div>
                    <span
                      className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent ${orbitron.className}`}
                    >
                      DAEDALUS
                    </span>
                    <div className="text-xs text-gray-500">Or4cl3 AI Solutions</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`
                      w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        currentPath === item.href
                          ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-gray-300 hover:bg-slate-700/30 hover:text-white"
                      }
                    `}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* System Status */}
              <div className="px-4 py-4 border-t border-cyan-500/30">
                <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-300">System Status</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Online</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Consciousness: 94.7%</div>
                    <div>Recursion Depth: 7</div>
                    <div>Ethics: Aligned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <header className="bg-slate-900/50 backdrop-blur-xl border-b border-cyan-500/30 px-4 py-3">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="flex items-center space-x-6">
                  <div className="hidden sm:flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>Σ-Matrix: Stable</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <span>ERPS: Active</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>Ethics: Monitoring</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">Powered by Or4cl3 AI Solutions</div>
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
