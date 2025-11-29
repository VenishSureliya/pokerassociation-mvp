import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { Coins, CreditCard, Banknote, Smartphone, TrendingUp, TrendingDown } from "lucide-react";

export function HouseChips() {
  const recentTransactions = [
    { id: 1, playerId: "PID00234567", name: "Rajesh Kumar", type: "add", amount: 5000, method: "UPI", time: "3:45 PM" },
    { id: 2, playerId: "PID00234892", name: "Amit Sharma", type: "add", amount: 10000, method: "Cash", time: "3:38 PM" },
    { id: 3, playerId: "PID00235124", name: "Priya Singh", type: "redeem", amount: 7500, method: "Card", time: "3:22 PM" },
    { id: 4, playerId: "PID00234701", name: "Vikram Patel", type: "add", amount: 3000, method: "UPI", time: "3:15 PM" },
    { id: 5, playerId: "PID00235089", name: "Neha Gupta", type: "redeem", amount: 12000, method: "Cash", time: "2:58 PM" },
  ];

  return (
    <DesktopFrame title="Poker House Dashboard - Chip Tracking">
      <div className="grid grid-cols-[1fr_450px] h-[800px]">
        {/* Left Panel - Add Chips */}
        <div className="p-8 border-r-2 border-neutral-800 overflow-y-auto bg-neutral-900">
          <div className="mb-8">
            <h2 className="text-white mb-2">Chip Management</h2>
            <p className="text-neutral-400">Add or redeem chips for players</p>
          </div>

          {/* Add Chips Form */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6 mb-8">
            <h3 className="text-white mb-6">Add Chips to Player</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-400 mb-2">Player ID</label>
                <div className="h-12 bg-neutral-900 border-2 border-red-600 rounded-lg px-4 flex items-center">
                  <span className="text-neutral-500">Enter or scan Player ID...</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-2">Player Name</label>
                  <div className="h-12 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 flex items-center">
                    <span className="text-neutral-500">Auto-filled</span>
                  </div>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-2">Current Balance</label>
                  <div className="h-12 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 flex items-center">
                    <span className="text-neutral-500">₹0</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-2">Amount</label>
                <div className="h-12 bg-neutral-900 border-2 border-red-600 rounded-lg px-4 flex items-center">
                  <span className="text-neutral-500">Enter amount...</span>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="h-20 bg-neutral-900 border-2 border-red-600 rounded-lg flex flex-col items-center justify-center hover:bg-red-600 transition-colors">
                    <Banknote className="size-6 text-red-500 mb-1" />
                    <span className="text-red-500">Cash</span>
                  </button>
                  <button className="h-20 bg-neutral-900 border-2 border-neutral-700 rounded-lg flex flex-col items-center justify-center hover:border-red-600 transition-colors">
                    <CreditCard className="size-6 text-neutral-400 mb-1" />
                    <span className="text-neutral-400">Card</span>
                  </button>
                  <button className="h-20 bg-neutral-900 border-2 border-neutral-700 rounded-lg flex flex-col items-center justify-center hover:border-red-600 transition-colors">
                    <Smartphone className="size-6 text-neutral-400 mb-1" />
                    <span className="text-neutral-400">UPI</span>
                  </button>
                </div>
              </div>

              <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white">
                <TrendingUp className="size-5 mr-2" />
                Add Chips
              </Button>
            </div>
          </div>

          {/* Redeem Chips Form */}
          <div className="bg-black border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-white mb-6">Redeem Chips</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-400 mb-2">Player ID</label>
                <div className="h-12 bg-neutral-900 border-2 border-red-600 rounded-lg px-4 flex items-center">
                  <span className="text-neutral-500">Enter or scan Player ID...</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-2">Available Balance</label>
                  <div className="h-12 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 flex items-center">
                    <span className="text-neutral-500">₹0</span>
                  </div>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-2">Redeem Amount</label>
                  <div className="h-12 bg-neutral-900 border-2 border-red-600 rounded-lg px-4 flex items-center">
                    <span className="text-neutral-500">Amount...</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
                <TrendingDown className="size-5 mr-2" />
                Process Redemption
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel - Recent Transactions */}
        <div className="p-8 bg-black overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-white mb-1">Recent Transactions</h3>
            <p className="text-neutral-400">Live chip movement tracking</p>
          </div>

          {/* Today's Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-neutral-900 border-2 border-green-600 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="size-5 text-green-500" />
                <p className="text-neutral-400">Added Today</p>
              </div>
              <h4 className="text-green-500">₹2,45,000</h4>
            </div>
            <div className="p-4 bg-neutral-900 border-2 border-red-600 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="size-5 text-red-500" />
                <p className="text-neutral-400">Redeemed Today</p>
              </div>
              <h4 className="text-red-500">₹1,87,500</h4>
            </div>
          </div>

          {/* Transactions List */}
          <div className="space-y-3">
            {recentTransactions.map((txn) => (
              <div 
                key={txn.id}
                className="bg-neutral-900 border-2 border-neutral-800 rounded-lg p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    txn.type === "add" ? "bg-green-600" : "bg-red-600"
                  }`}>
                    {txn.type === "add" ? (
                      <TrendingUp className="size-5 text-white" />
                    ) : (
                      <TrendingDown className="size-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1">{txn.name}</h4>
                    <p className="text-neutral-400">{txn.playerId}</p>
                  </div>
                  <div className="text-right">
                    <p className={`mb-1 ${
                      txn.type === "add" ? "text-green-500" : "text-red-500"
                    }`}>
                      {txn.type === "add" ? "+" : "-"}₹{txn.amount.toLocaleString()}
                    </p>
                    <p className="text-neutral-400">{txn.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {txn.method === "Cash" && <Banknote className="size-4 text-neutral-500" />}
                  {txn.method === "Card" && <CreditCard className="size-4 text-neutral-500" />}
                  {txn.method === "UPI" && <Smartphone className="size-4 text-neutral-500" />}
                  <span className="text-neutral-400">via {txn.method}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-neutral-900 border-2 border-amber-600 rounded-lg">
            <h4 className="text-amber-500 mb-2">Important</h4>
            <p className="text-neutral-400">
              All transactions are synced in real-time with the Admin Console and player wallets.
            </p>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
