import { Shield, FileSearch, Cpu, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PATENT_JOBS = [
    { id: 1, title: 'Patent Agent (Electrical Engineering)', firm: 'Fish & Richardson', location: 'San Diego / Austin', area: 'Hardware/E.E.', level: '2-4 Years Exp' },
    { id: 2, title: 'Technical Specialist (BioTech)', firm: 'Cooley LLP', location: 'Boston, MA', area: 'Life Sciences / PhD', level: 'Mid-Level' },
    { id: 3, title: 'IP Patent Agent', firm: 'Fenwick & West', location: 'Seattle / Remote', area: 'Software/Computer Science', level: 'Junior Associate level' },
];

export default function PatentJobsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20 py-16 mb-20 border-b border-gray-100">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 font-black px-4 py-2 rounded-xl mb-8 uppercase tracking-widest text-xs">
                                <Cpu size={16} />
                                IP & Tech Specialty
                            </div>
                            <h1 className="text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.8]">PATENT AGENT & TECH SPEC JOBS</h1>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-xl">Connecting highly specialized technical professionals with elite IP practices at national and global law firms.</p>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[
                                { label: 'Active IP Openings', value: '45+', icon: FileSearch },
                                { label: 'Top Tier Firms', value: '18', icon: Shield },
                                { label: 'Remote Friendly', value: '60%', icon: Globe },
                                { label: 'Patent Hub', value: 'Live', icon: Cpu },
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between group hover:bg-purple-600 transition-all duration-500">
                                    <stat.icon className="text-purple-600 mb-8 group-hover:text-white transition-colors" size={32} />
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-purple-100 transition-colors mb-1">{stat.label}</p>
                                        <p className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PATENT_JOBS.map((job) => (
                            <div key={job.id} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-purple-50 px-3 py-1 rounded text-purple-600">{job.area}</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-gray-50 px-3 py-1 rounded text-gray-400">Patent Hub</span>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-tight flex-1">{job.title}</h2>
                                <div className="space-y-2 mb-10 border-t border-gray-50 pt-6">
                                    <p className="font-black text-xs uppercase tracking-widest text-gray-900 underline underline-offset-4 decoration-purple-600">{job.firm}</p>
                                    <p className="font-bold text-xs uppercase tracking-widest text-gray-400">{job.location} • {job.level}</p>
                                </div>
                                <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-purple-600 transition-all shadow-xl shadow-gray-900/10 hover:shadow-purple-500/20 active:scale-95">Application Hook</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
