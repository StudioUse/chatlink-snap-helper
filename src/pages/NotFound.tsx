
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-secondary/30 backdrop-blur-sm p-12 rounded-lg border border-gray-800">
        <h1 className="text-6xl font-bold mb-4 text-jmd-orange">404</h1>
        <p className="text-xl text-white mb-6">Page not found</p>
        <a href="/" className="btn-primary inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
