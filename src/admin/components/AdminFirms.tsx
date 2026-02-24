import { Plus, MapPin } from 'lucide-react';

export default function AdminFirms() {
    const firms = [
        { id: 1, name: 'Latham & Watkins', jobs: 45, members: 12, rating: 4.8, logo: 'https://lateralhub.com/employer-profile-photo/129.png' },
        { id: 2, name: 'Kirkland & Ellis', jobs: 38, members: 8, rating: 4.9, logo: 'https://lateralhub.com/employer-profile-photo/130.png' },
        { id: 3, name: 'Skadden', jobs: 24, members: 5, rating: 4.7, logo: 'https://lateralhub.com/employer-profile-photo/131.png' },
    ];

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Law Firms</h1>
                    <p className="text-gray-500">Manage member law firms and their profiles</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">
                    <Plus size={20} />
                    Add New Firm
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {firms.map((firm) => (
                    <div key={firm.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={firm.logo} alt={firm.name} className="h-12 w-12 object-contain grayscale" />
                            <div>
                                <h3 className="font-bold text-gray-900">{firm.name}</h3>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <MapPin size={12} />
                                    AmLaw 50 Firm
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-50">
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Active Jobs</p>
                                <p className="text-xl font-bold text-gray-900">{firm.jobs}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Team Members</p>
                                <p className="text-xl font-bold text-gray-900">{firm.members}</p>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm font-medium border border-gray-100">
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
