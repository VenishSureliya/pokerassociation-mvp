import { Link } from "react-router";
import { Smartphone, Monitor, LayoutDashboard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

export function WireframeHome() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-red-500 mb-2">IPA Poker System - Wireframes</h1>
          <p className="text-neutral-400">High-fidelity wireframes for all three applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Player Mobile App */}
          <Card className="border-2 border-red-600 bg-neutral-900">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="size-6 text-red-500" />
                <CardTitle className="text-white">Player Mobile App</CardTitle>
              </div>
              <CardDescription className="text-neutral-400">Simple and intuitive app for players</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/player/login" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Login & OTP
                </Link>
                <Link to="/player/kyc" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Online KYC
                </Link>
                <Link to="/player/dashboard" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Dashboard & Player ID
                </Link>
                <Link to="/player/tables" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Available Tables
                </Link>
                <Link to="/player/wallet" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Chip Wallet
                </Link>
                <Link to="/player/food" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Food Ordering
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Poker House Dashboard */}
          <Card className="border-2 border-red-600 bg-neutral-900">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="size-6 text-red-500" />
                <CardTitle className="text-white">Poker House Dashboard</CardTitle>
              </div>
              <CardDescription className="text-neutral-400">Central system for daily operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/house/checkin" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Check-in System
                </Link>
                <Link to="/house/tables" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Table Management
                </Link>
                <Link to="/house/chips" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Chip Tracking
                </Link>
                <Link to="/house/food" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Food Orders
                </Link>
                <Link to="/house/kyc" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  KYC Approval
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Admin Console */}
          <Card className="border-2 border-red-600 bg-neutral-900">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <LayoutDashboard className="size-6 text-red-500" />
                <CardTitle className="text-white">Admin Console</CardTitle>
              </div>
              <CardDescription className="text-neutral-400">Master dashboard for IPA management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/admin/dashboard" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Overview Dashboard
                </Link>
                <Link to="/admin/players" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Players Database
                </Link>
                <Link to="/admin/houses" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Houses Database
                </Link>
                <Link to="/admin/ledger" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Real-time Chip Ledger
                </Link>
                <Link to="/admin/reports" className="block p-3 bg-black border border-red-600 hover:bg-red-600 hover:text-white text-red-500 rounded transition-colors">
                  Reports & Analytics
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}