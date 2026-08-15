export function Top() {
  return (
    <div>
      <form
        onSubmit={() => {
          event?.preventDefault();
        }}
        id="headerForm"
      >
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            id="name-segment"
            className="bg-gray-900 rounded-lg"
          />
        </div>
        <div>
          <p>Last Name</p>
          <input
            type="text"
            name="Name"
            id="lastName-segment"
            className="bg-gray-900 rounded-lg"
          />
        </div>
        <div>
          <p>Profession Title</p>
          <input
            type="text"
            name="profession"
            id="profession-segment"
            className="bg-gray-900 rounded-lg"
          />
        </div>
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
