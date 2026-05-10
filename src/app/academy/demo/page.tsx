"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Target,
  Plus,
  Filter,
  MoreVertical,
  Download,
  Calendar,
  AlertCircle
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock Data
const students = [
  { id: 1, name: "Anya R.", elo: 1715, trend: "+45", status: "active", lastPlayed: "2 hours ago", weaknesses: ["Pins", "Endgames"] },
  { id: 2, name: "Kenji T.", elo: 1590, trend: "+20", status: "active", lastPlayed: "1 day ago", weaknesses: ["Time Trouble"] },
  { id: 3, name: "Mia L.", elo: 1460, trend: "+30", status: "active", lastPlayed: "3 hours ago", weaknesses: ["Forks", "Openings"] },
  { id: 4, name: "Leo K.", elo: 1320, trend: "+15", status: "active", lastPlayed: "4 days ago", weaknesses: ["Blunders"] },
  { id: 5, name: "Sarah P.", elo: 1210, trend: "-10", status: "warning", lastPlayed: "1 week ago", weaknesses: ["Tactics", "Pins"] },
  { id: 6, name: "David M.", elo: 1050, trend: "+55", status: "active", lastPlayed: "5 hours ago", weaknesses: ["Endgames"] },
  { id: 7, name: "Elena V.", elo: 1840, trend: "+12", status: "active", lastPlayed: "1 hour ago", weaknesses: ["Positional"] },
  { id: 8, name: "Sam J.", elo: 980, trend: "-25", status: "critical", lastPlayed: "2 weeks ago", weaknesses: ["Hanging Pieces"] },
];

const performanceData = [
  { name: "Jan", elo: 1350 },
  { name: "Feb", elo: 1365 },
  { name: "Mar", elo: 1355 },
  { name: "Apr", elo: 1380 },
  { name: "May", index: 1395 },
  { name: "Jun", elo: 1390 },
  { name: "Jul", elo: 1410 },
  { name: "Aug", elo: 1425 },
  { name: "Sep", elo: 1415 },
  { name: "Oct", elo: 1440 },
  { name: "Nov", elo: 1435 },
  { name: "Dec", elo: 1460 },
];

const weaknessData = [
  { name: "Pins", value: 72, color: "#3b82f6" },
  { name: "Forks", value: 64, color: "#8b5cf6" },
  { name: "Endgames", value: 58, color: "#10b981" },
  { name: "Blunders", value: 45, color: "#f43f5e" },
];

const upcomingEvents = [
  { id: 1, title: "Advanced Tactics Workshop", date: "Today, 4:00 PM", attendees: 12 },
  { id: 2, title: "Endgame Theory: Pawn Structures", date: "Tomorrow, 5:30 PM", attendees: 8 },
  { id: 3, title: "Weekly Academy Tournament", date: "Saturday, 10:00 AM", attendees: 45 },
];

export default function AcademyDashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // ---- SUB-COMPONENTS ---- //

  const DashboardView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto w-full pb-10"
    >
      {/* Top Stat Cards */}
      <div className="col-span-12 grid grid-cols-4 gap-6 mb-2">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/50 text-sm font-medium mb-1">Active Students</p>
              <h3 className="text-3xl font-bold">128</h3>
            </div>
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
              <Users size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/50 text-sm font-medium mb-1">Avg. Elo Rating</p>
              <h3 className="text-3xl font-bold">
                1460 <span className="text-emerald-400 text-sm font-medium tracking-normal ml-2">↑ 45 pts</span>
              </h3>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-xl text-purple-400">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/50 text-sm font-medium mb-1">Lessons Completed</p>
              <h3 className="text-3xl font-bold">1,450</h3>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Target size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-rose-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/50 text-sm font-medium mb-1">At-Risk Students</p>
              <h3 className="text-3xl font-bold text-rose-400">4</h3>
            </div>
            <div className="p-2 bg-rose-500/10 rounded-xl text-rose-400">
              <AlertCircle size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Real Recharts Performance Graph */}
      <div className="col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl shadow-black/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <h3 className="font-semibold text-lg text-white">Academy Performance Trend</h3>
            <p className="text-sm text-white/50">Average Elo progression over 12 months</p>
          </div>
          <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="flex-1 min-h-[300px] w-full mt-4 -ml-4 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorElo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} dy={10} />
              <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} domain={['dataMin - 50', 'dataMax + 50']} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#60a5fa' }}
              />
              <Area type="monotone" dataKey="elo" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorElo)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tactical Weaknesses Real Donut Chart */}
      <div className="col-span-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-semibold text-lg text-white">Aggregated Weaknesses</h3>
            <p className="text-sm text-white/50">AI-detected across all students</p>
          </div>
          <Crosshair size={20} className="text-white/40" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center relative min-h-[250px]">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={weaknessData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {weaknessData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', border: 'none' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">72%</span>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">Pins</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {weaknessData.map((w, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: w.color }}></div>
              <span className="text-xs font-medium text-white/80">{w.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events & Schedule */}
      <div className="col-span-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg text-white">Upcoming Classes</h3>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Plus size={18} className="text-white/60" />
          </button>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer group">
              <h4 className="font-medium text-white/90 mb-1 group-hover:text-blue-400 transition-colors">{event.title}</h4>
              <div className="flex items-center gap-4 text-xs text-white/50">
                <div className="flex items-center gap-1"><Calendar size={12} /> {event.date}</div>
                <div className="flex items-center gap-1"><Users size={12} /> {event.attendees} students</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student List Snapshot */}
      <div className="col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div>
            <h3 className="font-semibold text-lg text-white">Recent Student Activity</h3>
            <p className="text-sm text-white/50">Tracking top movers and at-risk players</p>
          </div>
          <button 
            onClick={() => setActiveTab("students")}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center bg-blue-500/10 px-4 py-2 rounded-lg transition-colors"
          >
            View Directory <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider bg-white/[0.02]">
                <th className="px-6 py-4 font-medium">Student Name</th>
                <th className="px-6 py-4 font-medium">Current Elo</th>
                <th className="px-6 py-4 font-medium">30-Day Trend</th>
                <th className="px-6 py-4 font-medium hidden sm:table-cell">Primary Weakness</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.slice(0, 5).map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold shadow-inner">
                        {student.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-blue-400 transition-colors text-white/90">{student.name}</div>
                        <div className="text-xs text-white/40">{student.lastPlayed}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-white">{student.elo}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      student.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {student.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="text-xs font-medium bg-white/5 px-2 py-1 rounded-md text-white/70">
                      {student.weaknesses[0]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/40 hover:text-white transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  const StudentsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-[1600px] mx-auto h-full flex flex-col pb-10"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Student Directory</h2>
          <p className="text-white/50">Manage your academy's {students.length} active students</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all text-sm font-medium">
            <Plus size={16} /> Add Student
          </button>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-2xl flex-1 flex flex-col overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-white/5 bg-white/[0.01]">
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Search by name, weakness, or rating..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#0c1220] z-10">
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Student Info</th>
                <th className="px-6 py-4 font-medium">Current Elo</th>
                <th className="px-6 py-4 font-medium">30-Day Trend</th>
                <th className="px-6 py-4 font-medium">Identified Weaknesses</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-sm font-bold shadow-inner border border-white/10">
                        {student.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-blue-400 transition-colors text-white/90 text-base">{student.name}</div>
                        <div className="text-xs text-white/40">Last active: {student.lastPlayed}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-white text-lg">{student.elo}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      student.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {student.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 flex-wrap">
                      {student.weaknesses.map((w, i) => (
                        <span key={i} className="text-xs font-medium bg-white/5 border border-white/10 px-2 py-1 rounded-md text-white/70">
                          {w}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                       student.status === 'active' ? 'text-emerald-400' : student.status === 'warning' ? 'text-amber-400' : 'text-rose-400'
                     }`}>
                       <span className={`w-1.5 h-1.5 rounded-full ${
                         student.status === 'active' ? 'bg-emerald-400' : student.status === 'warning' ? 'bg-amber-400' : 'bg-rose-400'
                       }`}></span>
                       {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg transition-colors mr-2">
                      Assign Plan
                    </button>
                    <button className="p-2 text-white/40 hover:text-white transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-[#06090f] text-[#e8ecf4] flex overflow-hidden font-sans">
      
      {/* Sidebar - Same as before but with active states wired up */}
      <div className="w-64 border-r border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl flex flex-col h-full shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block text-white">Coaches Hub</span>
            <span className="text-xs text-white/50 font-medium">ChessMasters Academy</span>
          </div>
        </div>

        <div className="p-4 flex-1 space-y-2 mt-4">
          <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4 px-2">Main Menu</div>
          
          <button onClick={() => setActiveTab("dashboard")} className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-blue-500/15 text-blue-400 shadow-inner border border-blue-500/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <LayoutDashboard size={18} className="mr-3" />
            <span className="font-medium text-sm">Dashboard Overview</span>
          </button>
          
          <button onClick={() => setActiveTab("students")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${activeTab === 'students' ? 'bg-blue-500/15 text-blue-400 shadow-inner border border-blue-500/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <div className="flex items-center">
              <Users size={18} className="mr-3" />
              <span className="font-medium text-sm">Student Roster</span>
            </div>
            <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">128</span>
          </button>

          <button onClick={() => setActiveTab("curriculum")} className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'curriculum' ? 'bg-blue-500/15 text-blue-400 shadow-inner border border-blue-500/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <BookOpen size={18} className="mr-3" />
            <span className="font-medium text-sm">AI Curriculum</span>
          </button>

          <button onClick={() => setActiveTab("reports")} className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'reports' ? 'bg-blue-500/15 text-blue-400 shadow-inner border border-blue-500/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <TrendingUp size={18} className="mr-3" />
            <span className="font-medium text-sm">Performance Reports</span>
          </button>
        </div>

        <div className="p-4 border-t border-white/5 mb-4">
          <button className={`w-full flex items-center px-4 py-3 rounded-xl transition-all text-white/60 hover:bg-white/5 hover:text-white`}>
            <Settings size={18} className="mr-3" />
            <span className="font-medium text-sm">Organization Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-[#06090f] overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-20 flex items-center justify-between px-10 border-b border-white/5 bg-[#0a0e1a]/50 backdrop-blur-md z-20 shrink-0">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white capitalize">{activeTab}</h1>
            <p className="text-xs text-white/50">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Global search (Cmd+K)" 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-72 transition-all bg-white/[0.02]"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] border-2 border-[#0a0e1a]"></span>
              </button>
              
              <a href="https://www.chessmazes.org/contact" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-full text-sm font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all transform hover:scale-105 whitespace-nowrap">
                Join Waitlist
              </a>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" alt="Coach" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white/90 group-hover:text-white">Coach Alex</span>
                <span className="text-xs text-white/50">Head Coach</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Body */}
        <main className="flex-1 overflow-y-auto p-10 relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full"></div>
          
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && <DashboardView key="dashboard" />}
            {activeTab === "students" && <StudentsView key="students" />}
            {activeTab === "curriculum" && (
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col h-full">
                 <div className="flex justify-between items-center mb-8">
                   <div>
                     <h2 className="text-3xl font-bold text-white tracking-tight mb-2">AI Curriculum Generator</h2>
                     <p className="text-white/50">Auto-generate weekly training plans based on detected weaknesses</p>
                   </div>
                   <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all text-sm font-medium flex items-center gap-2">
                     <Settings size={16} /> Configure Rules
                   </button>
                 </div>
                 
                 <div className="grid grid-cols-12 gap-6">
                   <div className="col-span-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                     <h3 className="font-semibold text-lg text-white mb-4">Focus Areas (This Week)</h3>
                     <div className="space-y-4">
                       <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
                         <div className="flex justify-between items-center mb-2">
                           <h4 className="font-medium text-blue-400">Endgame Mastery</h4>
                           <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md">Priority</span>
                         </div>
                         <p className="text-sm text-white/60 mb-3">Focus on pawn structures and opposition. 45 students affected.</p>
                         <button className="w-full py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 text-sm rounded-lg transition-colors">View Assigned Puzzles</button>
                       </div>
                       
                       <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                         <div className="flex justify-between items-center mb-2">
                           <h4 className="font-medium text-white/80">Opening Traps</h4>
                           <span className="text-xs bg-white/10 text-white/50 px-2 py-1 rounded-md">Secondary</span>
                         </div>
                         <p className="text-sm text-white/60 mb-3">Sicilian defense common pitfalls. 28 students affected.</p>
                         <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm rounded-lg transition-colors">View Assigned Puzzles</button>
                       </div>
                     </div>
                   </div>
                   
                   <div className="col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                     <h3 className="font-semibold text-lg text-white mb-4">Generate Custom Plan</h3>
                     <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-blue-500/50 transition-colors">
                         <Target className="text-blue-400 mb-2" size={24} />
                         <h4 className="font-medium text-white">Target Weakness</h4>
                         <p className="text-xs text-white/50 mt-1">Select specific tactics to drill</p>
                       </div>
                       <div className="p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-purple-500/50 transition-colors">
                         <TrendingUp className="text-purple-400 mb-2" size={24} />
                         <h4 className="font-medium text-white">Elo Push</h4>
                         <p className="text-xs text-white/50 mt-1">Intense calculation training</p>
                       </div>
                     </div>
                     <div className="h-40 border border-dashed border-white/20 rounded-xl flex items-center justify-center bg-white/[0.02]">
                       <p className="text-white/40 text-sm">Select a module above to configure lesson parameters</p>
                     </div>
                   </div>
                 </div>
               </motion.div>
            )}
            {activeTab === "reports" && (
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col h-full">
                 <div className="flex justify-between items-center mb-8">
                   <div>
                     <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Detailed Analytics</h2>
                     <p className="text-white/50">Comprehensive breakdown of academy performance</p>
                   </div>
                   <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all text-sm font-medium flex items-center gap-2">
                     <Download size={16} /> Download PDF
                   </button>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-6">
                   <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-48">
                     <span className="text-5xl font-bold text-white mb-2">92%</span>
                     <span className="text-sm text-white/50">Lesson Completion Rate</span>
                   </div>
                   <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-48">
                     <span className="text-5xl font-bold text-emerald-400 mb-2">+124</span>
                     <span className="text-sm text-white/50">Total Elo Gained (This Month)</span>
                   </div>
                   <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-48">
                     <span className="text-5xl font-bold text-blue-400 mb-2">14.2h</span>
                     <span className="text-sm text-white/50">Avg. Weekly Training Time</span>
                   </div>
                 </div>
               </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
