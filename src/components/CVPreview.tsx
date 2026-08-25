export function CVPreview({ HeaderInfo, SkillInfo }) {
  return (
    <div className="p-5 bg-white w-1/2 h-50 rounded-2xl">
      <p>{HeaderInfo.name}</p>
      <p>{HeaderInfo.lastName}</p>
      <p>{HeaderInfo.profession}</p>
      <ul>
        {SkillInfo.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.skillName} | {skill.skillExp} year of experience
            </li>
          );
        })}
      </ul>
    </div>
  );
}
