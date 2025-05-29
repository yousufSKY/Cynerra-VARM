'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, KeyRound, Loader2 } from 'lucide-react';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

export function AuthDialog({ isOpen, onClose, mode: initialMode }: AuthDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formMode = (e.currentTarget as HTMLFormElement).getAttribute('data-mode') as 'login' | 'register';
      if (formMode === 'login') {
        const { user, error } = await signIn(email, password);
        if (error) throw error;
        if (user) {
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in.",
          });
          onClose();
          router.push('/dashboard');
        }
      } else {
        const { user, error } = await signUp(email, password);
        if (error) throw error;
        if (user) {
          toast({
            title: "Account created",
            description: "Your account has been successfully created.",
          });
          onClose();
          router.push('/dashboard');
        }
      }
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: error instanceof Error ? error.message : "An error occurred during authentication",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Authentication</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={initialMode} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-none">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Create Account</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="space-y-4 p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
              </div>
              <form onSubmit={handleSubmit} data-mode="login">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-login">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email-login"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-login">Password</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password-login"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <div className="space-y-4 p-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                <p className="text-sm text-muted-foreground">Enter your details to create your account</p>
              </div>
              <form onSubmit={handleSubmit} data-mode="register">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-register">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email-register"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Password</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password-register"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}