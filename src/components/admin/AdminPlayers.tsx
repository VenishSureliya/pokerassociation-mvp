import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { Search, Filter, Download, Eye } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export function AdminPlayers() {
  const players = [
    { id: 1, playerId: "PID00234567", name: "Rajesh Kumar", phone: "+91 98765 43210", balance: 12450, games: 47, kyc: "verified", lastActive: "2 hrs ago", house: "Mumbai Central" },
    { id: 2, playerId: "PID00234892", name: "Amit Sharma", phone: "+91 98765 43211", balance: 8750, games: 32, kyc: "verified", lastActive: "Active now", house: "Delhi North" },
    { id: 3, playerId: "PID00235124", name: "Priya Singh", phone: "+91 98765 43212", balance: 15200, games: 58, kyc: "verified", lastActive: "1 day ago", house: "-" },
    { id: 4, playerId: "PID00234701", name: "Vikram Patel", phone: "+91 98765 43213", balance: 5400, games: 23, kyc: "verified", lastActive: "3 hrs ago", house: "Bangalore South" },
    { id: 5, playerId: "PID00235089", name: "Neha Gupta", phone: "+91 98765 43214", balance: 0, games: 15, kyc: "pending", lastActive: "1 week ago", house: "-" },
  ];

  return (
    <DesktopFrame title="Admin Console - Players Database">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Players Database</h2>
            <p className="text-neutral-400">Complete database of all registered players</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              <Download className="size-5 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-neutral-400 mb-1">Total Players</p>
            <h3 className="text-red-500">12,847</h3>
          </div>
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <p className="text-green-500 mb-1">KYC Verified</p>
            <h3 className="text-white">11,923</h3>
          </div>
          <div className="p-4 bg-black border-2 border-amber-600 rounded-lg">
            <p className="text-amber-500 mb-1">KYC Pending</p>
            <h3 className="text-white">924</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Active Today</p>
            <h3 className="text-white">342</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Total Balance</p>
            <h3 className="text-white">₹4.2Cr</h3>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
            <Input 
              placeholder="Search by Player ID, name, or phone..." 
              className="pl-10 h-12 border-2 border-red-600 bg-black text-white placeholder:text-neutral-500"
            />
          </div>
          <Button variant="outline" className="border-2 border-red-600 h-12 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            <Filter className="size-5 mr-2" />
            Filters
          </Button>
        </div>

        {/* Players Table */}
        <div className="bg-black border-2 border-red-600 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-red-600 border-b-2 border-red-700">
              <tr>
                <th className="text-left p-4 text-white">Player ID</th>
                <th className="text-left p-4 text-white">Name</th>
                <th className="text-left p-4 text-white">Phone</th>
                <th className="text-left p-4 text-white">Wallet Balance</th>
                <th className="text-left p-4 text-white">Games</th>
                <th className="text-left p-4 text-white">KYC Status</th>
                <th className="text-left p-4 text-white">Last Active</th>
                <th className="text-left p-4 text-white">Current House</th>
                <th className="text-left p-4 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} className="border-b-2 border-neutral-800 hover:bg-neutral-800">
                  <td className="p-4">
                    <span className="font-mono text-red-500">{player.playerId}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{player.name}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{player.phone}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">₹{player.balance.toLocaleString()}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{player.games}</span>
                  </td>
                  <td className="p-4">
                    {player.kyc === "verified" ? (
                      <Badge className="bg-green-600 text-white border-0">
                        Verified
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-600 text-white border-0">
                        Pending
                      </Badge>
                    )}
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{player.lastActive}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{player.house}</span>
                  </td>
                  <td className="p-4">
                    <Button size="sm" variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
                      <Eye className="size-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-neutral-400">Showing 1-5 of 12,847 players</p>
          <div className="flex gap-2">
            <Button variant="outline" className="border-2 border-neutral-700 bg-black text-neutral-500" disabled>Previous</Button>
            <Button variant="outline" className="border-2 bg-red-600 text-white">1</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">2</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">3</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">...</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">2570</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">Next</Button>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
