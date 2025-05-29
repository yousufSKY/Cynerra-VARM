'use client';

import { useState } from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AuthDialog } from '@/components/auth/auth-dialog';

export default function WelcomePage() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const openAuthDialog = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6" />
          <span className="text-lg font-bold">Cynerra</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-lg px-4 py-12">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold">Get Started with Cynerra</h1>
            <p className="text-muted-foreground">
              Create an account or login to access your security dashboard
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" onClick={() => openAuthDialog('register')} className="w-full">
                Create Account
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Already have an account?
                  </span>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => openAuthDialog('login')}
                className="w-full"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </main>
      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        mode={authMode}
      />
    </div>
  );
}