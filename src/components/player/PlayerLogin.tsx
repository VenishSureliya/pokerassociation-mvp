import { MobileFrame } from "../MobileFrame";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Smartphone } from "lucide-react";
import {
  TypographyH3,
  TypographyH4,
  TypographyMuted,
  TypographySmall
} from "../ui/typography";

export function PlayerLogin() {
  return (
    <MobileFrame title="Player Mobile App - Login">
      <div className="pt-16 px-6 h-full flex flex-col bg-black">
        {/* Logo Area */}
        <div className="flex flex-col items-center pt-12 pb-8">
          <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-4">
            <Smartphone className="size-10 text-white" />
          </div>
          <TypographyH3 className="text-red-500 mb-1">IPA Poker</TypographyH3>
          <TypographyMuted className="text-neutral-400">Player App</TypographyMuted>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <TypographyH4 className="text-white mb-2">Welcome Back</TypographyH4>
            <TypographyMuted className="text-neutral-400">Enter your phone number to continue</TypographyMuted>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-neutral-400 mb-2">
                <TypographySmall>Phone Number</TypographySmall>
              </label>
              <div className="flex gap-2">
                <div className="w-20 h-12 bg-neutral-900 border-2 border-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="9876543210"
                  className="h-12 border-2 border-red-600 bg-neutral-900 text-white placeholder:text-neutral-500"
                />
              </div>
            </div>

            <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
              Send OTP
            </Button>
          </div>

          {/* OTP State (shown after sending) */}
          <div className="mt-8 p-4 bg-neutral-900 border-2 border-dashed border-red-600 rounded-lg">
            <TypographyMuted className="text-neutral-400 text-center mb-4">
              OTP sent to +91 98765 43210
            </TypographyMuted>

            <div className="flex gap-2 justify-center mb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-12 h-14 bg-black border-2 border-red-600 rounded-lg flex items-center justify-center"
                >
                  <span className="text-neutral-500">0</span>
                </div>
              ))}
            </div>

            <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
              Verify OTP
            </Button>

            <div className="text-center mt-4">
              <TypographyMuted className="text-neutral-400">
                Resend OTP in <span className="text-red-500">00:45</span>
              </TypographyMuted>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-6 text-center">
          <TypographyMuted className="text-neutral-500">
            New user? Complete KYC after login
          </TypographyMuted>
        </div>
      </div>
    </MobileFrame>
  );
}