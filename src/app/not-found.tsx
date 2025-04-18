"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const navigate = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <button
          onClick={() => navigate.push("/dashboard")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
