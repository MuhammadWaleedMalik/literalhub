import { Star, Quote, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const STORIES = [
    { id: 1, quote: "Lateral Hub made my job search completely transparent. I applied directly to my firm and heard back in 48 hours.", author: "Mid-level Corporate Associate", firm: "AmLaw 50 Firm", location: "New York" },
    { id: 2, quote: "The best part was not having to re-enter my resume data twenty times. One profile, direct application, and I landed my dream boutique role.", author: "IP Litigation Senior Associate", firm: "Boutique IP Firm", location: "San Francisco" },
    { id: 3, quote: "Firms actually look at these applications. I received my signing bonus because the firm saved on recruiter fees.", author: "Tax Counsel", firm: "Global Law Firm", location: "Chicago" },
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-1 bg-yellow-400 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                            <Star size={16} className="fill-gray-900" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-900">Success Stories</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.9]">HOW ATTORNEYS USE LATERAL HUB</h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">Join thousands of attorneys who have taken control of their career search with direct firm applications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {STORIES.map((story) => (
                            <div key={story.id} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group">
                                <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-teal-600 transition-colors">
                                    <Quote className="text-teal-600 group-hover:text-white transition-colors" size={32} />
                                </div>
                                <p className="text-xl text-gray-900 font-black mb-10 leading-relaxed italic tracking-tight flex-1">"{story.quote}"</p>
                                <div className="pt-8 border-t border-gray-50">
                                    <p className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">{story.author}</p>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{story.firm} • {story.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-20"></div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase relative z-10 leading-none">READY TO WRITE YOUR OWN SUCCESS STORY?</h2>
                        <p className="text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto relative z-10">Sign up today and browse verified lateral openings at the best firms in the country.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <button className="px-10 py-5 bg-teal-600 text-white rounded-full font-black uppercase tracking-[0.2em] hover:bg-teal-700 shadow-xl shadow-teal-500/20 active:scale-95 transition-all">JOIN NOW - IT'S FREE</button>
                            <button className="px-10 py-5 bg-white/10 text-white rounded-full font-black uppercase tracking-[0.2em] hover:bg-white/20 flex items-center justify-center gap-2 border border-white/10 tracking-tightest">BROWSE FIRMS <ChevronRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
