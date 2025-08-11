export function CTASection() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-12">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-lg text-purple-100">
          Join thousands of developers building amazing applications
        </p>
        <button className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-colors duration-200 hover:bg-gray-100">
          Start Building Now
        </button>
      </div>
    </div>
  );
}
