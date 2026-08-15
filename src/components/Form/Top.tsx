export function Top() {
  return (
    <div>
      <div>
        <p>Name</p>
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
      <button className="bg-gray-900 rounded-lg p-2 mt-1">Submit</button>
    </div>
  );
}
