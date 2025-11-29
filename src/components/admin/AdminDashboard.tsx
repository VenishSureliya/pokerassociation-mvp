import { DesktopFrame } from "../DesktopFrame";
import { Users, Building2, Coins, TrendingUp, Activity } from "lucide-react";
import { Badge } from "../ui/badge";

export function AdminDashboard() {
  const recentActivity = [
    { id: 1, type: "checkin", house: "Mumbai Central", player: "Rajesh Kumar", time: "2 mins ago" },
    { id: 2, type: "chip-add", house: "Delhi North", amount: "₹10,000", time: "5 mins ago" },
    { id: 3, type: "kyc-approved", player: "Sanjay Mehta", house: "Mumbai Central", time: "12 mins ago" },
    { id: 4, type: "checkout", house: "Bangalore South", player: "Amit Sharma", time: "18 mins ago" },
  ];

  return (
    <DesktopFrame title="Admin Console - Overview Dashboard">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white mb-2">Admin Console</h2>
          <p className="text-neutral-400">Master dashboard for IPA management team</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Total Players</p>
                <h3 className="text-white">12,847</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="size-4" />
              <span>+234 this week</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Building2 className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Active Houses</p>
                <h3 className="text-white">47</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Activity className="size-4" />
              <span>Across 12 cities</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Coins className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Total Chips</p>
                <h3 className="text-white">₹4.2Cr</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="size-4" />
              <span>In circulation</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Activity className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Active Now</p>
                <h3 className="text-white">342</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Users className="size-4" />
              <span>Players online</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white">Real-time Activity</h3>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600 border-2 border-green-500 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white">Live</span>
              </div>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id}
                  className="p-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      {activity.type === "checkin" && (
                        <>
                          <p className="text-white mb-1">
                            <span className="text-green-500">Player Check-in:</span> {activity.player}
                          </p>
                          <p className="text-neutral-400">at {activity.house}</p>
                        </>
                      )}
                      {activity.type === "chip-add" && (
                        <>
                          <p className="text-white mb-1">
                            <span className="text-red-500">Chips Added:</span> {activity.amount}
                          </p>
                          <p className="text-neutral-400">at {activity.house}</p>
                        </>
                      )}
                      {activity.type === "kyc-approved" && (
                        <>
                          <p className="text-white mb-1">
                            <span className="text-red-500">KYC Approved:</span> {activity.player}
                          </p>
                          <p className="text-neutral-400">by {activity.house}</p>
                        </>
                      )}
                      {activity.type === "checkout" && (
                        <>
                          <p className="text-white mb-1">
                            <span className="text-amber-500">Player Check-out:</span> {activity.player}
                          </p>
                          <p className="text-neutral-400">from {activity.house}</p>
                        </>
                      )}
                    </div>
                    <span className="text-neutral-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Houses */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-6">Top Performing Houses (Today)</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-neutral-900 border-2 border-amber-600 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-amber-600 text-white border-0">1st</Badge>
                    <h4 className="text-white">Mumbai Central</h4>
                  </div>
                  <p className="text-neutral-400">HID00012</p>
                </div>
                <div className="text-right">
                  <p className="text-white mb-1">89 Players</p>
                  <p className="text-green-500">₹12.4L chips</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-neutral-600 text-white border-0">2nd</Badge>
                    <h4 className="text-white">Delhi North</h4>
                  </div>
                  <p className="text-neutral-400">HID00034</p>
                </div>
                <div className="text-right">
                  <p className="text-white mb-1">76 Players</p>
                  <p className="text-green-500">₹9.8L chips</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-orange-600 text-white border-0">3rd</Badge>
                    <h4 className="text-white">Bangalore South</h4>
                  </div>
                  <p className="text-neutral-400">HID00018</p>
                </div>
                <div className="text-right">
                  <p className="text-white mb-1">64 Players</p>
                  <p className="text-green-500">₹8.2L chips</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h4 className="text-white">System Status</h4>
            </div>
            <p className="text-green-500">All systems operational</p>
          </div>

          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h4 className="text-white">Sync Status</h4>
            </div>
            <p className="text-red-500">Real-time sync active</p>
          </div>

          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h4 className="text-white">Database</h4>
            </div>
            <p className="text-neutral-400">Connected • 47 houses</p>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
