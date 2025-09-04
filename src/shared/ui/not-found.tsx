import { Link } from "@tanstack/react-router";

export function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Page not found
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
