'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { MoveRight, Linkedin, Github, Instagram, Search, CalendarDays, LineChart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const testimonials = [
  {
    name: 'Riya Sharma',
    location: 'Pune',
    feedback: 'Healero helped me find the best physiotherapist near me. I’m recovering better than ever.',
    image: 'https://placehold.co/40x40?text=RS'
  },
  {
    name: 'Amit Joshi',
    location: 'Mumbai',
    feedback: 'Smooth experience booking appointments. The dashboard keeps me on track with my recovery goals.',
    image: 'https://placehold.co/40x40?text=AJ'
  },
  {
    name: 'Sneha Patil',
    location: 'Pune',
    feedback: 'I love how intuitive the platform is. My doctor keeps track of everything!',
    image: 'https://placehold.co/40x40?text=SP'
  },
  {
    name: 'Rahul Deshmukh',
    location: 'Mumbai',
    feedback: 'I never thought physio appointments could be this easy. Highly recommend!',
    image: 'https://placehold.co/40x40?text=RD'
  },
];

const features = [
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "Find the Right Therapist",
        description: "Easily search and filter to find the best physiotherapist for your needs in your local area."
    },
    {
        icon: <CalendarDays className="w-8 h-8 text-primary" />,
        title: "Book with Ease",
        description: "Our streamlined booking system makes scheduling your appointments quick and hassle-free."
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "Track Your Progress",
        description: "Monitor your recovery with a personalized dashboard and stay motivated on your healing journey."
    }
];

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
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-blob" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground/80">
                  Healing Made Smarter.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
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
              <p className="text-sm text-muted-foreground pt-4">Founded by <strong>Dhiraj Giri</strong></p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need for a smooth recovery</h2>
                     <p className="mt-4 text-muted-foreground">Our platform is designed to support you every step of the way.</p>
                </div>
                 <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-2xl transition-shadow duration-300 border-0 bg-transparent shadow-none hover:bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                  {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">What Our Users Say</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-md mx-auto"
              >
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="bg-card p-6 rounded-xl shadow-xl text-left h-full flex flex-col justify-between min-h-[14rem]">
                          <p className="text-base md:text-lg text-card-foreground italic mb-6">“{t.feedback}”</p>
                          <div className="mt-auto flex items-center gap-4">
                            <Avatar className="shadow-md">
                              <AvatarImage src={t.image} alt={t.name} />
                              <AvatarFallback>{t.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{t.name}</p>
                              <p className="text-sm text-muted-foreground">{t.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
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
