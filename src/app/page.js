import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Welcome to the E-commerce App</h1>
      <Link href="/register">
        <p className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300">
          Go to Registration Page
        </p>
      </Link>
    </div>
  );
}
