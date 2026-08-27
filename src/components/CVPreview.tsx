interface HeaderInfoData {
  name: string;
  lastName: string;
  profession: string;
}

interface SkillInfoData {
  id?: number | string | undefined;
  skillName: string;
  skillExp: string;
}

interface JobInfoData {
  id?: number | string | undefined;
  jobName: string;
  jobExperience: string;
}

interface EducationInfoData {
  id?: number | string | undefined;
  titleName: string;
  institutionName: string;
  educationLevel: string;
}

interface CVPreviewProps {
  HeaderInfo: HeaderInfoData;
  SkillInfo: SkillInfoData[];
  JobInfo: JobInfoData[];
  EdInfo: EducationInfoData[];
}

export function CVPreview({
  HeaderInfo,
  SkillInfo,
  JobInfo,
  EdInfo,
}: CVPreviewProps) {
  return (
    <div className="p-5 bg-white w-1/2 h-50 rounded-2xl">
      <p>
        {HeaderInfo.name} {HeaderInfo.lastName}
      </p>
      <p>{HeaderInfo.profession}</p>
      <ul>
        {SkillInfo.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.skillName} | {skill.skillExp} years of experience
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <ul>
        {JobInfo.map((job) => {
          return (
            <li key={job.id}>
              {job.jobName} | {job.jobExperience} years worked
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {EdInfo.map((education) => {
          return (
            <li key={education.id}>
              {education.titleName} | {education.institutionName} |{" "}
              {education.educationLevel}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
