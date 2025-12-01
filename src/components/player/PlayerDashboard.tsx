import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { QrCode, Wallet, User, Settings, Home, UtensilsCrossed, LayoutGrid } from "lucide-react";
import { Badge } from "../ui/badge";

export function PlayerDashboard() {
  return (
    <MobileFrame title="Player Mobile App - Dashboard">
      <div className="h-full flex flex-col bg-black">
        {/* Header */}
        <div className="bg-red-600 text-white pt-16 px-6 pb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red-200 mb-1">Welcome back,</p>
              <h2 className="text-white">Aditya Krishnan</h2>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-red-700">
              <Settings className="size-6" />
            </Button>
          </div>

          {/* Player ID Card */}
          <div className="bg-black text-white rounded-xl p-6 shadow-lg border-2 border-red-800">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-neutral-400 mb-1">Player ID</p>
                <h3 className="text-white">PID00234567</h3>
              </div>
              <Badge className="bg-green-600 text-white border-0">
                Verified
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-neutral-400 mb-1">Total Games</p>
                <p className="text-white">47</p>
              </div>
              <div className="w-24 h-24 bg-neutral-900 border-2 border-red-600 rounded-lg flex items-center justify-center">
                <QrCode className="size-16 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="px-6 py-6 bg-neutral-900 border-b-2 border-neutral-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Wallet className="size-5 text-red-500" />
              <h3 className="text-white">Chip Wallet</h3>
            </div>
            <Button size="sm" variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              View Details
            </Button>
          </div>

          <div className="bg-black border-2 border-red-600 rounded-lg p-4">
            <p className="text-neutral-400 mb-1">Available Balance</p>
            <h2 className="text-red-500">₹12,450</h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex-1 px-6 py-6 bg-black">
          <h3 className="text-white mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-4">
            <button className="p-6 bg-neutral-900 border-2 border-red-600 rounded-xl hover:bg-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                <LayoutGrid className="size-6 text-white" />
              </div>
              <p className="text-white">View Tables</p>
            </button>

            <button className="p-6 bg-neutral-900 border-2 border-red-600 rounded-xl hover:bg-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                <Wallet className="size-6 text-white" />
              </div>
              <p className="text-white">Add Chips</p>
            </button>

            <button className="p-6 bg-neutral-900 border-2 border-red-600 rounded-xl hover:bg-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                <UtensilsCrossed className="size-6 text-white" />
              </div>
              <p className="text-white">Order Food</p>
            </button>

            <button className="p-6 bg-neutral-900 border-2 border-red-600 rounded-xl hover:bg-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                <User className="size-6 text-white" />
              </div>
              <p className="text-white">My Profile</p>
            </button>
          </div>

          {/* Recent Activity */}
          <div className="mt-6">
            <h3 className="text-white mb-3">Recent Activity</h3>
            <div className="space-y-2">
              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-white">Table 3 - ₹500/1000</p>
                  <p className="text-neutral-400">Nov 25, 2024 • 2:30 PM</p>
                </div>
                <Badge variant="outline" className="border-2 border-neutral-600 text-neutral-400">Completed</Badge>
              </div>

              <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-white">Chips Added</p>
                  <p className="text-neutral-400">Nov 24, 2024 • 6:15 PM</p>
                </div>
                <p className="text-green-500">+₹5,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t-2 border-neutral-800 bg-neutral-900">
          <div className="flex items-center justify-around py-4">
            <button className="flex flex-col items-center gap-1 text-red-500">
              <Home className="size-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <LayoutGrid className="size-6" />
              <span className="text-xs">Tables</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <Wallet className="size-6" />
              <span className="text-xs">Wallet</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <User className="size-6" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}