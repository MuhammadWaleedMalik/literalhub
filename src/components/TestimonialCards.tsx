export default function TestimonialCards() {
  const testimonials = [
    {
      image: 'https://lateralhub.com/quote/1.jpg',
      quote: 'Top-tier firms currently pay an average of $60K - $125K per hire',
      subtext: 'Firms can avoid these recruiting fees by hiring candidates directly through Lateral Hub.'
    },
    {
      image: 'https://lateralhub.com/quote/2.jpg',
      quote: '"Given the price point, joining Lateral Hub is a no-brainer for firms."',
      subtext: '– Director of Recruiting at AmLaw 50 firm'
    },
    {
      image: 'https://lateralhub.com/quote/3.jpg',
      quote: '"When we save on recruiting fees, we\'re able to provide a higher signing bonus to the candidate."',
      subtext: '– Director of Recruiting at AmLaw 50 firm'
    }
  ];

  return (
    <div className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-[3/2]">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-tight group-hover:text-teal-600 transition-colors">
                  {testimonial.quote}
                </p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-auto">
                  {testimonial.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
