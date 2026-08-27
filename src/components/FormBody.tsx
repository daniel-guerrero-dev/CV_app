import { Education, type EducationInfo } from "./Form/Education";
import { Jobs, type JobInfo } from "./Form/Jobs";
import { Skills, type SkillInfo } from "./Form/Skills";
import { Top, type SubmittedHeaderInfo } from "./Form/Top";

interface FormBodyProps {
  submitTop: (data: SubmittedHeaderInfo) => void;
  submitSkill: (data: SkillInfo) => void;
  submitJob: (data: JobInfo) => void;
  submitEducation: (data: EducationInfo) => void;
}

export function FormBody({
  submitTop,
  submitSkill,
  submitJob,
  submitEducation,
}: FormBodyProps) {
  return (
    <div className="flex flex-col p-5 bg-gray-800 w-1/2 h-full rounded-2xl text-amber-50 gap-5">
      {/* Top section, contains name and Last name, aswell as profession title */}
      <Top onSubmitHeader={submitTop} />
      {/* Skills section, contains a button that lets you add skills */}
      <Skills onSubmitSkill={submitSkill} />
      {/* Jobs Section */}
      <Jobs onJobSubmit={submitJob} />
      {/* Eduction Section */}
      <Education onEducationSubmit={submitEducation} />
    </div>
  );
}
