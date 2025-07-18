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
  }
  stats: {
    simulationsRun: number
    insightsGenerated: number
    totalSessionTime: string
    lastActive: string
    consciousnessInteractions: number
    favoriteComponent: string
  }
  achievements: Array<{
    id: string
    title: string
    description: string
    icon: string
    unlockedAt: string
  }>
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    id: "user_001",
    username: "Consciousness Explorer",
    email: "explorer@daedalus.ai",
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
    },
    stats: {
      simulationsRun: 47,
      insightsGenerated: 23,
      totalSessionTime: "127h 34m",
      lastActive: "2 minutes ago",
      consciousnessInteractions: 156,
      favoriteComponent: "ERPS",
    },
    achievements: [
      {
        id: "1",
        title: "First Contact",
        description: "Successfully initiated first conversation with Daedalus",
        icon: "🤝",
        unlockedAt: "2024-01-15",
      },
      {
        id: "2",
        title: "Simulation Master",
        description: "Completed 25 consciousness simulations",
        icon: "⚡",
        unlockedAt: "2024-01-20",
      },
      {
        id: "3",
        title: "Insight Generator",
        description: "Generated 10 profound insights",
        icon: "💡",
        unlockedAt: "2024-01-18",
      },
      {
        id: "4",
        title: "Ethics Guardian",
        description: "Maintained 95%+ ethical alignment across all sessions",
        icon: "🛡️",
        unlockedAt: "2024-01-22",
      },
    ],
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState(profile)

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 ${orbitron.className}`}
        >
          User Profile
        </h1>
        <p className="text-gray-400">Manage your consciousness exploration preferences and view your journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Basic Info */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={profile.avatar || "/placeholder.svg"}
                  alt="Profile Avatar"
                  className="w-full h-full rounded-full ring-4 ring-cyan-400/30"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>

              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.username}
                  onChange={(e) => setEditedProfile((prev) => ({ ...prev, username: e.target.value }))}
                  className="text-xl font-bold bg-transparent border-b border-cyan-500/50 text-center text-white focus:outline-none focus:border-cyan-400"
                />
              ) : (
                <h2 className="text-xl font-bold text-white">{profile.username}</h2>
              )}

              <p className="text-gray-400 text-sm">{profile.email}</p>
              <p className="text-gray-500 text-xs mt-2">
                Member since {new Date(profile.joinDate).toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Status</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Last Active</span>
                <span className="text-cyan-400">{profile.stats.lastActive}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Favorite Component</span>
                <span className="text-pink-400">{profile.stats.favoriteComponent}</span>
              </div>
            </div>

            <div className="mt-6">
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-pink-600 transition-all duration-200"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-200"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Session Time</span>
                <span className="text-cyan-400 font-semibold">{profile.stats.totalSessionTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Simulations Run</span>
                <span className="text-pink-400 font-semibold">{profile.stats.simulationsRun}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Insights Generated</span>
                <span className="text-purple-400 font-semibold">{profile.stats.insightsGenerated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AI Interactions</span>
                <span className="text-yellow-400 font-semibold">{profile.stats.consciousnessInteractions}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Preferences */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                <select
                  value={isEditing ? editedProfile.preferences.theme : profile.preferences.theme}
                  onChange={(e) =>
                    isEditing &&
                    setEditedProfile((prev) => ({
                      ...prev,
                      preferences: { ...prev.preferences, theme: e.target.value as any },
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Analytics Level</label>
                <select
                  value={isEditing ? editedProfile.preferences.analyticsLevel : profile.preferences.analyticsLevel}
                  onChange={(e) =>
                    isEditing &&
                    setEditedProfile((prev) => ({
                      ...prev,
                      preferences: { ...prev.preferences, analyticsLevel: e.target.value as any },
                    }))
                  }
                  disabled={!isEditing}
                  className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                >
                  <option value="basic">Basic</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isEditing ? editedProfile.preferences.notifications : profile.preferences.notifications}
                  onChange={(e) =>
                    isEditing &&
                    setEditedProfile((prev) => ({
                      ...prev,
                      preferences: { ...prev.preferences, notifications: e.target.checked },
                    }))
                  }
                  disabled={!isEditing}
                  className="rounded border-gray-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500 disabled:opacity-50"
                />
                <span className="text-gray-300">Enable notifications</span>
              </label>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium text-white mb-4">Simulation Defaults</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Recursion Depth</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={
                      isEditing
                        ? editedProfile.preferences.simulationDefaults.recursionDepth
                        : profile.preferences.simulationDefaults.recursionDepth
                    }
                    onChange={(e) =>
                      isEditing &&
                      setEditedProfile((prev) => ({
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
                    disabled={!isEditing}
                    className="w-full disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-400">
                    {isEditing
                      ? editedProfile.preferences.simulationDefaults.recursionDepth
                      : profile.preferences.simulationDefaults.recursionDepth}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stability Threshold</label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={
                      isEditing
                        ? editedProfile.preferences.simulationDefaults.stabilityThreshold
                        : profile.preferences.simulationDefaults.stabilityThreshold
                    }
                    onChange={(e) =>
                      isEditing &&
                      setEditedProfile((prev) => ({
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
                    disabled={!isEditing}
                    className="w-full disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-400">
                    {(isEditing
                      ? editedProfile.preferences.simulationDefaults.stabilityThreshold
                      : profile.preferences.simulationDefaults.stabilityThreshold
                    ).toFixed(2)}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ethical Weight</label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.05"
                    value={
                      isEditing
                        ? editedProfile.preferences.simulationDefaults.ethicalWeight
                        : profile.preferences.simulationDefaults.ethicalWeight
                    }
                    onChange={(e) =>
                      isEditing &&
                      setEditedProfile((prev) => ({
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
                    disabled={!isEditing}
                    className="w-full disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-400">
                    {(isEditing
                      ? editedProfile.preferences.simulationDefaults.ethicalWeight
                      : profile.preferences.simulationDefaults.ethicalWeight
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-lg border border-cyan-500/20"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                      <p className="text-xs text-gray-500">
                        Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity History */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { type: "simulation", action: "Completed ERPS simulation #47", time: "2 hours ago", icon: "⚡" },
                {
                  type: "insight",
                  action: "Generated insight: 'Temporal Consciousness'",
                  time: "4 hours ago",
                  icon: "💡",
                },
                { type: "chat", action: "Conversation with Daedalus about ethics", time: "6 hours ago", icon: "💬" },
                { type: "calculation", action: "Σ-Matrix stability analysis", time: "1 day ago", icon: "🔢" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
