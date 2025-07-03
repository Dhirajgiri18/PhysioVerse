import PatientManager from '@/components/therapist/patient-manager';

export default function PatientsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
        <p className="text-muted-foreground">Manage your patients and their treatment plans.</p>
      </div>
      <PatientManager />
    </div>
  );
}
