

export default function LawFirmsCarousel() {
  const lawFirms = [
    'https://lateralhub.com/employer-profile-photo/129.png',
    'https://lateralhub.com/employer-profile-photo/130.png',
    'https://lateralhub.com/employer-profile-photo/131.png',
    'https://lateralhub.com/employer-profile-photo/132.png',
    'https://lateralhub.com/employer-profile-photo/133.png',
    'https://lateralhub.com/employer-profile-photo/134.png',
    'https://lateralhub.com/employer-profile-photo/135.png',
    'https://lateralhub.com/employer-profile-photo/136.png'
  ];

  return (
    <div className="py-16 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-black text-center text-teal-600 mb-12 uppercase tracking-[0.2em] border-b-2 border-teal-50 w-fit mx-auto pb-2">
          Our Member Law Firms
        </h2>

        <div className="relative group">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex items-center justify-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
            {lawFirms.slice(0, 6).map((firm, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                <img
                  src={firm}
                  alt={`Law Firm ${index + 1}`}
                  className="h-10 md:h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
