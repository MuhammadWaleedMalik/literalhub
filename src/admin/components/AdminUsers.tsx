import { useState } from 'react';
import { Search, MoreHorizontal, UserCheck, UserX, Filter } from 'lucide-react';

const mockUsers = [
    { id: 1, name: 'Dr. Emily Carter', email: 'ecarter@memorial.org', role: 'Neurologist', hospital: 'Memorial Medical Center', status: 'active', joined: '2024-03-15' },
    { id: 2, name: 'Dr. James Liu', email: 'jliu@cityheart.com', role: 'Cardiologist', hospital: 'City Heart Institute', status: 'active', joined: '2024-04-02' },
    { id: 3, name: 'Dr. Sarah Patel', email: 'spatel@regional.org', role: 'Radiologist', hospital: 'Regional Medical Network', status: 'active', joined: '2024-04-18' },
    { id: 4, name: 'Dr. Mark Johnson', email: 'mjohnson@university.edu', role: 'Stroke Neurologist', hospital: 'University Hospital', status: 'inactive', joined: '2024-02-10' },
    { id: 5, name: 'Dr. Aisha Rahman', email: 'arahman@stmary.org', role: 'Emergency Medicine', hospital: "St. Mary's Health", status: 'active', joined: '2024-05-01' },
    { id: 6, name: 'Dr. Michael Torres', email: 'mtorres@national.org', role: 'Pulmonologist', hospital: 'National Health Alliance', status: 'active', joined: '2024-05-20' },
    { id: 7, name: 'Dr. Lisa Wang', email: 'lwang@metro.org', role: 'Neurologist', hospital: 'Metro Neurology Center', status: 'pending', joined: '2024-06-01' },
    { id: 8, name: 'Dr. Robert Kim', email: 'rkim@heartcenter.com', role: 'Interventional Cardiologist', hospital: 'Advanced Heart Center', status: 'active', joined: '2024-06-12' },
];

const statusColors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    inactive: 'bg-slate-100 text-slate-500',
    pending: 'bg-yellow-100 text-yellow-700',
};

export default function AdminUsers() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');

    const filtered = mockUsers.filter(u => {
        const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()) ||
            u.hospital.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'all' || u.status === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="p-8 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
                <p className="text-slate-500 text-sm mt-1">Manage healthcare providers and their access levels</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Total Users', value: mockUsers.length, color: 'text-slate-800' },
                    { label: 'Active', value: mockUsers.filter(u => u.status === 'active').length, color: 'text-green-600' },
                    { label: 'Pending', value: mockUsers.filter(u => u.status === 'pending').length, color: 'text-yellow-600' },
                ].map(c => (
                    <div key={c.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center">
                        <div className={`text-3xl font-bold ${c.color}`}>{c.value}</div>
                        <div className="text-sm text-slate-500 mt-1">{c.label}</div>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search users..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1555]/30"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter size={16} className="text-slate-400" />
                        {(['all', 'active', 'inactive', 'pending'] as const).map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition ${filter === f
                                        ? 'bg-[#1a1555] text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead className="bg-slate-50 text-left">
                        <tr>
                            {['User', 'Role', 'Hospital', 'Status', 'Joined', ''].map(h => (
                                <th key={h} className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filtered.map(u => (
                            <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                            {u.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-800 text-sm">{u.name}</div>
                                            <div className="text-xs text-slate-400">{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{u.role}</td>
                                <td className="px-6 py-4 text-sm text-slate-600">{u.hospital}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusColors[u.status]}`}>
                                        {u.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">{new Date(u.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <button className="p-1.5 hover:bg-green-50 rounded-lg transition" title="Activate">
                                            <UserCheck size={16} className="text-green-500" />
                                        </button>
                                        <button className="p-1.5 hover:bg-red-50 rounded-lg transition" title="Deactivate">
                                            <UserX size={16} className="text-red-400" />
                                        </button>
                                        <button className="p-1.5 hover:bg-slate-100 rounded-lg transition">
                                            <MoreHorizontal size={16} className="text-slate-400" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filtered.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <Users size={40} className="mx-auto mb-3 opacity-30" />
                        <p>No users found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
