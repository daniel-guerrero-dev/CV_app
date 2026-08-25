import { useState } from "react";
import { CVPreview } from "./components/CVPreview";
import { FormBody } from "./components/FormBody";

interface HeaderInfo {
  name: string;
  lastName: string;
  profession: string;
}

export function App() {
  const [headerInfo, setHeaderInfo] = useState({});
  function topSubmit(info: HeaderInfo) {
    setHeaderInfo(info);
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Header */}
      <header className="flex justify-center items-center p-0.5 h-10 w-screen bg-amber-500">
        <p>CV maker</p>
      </header>
      {/* Main */}
      <main className="flex p-3 gap-1">
        <FormBody submitTop={topSubmit} />
        <CVPreview HeaderInfo={headerInfo} />
      </main>
      {/* Footer */}
      <footer className="p-0.5 text-center">
        <p className="text-amber-50">Made by Daniel Guerrero</p>
      </footer>
    </div>
  );
}
