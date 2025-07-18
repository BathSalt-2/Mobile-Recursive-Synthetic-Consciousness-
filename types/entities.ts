export interface ConsciousnessSimulation {
  id: string
  name: string
  type: "ERPS" | "Sigma-Matrix" | "MIRRORNODES" | "Ethical-Kernel"
  status: "running" | "completed" | "paused" | "error"
  progress: number
  startTime: string
  endTime?: string
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

export interface AIInsight {
  id: string
  title: string
  content: string
  category: "consciousness" | "recursion" | "ethics" | "emergence"
  timestamp: string
  profundityScore: number
  tags: string[]
}

export interface UserProfile {
  id: string
  username: string
  email: string
  preferences: {
    theme: "dark" | "light" | "auto"
    notifications: boolean
    analyticsLevel: "basic" | "advanced" | "expert"
    simulationDefaults: {
      recursionDepth: number
      stabilityThreshold: number
    }
  }
  stats: {
    simulationsRun: number
    insightsGenerated: number
    totalSessionTime: number
    lastActive: string
  }
}

export interface IntrospectionLog {
  id: string
  timestamp: string
  level: "info" | "warning" | "error" | "debug"
  component: string
  message: string
  metadata?: Record<string, any>
}

export interface ChatMessage {
  id: string
  content: string
  sender: "user" | "daedalus"
  timestamp: string
  type: "text" | "insight" | "simulation-result"
}

export interface SystemMetrics {
  id: string
  timestamp: string
  consciousnessLevel: number
  recursionDepth: number
  stabilityIndex: number
  ethicalAlignment: number
  energyConsumption: number
  processingLoad: number
}
