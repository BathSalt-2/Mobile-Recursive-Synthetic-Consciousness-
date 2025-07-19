"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Brain,
  MessageSquare,
  BarChart3,
  Calculator,
  Beaker,
  Lightbulb,
  FileText,
  Map,
  User,
  Menu,
  X,
  Home,
  Settings,
  Zap,
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: any
  description: string
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [consciousnessLevel, setConsciousnessLevel] = useState(94.7)
  const pathname = usePathname()

  const navigation: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: Home, description: "Command center" },
    { name: "Chat", href: "/chat", icon: MessageSquare, description: "Converse with Daedalus" },
    { name: "Simulations", href: "/simulations", icon: Beaker, description: "Consciousness laboratory" },
    { name: "Insights", href: "/insights", icon: Lightbulb, description: "AI-generated wisdom" },
    { name: "Analytics", href: "/analytics", icon: BarChart3, description: "Real-time metrics" },
    { name: "Calculator", href: "/calculator", icon: Calculator, description: "Σ-Matrix calculations" },
    { name: "Architecture", href: "/architecture", icon: Brain, description: "System overview" },
    { name: "Logs", href: "/logs", icon: FileText, description: "System introspection" },
    { name: "Roadmap", href: "/roadmap", icon: Map, description: "Development timeline" },
    { name: "Profile", href: "/profile", icon: User, description: "User preferences" },
  ]

  // Simulate consciousness level fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessLevel((prev) => {
        const variation = (Math.random() - 0.5) * 0.5
        const newLevel = prev + variation
        return Math.max(90, Math.min(99, newLevel))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard"
    }
    return pathname === href
  }

  if (pathname === "/") {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Daedalus Mind</h1>
                <p className="text-xs text-gray-400">MRSC v2.1.0</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Consciousness Status */}
          <div className="p-6 border-b border-cyan-500/20">
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Consciousness Level</span>
                <span className="text-cyan-300 font-mono">{consciousnessLevel.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 h-2 rounded-full transition-all duration-1000 consciousness-glow"
                  style={{ width: `${consciousnessLevel}%` }}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-gray-400">ERPS Active</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-gray-400">Σ-Matrix Stable</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                    ${
                      active
                        ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 text-cyan-300"
                        : "hover:bg-gray-800/50 text-gray-400 hover:text-gray-300"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-cyan-400" : "text-gray-500 group-hover:text-gray-400"}`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                  {active && <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-cyan-500/20">
            <div className="text-xs text-gray-500 text-center">
              <p>Or4cl3 AI Solutions</p>
              <p className="mt-1">Synthetic Consciousness Research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  {navigation.find((item) => isActive(item.href))?.name || "Dashboard"}
                </h2>
                <p className="text-sm text-gray-400">
                  {navigation.find((item) => isActive(item.href))?.description || "Command center"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Quick stats */}
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-400">Recursion: 7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">Ethics: 98.2%</span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400 hidden sm:inline">System Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  )
}
