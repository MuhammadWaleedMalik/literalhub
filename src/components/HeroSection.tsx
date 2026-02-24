import { Search, MapPin, FileText } from 'lucide-react';

export default function HeroSection() {
  const quickSearchTags = [
    'Patent Agent Tech Specs',
    'Legal Information',
    'Judicial Clerkship',
    'Judicial Intern',
    'Law Clerk',
    'Legal Intern',
    'Patent Agent Tech Specs',
    'Post-Clerkship Positions',
    'Kira Prep',
    'Law Professor'
  ];

  return (
    <div className="relative bg-[rgb(25,103,110)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://lateralhub.com/bg/bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-white mb-10 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-none uppercase">
            The job board for lateral candidates and top-tier law firms
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-4 opacity-90 leading-relaxed uppercase tracking-wide">
            Top large, midsize, and boutique firms post their jobs on Lateral Hub so you can browse and apply directly.
          </p>
          <div className="flex items-center gap-2 text-teal-100 font-bold uppercase tracking-widest text-xs">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            Free to use • No account required
          </div>
        </div>

        <div className="mb-6">
          <p className="text-white text-sm mb-3 font-medium">Quick Search:</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchTags.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-1.5 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Choose your location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Practice Area
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Choose your practice area"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
