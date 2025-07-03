'use server';

/**
 * @fileOverview A treatment plan generator AI agent.
 *
 * - treatmentPlanGenerator - A function that generates a treatment plan based on patient records.
 * - TreatmentPlanGeneratorInput - The input type for the treatmentPlanGenerator function.
 * - TreatmentPlanGeneratorOutput - The return type for the treatmentPlanGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TreatmentPlanGeneratorInputSchema = z.object({
  patientRecords: z
    .string()
    .describe('The patient records, including medical history, symptoms, and any previous treatments.'),
});
export type TreatmentPlanGeneratorInput = z.infer<typeof TreatmentPlanGeneratorInputSchema>;

const TreatmentPlanGeneratorOutputSchema = z.object({
  treatmentPlan: z.string().describe('The generated treatment plan.'),
});
export type TreatmentPlanGeneratorOutput = z.infer<typeof TreatmentPlanGeneratorOutputSchema>;

export async function treatmentPlanGenerator(input: TreatmentPlanGeneratorInput): Promise<TreatmentPlanGeneratorOutput> {
  return treatmentPlanGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'treatmentPlanGeneratorPrompt',
  input: {schema: TreatmentPlanGeneratorInputSchema},
  output: {schema: TreatmentPlanGeneratorOutputSchema},
  prompt: `You are an expert physiotherapist specializing in creating effective treatment plans.

You will use the patient records to create a comprehensive treatment plan.
Consider all relevant information and provide a detailed plan.

Patient Records: {{{patientRecords}}}`,
});

const treatmentPlanGeneratorFlow = ai.defineFlow(
  {
    name: 'treatmentPlanGeneratorFlow',
    inputSchema: TreatmentPlanGeneratorInputSchema,
    outputSchema: TreatmentPlanGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
