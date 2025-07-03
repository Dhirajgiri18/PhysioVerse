'use client';

import { useAuth } from '@/hooks/use-auth';
import AiTreatmentTool from '@/components/therapist/ai-treatment-tool';
import PatientManager from '@/components/therapist/patient-manager';
import ExerciseViewer from '@/components/patient/exercise-viewer';
import PageSpinner from '@/components/page-spinner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageSpinner />;
  }

  const PatientDashboard = () => (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome, {user?.name}!</h1>
      <p className="text-muted-foreground mb-6">Here is your personalized treatment plan.</p>
      <ExerciseViewer />
    </div>
  );

  const TherapistDashboard = () => (
    <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
       <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Therapist Dashboard</h1>
        <p className="text-muted-foreground">Manage your patients and their treatment plans.</p>
      </div>
      <Tabs defaultValue="patients" className="flex-grow flex flex-col">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="ai-tool">AI Treatment Tool</TabsTrigger>
        </TabsList>
        <TabsContent value="patients" className="flex-grow mt-6">
          <PatientManager />
        </TabsContent>
        <TabsContent value="ai-tool" className="flex-grow mt-6">
          <AiTreatmentTool />
        </TabsContent>
      </Tabs>
    </div>
  );

  return user?.role === 'patient' ? <PatientDashboard /> : <TherapistDashboard />;
}
