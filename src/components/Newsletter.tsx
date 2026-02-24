export default function Newsletter() {
  return (
    <div className="py-20" style={{ backgroundColor: 'rgb(223,242,255)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
            Subscribe to the Lateral Hub Newsletter!
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto">
            Get legal career advice, industry insights, and exclusive resources delivered straight to your inbox.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 text-left">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Albert"
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 text-left">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Yoon"
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 text-left">
                  Email (Non-Work)
                </label>
                <input
                  type="email"
                  placeholder="albert@gmail.com"
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-teal-600 text-white rounded-full font-black uppercase tracking-widest shadow-lg shadow-teal-500/20 hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all"
            >
              Sign me up!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
