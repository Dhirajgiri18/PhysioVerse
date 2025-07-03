import ExerciseViewer from '@/components/patient/exercise-viewer';

export default function ExercisesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">My Exercises</h1>
        <p className="text-muted-foreground">Here is your personalized treatment plan.</p>
      </div>
      <ExerciseViewer />
    </div>
  );
}
