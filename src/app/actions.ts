'use server';

import { treatmentPlanGenerator, TreatmentPlanGeneratorInput } from '@/ai/flows/treatment-plan-generator';
import { updateUserProfile } from '@/lib/firebase';
import type { AppUser } from '@/types';

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

export async function updateUserProfileAction(uid: string, data: Partial<AppUser>) {
    try {
        await updateUserProfile(uid, data);
        return { success: true };
    } catch (error) {
        console.error('Update Profile Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to update profile: ${errorMessage}` };
    }
}
