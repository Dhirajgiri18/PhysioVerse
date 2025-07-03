'use server';

import { treatmentPlanGenerator, TreatmentPlanGeneratorInput } from '@/ai/flows/treatment-plan-generator';

export async function generateTreatmentPlanAction(input: TreatmentPlanGeneratorInput) {
    try {
        const result = await treatmentPlanGenerator(input);
        return { success: true, data: result };
    } catch (error) {
        console.error('AI Action Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to generate treatment plan: ${errorMessage}` };
    }
}
