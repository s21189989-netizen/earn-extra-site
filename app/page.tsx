'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Headset, Send, Trophy, Copy, PlayCircle, X } from 'lucide-react';

export default function EarnExtraHome() {
  const [dateText, setDateText] = useState('');
  const [currentImg, setCurrentImg] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const heroImages = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

  // App Data with reordered positions (WY WALLET at #2, JPG Pay at #3) and updated Tags
  const apps = [
    { id: 1, name: 'DIWAPAY', icon: '/icon1.png', tag: 'NO1 EARNING APPS', code: 'IEDLgx', badges: ['🔥 VIRAL', '💳 HIGH DEPOSIT'], link: 'https://install.diwapwork.net/#/?invite=IEDLgx', pillColor: 'bg-green-100 text-green-700', ctaColor: 'bg-green-500', cardBg: 'bg-green-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 2, name: 'WY WALLET', icon: '/icon10.png', tag: 'NO2 EARNING APPS', code: 'tRtgDa', badges: ['✨ NEW'], link: 'https://wy3721.com/#/?invite=tRtgDa', pillColor: 'bg-orange-100 text-orange-700', ctaColor: 'bg-orange-500', cardBg: 'bg-orange-50', signup: '250', xtra: '1800', commission: '5%', usdt: '110' },
    { id: 3, name: 'JPG Pay', icon: '/icon9.png', tag: 'NO3 EARNING APPS', code: 'XwKBQA', badges: ['✨ NEW', '⭐ LOW INVEST'], link: 'https://jpgpay.app/#/?invite=XwKBQA', pillColor: 'bg-pink-100 text-pink-700', ctaColor: 'bg-pink-600', cardBg: 'bg-pink-50', signup: '180', xtra: '1030', commission: '4.5%', usdt: '109' },
    { id: 4, name: 'WeCoin PAY', icon: '/icon2.png', tag: 'NO4 EARNING APPS', code: 'aK5hh3', badges: ['🚀 FASTEST', '💳 HIGH DEPOSIT'], link: 'https://install.wecoin.top/#/?invite=aK5hh3', pillColor: 'bg-blue-100 text-blue-700', ctaColor: 'bg-blue-500', cardBg: 'bg-blue-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 5, name: 'UNOPAY', icon: '/icon3.png', tag: 'NO5 EARNING APPS', code: 'NHb8fO', badges: ['📈 TRENDING'], link: 'https://omnicloud-down.com/#/?invite=NHb8fO', pillColor: 'bg-red-100 text-red-700', ctaColor: 'bg-red-500', cardBg: 'bg-red-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 6, name: 'DD PAY', icon: '/icon4.png', tag: 'NO6 EARNING APPS', code: 't5dG89', badges: ['📈 TRENDING'], link: 'https://dd-pay.net/#/?invite=t5dG89', pillColor: 'bg-pink-100 text-pink-700', ctaColor: 'bg-pink-500', cardBg: 'bg-pink-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 7, name: 'ALPHAPAY', icon: '/icon5.png', tag: 'NO7 EARNING APPS', code: 'uxggQJ', badges: ['🔥 VIRAL'], link: 'https://alphad.net/#/?invite=uxggQJ', pillColor: 'bg-purple-100 text-purple-700', ctaColor: 'bg-purple-600', cardBg: 'bg-purple-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 8, name: 'SHAKTIPAY', icon: '/icon6.png', tag: 'NO8 EARNING APPS', code: 'wroH9r', badges: ['📈 TRENDING'], link: 'https://shaktipay.app/#/?invite=wroH9r', pillColor: 'bg-orange-100 text-orange-700', ctaColor: 'bg-orange-500', cardBg: 'bg-orange-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 9, name: 'LINK PAY', icon: '/icon7.png', tag: 'NO9 EARNING APPS', code: 'UczQ6s', badges: ['🚀 FASTEST'], link: 'https://mobile.linkpulsex.com/#/pages/auth/register?invite=UczQ6s', pillColor: 'bg-blue-100 text-blue-700', ctaColor: 'bg-blue-600', cardBg: 'bg-blue-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' },
    { id: 10, name: 'WYNN PAY', icon: '/icon8.png', tag: 'NO10 EARNING APPS', code: 'mAanAT', badges: ['✨ BETA'], link: 'https://wynnpay.io/#/?invite=#/?invite=mAanAT', pillColor: 'bg-indigo-100 text-indigo-700', ctaColor: 'bg-indigo-500', cardBg: 'bg-indigo-50', signup: '100+', xtra: '316', commission: '4%', usdt: '111' }
  ];

  useEffect(() => {
    // Dynamic Date Calculation (Yesterday)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    setDateText(yesterday.toLocaleDateString('en-GB', options).toUpperCase().replace(' ', '-'));

    // Hero Carousel Auto-play
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-10">
      
      {/* 1. TOP ACTION BARS */}
      <div className="max-w-5xl mx-auto flex flex-row justify-between items-center gap-3 px-4 py-4 sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md">
        {/* NEW EARN EXTRA BOT LINK HERE */}
        <a href="https://t.me/Extra_earnbot" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-green-500 text-white font-bold py-3 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:scale-[1.02] transition-transform">
          <Headset size={20} /> <span className="text-sm md:text-base">24/7 LIVE SUPPORT</span>
        </a>
        {/* Telegram Viral Link */}
        <a href="https://t.me/+q7lYLJwU5RJhZDU9" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-blue-500 text-white font-bold py-3 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-transform">
          <Send size={20} /> <span className="text-sm md:text-base">Telegram</span>
        </a>
      </div>

      {/* 2. HERO CAROUSEL */}
      <div className="max-w-5xl mx-auto px-4 mt-2">
        <a 
          href="https://t.me/+q7lYLJwU5RJhZDU9" 
          target="_blank" 
          rel="noreferrer" 
          className="block relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-50 group"
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImg}
              src={heroImages[currentImg]}
              alt="Hero Promo"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 1.05 }}
              transition={{ duration: 0.35, type: "spring", stiffness: 250, damping: 25 }}
            />
          </AnimatePresence>
          
          {/* Modern Pagination Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-1.5 z-10">
            {heroImages.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ease-in-out ${
                  idx === currentImg ? 'w-5 bg-white' : 'w-1.5 bg-white/60'
                }`} 
              />
            ))}
          </div>
        </a>
      </div>
      {/* 3. DYNAMIC DATE BADGE */}
      <div className="max-w-5xl mx-auto flex justify-end px-4 mt-3">
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          🔴 UPDATED {dateText}
        </span>
      </div>

    {/* 4. DASHBOARD GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-4">
        {apps.map((app) => (
          <a 
            key={app.id} 
            href={app.link} 
            target="_blank" 
            rel="noreferrer" 
            className={`block rounded-[2rem] p-4 shadow-sm border border-white/50 transition-transform hover:-translate-y-1 cursor-pointer ${app.cardBg}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <img src={app.icon} alt={app.name} className="w-14 h-14 object-contain drop-shadow-sm" />
                <div>
                  <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">{app.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                    Register Code - <span className="font-bold text-gray-700">{app.code}</span> <Copy size={12} className="cursor-pointer" />
                  </div>
                  <p className={`text-[10px] font-extrabold mt-0.5 ${app.pillColor.split(' ')[1]}`}>{app.tag}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                {app.badges[0] && (
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 tracking-wide">{app.badges[0]}</span>
                )}
                {app.badges[1] && (
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-gray-900 text-white tracking-wide">{app.badges[1]}</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mt-5 gap-2">
              <div className={`flex items-center justify-center gap-1.5 p-2 rounded-2xl flex-1 ${app.pillColor}`}>
                <span className="text-base">👥</span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-extrabold">{app.signup}</span>
                  <span className="text-[7px] font-bold uppercase opacity-80 mt-0.5 tracking-wider">Signup</span>
                </div>
              </div>
              
              <div className={`flex items-center justify-center gap-1.5 p-2 rounded-2xl flex-1 ${app.pillColor}`}>
                <span className="text-base">🎁</span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-extrabold">{app.xtra}</span>
                  <span className="text-[7px] font-bold uppercase opacity-80 mt-0.5 tracking-wider">Xtra</span>
                </div>
              </div>

              <div className={`flex items-center justify-center gap-1.5 p-2 rounded-2xl flex-1 ${app.pillColor}`}>
                <span className="text-base">📊</span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-extrabold">{app.commission}</span>
                  <span className="text-[7px] font-bold uppercase opacity-80 mt-0.5 tracking-wider">INR</span>
                </div>
              </div>
              
              <div className={`relative overflow-hidden flex flex-col items-center justify-center py-1.5 rounded-2xl text-white flex-1 shadow-md ${app.ctaColor}`}>
                <span className="text-[13px] font-extrabold">$ {app.usdt}</span>
                <span className="text-[8px] font-bold uppercase opacity-90 leading-none tracking-widest mt-0.5">USDT</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* 5. LIVE LEADERBOARD */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl flex items-center justify-between p-3 pl-5 shadow-sm border border-gray-200 bg-gradient-to-r from-purple-50 to-white">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-2.5 rounded-full shadow-sm"><Trophy size={20} className="text-purple-600" /></div>
            <div>
              <h4 className="font-black text-gray-900 text-sm md:text-base tracking-wide">LIVE LEADERBOARD</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Check out top earners today & live payouts</p>
            </div>
          </div>
          <Link href="/leaderboard" className="bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            VIEW NOW →
          </Link>
        </div>
      </div>
      
      {/* 6. PROMOTIONAL BOTTOM BANNER */}
      <div className="max-w-5xl mx-auto px-4 mt-4">
        <img src="/bottom-banner.jpg" alt="Earn Extra Promo" className="w-full rounded-2xl shadow-sm object-cover" />
      </div>

      {/* 7. BOTTOM ACTION BUTTONS */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4 px-4 mt-6">
        <a href="https://www.instagram.com/earn_eaxtra?igsh=cXJ5b2RnbXhtZ2pj" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold py-3 rounded-full shadow-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Insta" className="w-5 h-5 invert" /> Instagram
        </a>
        <button onClick={() => setShowModal(true)} className="flex justify-center items-center gap-2 bg-red-600 text-white font-bold py-3 rounded-full shadow-md hover:bg-red-700">
          <PlayCircle size={20} /> REMOVE RISK
        </button>
      </div>

      {/* 8. FOOTER */}
      <div className="max-w-5xl mx-auto px-4 mt-8 text-center flex flex-col items-center gap-2">
        <Link href="/privacy" className="text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors">Privacy & Policy</Link>
        <p className="text-[10px] text-gray-400">© 2026 Earn Extra. All rights reserved.</p>
      </div>

      {/* RISK VIDEO MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40">
              <X size={20} className="text-white" />
            </button>
            <video src="/risk-video.mp4" controls autoPlay className="w-full h-auto max-h-[80vh]" />
          </div>
        </div>
      )}
    </div>
  );
}