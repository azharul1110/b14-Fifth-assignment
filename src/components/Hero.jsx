function Hero() {
  return (
    <section className="py-20 md:py-24">
      <div className="px-6 md:px-[104.5px]">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-20">

          <div className="w-full md:w-1/2">
            <h1 className="text-center text-4xl font-bold leading-tight text-gray-900 md:text-left md:text-5xl">
              Build Your Ideal
              <br />
              <span className="gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-6 text-gray-500 md:mx-0 md:text-left">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              <button className="gradient-bg rounded-md px-4 py-2 text-xs font-medium text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-200 px-6 py-2 text-xs text-gray-600">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="/src/assets/banner-stack.png"
              alt="Development Stack"
              className="w-72 md:w-96"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;