import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { LayoutGrid, Users, Plus, Settings } from "lucide-react";
import { Badge } from "../ui/badge";

export function HouseTables() {
  const tables = [
    { id: 1, name: "Table 1", buyIn: "500/1000", seats: 9, occupied: 7, status: "active" },
    { id: 2, name: "Table 2", buyIn: "1000/2000", seats: 9, occupied: 9, status: "full" },
    { id: 3, name: "Table 3", buyIn: "500/1000", seats: 9, occupied: 6, status: "active" },
    { id: 4, name: "Table 4", buyIn: "2000/4000", seats: 9, occupied: 8, status: "active" },
    { id: 5, name: "Table 5", buyIn: "1000/2000", seats: 9, occupied: 9, status: "full" },
    { id: 6, name: "VIP Table 1", buyIn: "5000/10000", seats: 6, occupied: 4, status: "active" },
    { id: 7, name: "VIP Table 2", buyIn: "5000/10000", seats: 6, occupied: 0, status: "available" },
    { id: 8, name: "Table 6", buyIn: "500/1000", seats: 9, occupied: 0, status: "maintenance" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-600 text-white border-0";
      case "full": return "bg-red-800 text-white border-0";
      case "available": return "bg-red-600 text-white border-0";
      case "maintenance": return "bg-amber-600 text-white border-0";
      default: return "bg-neutral-700 text-neutral-300 border-0";
    }
  };

  return (
    <DesktopFrame title="Poker House Dashboard - Table Management">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Table Management</h2>
            <p className="text-neutral-400">Monitor and manage all poker tables</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              <Settings className="size-5 mr-2" />
              Table Settings
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="size-5 mr-2" />
              Add Table
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-neutral-400 mb-1">Total Tables</p>
            <h3 className="text-white">8</h3>
          </div>
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <p className="text-green-500 mb-1">Active</p>
            <h3 className="text-white">4</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Full</p>
            <h3 className="text-white">2</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Total Players</p>
            <h3 className="text-white">43 / 66</h3>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-2 gap-6">
          {tables.map((table) => (
            <div 
              key={table.id}
              className="bg-black border-2 border-red-600 rounded-xl p-6 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white mb-1">{table.name}</h3>
                  <p className="text-neutral-400">Buy-in: ₹{table.buyIn}</p>
                </div>
                <Badge className={`${getStatusColor(table.status)}`}>
                  {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                </Badge>
              </div>

              {/* Seats Visualization */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Seats</span>
                  <span className="text-white">{table.occupied} / {table.seats}</span>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: table.seats }).map((_, i) => (
                    <div 
                      key={i}
                      className={`h-10 flex-1 rounded ${
                        i < table.occupied 
                          ? "bg-red-600 border-2 border-red-500" 
                          : "bg-neutral-800 border-2 border-neutral-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black"
                  disabled={table.status === "maintenance"}
                >
                  <Users className="size-4 mr-2" />
                  Assign Player
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black"
                >
                  <Settings className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Manual Assignment Section */}
        <div className="mt-8 p-6 bg-black border-2 border-red-600 rounded-lg">
          <h4 className="text-red-500 mb-4">Manual Table & Seat Assignment</h4>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-neutral-400 mb-2">Player ID</label>
              <div className="h-11 bg-neutral-900 border-2 border-red-600 rounded-lg px-3 flex items-center">
                <span className="text-neutral-500">PID00234567</span>
              </div>
            </div>
            <div>
              <label className="block text-neutral-400 mb-2">Table</label>
              <div className="h-11 bg-neutral-900 border-2 border-red-600 rounded-lg px-3 flex items-center">
                <span className="text-neutral-500">Select table...</span>
              </div>
            </div>
            <div>
              <label className="block text-neutral-400 mb-2">Seat Number</label>
              <div className="h-11 bg-neutral-900 border-2 border-red-600 rounded-lg px-3 flex items-center">
                <span className="text-neutral-500">Select seat...</span>
              </div>
            </div>
          </div>
          <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
            Assign to Table
          </Button>
        </div>
      </div>
    </DesktopFrame>
  );
}
