import { Search, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FIRMS = [
    { id: 1, name: 'Latham & Watkins', type: 'Global AmLaw 50', location: 'Multiple Global Offices', description: 'One of the world\'s largest and most profitable law firms with leading practices across corporate, litigation, and regulatory.', logo: 'https://lateralhub.com/employer-profile-photo/129.png' },
    { id: 2, name: 'Kirkland & Ellis', type: 'Private Equity Powerhouse', location: 'Global Offices', description: 'Renowned for its dominant private equity, corporate, and restructuring practices.', logo: 'https://lateralhub.com/employer-profile-photo/130.png' },
    { id: 3, name: 'Skadden', type: 'Elite Boutique/Global', location: 'New York, CA, International', description: 'Premier mergers and acquisitions, litigation, and capital markets firm.', logo: 'https://lateralhub.com/employer-profile-photo/131.png' },
    { id: 4, name: 'White & Case', type: 'International Leader', location: '6 continental offices', description: 'Global law firm with world-class practices in banking, M&A and international arbitration.', logo: 'https://lateralhub.com/employer-profile-photo/132.png' },
];

export default function LawFirmsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">OUR MEMBER LAW FIRMS</h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">Top large, midsize, and boutique firms post their jobs on Lateral Hub. Browse our member firms and learn about their culture and specialties.</p>
                    </div>

                    <div className="relative mb-12 max-w-2xl mx-auto">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search firms by name or specialty..."
                            className="w-full pl-14 pr-6 py-5 bg-white rounded-3xl border-none shadow-lg focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400 font-medium"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {FIRMS.map((firm) => (
                            <div key={firm.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="relative z-10 flex items-start gap-8">
                                    <div className="bg-gray-50 p-4 rounded-2xl grayscale group-hover:grayscale-0 transition-all">
                                        <img src={firm.logo} alt={firm.name} className="h-16 w-16 object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest">{firm.type}</span>
                                        </div>
                                        <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tighter uppercase">{firm.name}</h2>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-bold">
                                            <MapPin size={16} className="text-gray-300" />
                                            {firm.location}
                                        </div>
                                        <p className="text-gray-600 mb-6 font-medium leading-relaxed line-clamp-2">{firm.description}</p>
                                        <div className="flex items-center gap-4">
                                            <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-black text-sm hover:bg-teal-600 transition-colors uppercase tracking-widest">View 12 Openings</button>
                                            <button className="text-gray-400 hover:text-gray-900 font-bold text-sm tracking-tight transition-colors">See Firm Profile →</button>
                                        </div>
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
