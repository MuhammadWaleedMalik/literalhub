import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const POSTS = [
    { id: 1, title: 'The Misconception of the 6-Month Rule', excerpt: 'One of the biggest misconceptions about the lateral process is that you can\'t apply twice in 6 months.', date: 'Jan 16, 2026', author: 'Lateral Hub Team', image: 'https://lateralhub.com/blog-thumbnail/57.jpg' },
    { id: 2, title: 'Common Myths: Firms and Direct Applications', excerpt: 'Firms look at every application believing you\'re destined to be the next superstar in their recruiting...', date: 'Nov 14, 2025', author: 'Industry Expert', image: 'https://lateralhub.com/blog-thumbnail/56.jpg' },
    { id: 3, title: 'Start Now if You Plan to Move After Your Bonus', excerpt: 'If you plan to make a move after your year-end bonus, now is the time to start your search.', date: 'Sep 08, 2025', author: 'Career Coach', image: 'https://lateralhub.com/blog-thumbnail/55.jpg' },
    { id: 4, title: 'Accepting an Offer and Clearing Conflicts', excerpt: 'The nuts and bolts of the magic trifecta of landing a new job: accepting, conflicts, and notice.', date: 'Feb 13, 2025', author: 'Founder', image: 'https://lateralhub.com/blog-thumbnail/54.jpg' },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">RESOURCE LIBRARY</h1>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">Insights, career advice, and industry news for lateral candidates and legal professionals.</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Search articles..." className="px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 font-bold" />
                            <button className="bg-gray-900 text-white px-6 py-4 rounded-2xl font-black hover:bg-teal-600 transition-colors uppercase tracking-widest text-sm">Search</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {POSTS.map((post) => (
                            <article key={post.id} className="flex flex-col group h-full">
                                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                                        <span className="text-white text-xs font-black uppercase tracking-[0.2em] mb-2">{post.date}</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter leading-tight group-hover:text-teal-600 transition-colors uppercase">{post.title}</h2>
                                    <p className="text-gray-500 font-medium mb-6 line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>
                                    <button className="flex items-center gap-2 text-teal-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all w-fit">
                                        Read Article
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-teal-50 rounded-[3rem] text-center max-w-4xl mx-auto shadow-sm">
                        <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">NEVER MISS AN UPDATE</h3>
                        <p className="text-lg text-gray-600 font-medium mb-8">Join our newsletter to receive the latest legal career advice directly in your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input type="email" placeholder="Enter your email" className="px-8 py-5 bg-white border-none rounded-full focus:ring-2 focus:ring-teal-500 flex-1 max-w-sm font-bold shadow-sm" />
                            <button className="bg-teal-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-lg hover:bg-teal-700 transition-all hover:scale-105">Subscribe</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
