import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { Search, Filter, Download, Eye, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export function AdminHouses() {
  const houses = [
    { id: 1, houseId: "HID00012", name: "Mumbai Central", city: "Mumbai", tables: 8, activePlayers: 89, todayChips: "12.4L", status: "active" },
    { id: 2, houseId: "HID00034", name: "Delhi North", city: "Delhi", tables: 10, activePlayers: 76, todayChips: "9.8L", status: "active" },
    { id: 3, houseId: "HID00018", name: "Bangalore South", city: "Bangalore", tables: 6, activePlayers: 64, todayChips: "8.2L", status: "active" },
    { id: 4, houseId: "HID00045", name: "Pune West", city: "Pune", tables: 7, activePlayers: 52, todayChips: "6.5L", status: "active" },
    { id: 5, houseId: "HID00029", name: "Hyderabad East", city: "Hyderabad", tables: 5, activePlayers: 0, todayChips: "0", status: "maintenance" },
  ];

  return (
    <DesktopFrame title="Admin Console - Houses Database">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Houses Database</h2>
            <p className="text-neutral-400">Complete database of all poker houses</p>
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
            <p className="text-neutral-400 mb-1">Total Houses</p>
            <h3 className="text-red-500">47</h3>
          </div>
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <p className="text-green-500 mb-1">Active</p>
            <h3 className="text-white">42</h3>
          </div>
          <div className="p-4 bg-black border-2 border-amber-600 rounded-lg">
            <p className="text-amber-500 mb-1">Maintenance</p>
            <h3 className="text-white">5</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Active Players</p>
            <h3 className="text-white">342</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Total Tables</p>
            <h3 className="text-white">336</h3>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
            <Input 
              placeholder="Search by House ID, name, or city..." 
              className="pl-10 h-12 border-2 border-red-600 bg-black text-white placeholder:text-neutral-500"
            />
          </div>
          <Button variant="outline" className="border-2 border-red-600 h-12 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            <Filter className="size-5 mr-2" />
            Filters
          </Button>
        </div>

        {/* Houses Table */}
        <div className="bg-black border-2 border-red-600 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-red-600 border-b-2 border-red-700">
              <tr>
                <th className="text-left p-4 text-white">House ID</th>
                <th className="text-left p-4 text-white">Name</th>
                <th className="text-left p-4 text-white">Location</th>
                <th className="text-left p-4 text-white">Tables</th>
                <th className="text-left p-4 text-white">Active Players</th>
                <th className="text-left p-4 text-white">Today's Chips</th>
                <th className="text-left p-4 text-white">Status</th>
                <th className="text-left p-4 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((house) => (
                <tr key={house.id} className="border-b-2 border-neutral-800 hover:bg-neutral-800">
                  <td className="p-4">
                    <span className="font-mono text-red-500">{house.houseId}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{house.name}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-neutral-500" />
                      <span className="text-neutral-400">{house.city}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{house.tables}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{house.activePlayers}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-green-500">₹{house.todayChips}</span>
                  </td>
                  <td className="p-4">
                    {house.status === "active" ? (
                      <Badge className="bg-green-600 text-white border-0">
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-600 text-white border-0">
                        Maintenance
                      </Badge>
                    )}
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
          <p className="text-neutral-400">Showing 1-5 of 47 houses</p>
          <div className="flex gap-2">
            <Button variant="outline" className="border-2 border-neutral-700 bg-black text-neutral-500" disabled>Previous</Button>
            <Button variant="outline" className="border-2 bg-red-600 text-white">1</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">2</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">3</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">...</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">10</Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">Next</Button>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
