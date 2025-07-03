import FindTherapist from '@/components/patient/find-therapist';

export default function FindTherapistPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
       <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Find a Therapist</h1>
        <p className="text-muted-foreground">Search for a therapist that fits your needs.</p>
      </div>
      <div className="flex-grow">
        <FindTherapist />
      </div>
    </div>
  );
}
