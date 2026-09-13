function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Build Your Ideal
              <br />
              <span className="text-orange-500">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 text-sm text-gray-500 leading-6 max-w-md mx-auto md:mx-0">
             Explore frontend, backend, database, and tooling options,
             compare them side by side, and put together the stack that fits your
             next project.
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-md">
                Explore Technologies
              </button>

              <button className="border border-gray-200 text-gray-600 text-xs px-5 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/src/assets/banner-stack.png"
              alt="Development Stack"
              className="w-72 md:w-80"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;