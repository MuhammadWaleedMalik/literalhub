import { ClipboardList, Briefcase, GraduationCap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CLERKSHIPS = [
    { id: 1, title: 'Federal Judicial Clerkship', court: 'U.S. District Court, SDNY', judge: 'Hon. Jed S. Rakoff', location: 'New York, NY', term: '2026-2027', status: 'Applications Open' },
    { id: 2, title: 'Appellate Clerkship', court: '9th Circuit Court of Appeals', judge: 'Hon. Consuelo Callahan', location: 'San Francisco, CA', term: '2025-2026', status: 'Hiring' },
    { id: 3, title: 'State Supreme Court Clerk', court: 'Texas Supreme Court', judge: 'Hon. Nathan Hecht', location: 'Austin, TX', term: '2026', status: 'Rolling' },
];

export default function ClerkshipsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
                        <div className="flex-1">
                            <div className="inline-block bg-blue-100 text-blue-700 font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest text-xs">Post-Clerkship Hub</div>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-[0.9]">JUDICIAL CLERKSHIPS</h1>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">Browse open judicial clerkships and roles for former clerks at top-tier law firms. Streamlining the transition from the bench to practice.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col gap-4 text-center min-w-[300px]">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 text-blue-600">
                                <GraduationCap size={32} />
                            </div>
                            <p className="font-black text-gray-900 uppercase">Clerks: Join Our Exclusive Database</p>
                            <button className="bg-blue-600 text-white py-4 rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">Register for $0</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {CLERKSHIPS.map((item) => (
                            <div key={item.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 h-full w-2 bg-blue-100 transition-all group-hover:bg-blue-500"></div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-gray-100 px-3 py-1 rounded text-gray-500">{item.status}</span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded text-blue-600">{item.term}</span>
                                        </div>
                                        <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{item.title}</h2>
                                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
                                            <span className="flex items-center gap-2"><ClipboardList size={16} className="text-gray-300" /> {item.court}</span>
                                            <span className="flex items-center gap-2"><Briefcase size={16} className="text-gray-300" /> {item.judge}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="px-8 py-4 border-2 border-gray-100 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-gray-50 transition-colors">Details</button>
                                        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-colors">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
