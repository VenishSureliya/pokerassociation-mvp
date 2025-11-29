import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { UtensilsCrossed, Search, ShoppingCart, Home, LayoutGrid, Wallet, User, Plus, Minus } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export function PlayerFood() {
  const menuItems = [
    { id: 1, name: "Vegetable Sandwich", price: 120, category: "Snacks", available: true },
    { id: 2, name: "Club Sandwich", price: 180, category: "Snacks", available: true },
    { id: 3, name: "French Fries", price: 100, category: "Snacks", available: true },
    { id: 4, name: "Coffee", price: 80, category: "Beverages", available: true },
    { id: 5, name: "Cold Drink", price: 60, category: "Beverages", available: true },
    { id: 6, name: "Fresh Juice", price: 120, category: "Beverages", available: true },
    { id: 7, name: "Paneer Tikka", price: 250, category: "Main Course", available: false },
  ];

  return (
    <MobileFrame title="Player Mobile App - Food Ordering">
      <div className="h-full flex flex-col bg-black">
        {/* Header */}
        <div className="bg-red-600 text-white pt-16 px-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="size-6" />
              <h2 className="text-white">Food Menu</h2>
            </div>
            <Button size="icon" variant="outline" className="border-red-800 bg-black text-white hover:bg-red-700 relative">
              <ShoppingCart className="size-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-xs">
                2
              </span>
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <Input 
              placeholder="Search menu..." 
              className="pl-10 h-11 bg-black border-red-800 text-white placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* Current Table Info */}
        <div className="px-6 py-3 bg-neutral-900 border-b-2 border-neutral-800 flex items-center justify-between">
          <div>
            <p className="text-red-500">Ordering for</p>
            <p className="text-white">Table 3 • Seat 5</p>
          </div>
          <Button size="sm" variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
            Change
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-4 bg-neutral-900 border-b-2 border-neutral-800 overflow-x-auto">
          <div className="flex gap-2">
            <Button className="bg-red-600 text-white hover:bg-red-700 h-9">
              All Items
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black h-9">
              Snacks
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black h-9">
              Beverages
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black h-9">
              Main Course
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-black">
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className={`bg-neutral-900 border-2 rounded-lg p-4 ${
                  item.available ? "border-red-600" : "border-neutral-800 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white">{item.name}</h4>
                      {!item.available && (
                        <Badge variant="outline" className="border-red-600 text-red-500 bg-black">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    <p className="text-neutral-400">{item.category}</p>
                  </div>
                  <p className="text-red-500">₹{item.price}</p>
                </div>

                {item.available ? (
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-9 w-9 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black"
                    >
                      <Minus className="size-4" />
                    </Button>
                    <div className="w-12 h-9 bg-black border-2 border-red-600 rounded flex items-center justify-center">
                      <span className="text-white">0</span>
                    </div>
                    <Button 
                      size="icon" 
                      className="h-9 w-9 bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                ) : (
                  <Button disabled className="w-full h-9 bg-neutral-800 text-neutral-500">
                    Not Available
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary & Checkout */}
        <div className="px-6 py-4 bg-neutral-900 border-t-2 border-neutral-800">
          <div className="bg-black border-2 border-red-600 rounded-lg p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-neutral-400">2 items</span>
              <span className="text-white">₹300</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-neutral-400">Service charge</span>
              <span className="text-white">₹30</span>
            </div>
            <div className="border-t-2 border-neutral-800 pt-2 flex items-center justify-between">
              <span className="text-white">Total</span>
              <span className="text-red-500">₹330</span>
            </div>
          </div>

          <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
            Place Order • ₹330
          </Button>
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