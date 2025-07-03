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
  },
];

export default function ExerciseViewer() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockExercises.map((exercise) => (
          <Card key={exercise.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
              <CardDescription>
                {exercise.sets} sets of {exercise.reps} {exercise.name === 'Plank' ? 'seconds' : 'reps'}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
              {exercise.videoUrl && (
                <div className="aspect-video overflow-hidden rounded-md">
                   <Image
                      src="https://placehold.co/1280x720.png"
                      alt={`Video thumbnail for ${exercise.name}`}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                      data-ai-hint="exercise video"
                    />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
