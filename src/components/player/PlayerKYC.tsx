import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { Camera, Upload, CheckCircle2 } from "lucide-react";
import { Progress } from "../ui/progress";

export function PlayerKYC() {
  return (
    <MobileFrame title="Player Mobile App - KYC">
      <div className="pt-16 px-6 h-full flex flex-col bg-black">
        {/* Header */}
        <div className="py-6">
          <h2 className="text-white mb-2">Complete Your KYC</h2>
          <p className="text-neutral-400">Required for wallet activation</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-neutral-400">Step 2 of 3</span>
            <span className="text-red-500">66%</span>
          </div>
          <Progress value={66} className="h-2 bg-neutral-800" />
        </div>

        {/* KYC Steps */}
        <div className="flex-1 space-y-6 overflow-y-auto pb-6">
          {/* Step 1 - Completed */}
          <div className="p-4 bg-neutral-900 border-2 border-green-600 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-6 text-green-500 mt-1" />
              <div className="flex-1">
                <h3 className="text-white mb-1">Phone Verification</h3>
                <p className="text-neutral-400">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Step 2 - Active */}
          <div className="p-4 bg-neutral-900 border-2 border-red-600 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">Selfie Capture</h3>
                <p className="text-neutral-400">Take a clear photo of your face</p>
              </div>
            </div>

            <div className="aspect-square bg-black border-2 border-dashed border-red-600 rounded-lg flex flex-col items-center justify-center mb-3">
              <Camera className="size-12 text-red-500 mb-2" />
              <p className="text-neutral-400">Tap to capture</p>
            </div>

            <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
              <Camera className="size-5 mr-2" />
              Take Selfie
            </Button>
          </div>

          {/* Step 3 - Pending */}
          <div className="p-4 bg-neutral-900 border-2 border-neutral-700 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center mt-1">
                <span className="text-neutral-400">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-400 mb-1">ID Document Upload</h3>
                <p className="text-neutral-500">Aadhaar, PAN, or Driving License</p>
              </div>
            </div>

            <div className="p-6 bg-black border-2 border-neutral-700 rounded-lg flex flex-col items-center">
              <Upload className="size-10 text-neutral-600 mb-2" />
              <p className="text-neutral-500">Upload document</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-neutral-900 border-2 border-amber-600 rounded-lg">
            <h4 className="text-amber-500 mb-2">Guidelines</h4>
            <ul className="text-neutral-400 space-y-1 list-disc list-inside">
              <li>Ensure good lighting</li>
              <li>Face should be clearly visible</li>
              <li>Document text must be readable</li>
              <li>No blur or glare</li>
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="py-4 border-t-2 border-neutral-800">
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-12 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-black">
              Back
            </Button>
            <Button className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}