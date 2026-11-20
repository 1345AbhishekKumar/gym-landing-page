import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dbd5c9] text-[#191919] px-6 text-center">
      <h1 className="text-6xl font-bold font-serif mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-[#5e5b55] mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#f93700] text-white font-semibold rounded hover:bg-[#d83000] transition-colors"
      >
        Return to Apex
      </Link>
    </div>
  );
}
