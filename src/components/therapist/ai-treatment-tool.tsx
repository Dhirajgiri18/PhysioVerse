'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateTreatmentPlanAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BotMessageSquare, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  patientRecords: z.string().min(50, {
    message: 'Patient records must be at least 50 characters.',
  }),
});

export default function AiTreatmentTool() {
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientRecords: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedPlan('');
    
    const result = await generateTreatmentPlanAction({
      patientRecords: values.patientRecords,
    });

    setIsLoading(false);

    if (result.success && result.data) {
      setGeneratedPlan(result.data.treatmentPlan);
      toast({
        title: 'Plan Generated',
        description: 'The AI has drafted a new treatment plan.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error,
      });
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 h-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BotMessageSquare className="h-6 w-6" />
            AI Treatment Plan Generator
          </CardTitle>
          <CardDescription>
            Enter patient records to generate a draft treatment plan. The AI will analyze the information and suggest a structured plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="patientRecords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Records</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter patient's medical history, symptoms, diagnosis, and any relevant notes..."
                        className="min-h-[200px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Plan
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Generated Plan</CardTitle>
          <CardDescription>Review, edit, and copy the plan generated by the AI.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <Textarea
              readOnly
              value={generatedPlan || 'The generated plan will appear here...'}
              className="min-h-[300px] resize-y bg-muted/50"
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
