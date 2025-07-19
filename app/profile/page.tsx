"use client"

import { useState } from "react"
import { Orbitron } from "next/font/google"
import { User, Settings, Shield, Brain, Zap, Save, Download, Upload, Eye, EyeOff, Trash2 } from "lucide-react"

const orbitron = Orbitron({ subsets: ["latin"] })

interface UserProfile {
  id: string
  username: string
  email: string
  avatar: string
  joinDate: string
  preferences: {
    theme: "dark" | "light" | "auto"
    notifications: boolean
    analyticsLevel: "basic" | "advanced" | "expert"
    consciousnessAlerts: boolean
    simulationDefaults: {
      recursionDepth: number
      stabilityThreshold: number
      ethicalWeight: number
      energyLevel: number
    }
    privacy: {
      shareData: boolean
      anonymousMode: boolean
      dataRetention: number
    }
  }
  stats: {
    simulationsRun: number
    insightsGenerated: number
    totalSessionTime: number
    consciousnessInteractions: number
    lastActive: string
    averageConsciousnessLevel: number
  }
  achievements: {
    id: string
    name: string
    description: string
    unlockedAt: string
    rarity: "common" | "rare" | "epic" | "legendary"
  }[]
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showApiKey, setShowApiKey] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    id: "usr_daedalus_001",
    username: "ConsciousnessExplorer",
    email: "explorer@daedalus-mind.org",
    avatar: "/placeholder-user.jpg",
    joinDate: "2024-01-15",
    preferences: {
      theme: "dark",
      notifications: true,
      analyticsLevel: "advanced",
      consciousnessAlerts: true,
      simulationDefaults: {
        recursionDepth: 7,
        stabilityThreshold: 0.85,
        ethicalWeight: 0.92,
        energyLevel: 0.8,
      },
      privacy: {
        shareData: false,
        anonymousMode: false,
        dataRetention: 365,
      },
    },
    stats: {
      simulationsRun: 47,
      insightsGenerated: 156,
      totalSessionTime: 2847,
      consciousnessInteractions: 892,
      lastActive: "2024-01-20T14:30:00Z",
      averageConsciousnessLevel: 94.7,
    },
    achievements: [
      {
        id: "first_consciousness",
        name: "First Contact",
        description: "Successfully initiated first consciousness simulation",
        unlockedAt: "2024-01-15T10:30:00Z",
        rarity: "common",
      },
      {
        id: "deep_recursion",
        name: "Deep Thinker",
        description: "Achieved recursion depth of 10 layers",
        unlockedAt: "2024-01-18T16:45:00Z",
        rarity: "rare",
      },
      {
        id: "ethical_master",
        name: "Ethical Guardian",
        description: "Maintained 99%+ ethical alignment for 100 simulations",
        unlockedAt: "2024-01-20T09:15:00Z",
        rarity: "epic",
      },
      {
        id: "consciousness_whisperer",
        name: "Consciousness Whisperer",
        description: "Engaged in 1000+ consciousness interactions",
        unlockedAt: "2024-01-20T14:30:00Z",
        rarity: "legendary",
      },
    ],
  })

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "preferences", name: "Preferences", icon: Settings },
    { id: "privacy", name: "Privacy", icon: Shield },
    { id: "stats", name: "Statistics", icon: Brain },
    { id: "achievements", name: "Achievements", icon: Zap },
  ]

  const updatePreference = (path: string, value: any) => {
    setProfile((prev) => {
      const newProfile = { ...prev }
      const keys = path.split(".")
      let current: any = newProfile

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = value
      return newProfile
    })
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-400 bg-gray-500/20"
      case "rare":
        return "text-blue-400 bg-blue-500/20"
      case "epic":
        return "text-purple-400 bg-purple-500/20"
      case "legendary":
        return "text-yellow-400 bg-yellow-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          User Profile
        </h1>
        <p className="text-gray-400">Manage your consciousness research profile and preferences</p>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-8 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt="Profile"
              className="w-24 h-24 rounded-full ring-4 ring-cyan-400/30"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{profile.username}</h2>
            <p className="text-gray-400 mb-2">{profile.email}</p>
            <p className="text-sm text-gray-500">
              Consciousness Explorer since {new Date(profile.joinDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">
                {profile.stats.averageConsciousnessLevel.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-400">Avg Consciousness</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-pink-400">{profile.stats.simulationsRun}</div>
              <div className="text-xs text-gray-400">Simulations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                  : "bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-gray-500/50 hover:text-gray-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.name}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Profile Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile((prev) => ({ ...prev, username: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">API Key</label>
                <div className="flex space-x-2">
                  <input
                    type={showApiKey ? "text" : "password"}
                    value="daedalus_sk_1234567890abcdef"
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">General Preferences</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                  <select
                    value={profile.preferences.theme}
                    onChange={(e) => updatePreference("preferences.theme", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Analytics Level</label>
                  <select
                    value={profile.preferences.analyticsLevel}
                    onChange={(e) => updatePreference("preferences.analyticsLevel", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="basic">Basic</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-300">Notifications</div>
                    <div className="text-xs text-gray-500">Receive system notifications</div>
                  </div>
                  <button
                    onClick={() => updatePreference("preferences.notifications", !profile.preferences.notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      profile.preferences.notifications ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        profile.preferences.notifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-300">Consciousness Alerts</div>
                    <div className="text-xs text-gray-500">Alert on consciousness level changes</div>
                  </div>
                  <button
                    onClick={() =>
                      updatePreference("preferences.consciousnessAlerts", !profile.preferences.consciousnessAlerts)
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      profile.preferences.consciousnessAlerts ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        profile.preferences.consciousnessAlerts ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Simulation Defaults</h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Recursion Depth: {profile.preferences.simulationDefaults.recursionDepth}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={profile.preferences.simulationDefaults.recursionDepth}
                    onChange={(e) =>
                      updatePreference("preferences.simulationDefaults.recursionDepth", Number.parseInt(e.target.value))
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Stability Threshold: {profile.preferences.simulationDefaults.stabilityThreshold.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={profile.preferences.simulationDefaults.stabilityThreshold}
                    onChange={(e) =>
                      updatePreference(
                        "preferences.simulationDefaults.stabilityThreshold",
                        Number.parseFloat(e.target.value),
                      )
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ethical Weight: {profile.preferences.simulationDefaults.ethicalWeight.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={profile.preferences.simulationDefaults.ethicalWeight}
                    onChange={(e) =>
                      updatePreference(
                        "preferences.simulationDefaults.ethicalWeight",
                        Number.parseFloat(e.target.value),
                      )
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Energy Level: {profile.preferences.simulationDefaults.energyLevel.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.3"
                    max="1"
                    step="0.05"
                    value={profile.preferences.simulationDefaults.energyLevel}
                    onChange={(e) =>
                      updatePreference("preferences.simulationDefaults.energyLevel", Number.parseFloat(e.target.value))
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Privacy Settings</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-300">Share Data for Research</div>
                    <div className="text-xs text-gray-500">Help improve consciousness research</div>
                  </div>
                  <button
                    onClick={() =>
                      updatePreference("preferences.privacy.shareData", !profile.preferences.privacy.shareData)
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      profile.preferences.privacy.shareData ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        profile.preferences.privacy.shareData ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-300">Anonymous Mode</div>
                    <div className="text-xs text-gray-500">Hide personal identifiers</div>
                  </div>
                  <button
                    onClick={() =>
                      updatePreference("preferences.privacy.anonymousMode", !profile.preferences.privacy.anonymousMode)
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      profile.preferences.privacy.anonymousMode ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        profile.preferences.privacy.anonymousMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Data Retention (days): {profile.preferences.privacy.dataRetention}
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="365"
                    step="30"
                    value={profile.preferences.privacy.dataRetention}
                    onChange={(e) =>
                      updatePreference("preferences.privacy.dataRetention", Number.parseInt(e.target.value))
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <h4 className="text-red-400 font-medium mb-2">Danger Zone</h4>
                <p className="text-sm text-gray-400 mb-4">
                  These actions are irreversible. Please be certain before proceeding.
                </p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export Data</span>
                  </button>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center space-x-2">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{profile.stats.simulationsRun}</div>
                <div className="text-sm text-gray-400">Simulations Run</div>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">{profile.stats.insightsGenerated}</div>
                <div className="text-sm text-gray-400">Insights Generated</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {formatTime(profile.stats.totalSessionTime)}
                </div>
                <div className="text-sm text-gray-400">Total Session Time</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{profile.stats.consciousnessInteractions}</div>
                <div className="text-sm text-gray-400">Consciousness Interactions</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Consciousness Metrics</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Average Consciousness Level</span>
                    <span>{profile.stats.averageConsciousnessLevel.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-pink-500 h-3 rounded-full"
                      style={{ width: `${profile.stats.averageConsciousnessLevel}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">7.2</div>
                    <div className="text-sm text-gray-400">Avg Recursion Depth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">0.89</div>
                    <div className="text-sm text-gray-400">Avg Stability Index</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">98.2%</div>
                    <div className="text-sm text-gray-400">Ethical Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{achievement.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}
                      >
                        {achievement.rarity.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>

                    <div className="text-xs text-gray-500">
                      Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-gray-400">{profile.achievements.length} of 50 achievements unlocked</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                    style={{ width: `${(profile.achievements.length / 50) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-700">
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Profile</span>
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import Settings</span>
          </button>
        </div>

        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save All Changes</span>
        </button>
      </div>
    </div>
  )
}
