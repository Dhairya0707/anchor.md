import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center bg-grid-pattern px-4">
      <div className="text-center max-w-md bg-slate-900/40 border border-white/10 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full" />
        
        <span className="text-4xl sm:text-5xl block mb-6">⚓</span>
        
        <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
          404 Error
        </span>
        
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 tracking-tight">
          Context Lost
        </h1>
        
        <p className="mt-3 text-white/60 text-sm sm:text-base leading-relaxed">
          The page you are looking for has drifted away or does not exist in this workspace.
        </p>

        <Link 
          href="/"
          className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-3 px-6 rounded-2xl transition-all active:scale-95 inline-flex items-center gap-2 shadow-lg hover:shadow-indigo-500/20"
        >
          <ArrowLeft size={16} />
          Return to Safe Harbor
        </Link>
      </div>
    </div>
  );
}
