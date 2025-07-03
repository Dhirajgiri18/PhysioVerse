import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockSessions = [
    { id: '1', date: '2024-07-22', therapist: 'Dr. Emily Carter', notes: 'Focused on lower back stretches. Patient reported less stiffness.' },
    { id: '2', date: '2024-07-15', therapist: 'Dr. Emily Carter', notes: 'Introduced core strengthening exercises. Good progress.' },
    { id: '3', date: '2024-07-08', therapist: 'Dr. Emily Carter', notes: 'Initial assessment. Plan created for managing sciatica.' },
];

export default function SessionHistoryPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Session History</h1>
        <p className="text-muted-foreground">A record of your past physiotherapy sessions.</p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Past Sessions</CardTitle>
            <CardDescription>Review notes and details from your previous appointments.</CardDescription>
        </CardHeader>
        <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Therapist</TableHead>
                        <TableHead>Summary</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockSessions.map((session) => (
                        <TableRow key={session.id}>
                            <TableCell className="font-medium">{session.date}</TableCell>
                            <TableCell>{session.therapist}</TableCell>
                            <TableCell>{session.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
