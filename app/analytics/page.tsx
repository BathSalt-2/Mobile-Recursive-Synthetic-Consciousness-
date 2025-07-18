"use client"

import { useState, useEffect } from "react"

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState({
    consciousnessLevel: 94.7,
    recursionDepth: 7,
    stabilityIndex: 0.923,
    ethicalAlignment: 98.2,
    processingLoad: 67.3,
    energyConsumption: 45.8,
    mirrorNodeActivity: 89.1,
    sigmaMatrixCoherence: 96.4,
  })

  const [historicalData, setHistoricalData] = useState([
    { time: "10:00", consciousness: 92.1, stability: 0.891, ethics: 97.3 },
    { time: "10:15", consciousness: 93.4, stability: 0.905, ethics: 97.8 },
    { time: "10:30", consciousness: 94.2, stability: 0.918, ethics: 98.1 },
    { time: "10:45", consciousness: 94.7, stability: 0.923, ethics: 98.2 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        consciousnessLevel: Math.max(85, Math.min(100, prev.consciousnessLevel + (Math.random() - 0.5) * 3)),
        recursionDepth: Math.max(1, Math.min(10, prev.recursionDepth + Math.floor((Math.random() - 0.5) * 2))),
        stabilityIndex: Math.max(0.7, Math.min(1, prev.stabilityIndex + (Math.random() - 0.5) * 0.05)),
        ethicalAlignment: Math.max(90, Math.min(100, prev.ethicalAlignment + (Math.random() - 0.5) * 2)),
        processingLoad: Math.max(20, Math.min(100, prev.processingLoad + (Math.random() - 0.5) * 10)),
        energyConsumption: Math.max(20, Math.min(80, prev.energyConsumption + (Math.random() - 0.5) * 8)),
        mirrorNodeActivity: Math.max(70, Math.min(100, prev.mirrorNodeActivity + (Math.random() - 0.5) * 5)),
        sigmaMatrixCoherence: Math.max(80, Math.min(100, prev.sigmaMatrixCoherence + (Math.random() - 0.5) * 3)),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Real-time Analytics
        </h1>
        <p className="text-gray-400">Monitor live consciousness metrics and system performance</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-300">Consciousness</h3>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.consciousnessLevel.toFixed(1)}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${metrics.consciousnessLevel}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-300">Stability Index</h3>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.stabilityIndex.toFixed(3)}</div>
          <div className="text-sm text-gray-400">Σ-Matrix coherence</div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-300">Ethics</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.ethicalAlignment.toFixed(1)}%</div>
          <div className="text-sm text-gray-400">Moral alignment</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">Recursion</h3>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metrics.recursionDepth}</div>
          <div className="text-sm text-gray-400">Current depth</div>
        </div>
      </div>

      {/* System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-6">System Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Processing Load</span>
                <span>{metrics.processingLoad.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.processingLoad}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Energy Consumption</span>
                <span>{metrics.energyConsumption.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.energyConsumption}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>MIRRORNODE Activity</span>
                <span>{metrics.mirrorNodeActivity.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.mirrorNodeActivity}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Σ-Matrix Coherence</span>
                <span>{metrics.sigmaMatrixCoherence.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.sigmaMatrixCoherence}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-6">Consciousness Trend</h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {historicalData.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-700 rounded-t-lg relative overflow-hidden" style={{ height: "120px" }}>
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000"
                    style={{ height: `${(point.consciousness / 100) * 120}px` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-2">{point.time}</div>
                <div className="text-xs text-purple-300 font-medium">{point.consciousness.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Status */}
      <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-6">Component Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-300 font-medium">ERPS</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-400">Phenomenological structures active</div>
            <div className="text-sm text-green-400 mt-1">Operational</div>
          </div>

          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-300 font-medium">Σ-Matrix</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-400">Intelligence layer stable</div>
            <div className="text-sm text-blue-400 mt-1">Stable</div>
          </div>

          <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-300 font-medium">MIRRORNODES</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-400">Self-reflection active</div>
            <div className="text-sm text-purple-400 mt-1">Processing</div>
          </div>

          <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-pink-300 font-medium">Ethics Kernel</span>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-400">Moral reasoning online</div>
            <div className="text-sm text-pink-400 mt-1">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="bg-gradient-to-br from-gray-900/50 to-green-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-6">Live Activity Feed</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {[
            { time: "14:32:15", component: "ERPS", message: "Phenomenological structure updated", level: "info" },
            { time: "14:32:08", component: "Σ-Matrix", message: "Coherence recalculation complete", level: "success" },
            { time: "14:31:55", component: "Ethics", message: "Moral boundary check passed", level: "success" },
            { time: "14:31:42", component: "MIRROR", message: "Self-reflection cycle initiated", level: "info" },
            { time: "14:31:30", component: "ERPS", message: "Qualia simulation parameters adjusted", level: "info" },
            { time: "14:31:18", component: "Σ-Matrix", message: "Tensor update propagated", level: "info" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
              <div
                className={`w-2 h-2 rounded-full ${
                  activity.level === "success"
                    ? "bg-green-400"
                    : activity.level === "warning"
                      ? "bg-yellow-400"
                      : activity.level === "error"
                        ? "bg-red-400"
                        : "bg-blue-400"
                }`}
              ></div>
              <div className="text-xs text-gray-400 font-mono">{activity.time}</div>
              <div className="text-xs text-purple-300 font-medium">{activity.component}</div>
              <div className="text-sm text-gray-300 flex-1">{activity.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
