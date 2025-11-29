import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface MobileFrameProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
}

export function MobileFrame({ children, title, showBack = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="relative">
        {/* Mobile Device Frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[3rem] border-[14px] border-red-600 shadow-2xl shadow-red-900/50 overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-red-600 rounded-b-3xl z-10"></div>
          
          {/* Screen Content */}
          <div className="h-full overflow-y-auto bg-black">
            {children}
          </div>
        </div>
        
        {/* Wireframe Label */}
        <div className="absolute -top-8 left-0 right-0 text-center">
          <span className="text-red-500">WIREFRAME: {title}</span>
        </div>
        
        {/* Back Button */}
        {showBack && (
          <Link 
            to="/" 
            className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-neutral-400 hover:text-red-500"
          >
            <ArrowLeft className="size-4" />
            Back to Overview
          </Link>
        )}
      </div>
    </div>
  );
}