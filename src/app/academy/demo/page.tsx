"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Crosshair, 
  LayoutDashboard, 
  BookOpen, 
  Settings, 
  Bell, 
  Search,
  ChevronRight,
  Target
} from "lucide-react";

// Mock Data
const students = [
  { id: 1, name: "Anya R.", elo: 1715, trend: "+45", status: "active" },
  { id: 2, name: "Kenji T.", elo: 1590, trend: "+20", status: "active" },
  { id: 3, name: "Mia L.", elo: 1460, trend: "+30", status: "active" },
  { id: 4, name: "Leo K.", elo: 1320, trend: "+15", status: "active" },
  { id: 5, name: "Sarah P.", elo: 1210, trend: "-10", status: "warning" },
  { id: 6, name: "David M.", elo: 1050, trend: "+55", status: "active" },
];

const weaknesses = [
  { label: "Pins", percentage: 72, color: "bg-blue-500" },
  { label: "Forks", percentage: 64, color: "bg-purple-500" },
  { label: "Endgames", percentage: 58, color: "bg-emerald-500" },
];

export default function AcademyDashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="fixed inset-0 z-[100] bg-[#06090f] text-[#e8ecf4] flex overflow-hidden font-sans">
      
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl flex flex-col h-full">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Coaches Hub</span>
        </div>

        <div className="p-4 flex-1 space-y-2">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 px-2 mt-4">Main Menu</div>
          
          <button onClick={() => setActiveTab("dashboard")} className={`w-full flex items-center px-3 py-2.5 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-blue-500/10 text-blue-400' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <LayoutDashboard size={18} className="mr-3" />
            <span className="font-medium text-sm">Dashboard</span>
          </button>
          
          <button onClick={() => setActiveTab("students")} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${activeTab === 'students' ? 'bg-blue-500/10 text-blue-400' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <div className="flex items-center">
              <Users size={18} className="mr-3" />
              <span className="font-medium text-sm">Students</span>
            </div>
            <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">56</span>
          </button>

          <button className={`w-full flex items-center px-3 py-2.5 rounded-xl transition-all text-white/60 hover:bg-white/5 hover:text-white`}>
            <BookOpen size={18} className="mr-3" />
            <span className="font-medium text-sm">Curriculum</span>
          </button>

          <button className={`w-full flex items-center px-3 py-2.5 rounded-xl transition-all text-white/60 hover:bg-white/5 hover:text-white`}>
            <TrendingUp size={18} className="mr-3" />
            <span className="font-medium text-sm">Reports</span>
          </button>
        </div>

        <div className="p-4 border-t border-white/5">
          <button className={`w-full flex items-center px-3 py-2.5 rounded-xl transition-all text-white/60 hover:bg-white/5 hover:text-white`}>
            <Settings size={18} className="mr-3" />
            <span className="font-medium text-sm">Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111827] via-[#06090f] to-[#06090f]">
        
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/5 bg-white/[0.02] backdrop-blur-md">
          <h1 className="text-xl font-semibold tracking-tight">Academy Overview</h1>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 transition-all"
              />
            </div>
            
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Coach" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white">Coach Alex</span>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <main className="flex-1 overflow-y-auto p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-12 gap-6 max-w-7xl mx-auto"
          >
            
            {/* Top Stat Cards */}
            <div className="col-span-12 grid grid-cols-3 gap-6 mb-2">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/50 text-sm font-medium mb-1">Active Students</p>
                    <h3 className="text-3xl font-bold">128</h3>
                  </div>
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Users size={20} />
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/50 text-sm font-medium mb-1">Avg. Elo Rating</p>
                    <h3 className="text-3xl font-bold">1420 <span className="text-emerald-400 text-sm font-medium tracking-normal ml-2">↑ 45 pts</span></h3>
                  </div>
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <TrendingUp size={20} />
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/50 text-sm font-medium mb-1">Total Lessons Completed</p>
                    <h3 className="text-3xl font-bold">1,450</h3>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Target size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Graph (Simulated) */}
            <div className="col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div>
                  <h3 className="font-semibold text-lg">Academy Performance</h3>
                  <p className="text-sm text-white/50">Average Elo trend over last 6 months</p>
                </div>
                <button className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors">This Year</button>
              </div>

              <div className="flex-1 flex items-end gap-2 mt-4 relative z-10">
                {[40, 45, 42, 55, 60, 58, 65, 75, 70, 85, 80, 95].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="w-full bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-sm group-hover:brightness-125 transition-all relative"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        1{200 + height * 4} Elo
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Weaknesses Radial Bars */}
            <div className="col-span-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Tactical Weaknesses</h3>
                  <p className="text-sm text-white/50">Academy wide aggregate</p>
                </div>
                <Crosshair size={20} className="text-white/40" />
              </div>

              <div className="space-y-6 mt-4">
                {weaknesses.map((w, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-white/80">{w.label}</span>
                      <span className="text-white/50">{w.percentage}% struggles</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${w.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                        className={`h-full rounded-full ${w.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">
                Generate Training Plan
              </button>
            </div>

            {/* Student List */}
            <div className="col-span-12 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden mt-2">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                <h3 className="font-semibold text-lg">Recent Student Progress</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                  View All Students <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="w-full">
                <div className="grid grid-cols-4 px-6 py-3 text-xs font-semibold text-white/40 uppercase tracking-wider border-b border-white/5">
                  <div className="col-span-2">Student Name</div>
                  <div>Current Elo</div>
                  <div className="text-right">30-Day Trend</div>
                </div>
                
                <div className="divide-y divide-white/5">
                  {students.map((student) => (
                    <div key={student.id} className="grid grid-cols-4 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors cursor-pointer group">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold shadow-inner">
                          {student.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="font-medium group-hover:text-blue-400 transition-colors">{student.name}</span>
                      </div>
                      <div className="font-medium text-white/90">{student.elo}</div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          student.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                        }`}>
                          {student.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
}
