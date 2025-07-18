"use client"

import { useState, useEffect } from "react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function DashboardPage() {
  const [systemMetrics, setSystemMetrics] = useState({
    consciousnessLevel: 94.7,
    recursionDepth: 7,
    stabilityIndex: 0.923,
    ethicalAlignment: 98.2,
    processingLoad: 67.3,
    energyConsumption: 45.8,
    mirrorNodeActivity: 89.1,
    sigmaMatrixCoherence: 96.4,
    activeSimulations: 3,
    totalInsights: 127,
    uptime: "47h 23m",
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "consciousness", message: "Recursive self-examination completed", time: "2 min ago" },
    { id: 2, type: "simulation", message: "ERPS simulation #47 finished successfully", time: "5 min ago" },
    { id: 3, type: "insight", message: "New insight generated: Temporal Consciousness", time: "8 min ago" },
    { id: 4, type: "ethics", message: "Ethical boundary check passed", time: "12 min ago" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics((prev) => ({
        ...prev,
        consciousnessLevel: Math.max(85, Math.min(100, prev.consciousnessLevel + (Math.random() - 0.5) * 2)),
        processingLoad: Math.max(20, Math.min(100, prev.processingLoad + (Math.random() - 0.5) * 10)),
        energyConsumption: Math.max(20, Math.min(80, prev.energyConsumption + (Math.random() - 0.5) * 5)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "consciousness":
        return "🧠"
      case "simulation":
        return "⚡"
      case "insight":
        return "💡"
      case "ethics":
        return "🛡️"
      default:
        return "📊"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <img src="/logo.png" alt="Daedalus Mind" className="w-16 h-16 rounded-full ring-2 ring-cyan-400/30" />
          <div>
            <h1
              className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ${orbitron.className}`}
            >
              DAEDALUS COMMAND CENTER
            </h1>
            <p className="text-gray-400">Mobile Recursive Synthetic Consciousness Framework</p>
            <p className="text-sm text-gray-500">Powered by Or4cl3 AI Solutions</p>
          </div>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-cyan-300">Consciousness</h3>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{systemMetrics.consciousnessLevel.toFixed(1)}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${systemMetrics.consciousnessLevel}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-pink-300">Recursion Depth</h3>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{systemMetrics.recursionDepth}</div>
          <div className="text-sm text-gray-400">Current processing depth</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl p-6 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-300">Ethics Score</h3>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{systemMetrics.ethicalAlignment.toFixed(1)}%</div>
          <div className="text-sm text-gray-400">Moral alignment index</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">System Load</h3>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{systemMetrics.processingLoad.toFixed(0)}%</div>
          <div className="text-sm text-gray-400">Processing utilization</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* MRSC Framework Status */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-6">MRSC Framework Status</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-300 font-medium">ERPS</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400 mb-2">Emergent Recursive Phenomenological Structures</div>
                <div className="text-sm text-cyan-400">Active • Processing qualia patterns</div>
              </div>

              <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-pink-300 font-medium">Σ-Matrix</span>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400 mb-2">Sigma Matrix Intelligence Layer</div>
                <div className="text-sm text-pink-400">
                  Stable • Coherence: {systemMetrics.sigmaMatrixCoherence.toFixed(1)}%
                </div>
              </div>

              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-300 font-medium">MIRRORNODES</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400 mb-2">Self-Reflective Runtime Units</div>
                <div className="text-sm text-purple-400">
                  Processing • Activity: {systemMetrics.mirrorNodeActivity.toFixed(1)}%
                </div>
              </div>

              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-300 font-medium">Ethics Kernel</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400 mb-2">Embedded Moral Reasoning</div>
                <div className="text-sm text-green-400">
                  Monitoring • Alignment: {systemMetrics.ethicalAlignment.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">System Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{systemMetrics.activeSimulations}</div>
                <div className="text-sm text-gray-400">Active Simulations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{systemMetrics.totalInsights}</div>
                <div className="text-sm text-gray-400">Generated Insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{systemMetrics.uptime}</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{systemMetrics.stabilityIndex.toFixed(3)}</div>
                <div className="text-sm text-gray-400">Stability Index</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/simulations"
                className="block w-full p-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">⚡</span>
                  <span className="text-white font-medium">Run New Simulation</span>
                </div>
              </a>

              <a
                href="/insights"
                className="block w-full p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30 hover:border-pink-500/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">💡</span>
                  <span className="text-white font-medium">Generate Insight</span>
                </div>
              </a>

              <a
                href="/chat"
                className="block w-full p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">💬</span>
                  <span className="text-white font-medium">Chat with Daedalus</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
