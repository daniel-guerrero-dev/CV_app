export function Education() {
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
          name="educationTitle"
          id="educationTitle"
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Education"
        />
        <input
          type="text"
          name="institutionName"
          id="institutionName"
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Institution Name"
        />
        <input
          type="number"
          name="educationLevel"
          id="educationLevel"
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Level"
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
