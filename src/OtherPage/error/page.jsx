import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
        <div className="bg-orange-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button
          className="mt-5 px-4 py-2 bg-orange-500 text-white rounded shadow-md hover:bg-orange-600 transition"
          onClick={() => navigate('/')}
        >
          Go Home
        </button>
      </div>
      <svg className="mt-10 w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="200" fill="#f3f4f6" />
        <text x="50%" y="50%" textAnchor="middle" dy=".35em" className="text-6xl text-gray-500">
          404
        </text>
      </svg>
    </div>
  );
};

export default ErrorPage;
