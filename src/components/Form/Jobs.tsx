export function Jobs() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        name="jobTitle"
        id="jobTitle"
        className="bg-gray-900 rounded-lg p-2"
        placeholder="Job Title"
      />
      <input
        type="number"
        name="jobYears"
        id="jobYears"
        className="bg-gray-900 rounded-lg p-2"
        placeholder="Runtime (years): 1"
      />
    </div>
  );
}
