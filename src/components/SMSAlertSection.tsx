export default function SMSAlertSection() {
  return (
    <div className="py-8" style={{ backgroundColor: 'rgb(201,223,255)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <img
              src="https://lateralhub.com/icon/msgicon.png"
              alt="SMS Icon"
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-1 tracking-tight uppercase">
              Stay updated on new job postings!
            </h3>
            <p className="text-gray-700 font-medium tracking-tight">
              <a href="#" className="text-blue-600 hover:underline font-bold">
                Click here
              </a>{' '}
              to sign up for <strong>SMS alerts</strong> for new openings in your location{' '}
              <strong>and practice area</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
