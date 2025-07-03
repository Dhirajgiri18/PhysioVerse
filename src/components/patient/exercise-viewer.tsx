'use client';

import type { Exercise } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

const KneeExtensionAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary">
    <g transform="translate(10, 10)">
      {/* Thigh */}
      <rect x="20" y="45" width="30" height="10" rx="3" fill="currentColor" />
      {/* Shin */}
      <g>
        <rect x="50" y="45" width="30" height="10" rx="3" fill="currentColor">
           <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-70 50 50" dur="2s" repeatCount="indefinite" values="0 50 50; -70 50 50; 0 50 50" keyTimes="0; 0.5; 1" />
        </rect>
      </g>
    </g>
  </svg>
);

const ShoulderPressAnimation = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary">
        {/* Head */}
        <circle cx="50" cy="30" r="10" fill="currentColor" opacity="0.8" />
        {/* Barbell */}
        <rect x="20" y="45" width="60" height="6" rx="2" fill="currentColor">
            <animate attributeName="y" from="45" to="15" dur="1.5s" repeatCount="indefinite" values="45; 15; 45" keyTimes="0; 0.5; 1" />
        </rect>
    </svg>
);

const GluteBridgeAnimation = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary">
        <path d="M 10 70 L 90 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
             <animate attributeName="d" dur="2s" repeatCount="indefinite"
                values="M 20 70 Q 50 70, 80 70; M 20 70 Q 50 40, 80 70; M 20 70 Q 50 70, 80 70"
                keyTimes="0; 0.5; 1" />
        </path>
    </svg>
);

const PlankAnimation = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary">
        <g>
            <line x1="15" y1="50" x2="85" y2="50" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
            <line x1="25" y1="50" x2="20" y2="60" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
            <line x1="75" y1="50" x2="80" y2="60" strokeWidth="4" stroke="currentColor" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" keyTimes="0; 0.5; 1" dur="3s" repeatCount="indefinite" />
        </g>
    </svg>
);


const ExerciseAnimation = ({ name }: { name: string }) => {
  const normalizedName = name.toLowerCase();
  
  switch (true) {
    case normalizedName.includes('knee'):
      return <KneeExtensionAnimation />;
    case normalizedName.includes('shoulder'):
      return <ShoulderPressAnimation />;
    case normalizedName.includes('glute'):
      return <GluteBridgeAnimation />;
    case normalizedName.includes('plank'):
      return <PlankAnimation />;
    default:
      // A fallback generic animation for any other exercise
      return (
         <svg viewBox="0 0 100 100" className="w-24 h-24 text-primary">
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4">
                <animate attributeName="r" values="10; 20; 10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1; 0.5; 1" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>
      );
  }
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
              
              <div className="aspect-video mt-auto relative overflow-hidden rounded-md border flex items-center justify-center bg-muted/20 group-hover:bg-muted/40 transition-colors">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                    <ExerciseAnimation name={exercise.name} />
                </div>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
