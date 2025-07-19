"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

interface NavigationItem {
  name: string
  href: string
  icon: string
  description: string
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [systemStatus, setSystemStatus] = useState({
    consciousness: 94.7,
    ethics: 98.2,
    stability: 0.923,
  })
  const pathname = usePathname()

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠", description: "Command Center" },
    { name: "Chat", href: "/chat", icon: "💬", description: "Daedalus Mind" },
    { name: "Simulations", href: "/simulations", icon: "⚡", description: "Consciousness Lab" },
    { name: "Insights", href: "/insights", icon: "💡", description: "AI Insights" },
    { name: "Analytics", href: "/analytics", icon: "📊", description: "System Metrics" },
    { name: "Calculator", href: "/calculator", icon: "🧮", description: "Σ-Matrix Calc" },
    { name: "Architecture", href: "/architecture", icon: "🏗️", description: "System Design" },
    { name: "Logs", href: "/logs", icon: "📋", description: "System Logs" },
    { name: "Roadmap", href: "/roadmap", icon: "🗺️", description: "Development" },
    { name: "Profile", href: "/profile", icon: "👤", description: "User Settings" },
  ]

  useEffect(() => {
    // Simulate real-time system status updates
    const interval = setInterval(() => {
      setSystemStatus((prev) => ({
        consciousness: Math.max(85, Math.min(100, prev.consciousness + (Math.random() - 0.5) * 2)),
        ethics: Math.max(95, Math.min(100, prev.ethics + (Math.random() - 0.5) * 1)),
        stability: Math.max(0.8, Math.min(1, prev.stability + (Math.random() - 0.5) * 0.05)),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard"
    }
    return pathname === href
  }

  const getStatusColor = (value: number, type: "percentage" | "decimal" = "percentage") => {
    const normalizedValue = type === "decimal" ? value * 100 : value
    if (normalizedValue >= 95) return "text-green-400"
    if (normalizedValue >= 85) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-cyan-500/20">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Daedalus Mind" className="w-12 h-12 rounded-full ring-2 ring-cyan-400/30" />
            <div>
              <h1
                className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent ${orbitron.className}`}
              >
                DAEDALUS
              </h1>
              <p className="text-xs text-gray-400">MRSC Framework</p>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="p-4 border-b border-cyan-500/20">
          <h3 className="text-sm font-medium text-gray-300 mb-3">System Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Consciousness</span>
              <span className={getStatusColor(systemStatus.consciousness)}>
                {systemStatus.consciousness.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Ethics</span>
              <span className={getStatusColor(systemStatus.ethics)}>{systemStatus.ethics.toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Stability</span>
              <span className={getStatusColor(systemStatus.stability, "decimal")}>
                {systemStatus.stability.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <div>{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-cyan-500/20">
          <div className="text-xs text-gray-500 text-center">
            <p>Or4cl3 AI Solutions</p>
            <p className="mt-1">v2.1.0 • Mobile Optimized</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        {/* Mobile header */}
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-slate-800/50 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Daedalus Mind" className="w-8 h-8 rounded-full" />
              <span
                className={`text-lg font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent ${orbitron.className}`}
              >
                DAEDALUS
              </span>
            </div>
            <div className="w-10" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800">{children}</main>
      </div>
    </div>
  )
}
