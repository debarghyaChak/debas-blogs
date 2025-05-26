"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Log the token status for debugging

      if (!token) {
        console.log('No token found, redirecting to login...');
        router.push('/login');
      } else {
        console.log('Token found, user is authenticated');
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return <div>Loading...</div>; // Show loading state while checking authentication
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
