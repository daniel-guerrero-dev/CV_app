export function CVPreview({ HeaderInfo, SkillInfo, JobInfo }) {
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
    </div>
  );
}
