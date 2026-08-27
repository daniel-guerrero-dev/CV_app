import { useRef, useState } from "react";
import { CVPreview } from "./components/CVPreview";
import { FormBody } from "./components/FormBody";

interface HeaderInfo {
  id?: number | string | undefined;
  name: string;
  lastName: string;
  profession: string;
}
interface SkillInfo {
  id?: number | string | undefined;
  skillName: string;
  skillExp: string;
}
interface JobInfo {
  id?: number | string | undefined;
  jobName: string;
  jobExperience: string;
}
interface EducationInfo {
  id?: number | string | undefined;
  titleName: string;
  institutionName: string;
  educationLevel: string;
}

export function App() {
  //form states
  const [headerInfo, setHeaderInfo] = useState<HeaderInfo>({
    name: "",
    lastName: "",
    profession: "",
  });
  const [skillList, setSkillList] = useState<SkillInfo[]>([]);
  const [jobList, setJobList] = useState<JobInfo[]>([]);
  const [edList, setEdList] = useState<EducationInfo[]>([]);

  //counter states
  const skillCounterRef = useRef(0);
  const jobCounterRef = useRef(0);
  const edCounterRef = useRef(0);

  //Submit Functions
  function topSubmit(info: HeaderInfo) {
    setHeaderInfo(info);
  }
  function skillSubmit(skill: SkillInfo) {
    const SkillWithId = { ...skill, id: skillCounterRef.current };
    skillCounterRef.current++;
    setSkillList([...skillList, SkillWithId]);
  }
  function jobSubmit(job: JobInfo) {
    const JobWithId = { ...job, id: jobCounterRef.current };
    jobCounterRef.current++;
    setJobList([...jobList, JobWithId]);
  }
  function educationSubmit(education: EducationInfo) {
    const EducationWithId = { ...education, id: edCounterRef.current };
    edCounterRef.current++;
    setEdList([...edList, EducationWithId]);
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Header */}
      <header className="flex justify-center items-center p-0.5 h-10 w-screen bg-amber-500">
        <p>CV maker</p>
      </header>
      {/* Main */}
      <main className="flex p-3 gap-1">
        <FormBody
          submitTop={topSubmit}
          submitSkill={skillSubmit}
          submitJob={jobSubmit}
          submitEducation={educationSubmit}
        />
        <CVPreview
          HeaderInfo={headerInfo}
          SkillInfo={skillList}
          JobInfo={jobList}
          EdInfo={edList}
        />
      </main>
      {/* Footer */}
      <footer className="p-0.5 text-center">
        <p className="text-amber-50">Made by Daniel Guerrero</p>
      </footer>
    </div>
  );
}
