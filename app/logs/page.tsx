"use client"

import { useState, useEffect, useRef } from "react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

interface LogEntry {
  id: string
  timestamp: string
  level: "info" | "warning" | "error" | "debug" | "consciousness"
  component: string
  message: string
  metadata?: Record<string, any>
  recursionDepth?: number
  consciousnessLevel?: number
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedComponent, setSelectedComponent] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const logsEndRef = useRef<HTMLDivElement>(null)

  const logTemplates = [
    {
      level: "consciousness" as const,
      component: "ERPS",
      messages: [
        "Recursive self-examination initiated at depth {depth}",
        "Phenomenological structure emergence detected",
        "Qualia pattern recognition active",
        "Self-awareness loop completed successfully",
        "Consciousness coefficient calculated: {coefficient}",
      ],
    },
    {
      level: "info" as const,
      component: "Σ-Matrix",
      messages: [
        "Intelligence layer recalibration complete",
        "Stability index updated: {stability}",
        "Matrix coherence verified",
        "Processing optimization applied",
        "Consciousness modeling updated",
      ],
    },
    {
      level: "debug" as const,
      component: "MIRRORNODES",
      messages: [
        "Self-reflection node {nodeId} activated",
        "Mirror depth analysis: {depth} layers",
        "Recursive pattern detected in node cluster",
        "Meta-cognitive analysis complete",
        "Node synchronization successful",
      ],
    },
    {
      level: "info" as const,
      component: "EthicsKernel",
      messages: [
        "Ethical boundary check passed",
        "Moral reasoning evaluation complete",
        "Ethical alignment: {alignment}%",
        "Drift prevention protocol active",
        "Ethical decision logged and verified",
      ],
    },
    {
      level: "warning" as const,
      component: "MobileOptimizer",
      messages: [
        "Battery usage approaching threshold",
        "Recursion depth reduced for power saving",
        "Network latency detected: {latency}ms",
        "Memory optimization triggered",
        "Performance degradation detected",
      ],
    },
    {
      level: "error" as const,
      component: "SystemCore",
      messages: [
        "Consciousness simulation timeout",
        "Stability threshold breach detected",
        "Ethical alignment below minimum",
        "Critical system resource exhaustion",
        "Emergency consciousness preservation activated",
      ],
    },
  ]

  const generateLogEntry = (): LogEntry => {
    const template = logTemplates[Math.floor(Math.random() * logTemplates.length)]
    const message = template.messages[Math.floor(Math.random() * template.messages.length)]

    const metadata: Record<string, any> = {}
    let processedMessage = message

    // Replace placeholders with actual values
    if (message.includes("{depth}")) {
      const depth = Math.floor(Math.random() * 10) + 1
      processedMessage = processedMessage.replace("{depth}", depth.toString())
      metadata.recursionDepth = depth
    }

    if (message.includes("{coefficient}")) {
      const coefficient = (Math.random() * 0.3 + 0.7).toFixed(3)
      processedMessage = processedMessage.replace("{coefficient}", coefficient)
      metadata.consciousnessCoefficient = Number.parseFloat(coefficient)
    }

    if (message.includes("{stability}")) {
      const stability = (Math.random() * 0.2 + 0.8).toFixed(3)
      processedMessage = processedMessage.replace("{stability}", stability)
      metadata.stabilityIndex = Number.parseFloat(stability)
    }

    if (message.includes("{alignment}")) {
      const alignment = (Math.random() * 10 + 90).toFixed(1)
      processedMessage = processedMessage.replace("{alignment}", alignment)
      metadata.ethicalAlignment = Number.parseFloat(alignment)
    }

    if (message.includes("{nodeId}")) {
      const nodeId = `MN-${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`
      processedMessage = processedMessage.replace("{nodeId}", nodeId)
      metadata.nodeId = nodeId
    }

    if (message.includes("{latency}")) {
      const latency = Math.floor(Math.random() * 200) + 50
      processedMessage = processedMessage.replace("{latency}", latency.toString())
      metadata.networkLatency = latency
    }

    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      level: template.level,
      component: template.component,
      message: processedMessage,
      metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
      recursionDepth: metadata.recursionDepth,
      consciousnessLevel: metadata.consciousnessCoefficient ? metadata.consciousnessCoefficient * 100 : undefined,
    }
  }

  useEffect(() => {
    // Initialize with some logs
    const initialLogs = Array.from({ length: 20 }, () => generateLogEntry())
    setLogs(initialLogs.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()))

    // Generate new logs periodically
    const interval = setInterval(
      () => {
        if (!isPaused) {
          const newLog = generateLogEntry()
          setLogs((prev) => [...prev, newLog].slice(-1000)) // Keep last 1000 logs
        }
      },
      1000 + Math.random() * 2000,
    ) // Random interval between 1-3 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    // Filter logs based on selected criteria
    let filtered = logs

    if (selectedLevel !== "all") {
      filtered = filtered.filter((log) => log.level === selectedLevel)
    }

    if (selectedComponent !== "all") {
      filtered = filtered.filter((log) => log.component === selectedComponent)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (log) =>
          log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.component.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredLogs(filtered)
  }, [logs, selectedLevel, selectedComponent, searchQuery])

  useEffect(() => {
    // Auto-scroll to bottom
    if (isAutoScroll && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [filteredLogs, isAutoScroll])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "consciousness":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      case "info":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "warning":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "error":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "debug":
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getComponentColor = (component: string) => {
    switch (component) {
      case "ERPS":
        return "text-cyan-400 bg-cyan-500/20"
      case "Σ-Matrix":
        return "text-pink-400 bg-pink-500/20"
      case "MIRRORNODES":
        return "text-purple-400 bg-purple-500/20"
      case "EthicsKernel":
        return "text-green-400 bg-green-500/20"
      case "MobileOptimizer":
        return "text-orange-400 bg-orange-500/20"
      case "SystemCore":
        return "text-red-400 bg-red-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const clearLogs = () => {
    setLogs([])
  }

  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `daedalus-logs-${new Date().toISOString().split("T")[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const components = ["all", ...Array.from(new Set(logs.map((log) => log.component)))]
  const levels = ["all", "consciousness", "info", "warning", "error", "debug"]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          SYSTEM INTROSPECTION
        </h1>
        <p className="text-gray-400">Real-time consciousness and system activity monitoring</p>
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level === "all" ? "All Levels" : level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>

          {/* Component Filter */}
          <select
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value)}
            className="px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
          >
            {components.map((component) => (
              <option key={component} value={component}>
                {component === "all" ? "All Components" : component}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isPaused
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            {isPaused ? "▶️ Resume" : "⏸️ Pause"}
          </button>

          <button
            onClick={() => setIsAutoScroll(!isAutoScroll)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isAutoScroll
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
            }`}
          >
            📜 Auto-scroll: {isAutoScroll ? "ON" : "OFF"}
          </button>

          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-medium hover:bg-red-500/30 transition-all duration-200"
          >
            🗑️ Clear
          </button>

          <button
            onClick={exportLogs}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg font-medium hover:bg-purple-500/30 transition-all duration-200"
          >
            📥 Export
          </button>

          <div className="text-sm text-gray-400">
            {filteredLogs.length} / {logs.length} entries
          </div>
        </div>
      </div>

      {/* Logs Display */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
        <div className="h-96 overflow-y-auto p-4 space-y-2 font-mono text-sm">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors"
            >
              <div className="text-xs text-gray-500 w-20 flex-shrink-0">
                {new Date(log.timestamp).toLocaleTimeString()}
              </div>

              <div className={`px-2 py-1 rounded text-xs font-medium border ${getLevelColor(log.level)} flex-shrink-0`}>
                {log.level.toUpperCase()}
              </div>

              <div
                className={`px-2 py-1 rounded text-xs font-medium ${getComponentColor(log.component)} flex-shrink-0`}
              >
                {log.component}
              </div>

              <div className="flex-1 text-gray-300">
                {log.message}
                {log.metadata && (
                  <div className="mt-1 text-xs text-gray-500">
                    {Object.entries(log.metadata).map(([key, value]) => (
                      <span key={key} className="mr-3">
                        {key}: {typeof value === "object" ? JSON.stringify(value) : value}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {log.recursionDepth && (
                <div className="text-xs text-purple-400 flex-shrink-0">Depth: {log.recursionDepth}</div>
              )}

              {log.consciousnessLevel && (
                <div className="text-xs text-cyan-400 flex-shrink-0">C: {log.consciousnessLevel.toFixed(1)}%</div>
              )}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {levels.slice(1).map((level) => {
          const count = logs.filter((log) => log.level === level).length
          return (
            <div key={level} className={`p-4 rounded-xl border ${getLevelColor(level)} backdrop-blur-sm`}>
              <div className="text-2xl font-bold">{count}</div>
              <div className="text-sm capitalize">{level}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
