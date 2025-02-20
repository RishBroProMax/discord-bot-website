"use client";

import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return <>{children}</>;
}