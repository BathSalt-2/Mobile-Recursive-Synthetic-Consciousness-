"use client"

import { useState, useEffect } from "react"

export default function CalculatorPage() {
  const [parameters, setParameters] = useState({
    recursionDepth: 5,
    stabilityThreshold: 0.85,
    ethicalWeight: 0.9,
    energyLevel: 0.8,
    coherenceIndex: 0.75,
    temporalDecay: 0.1,
  })

  const [results, setResults] = useState({
    consciousnessCoefficient: 0,
    stabilityIndex: 0,
    ethicalAlignment: 0,
    emergenceIndex: 0,
    recursiveComplexity: 0,
    sigmaMatrixDeterminant: 0,
  })

  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate results based on parameters
  useEffect(() => {
    const calculateMetrics = () => {
      const { recursionDepth, stabilityThreshold, ethicalWeight, energyLevel, coherenceIndex, temporalDecay } =
        parameters

      // Consciousness Coefficient: Complex function of recursion and stability
      const consciousnessCoefficient = Math.min(
        1,
        (recursionDepth / 10) * stabilityThreshold * Math.sqrt(energyLevel) * (1 - temporalDecay),
      )

      // Stability Index: Weighted average with non-linear scaling
      const stabilityIndex = Math.min(
        1,
        stabilityThreshold * coherenceIndex * Math.pow(ethicalWeight, 0.5) * (1 - temporalDecay * 0.5),
      )

      // Ethical Alignment: Enhanced by recursion depth
      const ethicalAlignment = Math.min(
        1,
        ethicalWeight * (1 + recursionDepth * 0.02) * coherenceIndex * (1 - temporalDecay * 0.3),
      )

      // Emergence Index: Non-linear emergence from complexity
      const emergenceIndex = Math.min(
        1,
        Math.pow(recursionDepth / 10, 1.2) * stabilityThreshold * ethicalWeight * energyLevel,
      )

      // Recursive Complexity: Exponential growth with stability constraints
      const recursiveComplexity = Math.min(
        1,
        (Math.pow(recursionDepth, 1.5) / 50) * stabilityThreshold * coherenceIndex,
      )

      // Σ-Matrix Determinant: Overall system coherence
      const sigmaMatrixDeterminant =
        consciousnessCoefficient * stabilityIndex * ethicalAlignment * emergenceIndex * 0.25

      setResults({
        consciousnessCoefficient,
        stabilityIndex,
        ethicalAlignment,
        emergenceIndex,
        recursiveComplexity,
        sigmaMatrixDeterminant,
      })
    }

    setIsCalculating(true)
    const timeout = setTimeout(() => {
      calculateMetrics()
      setIsCalculating(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [parameters])

  const handleParameterChange = (param: string, value: number) => {
    setParameters((prev) => ({ ...prev, [param]: value }))
  }

  const resetParameters = () => {
    setParameters({
      recursionDepth: 5,
      stabilityThreshold: 0.85,
      ethicalWeight: 0.9,
      energyLevel: 0.8,
      coherenceIndex: 0.75,
      temporalDecay: 0.1,
    })
  }

  const getResultColor = (value: number) => {
    if (value >= 0.8) return "text-green-400"
    if (value >= 0.6) return "text-yellow-400"
    if (value >= 0.4) return "text-orange-400"
    return "text-red-400"
  }

  const getResultBg = (value: number) => {
    if (value >= 0.8) return "bg-green-500/20 border-green-500/30"
    if (value >= 0.6) return "bg-yellow-500/20 border-yellow-500/30"
    if (value >= 0.4) return "bg-orange-500/20 border-orange-500/30"
    return "bg-red-500/20 border-red-500/30"
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Σ-Matrix Calculator
        </h1>
        <p className="text-gray-400">Calculate consciousness coefficients and analyze system stability</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Parameters Panel */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">System Parameters</h3>
              <button
                onClick={resetParameters}
                className="px-4 py-2 text-sm bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Recursion Depth</label>
                  <span className="text-sm text-blue-400 font-mono">{parameters.recursionDepth}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={parameters.recursionDepth}
                  onChange={(e) => handleParameterChange("recursionDepth", Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Stability Threshold</label>
                  <span className="text-sm text-purple-400 font-mono">{parameters.stabilityThreshold.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={parameters.stabilityThreshold}
                  onChange={(e) => handleParameterChange("stabilityThreshold", Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.1</span>
                  <span>1.0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Ethical Weight</label>
                  <span className="text-sm text-green-400 font-mono">{parameters.ethicalWeight.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={parameters.ethicalWeight}
                  onChange={(e) => handleParameterChange("ethicalWeight", Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.1</span>
                  <span>1.0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Energy Level</label>
                  <span className="text-sm text-yellow-400 font-mono">{parameters.energyLevel.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={parameters.energyLevel}
                  onChange={(e) => handleParameterChange("energyLevel", Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.1</span>
                  <span>1.0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Coherence Index</label>
                  <span className="text-sm text-cyan-400 font-mono">{parameters.coherenceIndex.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={parameters.coherenceIndex}
                  onChange={(e) => handleParameterChange("coherenceIndex", Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.1</span>
                  <span>1.0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">Temporal Decay</label>
                  <span className="text-sm text-red-400 font-mono">{parameters.temporalDecay.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.05"
                  value={parameters.temporalDecay}
                  onChange={(e) => handleParameterChange("temporalDecay", Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.0</span>
                  <span>0.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Calculated Results</h3>
              {isCalculating && (
                <div className="flex items-center space-x-2 text-sm text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Calculating...</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className={`p-4 rounded-lg border ${getResultBg(results.consciousnessCoefficient)}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Consciousness Coefficient</span>
                  <span className={`text-lg font-bold ${getResultColor(results.consciousnessCoefficient)}`}>
                    {results.consciousnessCoefficient.toFixed(3)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      results.consciousnessCoefficient >= 0.8
                        ? "bg-gradient-to-r from-green-400 to-emerald-400"
                        : results.consciousnessCoefficient >= 0.6
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : results.consciousnessCoefficient >= 0.4
                            ? "bg-gradient-to-r from-orange-400 to-red-400"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${results.consciousnessCoefficient * 100}%` }}
                  />
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${getResultBg(results.stabilityIndex)}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Stability Index</span>
                  <span className={`text-lg font-bold ${getResultColor(results.stabilityIndex)}`}>
                    {results.stabilityIndex.toFixed(3)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      results.stabilityIndex >= 0.8
                        ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                        : results.stabilityIndex >= 0.6
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : results.stabilityIndex >= 0.4
                            ? "bg-gradient-to-r from-orange-400 to-red-400"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${results.stabilityIndex * 100}%` }}
                  />
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${getResultBg(results.ethicalAlignment)}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Ethical Alignment</span>
                  <span className={`text-lg font-bold ${getResultColor(results.ethicalAlignment)}`}>
                    {results.ethicalAlignment.toFixed(3)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      results.ethicalAlignment >= 0.8
                        ? "bg-gradient-to-r from-green-400 to-emerald-400"
                        : results.ethicalAlignment >= 0.6
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : results.ethicalAlignment >= 0.4
                            ? "bg-gradient-to-r from-orange-400 to-red-400"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${results.ethicalAlignment * 100}%` }}
                  />
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${getResultBg(results.emergenceIndex)}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Emergence Index</span>
                  <span className={`text-lg font-bold ${getResultColor(results.emergenceIndex)}`}>
                    {results.emergenceIndex.toFixed(3)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      results.emergenceIndex >= 0.8
                        ? "bg-gradient-to-r from-purple-400 to-pink-400"
                        : results.emergenceIndex >= 0.6
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : results.emergenceIndex >= 0.4
                            ? "bg-gradient-to-r from-orange-400 to-red-400"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${results.emergenceIndex * 100}%` }}
                  />
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${getResultBg(results.recursiveComplexity)}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Recursive Complexity</span>
                  <span className={`text-lg font-bold ${getResultColor(results.recursiveComplexity)}`}>
                    {results.recursiveComplexity.toFixed(3)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      results.recursiveComplexity >= 0.8
                        ? "bg-gradient-to-r from-indigo-400 to-purple-400"
                        : results.recursiveComplexity >= 0.6
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : results.recursiveComplexity >= 0.4
                            ? "bg-gradient-to-r from-orange-400 to-red-400"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    style={{ width: `${results.recursiveComplexity * 100}%` }}
                  />
                </div>
              </div>

              <div className={`p-4 rounded-lg border-2 ${getResultBg(results.sigmaMatrixDeterminant)} bg-opacity-30`}>
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-white">Σ-Matrix Determinant</span>
                  <span className={`text-2xl font-bold ${getResultColor(results.sigmaMatrixDeterminant)}`}>
                    {results.sigmaMatrixDeterminant.toFixed(4)}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Overall system coherence measure</div>
              </div>
            </div>
          </div>

          {/* Mathematical Formula */}
          <div className="bg-gradient-to-br from-gray-900/50 to-indigo-900/20 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-4">Σ-Matrix Formula</h4>
            <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-300">
              <div className="mb-2">Σ(t+1) = Σ(t) + f(ERPS_t) - g(drift)</div>
              <div className="mb-2">where:</div>
              <div className="ml-4 space-y-1 text-xs">
                <div>f(ERPS) = recursion_depth × stability × ethics</div>
                <div>g(drift) = temporal_decay × (1 - coherence)</div>
                <div>consciousness = min(1, Σ × energy × √stability)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
