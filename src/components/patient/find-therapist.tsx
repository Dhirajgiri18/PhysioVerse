'use client';

import { useState } from 'react';
import type { Therapist } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search } from 'lucide-react';

const mockTherapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    specialty: 'Sports Injury',
    location: 'Pune, Maharashtra',
    bio: 'Dr. Carter has over 10 years of experience helping athletes recover and reach their peak performance.',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '2',
    name: 'Dr. Ben Adams',
    specialty: 'Post-operative Rehab',
    location: 'Mumbai, Maharashtra',
    bio: 'Specializing in post-surgery recovery, Dr. Adams is dedicated to helping patients regain mobility and strength.',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '3',
    name: 'Dr. Chloe Davis',
    specialty: 'Neurological Physiotherapy',
    location: 'Pune, Maharashtra',
    bio: 'Dr. Davis works with patients with neurological conditions to improve their quality of life.',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '4',
    name: 'Dr. Sam Taylor',
    specialty: 'Pediatric Physiotherapy',
    location: 'Mumbai, Maharashtra',
    bio: 'With a friendly approach, Dr. Taylor helps children with developmental and mobility challenges.',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
];

export default function FindTherapist() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTherapists = mockTherapists.filter(therapist =>
    therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, specialty, or location..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTherapists.map((therapist) => (
          <Card key={therapist.id} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
               <Avatar className="h-16 w-16">
                  <AvatarImage src={therapist.avatarUrl} alt={therapist.name} data-ai-hint="therapist portrait" />
                  <AvatarFallback>{getInitials(therapist.name)}</AvatarFallback>
                </Avatar>
              <div>
                <CardTitle>{therapist.name}</CardTitle>
                <CardDescription>{therapist.specialty}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-1">{therapist.location}</p>
              <p className="text-sm">{therapist.bio}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Book Appointment</Button>
            </CardFooter>
          </Card>
        ))}
         {filteredTherapists.length === 0 && (
          <p className="text-muted-foreground col-span-full text-center">No therapists found matching your search.</p>
        )}
      </div>
    </div>
  );
}
