import { Search, Plus } from 'lucide-react';

export default function AdminJobs() {
    const jobs = [
        { id: 1, title: 'Corporate Associate', firm: 'Latham & Watkins', location: 'New York, NY', status: 'Active', applies: 24, date: '2024-02-15' },
        { id: 2, title: 'Intellectual Property Counsel', firm: 'Kirkland & Ellis', location: 'Chicago, IL', status: 'Active', applies: 12, date: '2024-02-14' },
        { id: 3, title: 'Real Estate Senior Associate', firm: 'Skadden', location: 'Los Angeles, CA', status: 'Paused', applies: 8, date: '2024-02-10' },
    ];

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Jobs Management</h1>
                    <p className="text-gray-500">Manage job postings and track applications</p>
                </div>
                <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition shadow-sm">
                    <Plus size={20} />
                    Post New Job
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search jobs, firms, or locations..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        />
                    </div>
                    <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Paused</option>
                        <option>Closed</option>
                    </select>
                </div>

                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                            <th className="px-6 py-4">Job Details</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Applications</th>
                            <th className="px-6 py-4">Date Posted</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {jobs.map((job) => (
                            <tr key={job.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-gray-900">{job.title}</div>
                                    <div className="text-sm text-gray-500">{job.firm} • {job.location}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {job.applies} applicants
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {job.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
