import { CVPreview } from "./components/CVPreview";
import { FormBody } from "./components/FormBody";

export function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Header */}
      <header className="flex justify-center items-center p-0.5 h-10 w-screen bg-amber-500">
        <p>CV maker</p>
      </header>
      {/* Main */}
      <main className="flex p-3 gap-1">
        <FormBody />
        <CVPreview />
      </main>
      {/* Footer */}
      <footer className="p-0.5 text-center">
        <p className="text-amber-50">Made by Daniel Guerrero</p>
      </footer>
    </div>
  );
}
