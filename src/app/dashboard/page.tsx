'use client';

import { useAuth } from '@/hooks/use-auth';
import PageSpinner from '@/components/page-spinner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PatientManager from '@/components/therapist/patient-manager';

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageSpinner />;
  }

  const PatientDashboard = () => (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome, {user?.name}!</h1>
      <p className="text-muted-foreground mb-6">Here's a quick overview of your progress. You can view your exercises or session history using the sidebar.</p>
       <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
                <CardTitle>Your Exercises</CardTitle>
                <CardDescription>View your assigned physiotherapy exercises.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Stay on track with your personalized exercise plan.</p>
                <Button asChild>
                    <Link href="/dashboard/exercises">View Exercises <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Review notes from your past sessions.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Look back at your journey and progress over time.</p>
                <Button asChild>
                    <Link href="/dashboard/history">View History <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
          </Card>
       </div>
    </div>
  );

  const TherapistDashboard = () => (
    <div className="p-4 sm:p-6 lg:p-8">
       <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Therapist Dashboard</h1>
        <p className="text-muted-foreground">Here's an overview of your patients. Use the sidebar to access other tools.</p>
      </div>
      <PatientManager />
    </div>
  );

  return user?.role === 'patient' ? <PatientDashboard /> : <TherapistDashboard />;
}
