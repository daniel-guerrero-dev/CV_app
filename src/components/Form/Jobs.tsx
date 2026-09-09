import { useRef } from "react";

export interface JobInfo {
  jobName: string;
  jobExperience: string;
}

export interface JobFormData {
  onJobSubmit: (SubmitedJobInfo: JobInfo) => void;
}

export function Jobs({ onJobSubmit }: JobFormData) {
  const jobRef = useRef<HTMLInputElement>(null);
  const jobExpRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const jobs = {
            jobName: jobRef.current?.value ?? "",
            jobExperience: jobExpRef.current?.value ?? "",
          };
          onJobSubmit(jobs);
        }}
        className="flex gap-2 flex-wrap"
      >
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          ref={jobRef}
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Job Title"
        />
        <input
          type="number"
          name="jobYears"
          id="jobYears"
          ref={jobExpRef}
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Runtime (years): 1"
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
