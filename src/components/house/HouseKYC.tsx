import { DesktopFrame } from "../DesktopFrame";
import { Button } from "../ui/button";
import { UserCheck, AlertCircle, CheckCircle2, XCircle, Eye } from "lucide-react";
import { Badge } from "../ui/badge";

export function HouseKYC() {
  const kycRequests = [
    { 
      id: 1, 
      playerId: "PID00235245", 
      name: "Sanjay Mehta",
      phone: "+91 98765 43210",
      status: "pending",
      submittedDate: "Nov 26, 2024",
      submittedTime: "2:30 PM",
      documents: ["Selfie", "Aadhaar Card"]
    },
    { 
      id: 2, 
      playerId: "PID00235246", 
      name: "Kavita Desai",
      phone: "+91 98765 43211",
      status: "pending",
      submittedDate: "Nov 26, 2024",
      submittedTime: "1:45 PM",
      documents: ["Selfie", "PAN Card"]
    },
    { 
      id: 3, 
      playerId: "PID00235247", 
      name: "Arjun Reddy",
      phone: "+91 98765 43212",
      status: "approved",
      submittedDate: "Nov 26, 2024",
      submittedTime: "11:20 AM",
      approvedBy: "EID001234",
      documents: ["Selfie", "Driving License"]
    },
  ];

  return (
    <DesktopFrame title="Poker House Dashboard - KYC Verification">
      <div className="grid grid-cols-[1fr_500px] h-[800px]">
        {/* Left Panel - Requests List */}
        <div className="p-8 border-r-2 border-neutral-800 overflow-y-auto bg-neutral-900">
          <div className="mb-8">
            <h2 className="text-white mb-2">KYC Verification</h2>
            <p className="text-neutral-400">Review and approve player KYC submissions</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-black border-2 border-amber-600 rounded-lg">
              <p className="text-amber-500 mb-1">Pending Review</p>
              <h3 className="text-white">2</h3>
            </div>
            <div className="p-4 bg-black border-2 border-green-600 rounded-lg">
              <p className="text-green-500 mb-1">Approved Today</p>
              <h3 className="text-white">15</h3>
            </div>
            <div className="p-4 bg-black border-2 border-red-600 rounded-lg">
              <p className="text-red-500 mb-1">Rejected Today</p>
              <h3 className="text-white">3</h3>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6">
            <Button className="bg-red-600 text-white hover:bg-red-700">
              All Requests
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              Pending
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              Approved
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              Rejected
            </Button>
          </div>

          {/* Requests List */}
          <div className="space-y-4">
            {kycRequests.map((request) => (
              <div 
                key={request.id}
                className="bg-black border-2 border-red-600 rounded-xl p-6 hover:border-red-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-1">{request.name}</h3>
                    <p className="text-neutral-400 mb-1">{request.playerId}</p>
                    <p className="text-neutral-400">{request.phone}</p>
                  </div>
                  {request.status === "pending" ? (
                    <Badge className="bg-amber-600 text-white border-0">
                      <AlertCircle className="size-4 mr-1" />
                      Pending Review
                    </Badge>
                  ) : request.status === "approved" ? (
                    <Badge className="bg-green-600 text-white border-0">
                      <CheckCircle2 className="size-4 mr-1" />
                      Approved
                    </Badge>
                  ) : (
                    <Badge className="bg-red-800 text-white border-0">
                      <XCircle className="size-4 mr-1" />
                      Rejected
                    </Badge>
                  )}
                </div>

                <div className="p-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neutral-400">Submitted</span>
                    <span className="text-white">{request.submittedDate} • {request.submittedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">Documents:</span>
                    {request.documents.map((doc, idx) => (
                      <Badge key={idx} variant="outline" className="border-2 border-neutral-700 text-neutral-400 bg-black">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>

                {request.status === "pending" ? (
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      <Eye className="size-4 mr-2" />
                      Review Documents
                    </Button>
                  </div>
                ) : request.status === "approved" ? (
                  <div className="text-green-500">
                    Approved by {request.approvedBy}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Document Review */}
        <div className="p-8 bg-black overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-white mb-1">Document Review</h3>
            <p className="text-neutral-400">Selected: Sanjay Mehta</p>
          </div>

          {/* Document Preview */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-neutral-400 mb-2">Selfie</label>
              <div className="aspect-square bg-neutral-900 border-2 border-red-600 rounded-lg flex items-center justify-center">
                <UserCheck className="size-16 text-red-500" />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 mb-2">ID Document (Aadhaar)</label>
              <div className="aspect-video bg-neutral-900 border-2 border-red-600 rounded-lg flex items-center justify-center">
                <UserCheck className="size-16 text-red-500" />
              </div>
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg p-4 mb-6">
            <h4 className="text-white mb-3">Verification Checklist</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-2 border-red-600" />
                <span className="text-neutral-400">Photo is clear and face is visible</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-2 border-red-600" />
                <span className="text-neutral-400">ID document is readable</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-2 border-red-600" />
                <span className="text-neutral-400">Name matches on all documents</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-2 border-red-600" />
                <span className="text-neutral-400">Document is valid (not expired)</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle2 className="size-5 mr-2" />
              Approve KYC
            </Button>
            <Button variant="outline" className="w-full h-12 border-2 border-neutral-700 text-neutral-400 hover:bg-neutral-800 bg-black">
              <XCircle className="size-5 mr-2" />
              Reject KYC
            </Button>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-neutral-900 border-2 border-red-600 rounded-lg">
            <h4 className="text-red-500 mb-2">Important</h4>
            <p className="text-neutral-400">
              Once approved, the player will be able to access their wallet and play at any IPA poker house. All approvals are logged with your Employee ID.
            </p>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
