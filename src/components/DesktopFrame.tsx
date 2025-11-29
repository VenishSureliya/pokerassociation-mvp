import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface DesktopFrameProps {
  children: ReactNode;
  title: string;
}

export function DesktopFrame({ children, title }: DesktopFrameProps) {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-red-500">
            <ArrowLeft className="size-4" />
            Back to Overview
          </Link>
          <span className="text-neutral-600">|</span>
          <span className="text-red-500">WIREFRAME: {title}</span>
        </div>
        
        <div className="bg-neutral-900 border-4 border-red-600 rounded-lg shadow-xl shadow-red-900/50 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}