import { useState } from "react";
import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { Wallet, Plus, ArrowDownToLine, TrendingUp, TrendingDown, Home, LayoutGrid, User } from "lucide-react";

export function PlayerWallet() {
  const [showAddChipsModal, setShowAddChipsModal] = useState(false);
  const [chipAmountToAdd, setChipAmountToAdd] = useState(0);
  const [showRedeemChipsModal, setShowRedeemChipsModal] = useState(false);
  const [chipAmountToRedeem, setChipAmountToRedeem] = useState(0);

  const [currentBalance, setCurrentBalance] = useState(12450);
  const [totalAdded, setTotalAdded] = useState(45000);
  const [totalRedeemed, setTotalRedeemed] = useState(32550);

  const handleAddChips = () => {
    console.log("Adding chips:", chipAmountToAdd);
    setCurrentBalance((prev) => prev + chipAmountToAdd);
    setTotalAdded((prev) => prev + chipAmountToAdd);
    setShowAddChipsModal(false);
    setChipAmountToAdd(0);
  };

  const handleRedeemChips = () => {
    if (chipAmountToRedeem > currentBalance) {
      alert("Insufficient balance to redeem this amount.");
      return;
    }
    console.log("Redeeming chips:", chipAmountToRedeem);
    setCurrentBalance((prev) => prev - chipAmountToRedeem);
    setTotalRedeemed((prev) => prev + chipAmountToRedeem);
    setShowRedeemChipsModal(false);
    setChipAmountToRedeem(0);
  };

  const transactions = [
    { id: 1, type: "add", amount: 5000, method: "UPI", date: "Nov 25, 2024", time: "3:45 PM" },
    { id: 2, type: "redeem", amount: -3500, method: "Cash", date: "Nov 25, 2024", time: "2:15 PM" },
    { id: 3, type: "add", amount: 10000, method: "Card", date: "Nov 24, 2024", time: "6:30 PM" },
    { id: 4, type: "redeem", amount: -7500, method: "UPI", date: "Nov 24, 2024", time: "11:20 AM" },
    { id: 5, type: "add", amount: 5000, method: "Cash", date: "Nov 23, 2024", time: "8:15 PM" },
  ];

  return (
    <MobileFrame title="Player Mobile App - Chip Wallet">
      <div className="h-full flex flex-col bg-neutral-100">
        {/* Header */}
        <div className="bg-red-600 text-white pt-16 px-6 pb-8">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="size-6" />
            <h2 className="text-white font-medium">Chip Wallet</h2>
          </div>

          {/* Balance Card */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <p className="text-neutral-500 mb-2 text-sm font-medium">Available Balance</p>
            <h1 className="text-red-600 mb-6 text-4xl font-bold">₹{currentBalance.toLocaleString()}</h1>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-500 mb-1 text-sm">Total Added</p>
                <p className="text-neutral-900 font-semibold">₹{totalAdded.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1 text-sm">Total Redeemed</p>
                <p className="text-neutral-900 font-semibold">₹{totalRedeemed.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="px-6 py-6 bg-white border-b border-neutral-200">
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-14 bg-green-600 hover:bg-green-700 text-white flex items-center gap-2" onClick={() => setShowAddChipsModal(true)}>
              <Plus className="size-5" />
              Add Chips
            </Button>
            {showAddChipsModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                  <h3 className="text-neutral-900 text-xl font-bold mb-4">Add Chips</h3>
                  <input
                    type="number"
                    value={chipAmountToAdd === 0 ? "" : chipAmountToAdd}
                    onChange={(e) => setChipAmountToAdd(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="w-full p-3 mb-4 rounded-lg bg-neutral-50 text-neutral-900 border border-neutral-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[5000, 10000, 15000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setChipAmountToAdd(amount)}
                        className="p-3 rounded-lg bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors duration-200 font-medium"
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button onClick={() => setShowAddChipsModal(false)} className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-none">
                      Cancel
                    </Button>
                    <Button onClick={handleAddChips} className="bg-red-600 hover:bg-red-700 text-white">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <Button className="h-14 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2" onClick={() => setShowRedeemChipsModal(true)}>
              <ArrowDownToLine className="size-5" />
              Redeem Chips
            </Button>
            {showRedeemChipsModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                  <h3 className="text-neutral-900 text-xl font-bold mb-4">Redeem Chips</h3>
                  <input
                    type="number"
                    value={chipAmountToRedeem === 0 ? "" : chipAmountToRedeem}
                    onChange={(e) => setChipAmountToRedeem(Number(e.target.value))}
                    placeholder="Enter amount to redeem"
                    className="w-full p-3 mb-4 rounded-lg bg-neutral-50 text-neutral-900 border border-neutral-200 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[1000, 2500, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setChipAmountToRedeem(amount)}
                        className="p-3 rounded-lg bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors duration-200 font-medium"
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button onClick={() => setShowRedeemChipsModal(false)} className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-none">
                      Cancel
                    </Button>
                    <Button onClick={handleRedeemChips} className="bg-red-600 hover:bg-red-700 text-white">
                      Redeem
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Transaction History */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-neutral-100">
          <h3 className="text-neutral-900 font-bold mb-4">Transaction History</h3>

          <div className="space-y-3">
            {transactions.map((txn) => (
              <div
                key={txn.id}
                className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.type === "add"
                      ? "bg-green-100"
                      : "bg-red-100"
                      }`}>
                      {txn.type === "add" ? (
                        <TrendingUp className="size-5 text-green-600" />
                      ) : (
                        <TrendingDown className="size-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-medium mb-0.5">
                        {txn.type === "add" ? "Chips Added" : "Chips Redeemed"}
                      </h4>
                      <p className="text-neutral-500 text-sm">
                        via {txn.method}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`mb-1 font-semibold ${txn.type === "add"
                      ? "text-green-600"
                      : "text-red-600"
                      }`}>
                      {txn.type === "add" ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                    </p>
                    <p className="text-neutral-400 text-xs">{txn.time}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs mt-2 border-t border-neutral-100 pt-2">{txn.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="px-6 py-4 bg-white border-t border-neutral-200">
          <p className="text-amber-500 text-center">
            All transactions are tracked and synced in real-time
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-neutral-200 bg-white">
          <div className="flex items-center justify-around py-4">
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <Home className="size-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <LayoutGrid className="size-6" />
              <span className="text-xs">Tables</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-red-600">
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