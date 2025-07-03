'use client';

import type { Patient } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const mockPatients: Patient[] = [
  { id: '1', name: 'Arjun Kumar', email: 'arjun.k@example.com', lastActivity: '2 days ago', progress: 75 },
  { id: '2', name: 'Priya Patel', email: 'priya.p@example.com', lastActivity: 'Today', progress: 50 },
  { id: '3', name: 'Vikram Singh', email: 'vikram.s@example.com', lastActivity: '1 week ago', progress: 25 },
  { id: '4', name: 'Ananya Reddy', email: 'ananya.r@example.com', lastActivity: '3 hours ago', progress: 90 },
];

export default function PatientManager() {
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Patients</CardTitle>
        <CardDescription>An overview of your currently assigned patients and their progress.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead className="hidden sm:table-cell">Last Activity</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>{getInitials(patient.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-sm text-muted-foreground">{patient.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{patient.lastActivity}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Progress value={patient.progress} className="w-24" />
                    <span className="text-sm text-muted-foreground">{patient.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
