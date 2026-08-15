export function Skills() {
  return (
    <div>
      <form
        onSubmit={() => {
          event?.preventDefault();
        }}
        className="flex gap-2"
      >
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
