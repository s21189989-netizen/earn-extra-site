'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Trophy, Medal, Zap, Crown } from 'lucide-react';

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-10 relative">
      {/* Background Dots Pattern */}
      <style dangerouslySetInnerHTML={{__html: `
        .dot-bg {
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}} />
      <div className="absolute inset-0 dot-bg pointer-events-none -z-10" />

      {/* Top Nav Buttons */}
      <div className="max-w-4xl mx-auto flex gap-4 px-4 py-4">
        <Link href="/" className="flex-1 bg-[#1a1f2e] text-white flex justify-center items-center py-3 rounded-xl font-bold text-xs md:text-sm hover:bg-black transition-colors shadow-md">
          <ArrowLeft size={16} className="mr-2"/> BACK TO HOME
        </Link>
        <a href="https://web.telegram.org/k/#-3768378241" target="_blank" rel="noreferrer" className="flex-1 bg-blue-500 text-white flex justify-center items-center py-3 rounded-xl font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-600 transition-colors">
          <Send size={16} className="mr-2"/> Telegram
        </a>
      </div>

      {/* Hall of Champions Banner */}
      <div className="max-w-4xl mx-auto px-4 mt-2">
        <div className="bg-[#1e1b2e] rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="inline-block bg-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">
            ⭐ Winner Result Announced
          </div>
          <h1 className="text-2xl md:text-3xl font-black mb-1 flex items-center gap-2"><Trophy className="text-yellow-400"/> HALL OF CHAMPIONS</h1>
          <p className="text-gray-400 text-xs md:text-sm mb-8">Official Daily Leaderboard & Instant Payout Standings</p>

          <div className="flex justify-between items-center border-t border-white/10 pt-4">
            <div>
              <div className="text-yellow-400 font-black text-lg md:text-xl">₹1.65 Cr+</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Paid Today</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-black text-lg md:text-xl flex items-center gap-1 justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> 48,920+
              </div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Active Winners</div>
            </div>
            <div className="text-right">
              <div className="text-blue-400 font-black text-lg md:text-xl">8:00 AM</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Next Reset</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
          <button onClick={() => setActiveTab('today')} className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1.5 ${activeTab === 'today' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            🔥 TODAY'S WINNERS
          </button>
          <button onClick={() => setActiveTab('weekly')} className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1.5 ${activeTab === 'weekly' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            ⭐ WEEKLY TOP
          </button>
          <button onClick={() => setActiveTab('hall')} className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1.5 ${activeTab === 'hall' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            👑 HALL OF FAME
          </button>
        </div>
      </div>

      {/* Top 3 Podium Boxes */}
      <div className="max-w-4xl mx-auto px-4 mt-16 md:mt-20 flex justify-center items-end gap-2 md:gap-6 relative">
        {/* 2nd Place (Silver) */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl w-[31%] pb-4 pt-10 relative flex flex-col items-center shadow-lg mb-4">
          <div className="absolute -top-8 bg-slate-100 border-4 border-white w-14 h-14 rounded-full flex items-center justify-center font-black text-slate-400 text-xl shadow-inner">SP</div>
          <div className="absolute -top-12 bg-slate-300 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><Medal size={10}/> 2nd RUNNER UP</div>
          <p className="font-extrabold text-gray-900 text-xs md:text-sm truncate w-full text-center px-2">sunil_patel.99</p>
          <div className="text-[9px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mt-1 mb-4">WeCoin</div>
          <div className="bg-indigo-500 w-[90%] py-2 rounded-xl text-center text-white">
            <div className="text-[7px] uppercase tracking-wider font-bold opacity-80">Total Earnings</div>
            <div className="font-black text-sm md:text-base">₹54.20L</div>
          </div>
        </div>

        {/* 1st Place (Gold) */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl w-[35%] pb-4 pt-12 relative flex flex-col items-center shadow-2xl z-10 scale-105">
          <div className="absolute -top-10 bg-yellow-50 border-4 border-white w-20 h-20 rounded-full flex items-center justify-center font-black text-yellow-500 text-3xl shadow-inner">SD</div>
          <div className="absolute -top-14 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md"><Crown size={12}/> 1st CHAMPION</div>
          <p className="font-extrabold text-gray-900 text-sm md:text-base truncate w-full text-center px-2">sneha_deshmukh</p>
          <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mt-1 mb-4">Diwa Pay</div>
          <div className="bg-yellow-500 w-[90%] py-3 rounded-xl text-center text-white shadow-inner">
            <div className="text-[8px] uppercase tracking-wider font-bold opacity-90">Total Earnings</div>
            <div className="font-black text-base md:text-xl">₹57.60L</div>
          </div>
        </div>

        {/* 3rd Place (Bronze) */}
        <div className="bg-white border-2 border-orange-200 rounded-2xl w-[31%] pb-4 pt-10 relative flex flex-col items-center shadow-lg mb-4">
          <div className="absolute -top-8 bg-orange-50 border-4 border-white w-14 h-14 rounded-full flex items-center justify-center font-black text-orange-400 text-xl shadow-inner">PS</div>
          <div className="absolute -top-12 bg-orange-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><Medal size={10}/> 3rd PLACE</div>
          <p className="font-extrabold text-gray-900 text-xs md:text-sm truncate w-full text-center px-2">priyanshu_saini</p>
          <div className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-md mt-1 mb-4">Uno Pay</div>
          <div className="bg-pink-500 w-[90%] py-2 rounded-xl text-center text-white">
            <div className="text-[7px] uppercase tracking-wider font-bold opacity-80">Total Earnings</div>
            <div className="font-black text-sm md:text-base">₹51.80L</div>
          </div>
        </div>
      </div>

      {/* List View (Rank 4+) */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-indigo-50 p-1.5 rounded-lg"><Trophy size={16} className="text-indigo-500"/></div>
            <h3 className="font-black text-gray-800 text-sm md:text-base uppercase tracking-wide">Leaderboard Standings</h3>
          </div>

          <div className="flex flex-col gap-3">
            {/* Rank 4 */}
            <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-yellow-500 font-black text-sm md:text-base w-6">#4</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">DM</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1">deepak_meena_07 <div className="w-3 h-3 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px]">✓</div></div>
                  <div className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mt-1 inline-block">Diwa Pay</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-black text-gray-900 text-sm md:text-base flex items-center gap-1 justify-end"><span className="text-green-500 text-lg">↗</span> ₹32,606.63</div>
                <div className="text-[9px] font-bold text-green-500 mt-0.5">+12.5%</div>
              </div>
            </div>

            {/* Rank 5 */}
            <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-blue-400 font-black text-sm md:text-base w-6">#5</div>
                <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold">TS</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1">tarun_sharma_real <div className="w-3 h-3 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px]">✓</div></div>
                  <div className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded mt-1 inline-block">WeCoin</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-black text-gray-900 text-sm md:text-base flex items-center gap-1 justify-end"><span className="text-green-500 text-lg">↗</span> ₹28,865.06</div>
                <div className="text-[9px] font-bold text-green-500 mt-0.5">+9.3%</div>
              </div>
            </div>

            {/* Rank 6 */}
            <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-slate-500 font-black text-sm md:text-base w-6">#6</div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">RS</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1">rahul_sharma_99 <div className="w-3 h-3 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px]">✓</div></div>
                  <div className="text-[9px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded mt-1 inline-block">SUPERMONEY</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-black text-gray-900 text-sm md:text-base flex items-center gap-1 justify-end"><span className="text-green-500 text-lg">↗</span> ₹24,190.00</div>
                <div className="text-[9px] font-bold text-green-500 mt-0.5">+15.2%</div>
              </div>
            </div>

            {/* Rank 7 */}
            <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-slate-500 font-black text-sm md:text-base w-6">#7</div>
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">PP</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1">priyanka_patel <div className="w-3 h-3 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px]">✓</div></div>
                  <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">Kotak811</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-black text-gray-900 text-sm md:text-base flex items-center gap-1 justify-end"><span className="text-green-500 text-lg">↗</span> ₹21,850.25</div>
                <div className="text-[9px] font-bold text-green-500 mt-0.5">+8.7%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Withdraw Ticker */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 text-white p-1.5 rounded-full"><Zap size={16}/></div>
            <div className="text-xs md:text-sm text-gray-700 font-medium">
              🎉 <span className="font-bold text-gray-900">tarun_***</span> withdrew <span className="font-bold text-green-600">₹30,172.90</span> on WYNN PAY
            </div>
          </div>
          <div className="bg-green-100 text-green-700 text-[10px] font-black px-2.5 py-1 rounded tracking-widest uppercase animate-pulse">Live</div>
        </div>
      </div>
    </div>
  );
}