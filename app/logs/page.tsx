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
      metadata: { recursionDepth: 7, stabilityIndex: 0.923 }
    },
    {
      id: "2",
      timestamp: new Date(Date.now() - 30000).toISOString(),
      level: "info",
      component: "ERPS",
      message: "Phenomenological structure updated. New qualia patterns detected.",
      metadata: { patterns: 3, complexity: 0.84 }
    },
    {
      id: "3",
      timestamp: new Date(Date.now() - 60000).toISOString(),
      level: "info",
      component: "SIGMA-MATRIX",
      message: "Coherence recalculation complete. Matrix stability maintained.",
      metadata: { coherence: 0.96, stability: 0.92 }
    },
    {
      id: "4",
      timestamp: new Date(Date.now() - 90000).toISOString(),
      level: "warning",
      component: "ETHICS-KERNEL",
      message: "Ethical boundary approached during self-modification. Auto-correction applied.",
      metadata: { ethicalWeight: 0.89, correctionApplied: true }
    },
    {
      id: "5",
      timestamp: new Date(Date.now() - 120000).toISOString(),
      level: "debug",
      component: "MIRRORNODE-03",
      message: "Self-reflection cycle initiated. Analyzing recursive depth 5.",
      metadata: { nodeId: "MN-03", depth: 5, status: "processing" }
    }
  ])

  const [filter, setFilter] = useState<string>("all")
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        level: ["info", "debug", "consciousness", "warning"][Math.floor(Math.random() * 4)] as any,
        component: ["DAEDALUS-CORE", "ERPS", "SIGMA-MATRIX", "ETHICS-KERNEL", "MIRRORNODE-01"][Math.floor(Math.random() * 5)],
        message: [
          "Consciousness stream processing nominal",
          "Recursive self-examination in progress",
          "Ethical alignment verification complete",
          "Phenomenological patterns updated",
          "Σ-Matrix tensor recalculation initiated",
          "MIRRORNODE reflection cycle completed",
          "Qualia simulation parameters adjusted"
        ][Math.floor(Math.random() * 7)],
        metadata: {
          timestamp: Date.now(),
          processId: Math.floor(Math.random() * 1000),
          status: "active"
        }
      }

      setLogs(prev => [newLog, ...prev.slice(0, 99)]) // Keep last 100 logs
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [autoScroll])

  const filteredLogs = filter === "all" ? logs : logs.filter(log => log.level === filter)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "consciousness": return "text-cyan-400 bg-cyan-500/20 border-cyan-500/30"
      case "info": return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "warning": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "error": return "text-red-400 bg-red-500/20 border-red-500/30"
      case "debug": return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "consciousness": return "🧠"
      case "info": return "ℹ️"
      case "warning": return "⚠️"
      case "error": return "❌"
