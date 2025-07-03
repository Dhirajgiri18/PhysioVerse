'use client';

import type { Exercise } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoOff } from 'lucide-react';

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

const ExerciseVisual = ({ exerciseId }: { exerciseId: string }) => {
  // Use a simple hash to generate different-looking visuals for different exercises
  const hash = exerciseId.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const colorKey = Math.abs(hash) % 3;
  const colors = ['primary', 'accent', 'chart-2']; // Using chart color for more variety
  const color = `hsl(var(--${colors[colorKey]}))`;
  const duration = (Math.abs(hash) % 3) + 4; // 4-6 seconds

  return (
    <div className="w-full h-full bg-muted/30 flex items-center justify-center rounded-md overflow-hidden border">
      <svg width="60%" height="60%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M 10 50 Q 50 10, 90 50"
            stroke={color}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              values="M 10 50 Q 50 10, 90 50; M 10 50 Q 50 90, 90 50; M 10 50 Q 50 10, 90 50"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>
           <path
            d="M 10 50 Q 50 90, 90 50"
            stroke={color}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.6"
          >
             <animate
              attributeName="d"
              values="M 10 50 Q 50 90, 90 50; M 10 50 Q 50 10, 90 50; M 10 50 Q 50 90, 90 50"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};


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
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
              
              <div className="aspect-video mt-auto">
                {exercise.videoUrl ? (
                   <ExerciseVisual exerciseId={exercise.id} />
                ) : (
                  <div className="w-full h-full bg-muted/30 flex flex-col gap-2 items-center justify-center rounded-md overflow-hidden border">
                    <VideoOff className="h-8 w-8 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">No Visual Available</span>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
