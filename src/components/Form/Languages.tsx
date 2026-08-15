export function Languages() {
  return (
    <div className="flex gap-2">
      <form
        onSubmit={() => {
          event?.preventDefault();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          name="languageName"
          id="languageName"
          className="bg-gray-900 rounded-lg p-2"
          placeholder="Language Name"
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
