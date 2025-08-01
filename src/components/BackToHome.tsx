import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToHome() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link href="/">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-500 transition-all duration-200 shadow-lg text-xs sm:text-sm px-2 sm:px-4"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="hidden sm:inline">Home</span>
          <span className="sm:hidden">🏠</span>
        </Button>
      </Link>
    </div>
  );
}
