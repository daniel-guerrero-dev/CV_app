export function Skills() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        name="skill-name"
        id="skillName-segment"
        className="bg-gray-900 rounded-lg p-2"
        placeholder="Skill name"
      />
      <input
        type="number"
        name="Experience"
        id="Experience"
        className="bg-gray-900 rounded-lg p-2"
        placeholder="Experience (years): 1"
      />
    </div>
  );
}
