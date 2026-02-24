import { MapPin, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JOBS = [
    { id: 1, title: 'Corporate Associate', firm: 'Latham & Watkins', location: 'New York, NY', practice: 'Corporate/M&A', level: 'Junior/Mid-level', date: '2 days ago' },
    { id: 2, title: 'IP Litigation Attorney', firm: 'Kirkland & Ellis', location: 'San Francisco, CA', practice: 'Intellectual Property', level: 'Senior Associate', date: '5 days ago' },
    { id: 3, title: 'Real Estate Associate', firm: 'Skadden', location: 'Chicago, IL', practice: 'Real Estate', level: 'Mid-level', date: 'Today' },
    { id: 4, title: 'Tax Associate', firm: 'Sidley Austin', location: 'Washington, D.C.', practice: 'Tax', level: 'Junior Associate', date: '1 week ago' },
    { id: 5, title: 'Employment Counsel', firm: 'Morgan Lewis', location: 'Boston, MA', practice: 'Labor & Employment', level: 'Senior Counsel', date: '3 days ago' },
];

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="py-12 md:py-20 text-center md:text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Browse Lateral Jobs</h1>
                        <p className="text-lg text-gray-600 max-w-2xl">Find your next career move at the world's leading law firms. Filter by practice area, location, and seniority.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Filters */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Filters</h3>
                                    <button className="text-teal-600 text-sm font-semibold">Clear all</button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Practice Area</label>
                                        <select className="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500/20">
                                            <option>All Practices</option>
                                            <option>Corporate</option>
                                            <option>Litigation</option>
                                            <option>IP</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Location</label>
                                        <select className="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500/20">
                                            <option>Remote/All</option>
                                            <option>New York</option>
                                            <option>California</option>
                                            <option>Texas</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job List */}
                        <div className="lg:col-span-3 space-y-4">
                            <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-sm text-gray-500 font-medium">{JOBS.length} jobs found</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 font-medium tracking-tight">Sort by:</span>
                                    <select className="bg-transparent border-none text-sm font-bold text-gray-900 focus:ring-0 cursor-pointer">
                                        <option>Most Recent</option>
                                        <option>Hot Jobs</option>
                                    </select>
                                </div>
                            </div>

                            {JOBS.map((job) => (
                                <div key={job.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-500/30 transition-all hover:shadow-md group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wider">{job.practice}</span>
                                                <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-wider">{job.level}</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{job.title}</h2>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1.5 font-medium">
                                                    <Building2 size={16} />
                                                    {job.firm}
                                                </div>
                                                <div className="flex items-center gap-1.5 font-medium">
                                                    <MapPin size={16} />
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-3">
                                            <span className="text-sm font-medium text-gray-400">{job.date}</span>
                                            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold hover:bg-teal-600 transition-colors tracking-tight">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
