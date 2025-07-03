'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { updateUserProfileAction } from '@/app/actions';
import type { AppUser } from '@/types';
import PageSpinner from './page-spinner';

const patientSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
});

const therapistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  specialty: z.string().min(3, 'Specialty must be at least 3 characters.'),
  location: z.string().min(3, 'Location must be at least 3 characters.'),
  bio: z.string().max(300, 'Bio can be a maximum of 300 characters.').optional(),
});

export default function ProfileManager() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isTherapist = user?.role === 'therapist';
  const formSchema = isTherapist ? therapistSchema : patientSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      ...(isTherapist && {
        specialty: '',
        location: '',
        bio: '',
      }),
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || '',
        ...(isTherapist && {
          specialty: user.specialty || '',
          location: user.location || '',
          bio: user.bio || '',
        }),
      });
    }
  }, [user, form, isTherapist]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) return;
    setIsSubmitting(true);
    
    const updateData: Partial<AppUser> = { ...values };

    const result = await updateUserProfileAction(user.uid, updateData);

    if (result.success) {
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully. Refresh to see changes.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: result.error,
      });
    }
    setIsSubmitting(false);
  };
  
  if (authLoading) {
      return <PageSpinner />;
  }
  
  if (!user) {
      return (
        <div className="flex justify-center items-center h-full">
            <p>Please log in to see your profile.</p>
        </div>
      );
  }

  const PatientFormFields = () => (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Full Name</FormLabel>
          <FormControl>
            <Input placeholder="Your full name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const TherapistFormFields = () => (
    <>
      <PatientFormFields />
      <FormField
        control={form.control}
        name="specialty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Specialty</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Sports Injury, Pediatrics" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Pune, Maharashtra" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea placeholder="Tell us a little about your practice and experience." className="resize-y" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <Card className="max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>View and edit your personal information. Click save when you're done.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {isTherapist ? <TherapistFormFields /> : <PatientFormFields />}
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save Changes
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
