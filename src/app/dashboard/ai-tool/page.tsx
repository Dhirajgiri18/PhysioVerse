import AiTreatmentTool from '@/components/therapist/ai-treatment-tool';

export default function AiToolPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
       <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Treatment Tool</h1>
        <p className="text-muted-foreground">Generate a draft treatment plan from patient records.</p>
      </div>
      <div className="flex-grow">
        <AiTreatmentTool />
      </div>
    </div>
  );
}
