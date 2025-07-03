'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from '@/components/ui/sidebar';
import { Logo } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogOut, FileText, Users, BotMessageSquare, Dumbbell, Activity } from 'lucide-react';
import PageSpinner from '@/components/page-spinner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return <PageSpinner />;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const getInitials = (name: string | null | undefined) => {
    return name ? name.split(' ').map(n => n[0]).join('') : 'U';
  }

  const patientNav = (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton href="/dashboard" isActive={true} tooltip="Dashboard">
          <LayoutDashboard />
          <span>Dashboard</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="#" tooltip="Exercises">
          <Dumbbell />
          <span>My Exercises</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="#" tooltip="History">
          <Activity />
          <span>Session History</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );

  const therapistNav = (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton href="/dashboard" isActive={true} tooltip="Dashboard">
          <LayoutDashboard />
          <span>Dashboard</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="#" tooltip="Patients">
          <Users />
          <span>Patients</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="#" tooltip="AI Tool">
          <BotMessageSquare />
          <span>AI Treatment Tool</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="#" tooltip="Notes">
          <FileText />
          <span>Session Notes</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-lg font-semibold">Healero</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {user.role === 'patient' ? patientNav : therapistNav}
          </SidebarContent>
          <SidebarFooter>
             <div className="flex items-center gap-3 p-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`https://placehold.co/40x40.png`} alt={user.name || 'User'} data-ai-hint="profile avatar" />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout} className="ml-auto">
                    <LogOut className="h-4 w-4" />
                </Button>
             </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 bg-background">{children}</main>
      </div>
    </SidebarProvider>
  );
}
