export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            MPDEE <span className="support-text-gradient">Support</span>
          </h1>
          <p className="text-lg text-gray-600">Professional IT Support Services</p>
        </div>
        
        <div className="text-center max-w-2xl">
          <p className="mb-6">
            Welcome to MPDEE Support - your trusted partner for comprehensive IT support services. 
            We provide remote helpdesk support, on-site technical assistance, and everything in between.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Remote Support</h3>
              <p className="text-sm text-gray-600">1st & 2nd line helpdesk support</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">On-Site Support</h3>
              <p className="text-sm text-gray-600">3rd line technical support</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Hardware Services</h3>
              <p className="text-sm text-gray-600">Installation & maintenance</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Software Solutions</h3>
              <p className="text-sm text-gray-600">Troubleshooting & upgrades</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full support-gradient text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:opacity-90 transition-opacity">
            Get Support Now
          </button>
          <button className="rounded-full border border-gray-300 hover:bg-gray-50 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto">
            View Services
          </button>
        </div>
      </main>
    </div>
  );
}
