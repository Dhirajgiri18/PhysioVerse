import ProfileManager from '@/components/profile-manager';

export default function ProfilePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account details and preferences.</p>
      </div>
      <ProfileManager />
    </div>
  );
}
