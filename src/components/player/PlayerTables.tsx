import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { Users, Search, Filter, Home, LayoutGrid, Wallet, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export function PlayerTables() {
  const tables = [
    { id: 1, name: "Table 1", buyIn: "500/1000", seats: "7/9", status: "available" },
    { id: 2, name: "Table 2", buyIn: "1000/2000", seats: "9/9", status: "full" },
    { id: 3, name: "Table 3", buyIn: "500/1000", seats: "6/9", status: "available" },
    { id: 4, name: "Table 4", buyIn: "2000/4000", seats: "8/9", status: "available" },
    { id: 5, name: "Table 5", buyIn: "1000/2000", seats: "9/9", status: "full" },
    { id: 6, name: "VIP Table 1", buyIn: "5000/10000", seats: "4/6", status: "available" },
  ];

  return (
    <MobileFrame title="Player Mobile App - Available Tables">
      <div className="h-full flex flex-col bg-black">
        {/* Header */}
        <div className="bg-red-600 text-white pt-16 px-6 pb-4">
          <h2 className="text-white mb-4">Available Tables</h2>
          
          {/* Search & Filter */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <Input 
                placeholder="Search tables..." 
                className="pl-10 h-11 bg-black border-red-800 text-white placeholder:text-neutral-500"
              />
            </div>
            <Button size="icon" variant="outline" className="h-11 w-11 border-red-800 bg-black text-white hover:bg-red-700">
              <Filter className="size-5" />
            </Button>
          </div>
        </div>

        {/* Location Info */}
        <div className="px-6 py-3 bg-neutral-900 border-b-2 border-neutral-800">
          <p className="text-white">
            <span className="text-red-500">Playing at:</span> IPA Poker House - Mumbai Central
          </p>
        </div>

        {/* Tables List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-black">
          {tables.map((table) => (
            <div 
              key={table.id}
              className="bg-neutral-900 border-2 border-red-600 rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white mb-1">{table.name}</h3>
                  <p className="text-neutral-400">Buy-in: ₹{table.buyIn}</p>
                </div>
                {table.status === "available" ? (
                  <Badge className="bg-green-600 text-white border-0">
                    Available
                  </Badge>
                ) : (
                  <Badge className="bg-red-800 text-white border-0">
                    Full
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Users className="size-5 text-neutral-400" />
                <span className="text-neutral-400">{table.seats} Seats</span>
              </div>

              <div className="flex gap-2">
                <Button 
                  className="flex-1 h-11 bg-red-600 hover:bg-red-700 text-white"
                  disabled={table.status === "full"}
                >
                  {table.status === "available" ? "Join Table" : "Table Full"}
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-11 w-11 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black"
                >
                  <Users className="size-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action */}
        <div className="p-6 bg-neutral-900 border-t-2 border-neutral-800">
          <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
            Request House Assignment
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t-2 border-neutral-800 bg-neutral-900">
          <div className="flex items-center justify-around py-4">
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <Home className="size-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-red-500">
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