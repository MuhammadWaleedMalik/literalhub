import { Bell, Smartphone, Mail, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AlertsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-teal-600"></div>

                        <div className="text-center mb-16 relative z-10">
                            <div className="bg-teal-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-sm animate-pulse">
                                <Bell className="text-teal-600" size={48} />
                            </div>
                            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">JOB ALERTS</h1>
                            <p className="text-xl text-gray-600 font-medium max-w-xl mx-auto leading-relaxed">Stay updated on new job postings in your preferred location and practice area. Never miss an opportunity.</p>
                        </div>

                        <form className="space-y-12 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full">
                                        <h3 className="font-black text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Job Preferences</h3>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Practice Area</label>
                                                <select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 font-bold focus:ring-2 focus:ring-teal-500">
                                                    <option>Corporate / M&A</option>
                                                    <option>Commercial Litigation</option>
                                                    <option>Intellectual Property</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Primary Location</label>
                                                <select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 font-bold focus:ring-2 focus:ring-teal-500">
                                                    <option>New York City</option>
                                                    <option>San Francisco / Bay Area</option>
                                                    <option>Chicago</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-teal-600 p-8 rounded-3xl text-white shadow-xl h-full">
                                        <h3 className="font-black uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Delivery Method</h3>
                                        <div className="space-y-4">
                                            <label className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl cursor-pointer hover:bg-white/20 transition-all border border-white/10 group">
                                                <input type="checkbox" className="w-5 h-5 rounded-lg border-none text-teal-500 focus:ring-0" defaultChecked />
                                                <div className="flex items-center gap-3">
                                                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                                                    <span className="font-black tracking-tight uppercase">Email Notifications</span>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl cursor-pointer hover:bg-white/20 transition-all border border-white/10 group">
                                                <input type="checkbox" className="w-5 h-5 rounded-lg border-none text-teal-500 focus:ring-0" />
                                                <div className="flex items-center gap-3">
                                                    <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
                                                    <span className="font-black tracking-tight uppercase">SMS Alerts</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="mt-8 flex items-center gap-2 text-teal-100 text-xs font-bold uppercase tracking-widest">
                                            <ShieldCheck size={16} />
                                            Your data is kept private
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <button className="w-full py-6 bg-teal-600 text-white rounded-[2rem] font-black text-xl hover:bg-teal-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-teal-500/20 uppercase tracking-[0.2em]">
                                    Create My Alerts
                                </button>
                                <p className="text-center text-gray-400 mt-6 text-sm font-bold uppercase tracking-widest">No account required to receive alerts.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
