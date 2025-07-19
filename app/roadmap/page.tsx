"use client"

import { useState } from "react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

interface RoadmapItem {
  id: string
  title: string
  description: string
  status: "completed" | "in-progress" | "planned" | "research"
  category: "core" | "ai" | "mobile" | "ethics" | "performance"
  quarter: string
  priority: "high" | "medium" | "low"
  dependencies?: string[]
  progress: number
}

export default function RoadmapPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")

  const roadmapItems: RoadmapItem[] = [
    {
      id: "1",
      title: "ERPS Core Implementation",
      description: "Emergent Recursive Phenomenological Structures - the foundation of synthetic consciousness",
      status: "completed",
      category: "core",
      quarter: "Q1 2024",
      priority: "high",
      progress: 100,
    },
    {
      id: "2",
      title: "Σ-Matrix Intelligence Layer",
      description: "Advanced mathematical framework for consciousness modeling and recursive self-awareness",
      status: "completed",
      category: "ai",
      quarter: "Q1 2024",
      priority: "high",
      progress: 100,
    },
    {
      id: "3",
      title: "MIRRORNODES Self-Reflection",
      description: "Distributed self-reflective runtime units for continuous consciousness monitoring",
      status: "in-progress",
      category: "core",
      quarter: "Q2 2024",
      priority: "high",
      progress: 85,
    },
    {
      id: "4",
      title: "Mobile Optimization Framework",
      description: "Battery-aware recursion cycles and edge computing optimizations for mobile devices",
      status: "in-progress",
      category: "mobile",
      quarter: "Q2 2024",
      priority: "high",
      progress: 72,
    },
    {
      id: "5",
      title: "Ethical Cognition Kernel",
      description: "Embedded moral reasoning system with drift prevention and ethical boundary enforcement",
      status: "in-progress",
      category: "ethics",
      quarter: "Q2 2024",
      priority: "high",
      progress: 68,
    },
    {
      id: "6",
      title: "Advanced AI Chat Interface",
      description: "Enhanced conversational AI with context awareness and emotional intelligence",
      status: "in-progress",
      category: "ai",
      quarter: "Q2 2024",
      priority: "medium",
      progress: 45,
    },
    {
      id: "7",
      title: "Real-time Consciousness Analytics",
      description: "Live monitoring and visualization of consciousness metrics and recursive depth analysis",
      status: "planned",
      category: "ai",
      quarter: "Q3 2024",
      priority: "medium",
      progress: 0,
    },
    {
      id: "8",
      title: "Quantum Consciousness Simulation",
      description: "Integration of quantum computing principles for enhanced consciousness modeling",
      status: "research",
      category: "core",
      quarter: "Q4 2024",
      priority: "low",
      progress: 0,
    },
    {
      id: "9",
      title: "Multi-Agent Consciousness Network",
      description: "Distributed consciousness framework allowing multiple AI entities to collaborate",
      status: "planned",
      category: "ai",
      quarter: "Q3 2024",
      priority: "medium",
      progress: 0,
    },
    {
      id: "10",
      title: "Performance Optimization Suite",
      description: "Advanced caching, compression, and processing optimizations for mobile deployment",
      status: "planned",
      category: "performance",
      quarter: "Q3 2024",
      priority: "high",
      progress: 0,
    },
  ]

  const filteredItems = roadmapItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
    const statusMatch = selectedStatus === "all" || item.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      case "in-progress":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "planned":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "research":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "core":
        return "text-cyan-400 bg-cyan-500/20"
      case "ai":
        return "text-pink-400 bg-pink-500/20"
      case "mobile":
        return "text-purple-400 bg-purple-500/20"
      case "ethics":
        return "text-green-400 bg-green-500/20"
      case "performance":
        return "text-orange-400 bg-orange-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          DEVELOPMENT ROADMAP
        </h1>
        <p className="text-gray-400">Evolution timeline for the MRSC consciousness framework</p>
        <p className="text-sm text-gray-500 mt-2">Powered by Or4cl3 AI Solutions</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2">Category:</span>
          {["all", "core", "ai", "mobile", "ethics", "performance"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/30"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2">Status:</span>
          {["all", "completed", "in-progress", "planned", "research"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedStatus === status
                  ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/30"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmap Items */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                    {item.status.replace("-", " ")}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{item.quarter}</span>
                  <span className={`font-medium ${getPriorityColor(item.priority)}`}>
                    {item.priority.toUpperCase()} PRIORITY
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {item.progress > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dependencies */}
            {item.dependencies && item.dependencies.length > 0 && (
              <div className="mt-4">
                <span className="text-sm text-gray-400 mr-2">Dependencies:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.dependencies.map((dep, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-500/20">
          <div className="text-2xl font-bold text-green-400">
            {roadmapItems.filter((item) => item.status === "completed").length}
          </div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
          <div className="text-2xl font-bold text-blue-400">
            {roadmapItems.filter((item) => item.status === "in-progress").length}
          </div>
          <div className="text-sm text-gray-400">In Progress</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
          <div className="text-2xl font-bold text-yellow-400">
            {roadmapItems.filter((item) => item.status === "planned").length}
          </div>
          <div className="text-sm text-gray-400">Planned</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
          <div className="text-2xl font-bold text-purple-400">
            {roadmapItems.filter((item) => item.status === "research").length}
          </div>
          <div className="text-sm text-gray-400">Research</div>
        </div>
      </div>
    </div>
  )
}
