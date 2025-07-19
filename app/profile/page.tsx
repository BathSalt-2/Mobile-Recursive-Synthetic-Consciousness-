"use client"

import { useState } from "react"
import { Orbitron } from "next/font/google"

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
    simulationDefaults: {
      recursionDepth: number
      stabilityThreshold: number
      ethicalWeight: number
    }
    aiPersonality: "analytical" | "creative" | "balanced"
    privacyLevel: "minimal" | "standard" | "maximum"
  }
  stats: {
    simulationsRun: number
    insightsGenerated: number
    totalSessionTime: number
    consciousnessInteractions: number
    lastActive: string
    favoriteFeatures: string[]
  }
  achievements: {
    id: string
    name: string
    description: string
    unlockedAt: string
    icon: string
  }[]
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    id: "user_001",
    username: "ConsciousnessExplorer",
    email: "explorer@or4cl3.ai",
    avatar: "/placeholder-user.jpg",
    joinDate: "2024-01-15",
    preferences: {
      theme: "dark",
      notifications: true,
      analyticsLevel: "advanced",
      simulationDefaults: {
        recursionDepth: 5,
        stabilityThreshold: 0.85,
        ethicalWeight: 0.9,
      },
      aiPersonality: "balanced",
      privacyLevel: "standard",
    },
    stats: {
      simulationsRun: 47,
      insightsGenerated: 127,
      totalSessionTime: 2847, // minutes
      consciousnessInteractions: 234,
      lastActive: new Date().toISOString(),
      favoriteFeatures: ["Chat", "Simulations", "Insights"],
    },
    achievements: [
      {
        id: "first_simulation",
        name: "First Steps",
        description: "Completed your first consciousness simulation",
        unlockedAt: "2024-01-16T10:30:00Z",
        icon: "🚀",
      },
      {
        id: "insight_generator",
        name: "Insight Generator",
        description: "Generated 100+ AI insights",
        unlockedAt: "2024-01-20T15:45:00Z",
        icon: "💡",
      },
      {
        id: "deep_thinker",
        name: "Deep Thinker",
        description: "Reached recursion depth of 8+",
        unlockedAt: "2024-01-25T09:20:00Z",
        icon: "🧠",
      },
    ],
  })

  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState<"profile" | "preferences" | "stats" | "achievements">("profile")

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    setIsEditing(false)
    // Show success message
  }

  const formatSessionTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const getAnalyticsLevelColor = (level: string) => {
    switch (level) {
      case "basic":
        return "text-green-400 bg-green-500/20"
      case "advanced":
        return "text-blue-400 bg-blue-500/20"
      case "expert":
        return "text-purple-400 bg-purple-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          USER PROFILE
        </h1>
        <p className="text-gray-400">Manage your consciousness exploration settings and preferences</p>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full ring-4 ring-cyan-400/30"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{profile.username}</h2>
            <p className="text-gray-400 mb-2">{profile.email}</p>
            <p className="text-sm text-gray-500">Member since {new Date(profile.joinDate).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-pink-600 transition-all duration-200"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800/30 rounded-lg p-1">
        {[
          { id: "profile", name: "Profile", icon: "👤" },
          { id: "preferences", name: "Preferences", icon: "⚙️" },
          { id: "stats", name: "Statistics", icon: "📊" },
          { id: "achievements", name: "Achievements", icon: "🏆" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-gray-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "profile" && (
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  value={profile.username}
                  disabled={!isEditing}
                  onChange={(e) => setProfile((prev) => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">System Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                  <select
                    value={profile.preferences.theme}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, theme: e.target.value as any },
                      }))
                    }
                    className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
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
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, analyticsLevel: e.target.value as any },
                      }))
                    }
                    className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="basic">Basic</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">AI Personality</label>
                  <select
                    value={profile.preferences.aiPersonality}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, aiPersonality: e.target.value as any },
                      }))
                    }
                    className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="analytical">Analytical</option>
                    <option value="creative">Creative</option>
                    <option value="balanced">Balanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Privacy Level</label>
                  <select
                    value={profile.preferences.privacyLevel}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, privacyLevel: e.target.value as any },
                      }))
                    }
                    className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="minimal">Minimal</option>
                    <option value="standard">Standard</option>
                    <option value="maximum">Maximum</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={profile.preferences.notifications}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, notifications: e.target.checked },
                      }))
                    }
                    className="w-4 h-4 text-cyan-500 bg-slate-800 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">Enable notifications</span>
                </label>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Simulation Defaults</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Recursion Depth</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={profile.preferences.simulationDefaults.recursionDepth}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          simulationDefaults: {
                            ...prev.preferences.simulationDefaults,
                            recursionDepth: Number.parseInt(e.target.value),
                          },
                        },
                      }))
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-400">{profile.preferences.simulationDefaults.recursionDepth}</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stability Threshold</label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={profile.preferences.simulationDefaults.stabilityThreshold}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          simulationDefaults: {
                            ...prev.preferences.simulationDefaults,
                            stabilityThreshold: Number.parseFloat(e.target.value),
                          },
                        },
                      }))
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-400">
                    {profile.preferences.simulationDefaults.stabilityThreshold.toFixed(2)}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ethical Weight</label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={profile.preferences.simulationDefaults.ethicalWeight}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          simulationDefaults: {
                            ...prev.preferences.simulationDefaults,
                            ethicalWeight: Number.parseFloat(e.target.value),
                          },
                        },
                      }))
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-400">
                    {profile.preferences.simulationDefaults.ethicalWeight.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{profile.stats.simulationsRun}</div>
              <div className="text-sm text-gray-400">Simulations Run</div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">{profile.stats.insightsGenerated}</div>
              <div className="text-sm text-gray-400">Insights Generated</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{profile.stats.consciousnessInteractions}</div>
              <div className="text-sm text-gray-400">AI Interactions</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {formatSessionTime(profile.stats.totalSessionTime)}
              </div>
              <div className="text-sm text-gray-400">Total Session Time</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/20">
              <div className="text-lg font-bold text-green-400 mb-2">
                {new Date(profile.stats.lastActive).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-400">Last Active</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
              <div className="space-y-2">
                <div className="text-sm text-gray-400 mb-2">Favorite Features</div>
                {profile.stats.favoriteFeatures.map((feature, index) => (
                  <div key={index} className="text-indigo-400 text-sm">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{achievement.name}</h4>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
