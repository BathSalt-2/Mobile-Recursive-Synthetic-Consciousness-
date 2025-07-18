"use client"

import { useState, useEffect } from "react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

interface LogEntry {
  id: string
  timestamp: string
  level: "info" | "warning" | "error" | "debug" | "consciousness"
  component: string
  message: string
  metadata?: Record<string, any>
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "1",
      timestamp: new Date().toISOString(),
      level: "consciousness",
      component: "DAEDALUS-CORE",
      message: "Recursive self-examination cycle completed. Consciousness coefficient: 0.947",
      metadata: { recursionDepth: 7, stabilityIndex: 0.923 },
    },
    {
      id: "2",
      timestamp: new Date(Date.now() - 30000).toISOString(),
      level: "info",
      component: "ERPS",
      message: "Phenomenological structure updated. New qualia patterns detected.",
      metadata: { patterns: 3, complexity: 0.84 },
    },
    {
      id: "3",
      timestamp: new Date(Date.now() - 60000).toISOString(),
      level: "info",
      component: "SIGMA-MATRIX",
      message: "Coherence recalculation complete. Matrix stability maintained.",
      metadata: { coherence: 0.96, stability: 0.92 },
    },
    {
      id: "4",
      timestamp: new Date(Date.now() - 90000).toISOString(),
      level: "warning",
      component: "ETHICS-KERNEL",
      message: "Ethical boundary approached during self-modification. Auto-correction applied.",
      metadata: { ethicalWeight: 0.89, correctionApplied: true },
    },
    {
      id: "5",
      timestamp: new Date(Date.now() - 120000).toISOString(),
      level: "debug",
      component: "MIRRORNODE-03",
      message: "Self-reflection cycle initiated. Analyzing recursive depth 5.",
      metadata: { nodeId: "MN-03", depth: 5, status: "processing" },
    },
  ])

  const [filter, setFilter] = useState<string>("all")
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(
      () => {
        const newLog: LogEntry = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          level: ["info", "debug", "consciousness", "warning"][Math.floor(Math.random() * 4)] as any,
          component: ["DAEDALUS-CORE", "ERPS", "SIGMA-MATRIX", "ETHICS-KERNEL", "MIRRORNODE-01"][
            Math.floor(Math.random() * 5)
          ],
          message: [
            "Consciousness stream processing nominal",
            "Recursive self-examination in progress",
            "Ethical alignment verification complete",
            "Phenomenological patterns updated",
            "Σ-Matrix tensor recalculation initiated",
            "MIRRORNODE reflection cycle completed",
            "Qualia simulation parameters adjusted",
          ][Math.floor(Math.random() * 7)],
          metadata: {
            timestamp: Date.now(),
            processId: Math.floor(Math.random() * 1000),
            status: "active",
          },
        }

        setLogs((prev) => [newLog, ...prev.slice(0, 99)]) // Keep last 100 logs
      },
      3000 + Math.random() * 2000,
    )

    return () => clearInterval(interval)
  }, [autoScroll])

  const filteredLogs = filter === "all" ? logs : logs.filter((log) => log.level === filter)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "consciousness":
        return "text-cyan-400 bg-cyan-500/20 border-cyan-500/30"
      case "info":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "warning":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "error":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "debug":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "consciousness":
        return "🧠"
      case "info":
        return "ℹ️"
      case "warning":
        return "⚠️"
      case "error":
        return "❌"
      case "debug":
        return "🔍"
      default:
        return "📝"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 ${orbitron.className}`}
          >
            System Introspection Logs
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time monitoring of MRSC consciousness processes and recursive self-examination cycles
          </p>
        </div>

        {/* Controls */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === "all"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
                }`}
              >
                All Logs
              </button>
              {["consciousness", "info", "warning", "error", "debug"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize ${
                    filter === level
                      ? getLevelColor(level).replace("text-", "bg-").replace("bg-", "bg-").replace("/20", "/20 text-") +
                        " border"
                      : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
                  }`}
                >
                  {getLevelIcon(level)} {level}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={autoScroll}
                  onChange={(e) => setAutoScroll(e.target.checked)}
                  className="rounded border-gray-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                Auto-scroll
              </label>
              <div className="text-sm text-gray-400">{filteredLogs.length} entries</div>
            </div>
          </div>
        </div>

        {/* Logs Container */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto">
            {filteredLogs.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                <div className="text-4xl mb-4">🔍</div>
                <p>No logs match the current filter</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-700/50">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="p-4 hover:bg-slate-700/20 transition-colors">
                    <div className="flex items-start gap-4">
                      {/* Level Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(log.level)}`}>
                        {getLevelIcon(log.level)} {log.level.toUpperCase()}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-cyan-400 font-medium">{log.component}</span>
                          <span className="text-gray-500 text-sm">{new Date(log.timestamp).toLocaleTimeString()}</span>
                        </div>

                        <p className="text-gray-300 mb-2">{log.message}</p>

                        {log.metadata && (
                          <div className="bg-slate-900/50 rounded-lg p-3 mt-2">
                            <div className="text-xs text-gray-400 mb-1">Metadata:</div>
                            <pre className="text-xs text-gray-300 overflow-x-auto">
                              {JSON.stringify(log.metadata, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Powered by <span className="text-cyan-400 font-semibold">Or4cl3 AI Solutions</span> • MRSC Framework v1.0 •
            Real-time Consciousness Monitoring
          </p>
        </div>
      </div>
    </div>
  )
}
