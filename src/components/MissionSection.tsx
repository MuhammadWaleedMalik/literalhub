export default function MissionSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: 'rgb(34,33,31)' }}>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Making lateral moves should be easier for everyone.</strong>
              </p>

              <p>
                Firms should be able to save on recruiting fees, reserving resources that can make them more competitive in a tight market.
              </p>

              <p>
                Attorneys should be able to browse and filter jobs at competitive firms without hours of research to discover top-tier firms with openings.
              </p>

              <p>
                <strong>Enter Lateral Hub.</strong>
              </p>

              <p>
                We are streamlining the lateral hiring process by giving attorneys direct and transparent access to openings at top-tier firms.
              </p>

              <p>
                Our mission is to make the lateral hiring process more efficient for top-tier firms and lateral candidates.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              From the Lateral Hub Resource Library
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlogCard
                image="https://lateralhub.com/blog-thumbnail/57.jpg"
                title="The Misconception of the 6-Month Rule"
                excerpt="One of the biggest misconceptions about the lateral process is that you can't apply twice in 6 months. But is it true?"
                date="January 16, 2026"
              />
              <BlogCard
                image="https://lateralhub.com/blog-thumbnail/56.jpg"
                title="Common Myths - Firms and Direct Applications"
                excerpt="Firms look at every application believing you're destined to be the next superstar in their recruiting..."
                date="November 14, 2025"
              />
              <BlogCard
                image="https://lateralhub.com/blog-thumbnail/55.jpg"
                title="Start Now if You Plan to Move After Your Bonus"
                excerpt="If you plan to make a move after your year-end bonus, now is the time to start your job search. Here's why the process takes time."
                date="September 08, 2025"
              />
              <BlogCard
                image="https://lateralhub.com/blog-thumbnail/54.jpg"
                title="Accepting an Offer, Clearing Conflicts, and Giving Notice"
                excerpt="The nuts and bolts of the magic trifecta of landing a new job: accepting an offer, clearing conflicts, and giving notice."
                date="February 13, 2025"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ image, title, excerpt, date }: { image: string; title: string; excerpt: string; date: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          READ MORE »
        </a>
        <p className="text-xs text-gray-400 mt-3">{date}</p>
      </div>
    </div>
  );
}
