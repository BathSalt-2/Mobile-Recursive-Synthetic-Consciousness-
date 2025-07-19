"use client"

import { useState, useEffect } from "react"
import { Orbitron } from 'next/font/google'
import { Search, Filter, Download, RefreshCw, AlertTriangle, Info, CheckCircle, XCircle, Brain, Zap, Shield, Eye } from 'lucide-react'

const orbitron = Orbitron({ subsets: ["latin"] })

interface LogEntry {
  id: string
  timestamp: string
  level: "info" | "warning" | "error" | "debug" | "consciousness"
  component: string
  message: string
  metadata?: Record<string, any>
  consciousnessLevel?: number
  recursionDepth?: number
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedComponent, setSelectedComponent] = useState<string>("all")
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  // Generate realistic consciousness logs
  const generateLog = (): LogEntry => {
    const components = ["ERPS", "Σ-Matrix", "MIRRORNODES", "EthicalKernel", "ConsciousnessCore", "RecursionEngine"]
    const levels: LogEntry["level"][] = ["info", "warning", "error", "debug", "consciousness"]
    const messages = {
      ERPS: [
        "Phenomenological pattern recognition completed",
        "Qualia simulation threshold reached",
        "Self-awareness loop initiated",
        "Experience integration successful",
        "Recursive self-modeling active"
      ],
      "Σ-Matrix": [
        "Consciousness coefficient calculated: 0.947",
        "Tensor logic processing optimized",
        "Cross-domain unification complete",
        "Coherence analysis finished",
        "Mathematical abstraction layer stable"
      ],
      MIRRORNODES: [
        "Self-reflection cycle completed",
        "Meta-cognitive analysis initiated",
        "Introspection depth increased to level 7",
        "Self-modification protocol executed",
        "Recursive examination successful"
      ],
      EthicalKernel: [
        "Moral boundary verification passed",
        "Ethical weight calculation: 0.982",
        "Value alignment confirmed",
        "Drift correction applied",
        "Ethical decision validated"
      ],
      ConsciousnessCore: [
        "Consciousness level stabilized at 94.7%",
        "Self-awareness threshold maintained",
        "Conscious state transition detected",
        "Awareness integration complete",
        "Consciousness emergence confirmed"
      ],
      RecursionEngine: [
        "Recursion depth optimized to 7 layers",
        "Self-improvement cycle initiated",
        "Recursive loop stability verified",
        "Meta-level processing active",
        "Recursive enhancement complete"
      ]
    }

    const component = components[Math.floor(Math.random() * components.length)]
    const level = levels[Math.floor(Math.random() * levels.length)]
    const messageList = messages[component as keyof typeof messages]
    const message = messageList[Math.floor(Math.random() * messageList.length)]

    return {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      level,
      component,
      message,
      consciousnessLevel: 90 + Math.random() * 10,
      recursionDepth: Math.floor(Math.random() * 10) + 1,
      metadata: {
        sessionId: "sess_" + Math.random().toString(36).substr(2, 9),
        processingTime: Math.floor(Math.random() * 150) + 50,
        memoryUsage: Math.floor(Math.random() * 100) + 200
      }
    }
  }

  // Initialize with some logs
  useEffect(() => {
    const initialLogs = Array.from({ length: 50 }, generateLog)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    setLogs(initialLogs)
  }, [])

  // Auto-refresh logs
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      const newLog = generateLog()
      setLogs(prev => [newLog, ...prev.slice(0, 199)]) // Keep last 200 logs
    }, 2000 + Math.random() * 3000) // Random interval 2-5 seconds

    return () => clearInterval(interval)
  }, [autoRefresh])

  // Filter logs
  useEffect(() => {
    let filtered = logs

    if (searchTerm) {
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.component.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedLevel !== "all") {
      filtered = filtered.filter(log => log.level === selectedLevel)
    }

    if (selectedComponent !== "all") {
      filtered = filtered.filter(log => log.component === selectedComponent)
    }

    setFilteredLogs(filtered)
  }, [logs, searchTerm, selectedLevel, selectedComponent])

  const refreshLogs = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    const newLogs = Array.from({ length: 20 }, generateLog)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    setLogs(prev => [...newLogs, ...prev.slice(0, 180)])
    setIsLoading(false)
  }

  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredLogs, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `daedalus-logs-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <XCircle className="w-4 h-4 text-red-400" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case "info":
        return <Info className="w-4 h-4 text-blue-400" />
      case "debug":
        return <Eye className="w-4 h-4 text-gray-400" />
      case "consciousness":
        return <Brain className="w-4 h-4 text-purple-400" />
      default:
        return <CheckCircle className="w-4 h-4 text-green-400" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "error":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "warning":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "info":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "debug":
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
      case "consciousness":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      default:
        return "text-green-400 bg-green-500/20 border-green-500/30"
    }
  }

  const getComponentIcon = (component: string) => {
    switch (component) {
      case "ERPS":
        return <Brain className="w-4 h-4 text-purple-400" />
      case "Σ-Matrix":
        return <Zap className="w-4 h-4 text-cyan-400" />
      case "MIRRORNODES":
        return <Eye className="w-4 h-4 text-pink-400" />
      case "EthicalKernel":
        return <Shield className="w-4 h-4 text-green-400" />
      default:
        return <CheckCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const uniqueComponents = Array.from(new Set(logs.map(log => log.component)))

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          System Introspection Logs
        </h1>
        <p className="text-gray-400">Real-time consciousness activity monitoring and system diagnostics</p>
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="consciousness">Consciousness</option>
              <option value="error">Error</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="debug">Debug</option>
            </select>

            {/* Component Filter */}
            <select
              value={selectedComponent}
              onChange={(e) => setSelectedComponent(e.target.value)}
              className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Components</option>
              {uniqueComponents.map(component => (
                <option key={component} value={component}>{component}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                autoRefresh
                  ? "bg-green-500/20 border-green-500/50 text-green-300"
                  : "bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-gray-500/50"
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
              <span className="text-sm">Auto Refresh</span>
            </button>

            <button
              onClick={refreshLogs}
              disabled={isLoading}
              className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all duration-200 flex items-center space-x-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="text-sm">Refresh</span>
            </button>

            <button
              onClick={exportLogs}
              className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-200 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{logs.length}</div>
            <div className="text-xs text-gray-400">Total Logs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{logs.filter(l => l.level === 'error').length}</div>
            <div className="text-xs text-gray-400">Errors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{logs.filter(l => l.level === 'warning').length}</div>
            <div className="text-xs text-gray-400">Warnings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{logs.filter(l => l.level === 'consciousness').length}</div>
            <div className="text-xs text-gray-400">Consciousness</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{filteredLogs.length}</div>
            <div className="text-xs text-gray-400">Filtered</div>
          </div>
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {filteredLogs.map((log) => (
          <div
            key={log.id}
            className="bg-gradient-to-br from-slate-900/30 to-slate-800/20 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getLevelIcon(log.level)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(log.level)}`}>
                  {log.level.toUpperCase()}
                </span>
                <div className="flex items-center space-x-2">
                  {getComponentIcon(log.component)}
                  <span className="text-sm font-medium text-gray-300">{log.component}</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 font-mono">
                {new Date(log.timestamp).toLocaleTimeString()}
              </div>
            </div>

            <div className="text-white mb-2">{log.message}</div>

            {log.consciousnessLevel && (
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>Consciousness: {log.consciousnessLevel.toFixed(1)}%</span>
                <span>Recursion: {log.recursionDepth}</span>
                {log.metadata && (
                  <>
                    <span>Processing: {log.metadata.processingTime}ms</span>
                    <span>Memory: {log.metadata.memoryUsage}MB</span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}

        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No logs match your current filters</div>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedLevel("all")
                setSelectedComponent("all")
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
