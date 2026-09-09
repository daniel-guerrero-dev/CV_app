import { useRef } from "react";

export interface SkillInfo {
  skillName: string;
  skillExp: string;
}

export interface SkillFormData {
  onSubmitSkill: (SubmittedSkillInfo: SkillInfo) => void;
}

export function Skills({ onSubmitSkill }: SkillFormData) {
  const skillRef = useRef<HTMLInputElement>(null);
  const yearsRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const skill = {
            skillName: skillRef.current?.value ?? "",
            skillExp: yearsRef.current?.value ?? "",
          };
          onSubmitSkill(skill);
        }}
        className="flex gap-2 flex-wrap"
      >
        <input
          type="text"
          name="skill-name"
          ref={skillRef}
          id="skillName-segment"
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Skill name"
        />
        <input
          type="number"
          name="Experience"
          id="Experience"
          ref={yearsRef}
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Experience (years): 1"
        />
        <button
          className="bg-gray-900 rounded-lg p-2 mt-1 cursor-pointer hover:bg-gray-600 transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
