'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import PageSpinner from '@/components/page-spinner';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { MoveRight } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if user is logged in
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  // Show a spinner while auth state is loading or if user is being redirected
  if (loading || user) {
    return <PageSpinner />;
  }

  // If not loading and no user, show the landing page
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="ml-3 text-2xl font-bold tracking-tight text-foreground">Healero</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-4">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground/80">
                    Revolutionize Your Recovery Journey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Healero offers a seamless digital platform connecting physiotherapists and patients for personalized care, progress tracking, and AI-powered insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Get Started Free
                      <MoveRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center relative">
                  <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 bg-card/60 backdrop-blur-md rounded-3xl shadow-2xl border">
                      <Logo className="h-24 w-24 text-primary opacity-80" />
                      <p className="mt-4 text-lg font-semibold text-foreground">AI-Powered Physiotherapy</p>
                      <p className="mt-2 text-sm text-muted-foreground">Smart treatment plans for a faster recovery.</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-6 border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Healero. All rights reserved.</p>
      </footer>
    </div>
  );
}
