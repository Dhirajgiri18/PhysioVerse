'use client';

import type { Exercise } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const mockExercises: Exercise[] = [
  {
    id: '1',
    name: 'Knee Extension',
    description: 'Strengthens the quadriceps muscles on the front of the thigh.',
    sets: 3,
    reps: 15,
    videoUrl: 'https://www.youtube.com/embed/example1',
  },
  {
    id: '2',
    name: 'Shoulder Press',
    description: 'Builds strength in the shoulder muscles (deltoids) and triceps.',
    sets: 3,
    reps: 12,
    videoUrl: 'https://www.youtube.com/embed/example2',
  },
  {
    id: '3',
    name: 'Glute Bridge',
    description: 'Activates and strengthens the gluteal muscles and hamstrings.',
    sets: 3,
    reps: 20,
    videoUrl: 'https://www.youtube.com/embed/example3',
  },
  {
    id: '4',
    name: 'Plank',
    description: 'Improves core strength and stability.',
    sets: 3,
    reps: 60, // seconds
    videoUrl: 'https://www.youtube.com/embed/example4',
  },
];

const getAiHint = (exerciseName: string): string => {
  const name = exerciseName.toLowerCase();
  if (name.includes('knee')) return 'knee exercise';
  if (name.includes('shoulder')) return 'shoulder press';
  if (name.includes('glute')) return 'glute bridge';
  if (name.includes('plank')) return 'plank exercise';
  return 'physiotherapy exercise';
};

export default function ExerciseViewer() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockExercises.map((exercise) => (
          <Card key={exercise.id} className="flex flex-col group overflow-hidden">
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
              <CardDescription>
                {exercise.sets} sets of {exercise.reps} {exercise.name === 'Plank' ? 'seconds' : 'reps'}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
              
              <div className="aspect-video mt-auto relative overflow-hidden rounded-md border">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt={`Visual for ${exercise.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={getAiHint(exercise.name)}
                />
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
