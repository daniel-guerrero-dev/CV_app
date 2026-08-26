import { use, useRef, useState } from "react";
import { CVPreview } from "./components/CVPreview";
import { FormBody } from "./components/FormBody";

interface HeaderInfo {
  name: string;
  lastName: string;
  profession: string;
}
interface SkillInfo {
  skillName: string;
  skillExp: number;
}
interface JobInfo {
  jobName: string;
  jobExp: number;
}

export function App() {
  const [headerInfo, setHeaderInfo] = useState({});
  const [skillList, setSkillList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const skillCounterRef = useRef(0);
  const jobCounterRef = useRef(0);

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
    skillCounterRef.current++;
    setJobList([...jobList, JobWithId]);
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
        />
        <CVPreview
          HeaderInfo={headerInfo}
          SkillInfo={skillList}
          JobInfo={jobList}
        />
      </main>
      {/* Footer */}
      <footer className="p-0.5 text-center">
        <p className="text-amber-50">Made by Daniel Guerrero</p>
      </footer>
    </div>
  );
}
