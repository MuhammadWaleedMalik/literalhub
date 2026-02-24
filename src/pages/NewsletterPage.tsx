import { MailCheck, Rocket, ListChecks, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NewsletterPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-black uppercase tracking-widest text-xs mb-10">
                                <MailCheck size={16} />
                                Lateral Hub Weekly
                            </div>
                            <h1 className="text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-[0.8] uppercase">LEGAL CAREER INTEL DIRECT TO YOU.</h1>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">Expert advice, relocation guides, and exclusive job market insights for the modern lateral candidate. Joined by 10,000+ legal professionals.</p>

                            <div className="space-y-6">
                                {[
                                    { icon: ListChecks, title: 'Weekly Market Reports', desc: 'Which practice areas are hiring hot.' },
                                    { icon: Zap, title: 'Interview Cheat Sheets', desc: 'Direct tips from recruiting directors.' },
                                    { icon: Rocket, title: 'Featured Openings', desc: 'Hand-picked roles before they go viral.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-blue-600">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-black text-gray-900 uppercase tracking-widest text-sm border-tight">{item.title}</p>
                                            <p className="text-gray-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-4 bg-blue-600"></div>
                            <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter text-center uppercase">SUBSCRIBE NOW</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="First Name" className="px-8 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold" />
                                    <input type="text" placeholder="Last Name" className="px-8 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold" />
                                </div>
                                <input type="email" placeholder="Email (Non-work preferred)" className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold" />
                                <button className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98]">Sign Me Up!</button>
                            </form>
                            <p className="text-center text-gray-400 mt-10 text-xs font-bold uppercase tracking-widest leading-loose">We promise to only send valuable content. Your privacy is our priority.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
