import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationPathname = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationPathname);

    return () => {
      window.removeEventListener('popstate', handleLocationPathname);
    };
  }, []);

  if (path === currentPage) {
    return children;
  }

  return null;
};

export default Route;
