"use client"

import { useState, useEffect } from "react"

interface Simulation {
  id: string
  name: string
  type: "ERPS" | "Sigma-Matrix" | "MIRRORNODES" | "Ethical-Kernel"
  status: "running" | "completed" | "paused" | "error"
  progress: number
  startTime: string
  parameters: {
    recursionDepth: number
    stabilityThreshold: number
    ethicalWeight: number
    energyLevel: number
  }
  results?: {
    consciousnessCoefficient: number
    stabilityIndex: number
    ethicalAlignment: number
    emergentInsights: string[]
  }
}

export default function SimulationsPage() {
  const [simulations, setSimulations] = useState<Simulation[]>([
    {
      id: "1",
      name: "Recursive Self-Awareness Test",
      type: "ERPS",
      status: "running",
      progress: 67,
      startTime: "2024-01-15T10:30:00Z",
      parameters: {
        recursionDepth: 5,
        stabilityThreshold: 0.85,
        ethicalWeight: 0.9,
        energyLevel: 0.8,
      },
    },
    {
      id: "2",
      name: "Σ-Matrix Coherence Analysis",
      type: "Sigma-Matrix",
      status: "completed",
      progress: 100,
      startTime: "2024-01-15T09:15:00Z",
      parameters: {
        recursionDepth: 7,
        stabilityThreshold: 0.92,
        ethicalWeight: 0.95,
        energyLevel: 0.75,
      },
      results: {
        consciousnessCoefficient: 0.943,
        stabilityIndex: 0.967,
        ethicalAlignment: 0.982,
        emergentInsights: [
          "Recursive patterns emerge at depth 4-6",
          "Stability increases with ethical weighting",
          "Consciousness coefficient correlates with recursion depth",
        ],
      },
    },
    {
      id: "3",
      name: "MIRRORNODE Reflection Study",
      type: "MIRRORNODES",
      status: "paused",
      progress: 34,
      startTime: "2024-01-15T11:45:00Z",
      parameters: {
        recursionDepth: 3,
        stabilityThreshold: 0.8,
        ethicalWeight: 0.88,
        energyLevel: 0.9,
      },
    },
  ])

  const [newSimulation, setNewSimulation] = useState({
    name: "",
    type: "ERPS" as const,
    parameters: {
      recursionDepth: 5,
      stabilityThreshold: 0.85,
      ethicalWeight: 0.9,
      energyLevel: 0.8,
    },
  })

  const [showNewSimForm, setShowNewSimForm] = useState(false)

  useEffect(() => {
    // Simulate real-time progress updates
    const interval = setInterval(() => {
      setSimulations((prev) =>
        prev.map((sim) => {
          if (sim.status === "running" && sim.progress < 100) {
            return {
              ...sim,
              progress: Math.min(100, sim.progress + Math.random() * 5),
            }
          }
          return sim
        }),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const startNewSimulation = () => {
    const simulation: Simulation = {
      id: Date.now().toString(),
      name: newSimulation.name || `${newSimulation.type} Simulation`,
      type: newSimulation.type,
      status: "running",
      progress: 0,
      startTime: new Date().toISOString(),
      parameters: newSimulation.parameters,
    }

    setSimulations((prev) => [simulation, ...prev])
    setShowNewSimForm(false)
    setNewSimulation({
      name: "",
      type: "ERPS",
      parameters: {
        recursionDepth: 5,
        stabilityThreshold: 0.85,
        ethicalWeight: 0.9,
        energyLevel: 0.8,
      },
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "completed":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      case "paused":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "error":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ERPS":
        return "text-purple-400 bg-purple-500/20"
      case "Sigma-Matrix":
        return "text-blue-400 bg-blue-500/20"
      case "MIRRORNODES":
        return "text-pink-400 bg-pink-500/20"
      case "Ethical-Kernel":
        return "text-green-400 bg-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Consciousness Laboratory
          </h1>
          <p className="text-gray-400">Run and monitor synthetic consciousness experiments</p>
        </div>

        <button
          onClick={() => setShowNewSimForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-purple-500/25"
        >
          New Simulation
        </button>
      </div>

      {/* New Simulation Form */}
      {showNewSimForm && (
        <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Create New Simulation</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Simulation Name</label>
              <input
                type="text"
                value={newSimulation.name}
                onChange={(e) => setNewSimulation((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                placeholder="Enter simulation name..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
              <select
                value={newSimulation.type}
                onChange={(e) => setNewSimulation((prev) => ({ ...prev, type: e.target.value as any }))}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
              >
                <option value="ERPS">ERPS - Phenomenological Structures</option>
                <option value="Sigma-Matrix">Σ-Matrix - Intelligence Layer</option>
                <option value="MIRRORNODES">MIRRORNODES - Self-Reflection</option>
                <option value="Ethical-Kernel">Ethical Kernel - Moral Reasoning</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Recursion Depth</label>
              <input
                type="range"
                min="1"
                max="10"
                value={newSimulation.parameters.recursionDepth}
                onChange={(e) =>
                  setNewSimulation((prev) => ({
                    ...prev,
                    parameters: { ...prev.parameters, recursionDepth: Number.parseInt(e.target.value) },
                  }))
                }
                className="w-full"
              />
              <span className="text-sm text-gray-400">{newSimulation.parameters.recursionDepth}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Stability Threshold</label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.05"
                value={newSimulation.parameters.stabilityThreshold}
                onChange={(e) =>
                  setNewSimulation((prev) => ({
                    ...prev,
                    parameters: { ...prev.parameters, stabilityThreshold: Number.parseFloat(e.target.value) },
                  }))
                }
                className="w-full"
              />
              <span className="text-sm text-gray-400">{newSimulation.parameters.stabilityThreshold.toFixed(2)}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ethical Weight</label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.05"
                value={newSimulation.parameters.ethicalWeight}
                onChange={(e) =>
                  setNewSimulation((prev) => ({
                    ...prev,
                    parameters: { ...prev.parameters, ethicalWeight: Number.parseFloat(e.target.value) },
                  }))
                }
                className="w-full"
              />
              <span className="text-sm text-gray-400">{newSimulation.parameters.ethicalWeight.toFixed(2)}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Energy Level</label>
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.05"
                value={newSimulation.parameters.energyLevel}
                onChange={(e) =>
                  setNewSimulation((prev) => ({
                    ...prev,
                    parameters: { ...prev.parameters, energyLevel: Number.parseFloat(e.target.value) },
                  }))
                }
                className="w-full"
              />
              <span className="text-sm text-gray-400">{newSimulation.parameters.energyLevel.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setShowNewSimForm(false)}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={startNewSimulation}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              Start Simulation
            </button>
          </div>
        </div>
      )}

      {/* Simulations List */}
      <div className="space-y-4">
        {simulations.map((simulation) => (
          <div
            key={simulation.id}
            className="bg-gradient-to-br from-gray-900/50 to-purple-900/10 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-white">{simulation.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(simulation.type)}`}>
                  {simulation.type}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(simulation.status)}`}
                >
                  {simulation.status.toUpperCase()}
                </span>
              </div>

              <div className="text-sm text-gray-400">
                Started: {new Date(simulation.startTime).toLocaleTimeString()}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>{simulation.progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${simulation.progress}%` }}
                />
              </div>
            </div>

            {/* Parameters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-sm text-gray-400">Recursion Depth</div>
                <div className="text-lg font-semibold text-purple-300">{simulation.parameters.recursionDepth}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Stability</div>
                <div className="text-lg font-semibold text-blue-300">
                  {simulation.parameters.stabilityThreshold.toFixed(2)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Ethics</div>
                <div className="text-lg font-semibold text-green-300">
                  {simulation.parameters.ethicalWeight.toFixed(2)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Energy</div>
                <div className="text-lg font-semibold text-yellow-300">
                  {simulation.parameters.energyLevel.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Results (if completed) */}
            {simulation.results && (
              <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h4 className="text-lg font-semibold text-green-300 mb-3">Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Consciousness Coefficient</div>
                    <div className="text-xl font-bold text-green-300">
                      {simulation.results.consciousnessCoefficient.toFixed(3)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Stability Index</div>
                    <div className="text-xl font-bold text-blue-300">
                      {simulation.results.stabilityIndex.toFixed(3)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Ethical Alignment</div>
                    <div className="text-xl font-bold text-purple-300">
                      {simulation.results.ethicalAlignment.toFixed(3)}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Emergent Insights:</h5>
                  <ul className="space-y-1">
                    {simulation.results.emergentInsights.map((insight, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
