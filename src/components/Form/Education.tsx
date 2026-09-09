import { useRef } from "react";

export interface EducationInfo {
  titleName: string;
  institutionName: string;
  educationLevel: string;
}

export interface EducationFormData {
  onEducationSubmit: (SubmittedEducationInfo: EducationInfo) => void;
}

export function Education({ onEducationSubmit }: EducationFormData) {
  const titleRef = useRef<HTMLInputElement>(null);
  const institutionNameRef = useRef<HTMLInputElement>(null);
  const edLevel = useRef<HTMLSelectElement>(null);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const education = {
            titleName: titleRef.current?.value ?? "",
            institutionName: institutionNameRef.current?.value ?? "",
            educationLevel: edLevel.current?.value ?? "",
          };
          onEducationSubmit(education);
        }}
        className="flex gap-2 flex-wrap"
      >
        <input
          type="text"
          name="educationTitle"
          id="educationTitle"
          ref={titleRef}
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Education"
        />
        <input
          type="text"
          name="institutionName"
          id="institutionName"
          ref={institutionNameRef}
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Institution Name"
        />
        <select
          name="educationLevel"
          id="educationLevel"
          ref={edLevel}
          className="bg-gray-900 rounded-lg p-2"
        >
          <option value="Undergrad">Undergrad</option>
          <option value="Postgrad">Postgrad</option>
          <option value="N/A">N/A</option>
        </select>
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
