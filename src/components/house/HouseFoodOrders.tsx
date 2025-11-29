import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { UtensilsCrossed, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "../ui/badge";

export function HouseFoodOrders() {
  const orders = [
    { 
      id: 1, 
      orderId: "ORD001234", 
      playerId: "PID00234567", 
      playerName: "Rajesh Kumar",
      table: "Table 3",
      seat: "5",
      items: ["Club Sandwich", "Coffee"],
      total: 260,
      status: "pending",
      time: "3:45 PM"
    },
    { 
      id: 2, 
      orderId: "ORD001235", 
      playerId: "PID00234892", 
      playerName: "Amit Sharma",
      table: "Table 1",
      seat: "2",
      items: ["French Fries", "Cold Drink"],
      total: 160,
      status: "preparing",
      time: "3:40 PM"
    },
    { 
      id: 3, 
      orderId: "ORD001236", 
      playerId: "PID00235124", 
      playerName: "Priya Singh",
      table: "VIP Table 1",
      seat: "4",
      items: ["Fresh Juice", "Paneer Tikka"],
      total: 370,
      status: "ready",
      time: "3:35 PM"
    },
    { 
      id: 4, 
      orderId: "ORD001237", 
      playerId: "PID00234701", 
      playerName: "Vikram Patel",
      table: "Table 2",
      seat: "7",
      items: ["Vegetable Sandwich"],
      total: 120,
      status: "delivered",
      time: "3:20 PM"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-600 text-white border-0";
      case "preparing": return "bg-red-600 text-white border-0";
      case "ready": return "bg-green-600 text-white border-0";
      case "delivered": return "bg-neutral-700 text-neutral-300 border-0";
      default: return "bg-neutral-700 text-neutral-300 border-0";
    }
  };

  return (
    <DesktopFrame title="Poker House Dashboard - Food Orders">
      <div className="p-8 bg-neutral-900">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Food Orders</h2>
            <p className="text-neutral-400">View and manage all food orders from tables</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-600 border-2 border-green-500 rounded-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white">Live Orders</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-black border-2 border-amber-600 rounded-lg">
            <p className="text-amber-500 mb-1">Pending</p>
            <h3 className="text-white">1</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-red-500 mb-1">Preparing</p>
            <h3 className="text-white">1</h3>
          </div>
          <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
            <p className="text-green-500 mb-1">Ready</p>
            <h3 className="text-white">1</h3>
          </div>
          <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
            <p className="text-neutral-400 mb-1">Delivered Today</p>
            <h3 className="text-white">47</h3>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            All Orders
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Pending
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Preparing
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Ready
          </Button>
          <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Delivered
          </Button>
        </div>

        {/* Orders List */}
        <div className="grid grid-cols-2 gap-6">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="bg-black border-2 border-red-600 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white mb-1">{order.orderId}</h4>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Clock className="size-4" />
                    <span>{order.time}</span>
                  </div>
                </div>
                <Badge className={`${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>

              <div className="p-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-white">{order.playerName}</p>
                    <p className="text-neutral-400">{order.playerId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{order.table}</p>
                    <p className="text-neutral-400">Seat {order.seat}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-neutral-400 mb-2">Items:</p>
                <ul className="space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-neutral-800">
                <span className="text-neutral-400">Total</span>
                <span className="text-red-500">₹{order.total}</span>
              </div>

              {order.status === "pending" && (
                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    Start Preparing
                  </Button>
                  <Button variant="outline" size="icon" className="border-2 border-neutral-700 text-neutral-500 hover:bg-neutral-800 bg-black">
                    <XCircle className="size-5" />
                  </Button>
                </div>
              )}

              {order.status === "preparing" && (
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle2 className="size-5 mr-2" />
                  Mark as Ready
                </Button>
              )}

              {order.status === "ready" && (
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Mark as Delivered
                </Button>
              )}

              {order.status === "delivered" && (
                <div className="flex items-center justify-center gap-2 text-green-500">
                  <CheckCircle2 className="size-5" />
                  <span>Delivered</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-black border-2 border-red-600 rounded-lg">
          <h4 className="text-red-500 mb-2">Order Management Tips</h4>
          <ul className="text-neutral-400 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span>Orders are automatically received when players submit from their app</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span>Update status to keep players informed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span>Food charges are automatically deducted from player wallets</span>
            </li>
          </ul>
        </div>
      </div>
    </DesktopFrame>
  );
}
