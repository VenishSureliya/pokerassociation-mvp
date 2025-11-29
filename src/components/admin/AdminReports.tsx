import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { Download, Calendar, TrendingUp, Users, Building2, Coins } from "lucide-react";
import { Badge } from "../ui/badge";

export function AdminReports() {
  return (
    <DesktopFrame title="Admin Console - Reports & Analytics">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Reports & Analytics</h2>
            <p className="text-neutral-400">System-wide reports and performance metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              <Calendar className="size-5 mr-2" />
              Date Range
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              <Download className="size-5 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="flex gap-3 mb-8">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            Today
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            This Week
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            This Month
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Custom Range
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Active Players</p>
                <h3 className="text-white">342</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="size-4" />
              <span>+12% vs yesterday</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Building2 className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Active Houses</p>
                <h3 className="text-white">42</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>Out of 47 total</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Coins className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">Total Volume</p>
                <h3 className="text-white">₹24.5L</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="size-4" />
              <span>+8% vs yesterday</span>
            </div>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-white" />
              </div>
              <div>
                <p className="text-neutral-400">New Signups</p>
                <h3 className="text-white">28</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>Today</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-4">Daily Revenue Trend</h3>
            <div className="h-64 bg-neutral-900 border-2 border-neutral-800 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Chart: Daily revenue over last 30 days</p>
            </div>
          </div>

          {/* Player Activity Chart */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-4">Player Activity</h3>
            <div className="h-64 bg-neutral-900 border-2 border-neutral-800 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Chart: Active players per hour</p>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top Houses */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-4">Top Performing Houses</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div>
                  <Badge className="bg-amber-600 text-white mb-2 border-0">1st</Badge>
                  <h4 className="text-white">Mumbai Central</h4>
                  <p className="text-neutral-400">HID00012</p>
                </div>
                <div className="text-right">
                  <p className="text-white">89 Players</p>
                  <p className="text-green-500">₹12.4L</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div>
                  <Badge className="bg-neutral-600 text-white mb-2 border-0">2nd</Badge>
                  <h4 className="text-white">Delhi North</h4>
                  <p className="text-neutral-400">HID00034</p>
                </div>
                <div className="text-right">
                  <p className="text-white">76 Players</p>
                  <p className="text-green-500">₹9.8L</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div>
                  <Badge className="bg-orange-600 text-white mb-2 border-0">3rd</Badge>
                  <h4 className="text-white">Bangalore South</h4>
                  <p className="text-neutral-400">HID00018</p>
                </div>
                <div className="text-right">
                  <p className="text-white">64 Players</p>
                  <p className="text-green-500">₹8.2L</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-4">Quick Statistics</h3>
            <div className="space-y-4">
              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Total KYC Verified</span>
                  <span className="text-white">11,923</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{width: "92.8%"}}></div>
                </div>
              </div>

              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Average Session Time</span>
                  <span className="text-white">3.5 hours</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600" style={{width: "70%"}}></div>
                </div>
              </div>

              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Peak Hours</span>
                  <span className="text-white">6 PM - 11 PM</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600" style={{width: "85%"}}></div>
                </div>
              </div>

              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Average Buy-in</span>
                  <span className="text-white">₹7,150</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{width: "60%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
