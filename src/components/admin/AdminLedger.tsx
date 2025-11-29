import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { TrendingUp, TrendingDown, Download, Filter } from "lucide-react";

export function AdminLedger() {
  const transactions = [
    { id: 1, time: "3:45 PM", house: "Mumbai Central", playerId: "PID00234567", player: "Rajesh Kumar", type: "add", amount: 5000, method: "UPI" },
    { id: 2, time: "3:38 PM", house: "Delhi North", playerId: "PID00234892", player: "Amit Sharma", type: "add", amount: 10000, method: "Cash" },
    { id: 3, time: "3:22 PM", house: "Mumbai Central", playerId: "PID00235124", player: "Priya Singh", type: "redeem", amount: 7500, method: "Card" },
    { id: 4, time: "3:15 PM", house: "Bangalore South", playerId: "PID00234701", player: "Vikram Patel", type: "add", amount: 3000, method: "UPI" },
    { id: 5, time: "2:58 PM", house: "Mumbai Central", playerId: "PID00235089", player: "Neha Gupta", type: "redeem", amount: 12000, method: "Cash" },
    { id: 6, time: "2:45 PM", house: "Pune West", playerId: "PID00234923", player: "Karan Shah", type: "add", amount: 8000, method: "Card" },
    { id: 7, time: "2:30 PM", house: "Delhi North", playerId: "PID00235201", player: "Anita Roy", type: "add", amount: 15000, method: "UPI" },
  ];

  return (
    <DesktopFrame title="Admin Console - Real-time Chip Ledger">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Real-time Chip Ledger</h2>
            <p className="text-neutral-400">Live tracking of all chip transactions across all houses</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600 border-2 border-green-500 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white">Live Sync</span>
            </div>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              <Download className="size-5 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="size-5 text-green-500" />
              <p className="text-neutral-400">Total Added Today</p>
            </div>
            <h3 className="text-green-500">₹24,50,000</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="size-5 text-red-500" />
              <p className="text-neutral-400">Total Redeemed Today</p>
            </div>
            <h3 className="text-red-500">₹18,75,000</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-neutral-400">Net Flow</p>
            </div>
            <h3 className="text-white">₹5,75,000</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-neutral-400">Transactions</p>
            </div>
            <h3 className="text-white">1,247</h3>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            All Transactions
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Added
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Redeemed
          </Button>
          <div className="flex-1"></div>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            <Filter className="size-5 mr-2" />
            Filters
          </Button>
        </div>

        {/* Transactions Table */}
        <div className="bg-black border-2 border-red-600 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-red-600 border-b-2 border-red-700">
              <tr>
                <th className="text-left p-4 text-white">Time</th>
                <th className="text-left p-4 text-white">House</th>
                <th className="text-left p-4 text-white">Player ID</th>
                <th className="text-left p-4 text-white">Player Name</th>
                <th className="text-left p-4 text-white">Type</th>
                <th className="text-left p-4 text-white">Amount</th>
                <th className="text-left p-4 text-white">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-b-2 border-neutral-800 hover:bg-neutral-800">
                  <td className="p-4">
                    <span className="text-neutral-400">{txn.time}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{txn.house}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-mono text-red-500">{txn.playerId}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{txn.player}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {txn.type === "add" ? (
                        <>
                          <TrendingUp className="size-4 text-green-500" />
                          <span className="text-green-500">Added</span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="size-4 text-red-500" />
                          <span className="text-red-500">Redeemed</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={txn.type === "add" ? "text-green-500" : "text-red-500"}>
                      {txn.type === "add" ? "+" : "-"}₹{txn.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-neutral-400">{txn.method}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-black border-2 border-red-600 rounded-lg">
          <p className="text-neutral-400">
            <span className="text-red-500">Note:</span> All transactions are synced in real-time across all houses. Data is updated every second.
          </p>
        </div>
      </div>
    </DesktopFrame>
  );
}
