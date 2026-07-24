import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-8 px-4 font-sans relative">
      
      {/* Background Dots Pattern */}
      <style dangerouslySetInnerHTML={{__html: `
        .dot-bg { background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 20px 20px; }
      `}} />
      <div className="absolute inset-0 dot-bg pointer-events-none -z-10" />

      {/* Go Back Button */}
      <div className="w-full max-w-md flex justify-center mb-6 z-10">
        <Link href="/" className="flex items-center gap-1.5 text-slate-500 font-bold text-sm hover:text-slate-800 transition-colors">
          <ArrowLeft size={16} /> Go Back
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-8 max-w-md w-full text-center relative overflow-hidden z-10">
        
        {/* Subtle Orange Glow at the top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-orange-50/60 rounded-t-[2rem] -z-10 blur-2xl"></div>

        {/* Shield Icon */}
        <div className="w-16 h-16 bg-orange-50 text-[#f95b00] rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-100 shadow-sm">
          <Shield size={32} strokeWidth={2.5} />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">Privacy & Security</h1>
        <p className="text-[#f95b00] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Official Statement</p>

        {/* Statement Box */}
        <div className="bg-orange-50/50 rounded-2xl p-5 border-l-4 border-[#f95b00] text-left mb-8 shadow-inner">
          <p className="text-gray-700 text-[13px] md:text-sm font-medium leading-relaxed mb-4">
            We want to help protect your valuable assets and savings. To enhance your security, we have removed certain applications and identified others that we do not recommend. Your financial well-being remains our priority.
          </p>
          <p className="font-black text-[#f95b00] text-sm">— Earn Extra</p>
        </div>

        {/* Return Button */}
        <Link href="/" className="block w-full bg-[#f95b00] hover:bg-[#e05200] text-white font-bold text-sm md:text-base py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Return to Earning Apps
        </Link>
      </div>

      {/* Footer */}
      <p className="text-[11px] text-gray-400 mt-6 font-bold z-10">© 2026 Earn Extra Security</p>
      
    </div>
  );
}