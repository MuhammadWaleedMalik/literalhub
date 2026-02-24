export default function FeaturesSection() {
  const features = [
    {
      icon: 'https://lateralhub.com/card/1.png',
      title: 'Browse and Filter Jobs',
      description: 'Use our advanced search to browse law firms. Easily filter by location, practice area, and job level to find the job that is best for you. No long, required.'
    },
    {
      icon: 'https://lateralhub.com/card/2.png',
      title: 'Easily Apply In Seconds',
      description: 'Create a Lateral Hub profile, then apply with the click of a button. No lengthy application forms asking for your resume information!'
    },
    {
      icon: 'https://lateralhub.com/card/4.png',
      title: 'Get Alerts for New Jobs',
      description: 'Set up SMS or email alerts to stay up to date with new jobs in your desired locations and practice areas.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
            Start Your Lateral Search Here.
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Three simple steps to browse and apply for jobs at the world's leading law firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-8">
                <div className="bg-teal-50 p-6 rounded-[2.5rem] group-hover:bg-teal-600 transition-colors duration-500 shadow-sm group-hover:shadow-teal-500/20">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-16 w-16 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
