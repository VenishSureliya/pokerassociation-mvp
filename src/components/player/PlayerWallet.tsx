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
      <div className="h-full flex flex-col bg-black">
        {/* Header */}
        <div className="bg-red-600 text-white pt-16 px-6 pb-8">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="size-6" />
            <h2 className="text-white">Chip Wallet</h2>
          </div>

          {/* Balance Card */}
          <div className="bg-black border-2 border-red-800 rounded-2xl p-6">
            <p className="text-neutral-400 mb-2">Available Balance</p>
            <h1 className="text-red-500 mb-6">₹{currentBalance.toLocaleString()}</h1>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-400 mb-1">Total Added</p>
                <p className="text-white">₹{totalAdded.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-neutral-400 mb-1">Total Redeemed</p>
                <p className="text-white">₹{totalRedeemed.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="px-6 py-6 bg-neutral-900 border-b-2 border-neutral-800">
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-14 bg-green-600 hover:bg-green-700 text-white flex items-center gap-2" onClick={() => setShowAddChipsModal(true)}>
              <Plus className="size-5" />
              Add Chips
            </Button>
            {showAddChipsModal && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="bg-neutral-900 border-2 border-red-800 rounded-2xl p-6 w-full max-w-md">
                  <h3 className="text-white text-xl mb-4">Add Chips</h3>
                  <input
                    type="number"
                    value={chipAmountToAdd === 0 ? "" : chipAmountToAdd}
                    onChange={(e) => setChipAmountToAdd(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="w-full p-3 mb-4 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-600"
                  />
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[5000, 10000, 15000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setChipAmountToAdd(amount)}
                        className="p-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200"
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button onClick={() => setShowAddChipsModal(false)} className="bg-neutral-700 hover:bg-neutral-600 text-white border-none">
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
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="bg-neutral-900 border-2 border-red-800 rounded-2xl p-6 w-full max-w-md">
                  <h3 className="text-white text-xl mb-4">Redeem Chips</h3>
                  <input
                    type="number"
                    value={chipAmountToRedeem === 0 ? "" : chipAmountToRedeem}
                    onChange={(e) => setChipAmountToRedeem(Number(e.target.value))}
                    placeholder="Enter amount to redeem"
                    className="w-full p-3 mb-4 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-600"
                  />
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[1000, 2500, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setChipAmountToRedeem(amount)}
                        className="p-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200"
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button onClick={() => setShowRedeemChipsModal(false)} className="bg-neutral-700 hover:bg-neutral-600 text-white border-none">
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
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-black">
          <h3 className="text-white mb-4">Transaction History</h3>

          <div className="space-y-3">
            {transactions.map((txn) => (
              <div
                key={txn.id}
                className="bg-neutral-900 border-2 border-neutral-800 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${txn.type === "add"
                      ? "bg-green-600"
                      : "bg-red-600"
                      }`}>
                      {txn.type === "add" ? (
                        <TrendingUp className="size-5 text-white" />
                      ) : (
                        <TrendingDown className="size-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white mb-1">
                        {txn.type === "add" ? "Chips Added" : "Chips Redeemed"}
                      </h4>
                      <p className="text-neutral-400">
                        via {txn.method}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`mb-1 ${txn.type === "add"
                      ? "text-green-500"
                      : "text-red-500"
                      }`}>
                      {txn.type === "add" ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                    </p>
                    <p className="text-neutral-400">{txn.time}</p>
                  </div>
                </div>
                <p className="text-neutral-500 mt-2">{txn.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="px-6 py-4 bg-neutral-900 border-t-2 border-amber-600">
          <p className="text-amber-500 text-center">
            All transactions are tracked and synced in real-time
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t-2 border-neutral-800 bg-neutral-900">
          <div className="flex items-center justify-around py-4">
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <Home className="size-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-neutral-500">
              <LayoutGrid className="size-6" />
              <span className="text-xs">Tables</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-red-500">
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