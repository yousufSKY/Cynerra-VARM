'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChange } from '@/lib/auth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      if (!user && !isLoading) {
        router.push('/welcome');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router, isLoading]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}