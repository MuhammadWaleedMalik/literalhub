export default function ReadAboutUs() {
  const publications = [
    'https://lateralhub.com/rbu/1.png',
    'https://lateralhub.com/rbu/2.png',
    'https://lateralhub.com/rbu/3.png'
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Read about us in:
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {publications.map((pub, index) => (
            <img
              key={index}
              src={pub}
              alt={`Publication ${index + 1}`}
              className="h-8 md:h-10 object-contain grayscale opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
