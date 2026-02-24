import { Target, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 pt-32">
                {/* Hero Section */}
                <section className="bg-gray-900 text-white py-24 px-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-6xl font-black mb-8 tracking-tighter">ABOUT LATERAL HUB</h1>
                        <p className="text-2xl text-gray-300 font-medium leading-relaxed uppercase tracking-wide">Streamlining the lateral hiring process for attorneys and top-tier firms.</p>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-24 max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="bg-teal-50 w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                                <Target className="text-teal-600" size={32} />
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter uppercase">OUR MISSION</h2>
                            <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
                                <p>Making lateral moves should be easier for everyone. Firms should be able to save on recruiting fees. Attorneys should be able to browse jobs without hours of research.</p>
                                <p>We are streamlining the lateral hiring process by giving attorneys direct and transparent access to openings at top-tier firms.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: 'Transparency', desc: 'Direct access to verified firm openings.' },
                                { title: 'Efficiency', desc: 'Apply in seconds without repetitive forms.' },
                                { title: 'Exclusivity', desc: 'Only top-tier large and boutique firms.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex items-start gap-6 group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900 uppercase tracking-widest text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Founder Quote */}
                <section className="bg-teal-600 py-24 text-white text-center px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-8xl font-serif text-teal-400 leading-none mb-8 opacity-50">"</div>
                        <p className="text-3xl font-black italic tracking-tight mb-8 leading-relaxed">"Legal recruiting is broken. We built Lateral Hub to give attorneys control of their search and help firms build elite teams efficiently."</p>
                        <div className="h-0.5 w-16 bg-white/30 mx-auto mb-6"></div>
                        <p className="font-black uppercase tracking-[0.3em]">Albert Yoon</p>
                        <p className="text-teal-100 text-sm font-bold opacity-80 uppercase tracking-widest">Founder, Lateral Hub</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
