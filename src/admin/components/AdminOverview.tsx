import { Users, Activity, Brain, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const stats = [
    { label: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500', bg: 'bg-blue-50' },
    { label: 'AI Analyses Today', value: '1,204', change: '+8%', icon: Brain, color: 'bg-purple-500', bg: 'bg-purple-50' },
    { label: 'Active Providers', value: '384', change: '+3%', icon: Activity, color: 'bg-green-500', bg: 'bg-green-50' },
    { label: 'Avg. Response Time', value: '4.2m', change: '-18%', icon: TrendingUp, color: 'bg-yellow-500', bg: 'bg-yellow-50' },
];

const recentActivity = [
    { type: 'success', message: 'New hospital network onboarded — St. Mary\'s Health System', time: '2 min ago' },
    { type: 'info', message: 'AI algorithm update deployed — Viz Cardio v3.2', time: '15 min ago' },
    { type: 'warning', message: 'High alert volume detected — Northeast region', time: '1 hr ago' },
    { type: 'success', message: 'Clinical trial enrollment milestone reached — 500 patients', time: '3 hr ago' },
    { type: 'info', message: 'New life sciences partnership signed', time: '5 hr ago' },
    { type: 'success', message: 'FDA clearance update — Viz Neuro algorithm approved', time: '1 day ago' },
];

const therapeuticBreakdown = [
    { area: 'Neurology / Stroke', cases: 1842, pct: 38 },
    { area: 'Cardiology', cases: 1421, pct: 29 },
    { area: 'Pulmonology / PE', cases: 876, pct: 18 },
    { area: 'Oncology', cases: 468, pct: 10 },
    { area: 'Other', cases: 240, pct: 5 },
];

const activityIcon = (type: string) => {
    if (type === 'success') return <CheckCircle size={16} className="text-green-500 flex-shrink-0" />;
    if (type === 'warning') return <AlertCircle size={16} className="text-yellow-500 flex-shrink-0" />;
    return <Clock size={16} className="text-blue-400 flex-shrink-0" />;
};

export default function AdminOverview() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
                    <p className="text-slate-500 text-sm mt-1">Welcome back, Administrator · {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    All Systems Operational
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map(s => {
                    const Icon = s.icon;
                    const isPositive = !s.change.startsWith('-') || s.label === 'Avg. Response Time';
                    return (
                        <div key={s.label} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${s.bg} p-3 rounded-xl`}>
                                    <Icon className={s.color.replace('bg-', 'text-')} size={22} />
                                </div>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.label === 'Avg. Response Time'
                                        ? 'bg-green-50 text-green-600'
                                        : s.change.startsWith('+')
                                            ? 'bg-green-50 text-green-600'
                                            : 'bg-red-50 text-red-500'
                                    }`}>{s.change}</span>
                            </div>
                            <div className="text-3xl font-bold text-slate-800 mb-1">{s.value}</div>
                            <div className="text-sm text-slate-500">{s.label}</div>
                        </div>
                    );
                })}
            </div>

            <div className="grid xl:grid-cols-3 gap-6">
                {/* Therapeutic Breakdown */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="font-semibold text-slate-800 text-lg mb-6">Therapeutic Area Breakdown</h2>
                    <div className="space-y-4">
                        {therapeuticBreakdown.map(t => (
                            <div key={t.area}>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-slate-700 font-medium">{t.area}</span>
                                    <span className="text-slate-500">{t.cases.toLocaleString()} cases · <span className="font-semibold text-slate-700">{t.pct}%</span></span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] rounded-full transition-all duration-700"
                                        style={{ width: `${t.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="font-semibold text-slate-800 text-lg mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((a, i) => (
                            <div key={i} className="flex gap-3">
                                {activityIcon(a.type)}
                                <div className="min-w-0">
                                    <p className="text-sm text-slate-700 leading-snug">{a.message}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{a.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
