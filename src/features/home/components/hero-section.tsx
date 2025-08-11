export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Awesome App
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
            Build something amazing with our modern tech stack. Fast, scalable,
            and developer-friendly.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-purple-700">
              Get Started
            </button>
            <button className="rounded-lg border border-purple-400 px-8 py-3 font-semibold text-purple-400 transition-colors duration-200 hover:bg-purple-400 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
