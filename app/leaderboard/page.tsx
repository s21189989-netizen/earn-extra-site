'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Trophy, Medal, Zap, Crown } from 'lucide-react';

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('today');

  // Realistic Data for different tabs
  const tabData: any = {
    today: {
      top3: [
        { name: "sunil_patel.99", initials: "SP", amount: "₹54.20L", app: "WeCoin", appColor: "text-blue-500 bg-blue-50" },
        { name: "sneha_deshmukh", initials: "SD", amount: "₹57.60L", app: "Diwa Pay", appColor: "text-green-600 bg-green-50" },
        { name: "priyanshu_saini", initials: "PS", amount: "₹51.80L", app: "Uno Pay", appColor: "text-red-500 bg-red-50" }
      ],
      list: [
        { rank: 4, name: "deepak_meena_07", init: "DM", amount: "₹32,606", app: "Diwa Pay", color: "bg-purple-500" },
        { rank: 5, name: "tarun_sharma_real", init: "TS", amount: "₹28,865", app: "WeCoin", color: "bg-orange-400" },
        { rank: 6, name: "rahul_sharma_99", init: "RS", amount: "₹24,190", app: "SUPERMONEY", color: "bg-blue-600" },
        { rank: 7, name: "priyanka_patel", init: "PP", amount: "₹21,850", app: "Kotak811", color: "bg-red-600" }
      ]
    },
    weekly: {
      top3: [
        { name: "vikas_kumar_x", initials: "VK", amount: "₹3.20 Cr", app: "Diwa Pay", appColor: "text-green-600 bg-green-50" },
        { name: "neha_sharma22", initials: "NS", amount: "₹4.15 Cr", app: "WeCoin", appColor: "text-blue-500 bg-blue-50" },
        { name: "rohit_singh_9", initials: "RS", amount: "₹2.95 Cr", app: "Link Pay", appColor: "text-indigo-500 bg-indigo-50" }
      ],
      list: [
        { rank: 4, name: "amit_patel_pro", init: "AP", amount: "₹95,420", app: "Uno Pay", color: "bg-pink-500" },
        { rank: 5, name: "pooja_verma", init: "PV", amount: "₹88,150", app: "Diwa Pay", color: "bg-green-500" },
        { rank: 6, name: "karan_johar_k", init: "KJ", amount: "₹76,900", app: "WeCoin", color: "bg-blue-500" },
        { rank: 7, name: "sneha_gupta", init: "SG", amount: "₹65,200", app: "Wynn Pay", color: "bg-purple-500" }
      ]
    },
    hall: {
      top3: [
        { name: "arjun_reddy_1", initials: "AR", amount: "₹12.4 Cr", app: "WeCoin", appColor: "text-blue-500 bg-blue-50" },
        { name: "THE_KING_MAKER", initials: "TK", amount: "₹18.5 Cr", app: "Diwa Pay", appColor: "text-green-600 bg-green-50" },
        { name: "priya_queen", initials: "PQ", amount: "₹10.8 Cr", app: "SuperMoney", appColor: "text-purple-600 bg-purple-50" }
      ],
      list: [
        { rank: 4, name: "rahul_boss_01", init: "RB", amount: "₹8.2 Cr", app: "Diwa Pay", color: "bg-yellow-500" },
        { rank: 5, name: "smriti_singh", init: "SS", amount: "₹7.5 Cr", app: "Kotak811", color: "bg-red-500" },
        { rank: 6, name: "ankit_hacker", init: "AH", amount: "₹6.1 Cr", app: "Link Pay", color: "bg-gray-800" },
        { rank: 7, name: "divya_sharma", init: "DS", amount: "₹5.4 Cr", app: "Uno Pay", color: "bg-pink-600" }
      ]
    }
  };

  const currentData = tabData[activeTab];

  return (
    // overflow-x-hidden added to prevent horizontal scroll on mobile
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-10 relative overflow-x-hidden">
      {/* Background Dots Pattern */}
      <style dangerouslySetInnerHTML={{__html: `
        .dot-bg { background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 20px 20px; }
      `}} />
      <div className="absolute inset-0 dot-bg pointer-events-none -z-10" />

      {/* Top Nav Buttons */}
      <div className="max-w-4xl mx-auto flex gap-3 px-3 py-4">
        <Link href="/" className="flex-1 bg-[#1a1f2e] text-white flex justify-center items-center py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-sm hover:bg-black transition-colors shadow-md">
          <ArrowLeft size={14} className="mr-1.5"/> BACK TO HOME
        </Link>
        {/* Updated Telegram Viral Link Here */}
        <a href="https://t.me/+q7lYLJwU5RJhZDU9" target="_blank" rel="noreferrer" className="flex-1 bg-blue-500 text-white flex justify-center items-center py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-sm shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-600 transition-colors">
          <Send size={14} className="mr-1.5"/> Telegram
        </a>
      </div>

      {/* Hall of Champions Banner */}
      <div className="max-w-4xl mx-auto px-3 mt-1">
        <div className="bg-[#1e1b2e] rounded-2xl md:rounded-3xl p-5 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="inline-block bg-orange-500 text-white text-[8px] md:text-[10px] font-extrabold px-2.5 py-1 rounded-full mb-2 md:mb-3 uppercase tracking-wider shadow-sm">
            ⭐ Winner Result Announced
          </div>
          <h1 className="text-xl md:text-3xl font-black mb-1 flex items-center gap-1.5 md:gap-2"><Trophy className="text-yellow-400 w-5 h-5 md:w-8 md:h-8"/> HALL OF CHAMPIONS</h1>
          <p className="text-gray-400 text-[10px] md:text-sm mb-6">Official Daily Leaderboard & Instant Payout Standings</p>

          <div className="flex justify-between items-center border-t border-white/10 pt-3 md:pt-4">
            <div>
              <div className="text-yellow-400 font-black text-sm md:text-xl">₹1.65 Cr+</div>
              <div className="text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold">Paid Today</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-black text-sm md:text-xl flex items-center gap-1 justify-center">
                <div className="w-1.5 h-1.5 md:w-2 h-2 bg-green-500 rounded-full animate-pulse"/> 48,920+
              </div>
              <div className="text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold">Active Winners</div>
            </div>
            <div className="text-right">
              <div className="text-blue-400 font-black text-sm md:text-xl">8:00 AM</div>
              <div className="text-[7px] md:text-[9px] text-gray-500 uppercase tracking-widest font-bold">Next Reset</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-3 mt-5">
        <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
          <button onClick={() => setActiveTab('today')} className={`flex-1 py-2 text-[10px] md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1 ${activeTab === 'today' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            🔥 TODAY
          </button>
          <button onClick={() => setActiveTab('weekly')} className={`flex-1 py-2 text-[10px] md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1 ${activeTab === 'weekly' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            ⭐ WEEKLY
          </button>
          <button onClick={() => setActiveTab('hall')} className={`flex-1 py-2 text-[10px] md:text-sm font-bold rounded-full transition-all flex justify-center items-center gap-1 ${activeTab === 'hall' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-400'}`}>
            👑 ALL TIME
          </button>
        </div>
      </div>

      {/* Top 3 Podium Boxes */}
      <div className="max-w-4xl mx-auto px-2 mt-12 md:mt-20 flex justify-center items-end gap-1.5 md:gap-6 relative">
        {/* 2nd Place (Silver) */}
        <div className="bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl w-[31%] pb-3 md:pb-4 pt-8 md:pt-10 relative flex flex-col items-center shadow-lg mb-2 md:mb-4">
          <div className="absolute -top-6 md:-top-8 bg-slate-100 border-2 md:border-4 border-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-black text-slate-400 text-sm md:text-xl shadow-inner">{currentData.top3[0].initials}</div>
          <div className="absolute -top-9 md:-top-12 bg-slate-300 text-white text-[6px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded-full flex items-center gap-0.5 whitespace-nowrap"><Medal size={8}/> 2nd RUNNER UP</div>
          <p className="font-extrabold text-gray-900 text-[9px] md:text-sm truncate w-[90%] text-center">{currentData.top3[0].name}</p>
          <div className={`text-[7px] md:text-[9px] font-bold px-1.5 py-0.5 rounded mt-1 mb-2 md:mb-4 ${currentData.top3[0].appColor}`}>{currentData.top3[0].app}</div>
          <div className="bg-indigo-500 w-[85%] py-1.5 md:py-2 rounded-lg md:rounded-xl text-center text-white">
            <div className="text-[5px] md:text-[7px] uppercase tracking-wider font-bold opacity-80">Total Earnings</div>
            <div className="font-black text-[10px] md:text-base">{currentData.top3[0].amount}</div>
          </div>
        </div>

        {/* 1st Place (Gold) */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl md:rounded-2xl w-[35%] pb-3 md:pb-4 pt-10 md:pt-12 relative flex flex-col items-center shadow-2xl z-10 scale-105">
          <div className="absolute -top-7 md:-top-10 bg-yellow-50 border-2 md:border-4 border-white w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center font-black text-yellow-500 text-base md:text-3xl shadow-inner">{currentData.top3[1].initials}</div>
          <div className="absolute -top-11 md:-top-14 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-[7px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap"><Crown size={10}/> 1st CHAMPION</div>
          <p className="font-extrabold text-gray-900 text-[10px] md:text-base truncate w-[90%] text-center">{currentData.top3[1].name}</p>
          <div className={`text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded mt-1 mb-2 md:mb-4 ${currentData.top3[1].appColor}`}>{currentData.top3[1].app}</div>
          <div className="bg-yellow-500 w-[85%] py-2 md:py-3 rounded-lg md:rounded-xl text-center text-white shadow-inner">
            <div className="text-[6px] md:text-[8px] uppercase tracking-wider font-bold opacity-90">Total Earnings</div>
            <div className="font-black text-[11px] md:text-xl">{currentData.top3[1].amount}</div>
          </div>
        </div>

        {/* 3rd Place (Bronze) */}
        <div className="bg-white border-2 border-orange-200 rounded-xl md:rounded-2xl w-[31%] pb-3 md:pb-4 pt-8 md:pt-10 relative flex flex-col items-center shadow-lg mb-2 md:mb-4">
          <div className="absolute -top-6 md:-top-8 bg-orange-50 border-2 md:border-4 border-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-black text-orange-400 text-sm md:text-xl shadow-inner">{currentData.top3[2].initials}</div>
          <div className="absolute -top-9 md:-top-12 bg-orange-400 text-white text-[6px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded-full flex items-center gap-0.5 whitespace-nowrap"><Medal size={8}/> 3rd PLACE</div>
          <p className="font-extrabold text-gray-900 text-[9px] md:text-sm truncate w-[90%] text-center">{currentData.top3[2].name}</p>
          <div className={`text-[7px] md:text-[9px] font-bold px-1.5 py-0.5 rounded mt-1 mb-2 md:mb-4 ${currentData.top3[2].appColor}`}>{currentData.top3[2].app}</div>
          <div className="bg-pink-500 w-[85%] py-1.5 md:py-2 rounded-lg md:rounded-xl text-center text-white">
            <div className="text-[5px] md:text-[7px] uppercase tracking-wider font-bold opacity-80">Total Earnings</div>
            <div className="font-black text-[10px] md:text-base">{currentData.top3[2].amount}</div>
          </div>
        </div>
      </div>

      {/* List View (Rank 4+) */}
      <div className="max-w-4xl mx-auto px-3 mt-6">
        <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="bg-indigo-50 p-1.5 rounded-lg"><Trophy size={14} className="text-indigo-500"/></div>
            <h3 className="font-black text-gray-800 text-xs md:text-base uppercase tracking-wide">Leaderboard Standings</h3>
          </div>

          <div className="flex flex-col gap-2.5">
            {currentData.list.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-2 md:p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                  <div className="text-slate-400 font-black text-xs md:text-base w-4 md:w-6">#{item.rank}</div>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white flex shrink-0 items-center justify-center font-bold text-xs md:text-sm ${item.color}`}>{item.init}</div>
                  <div className="min-w-0 flex-1 pr-2">
                    <div className="font-bold text-gray-900 text-[10px] md:text-sm flex items-center gap-1 truncate w-full">
                      <span className="truncate">{item.name}</span> 
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 text-white rounded-full flex shrink-0 items-center justify-center text-[6px] md:text-[8px]">✓</div>
                    </div>
                    <div className="text-[8px] md:text-[9px] font-bold text-gray-600 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded mt-0.5 md:mt-1 inline-block">{item.app}</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-black text-gray-900 text-[11px] md:text-base flex items-center gap-0.5 md:gap-1 justify-end"><span className="text-green-500 text-sm md:text-lg">↗</span> {item.amount}</div>
                  <div className="text-[7px] md:text-[9px] font-bold text-green-500 mt-0.5">+12.5%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Withdraw Ticker */}
      <div className="max-w-4xl mx-auto px-3 mt-4">
        <div className="bg-green-50 border border-green-200 rounded-xl md:rounded-2xl p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white p-1 md:p-1.5 rounded-full"><Zap size={14}/></div>
            <div className="text-[10px] md:text-sm text-gray-700 font-medium">
              🎉 <span className="font-bold text-gray-900">tarun_***</span> withdrew <span className="font-bold text-green-600">₹30,172.90</span>
            </div>
          </div>
          <div className="bg-green-100 text-green-700 text-[8px] md:text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase animate-pulse">Live</div>
        </div>
      </div>
    </div>
  );
}