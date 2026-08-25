import { useRef, useState } from "react";
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

export function App() {
  const [headerInfo, setHeaderInfo] = useState({});
  const [skillList, setSkillList] = useState([]);
  const skillCounterRef = useRef(0);
  function topSubmit(info: HeaderInfo) {
    setHeaderInfo(info);
  }
  function skillSubmit(skill: SkillInfo) {
    const SkillWithId = { ...skill, id: skillCounterRef.current };
    skillCounterRef.current++;
    setSkillList([...skillList, SkillWithId]);
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Header */}
      <header className="flex justify-center items-center p-0.5 h-10 w-screen bg-amber-500">
        <p>CV maker</p>
      </header>
      {/* Main */}
      <main className="flex p-3 gap-1">
        <FormBody submitTop={topSubmit} submitSkill={skillSubmit} />
        <CVPreview HeaderInfo={headerInfo} SkillInfo={skillList} />
      </main>
      {/* Footer */}
      <footer className="p-0.5 text-center">
        <p className="text-amber-50">Made by Daniel Guerrero</p>
      </footer>
    </div>
  );
}
