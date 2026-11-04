export function Banner() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/Banner.png")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-7xl font-light text-white leading-tight">
          Discover Your<span className="block"> Next Adventure</span>
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
            EXPLORE NOW &rarr;
          </button>
          <button className="px-8 py-3 bg-white/10 text-white text-sm font-medium rounded border border-white/30 hover:bg-white/20 transition-colors">
            VIEW DESTINATION
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-lg">
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-end">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Address, City Or Zip"
                  className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Date / Duration
                </label>
                <input
                  type="text"
                  placeholder="Anytime/3 Days"
                  className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Budget
                </label>
                <input
                  type="text"
                  placeholder="$0-$3000"
                  className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  People
                </label>
                <input
                  type="text"
                  placeholder="5-10"
                  className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                className="h-10 w-full bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
