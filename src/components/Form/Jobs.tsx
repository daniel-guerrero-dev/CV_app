export function Jobs() {
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
