'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoveRight, Users, ClipboardCheck, TrendingUp, BotMessageSquare, Dumbbell, Activity } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="ml-3 text-2xl font-bold tracking-tight text-foreground">Healero</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-4">
          {loading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          ) : user ? (
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground/80">
                    Your Path to Recovery, Reimagined.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Healero empowers patients and physiotherapists with smart, AI-driven tools for a faster, more connected healing journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Begin Your Journey
                      <MoveRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="A person engaged in physiotherapy"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                  data-ai-hint="physiotherapy patient"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Smarter Way to Heal</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
              Discover the features that make Healero the perfect partner in physiotherapy.
            </p>
            <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BotMessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Plans</h3>
                <p className="text-muted-foreground">Get intelligent, adaptive treatment plans drafted in seconds.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Guided Exercises</h3>
                <p className="text-muted-foreground">Access your personalized exercise program anytime, anywhere.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seamless Tracking</h3>
                <p className="text-muted-foreground">Monitor your progress and stay motivated on your recovery.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Started in 3 Easy Steps</h2>
              <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-lg">
                Joining Healero is simple, for both patients and therapists.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="border-2 border-primary rounded-full p-2 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle>1. Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Sign up as a patient or therapist to get access to your personalized dashboard.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="border-2 border-primary rounded-full p-2 text-primary">
                    <ClipboardCheck className="h-8 w-8" />
                  </div>
                  <CardTitle>2. Get Your Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Therapists create and assign plans, and patients receive their guided exercises.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="border-2 border-primary rounded-full p-2 text-primary">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CardTitle>3. Track Your Recovery</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Follow your progress, stay engaged, and achieve your recovery goals faster.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xl font-medium md:text-2xl">
                &ldquo;Healero completely changed how I approach my recovery. Having my exercises on my phone and seeing my progress has been a game-changer.&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40.png" alt="Patient testimonial" data-ai-hint="happy person" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Take Control of Your Recovery?</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-lg">
              Join Healero today and experience the future of physiotherapy.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/signup">
                  Get Started for Free
                  <MoveRight className="ml-2" />
                </Link>
              </Button>
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
