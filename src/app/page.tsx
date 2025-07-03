'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { MoveRight, CalendarDays, MapPin, LayoutDashboard, Linkedin, Github, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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
                    Healing Made Smarter.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Healero helps patients find the nearest physiotherapist, book appointments, and track their progress.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                   <Button asChild size="lg">
                    <Link href="/signup">
                      Get Started Now
                      <MoveRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Physiotherapist assisting a patient"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                  data-ai-hint="physiotherapy doctor patient"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Everything You Need for a Seamless Recovery</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
              Our platform is designed to make your physiotherapy journey as smooth as possible.
            </p>
            <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Nearest Doctor Matching</h3>
                <p className="text-muted-foreground">Our smart system connects you with the best physiotherapists located near you.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <CalendarDays className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Real-time Bookings</h3>
                <p className="text-muted-foreground">Easily find and book appointments with available physiotherapists in your area.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Patient Dashboard</h3>
                <p className="text-muted-foreground">Track your exercises, view session history, and monitor your recovery all in one place.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">What Our Users Say</h2>
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <p className="text-xl font-medium md:text-2xl text-card-foreground">
                  &ldquo;Healero made finding a great physiotherapist so easy. Booking appointments is a breeze, and I love being able to track my progress online.&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Patient testimonial" data-ai-hint="happy person" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Alex Smith</p>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Take Control of Your Recovery?</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-lg">
              Join Healero today and experience the future of physiotherapy. For patients and doctors alike.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/signup">
                  Sign Up as a Patient
                  <MoveRight className="ml-2" />
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline">
                <Link href="/signup">
                  Register as a Doctor
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <Link href="#" className="flex items-center" prefetch={false}>
                <Logo className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold">Healero</span>
              </Link>
              <p className="text-muted-foreground text-sm">Healing Made Smarter.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary">About Us</Link>
                <Link href="#" className="hover:text-primary">Careers</Link>
                <Link href="#" className="hover:text-primary">Press</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <div className="text-sm text-muted-foreground">
                <p>Spyder World</p>
                <p>Pune, Maharashtra</p>
                <p className="mt-2">Email: <a href="mailto:dhirajgiri91124@gmail.com" className="hover:text-primary">dhirajgiri91124@gmail.com</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/dhiraj-giri18/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/Dhirajgiri18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/dhiraj__giri/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Healero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
