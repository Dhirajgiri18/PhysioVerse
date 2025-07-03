import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function SessionNotesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Session Notes</h1>
        <p className="text-muted-foreground">Record and review notes from your patient sessions.</p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>New Session Note</CardTitle>
            <CardDescription>Select a patient and write your notes for the session.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {/* A real implementation would have a patient selector here */}
            <Textarea placeholder="Write your session notes here..." className="min-h-[200px]" />
            <Button>Save Note</Button>
        </CardContent>
      </Card>
    </div>
  );
}
