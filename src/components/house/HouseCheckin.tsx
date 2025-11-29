import { DesktopFrame } from "../DesktopFrame";
import { QrCode, UserCheck, Clock, Users } from "lucide-react";
import { Badge } from "../ui/badge";

export function HouseCheckin() {
  const recentCheckins = [
    { id: 1, playerId: "PID00234567", name: "Rajesh Kumar", time: "3:45 PM", status: "checked-in" },
    { id: 2, playerId: "PID00234892", name: "Amit Sharma", time: "3:38 PM", status: "checked-in" },
    { id: 3, playerId: "PID00235124", name: "Priya Singh", time: "3:22 PM", status: "checked-in" },
    { id: 4, playerId: "PID00234701", name: "Vikram Patel", time: "3:15 PM", status: "checked-in" },
    { id: 5, playerId: "PID00235089", name: "Neha Gupta", time: "2:58 PM", status: "checked-out" },
  ];

  return (
    <DesktopFrame title="Poker House Dashboard - Check-in System">
      <div className="grid grid-cols-[400px_1fr] h-[800px]">
        {/* Left Panel - QR Scanner */}
        <div className="bg-red-600 text-white p-8 flex flex-col">
          <div className="mb-8">
            <h2 className="text-white mb-2">Player Check-in</h2>
            <p className="text-red-200">Scan QR code to check players in/out</p>
          </div>

          {/* QR Scanner Area */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full aspect-square bg-black border-4 border-dashed border-red-800 rounded-2xl flex flex-col items-center justify-center mb-6">
              <QrCode className="size-32 text-red-500 mb-4" />
              <p className="text-neutral-400">Waiting for QR Code...</p>
            </div>

            <div className="w-full p-4 bg-black border-2 border-red-800 rounded-lg">
              <p className="text-neutral-400 mb-2">House ID</p>
              <h3 className="text-white">HID00012 - Mumbai Central</h3>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-black border-2 border-red-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="size-5 text-green-500" />
                <p className="text-neutral-400">Active Now</p>
              </div>
              <h3 className="text-white">47</h3>
            </div>
            <div className="p-4 bg-black border-2 border-red-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="size-5 text-red-500" />
                <p className="text-neutral-400">Today</p>
              </div>
              <h3 className="text-white">128</h3>
            </div>
          </div>
        </div>

        {/* Right Panel - Recent Activity */}
        <div className="p-8 bg-neutral-900">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white mb-1">Recent Check-ins/Outs</h3>
              <p className="text-neutral-400">Real-time attendance tracking</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600 border-2 border-green-500 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white">Live</span>
            </div>
          </div>

          {/* Activity List */}
          <div className="space-y-3">
            {recentCheckins.map((checkin) => (
              <div 
                key={checkin.id}
                className="bg-black border-2 border-red-600 rounded-lg p-4 hover:border-red-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <UserCheck className="size-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{checkin.name}</h4>
                      <p className="text-neutral-400">{checkin.playerId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="size-4 text-neutral-400" />
                        <span className="text-white">{checkin.time}</span>
                      </div>
                      <p className="text-neutral-400">Nov 26, 2024</p>
                    </div>
                    
                    {checkin.status === "checked-in" ? (
                      <Badge className="bg-green-600 text-white border-0">
                        Checked In
                      </Badge>
                    ) : (
                      <Badge className="bg-neutral-700 text-neutral-300 border-0">
                        Checked Out
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-black border-2 border-red-600 rounded-lg">
            <h4 className="text-red-500 mb-2">How Check-in Works</h4>
            <ul className="text-neutral-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Players scan the static house QR code at entry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Their Player ID and timestamp are automatically recorded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Data syncs in real-time with Admin Console</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>KYC status is verified automatically</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}