import { useRef } from "react";

export function Top({ onSubmitHeader }) {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const professionRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const submittedInfo = {
            name: nameRef.current.value ?? "",
            lastName: lastNameRef.current.value ?? "",
            profession: professionRef.current.value ?? "",
          };
          onSubmitHeader(submittedInfo);
        }}
        id="headerForm"
        className="flex flex-col gap-1"
      >
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            ref={nameRef}
            id="Name"
            className="bg-gray-900 rounded-lg pl-1.5"
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lName"
            ref={lastNameRef}
            id="lName"
            className="bg-gray-900 rounded-lg pl-1.5"
          />
        </div>
        <div>
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            name="profession"
            ref={professionRef}
            id="profession"
            className="bg-gray-900 rounded-lg pl-1.5"
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
