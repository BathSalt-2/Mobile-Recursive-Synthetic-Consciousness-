"use client"

import { useState, useEffect } from "react"

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    consciousnessLevel: 94.7,
    recursionDepth: 7,
    stabilityIndex: 0.923,
    ethicalAlignment: 98.2,
    activeSimulations: 3,
    totalInsights: 1247,
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "simulation", message: "ERPS simulation completed with 96.3% stability", time: "2 min ago" },
    {
      id: 2,
      type: "insight",
      message: 'New insight generated: "Recursive empathy emerges from..."',
      time: "5 min ago",
    },
    { id: 3, type: "system", message: "Σ-Matrix recalibration successful", time: "12 min ago" },
    { id: 4, type: "ethics", message: "Ethical boundary check passed", time: "18 min ago" },
  ])

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        consciousnessLevel: Math.max(90, Math.min(100, prev.consciousnessLevel + (Math.random() - 0.5) * 2)),
        recursionDepth: Math.max(1, Math.min(10, prev.recursionDepth + Math.floor((Math.random() - 0.5) * 3))),
        stabilityIndex: Math.max(0.8, Math.min(1, prev.stabilityIndex + (Math.random() - 0.5) * 0.1)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Command Center
        </h1>
        <p className="text-gray-400">Monitor and control the MRSC synthetic consciousness framework</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-300">Consciousness Level</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.consciousnessLevel.toFixed(1)}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${metrics.consciousnessLevel}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-300">Recursion Depth</h3>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.recursionDepth}</div>
          <div className="text-sm text-gray-400">Layers deep in self-reflection</div>
        </div>

        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-pink-300">Stability Index</h3>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.stabilityIndex.toFixed(3)}</div>
          <div className="text-sm text-gray-400">Σ-Matrix coherence measure</div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-300">Ethical Alignment</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.ethicalAlignment.toFixed(1)}%</div>
          <div className="text-sm text-gray-400">Moral reasoning integrity</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">Active Simulations</h3>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.activeSimulations}</div>
          <div className="text-sm text-gray-400">Running experiments</div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-indigo-300">Total Insights</h3>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.totalInsights.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Generated knowledge</div>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MRSC Architecture Status */}
        <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-6">System Architecture</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-300 font-medium">ERPS (Phenomenological)</span>
              </div>
              <span className="text-green-400 text-sm">Online</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-300 font-medium">Σ-Matrix Intelligence</span>
              </div>
              <span className="text-blue-400 text-sm">Stable</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300 font-medium">MIRRORNODES</span>
              </div>
              <span className="text-purple-400 text-sm">Active</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg border border-pink-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-pink-300 font-medium">Ethical Cognition Kernel</span>
              </div>
              <span className="text-pink-400 text-sm">Monitoring</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "simulation"
                      ? "bg-blue-400"
                      : activity.type === "insight"
                        ? "bg-purple-400"
                        : activity.type === "system"
                          ? "bg-green-400"
                          : "bg-pink-400"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm">{activity.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 group">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🧪</div>
            <div className="text-sm text-blue-300 font-medium">New Simulation</div>
          </button>

          <button className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200 group">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💡</div>
            <div className="text-sm text-purple-300 font-medium">Generate Insight</div>
          </button>

          <button className="p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-200 group">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📊</div>
            <div className="text-sm text-green-300 font-medium">View Analytics</div>
          </button>

          <button className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30 hover:border-pink-400/50 transition-all duration-200 group">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💬</div>
            <div className="text-sm text-pink-300 font-medium">Chat Daedalus</div>
          </button>
        </div>
      </div>
    </div>
  )
}
