import { Education } from "./Form/Education";
import { Jobs } from "./Form/Jobs";
import { Languages } from "./Form/Languages";
import { Skills } from "./Form/Skills";
import { Top } from "./Form/Top";

export function FormBody({ submitTop }) {
  return (
    <div className="flex flex-col p-5 bg-gray-800 w-1/2 h-full rounded-2xl text-amber-50 gap-5">
      {/* Top section, contains name and Last name, aswell as profession title */}
      <Top onSubmitHeader={submitTop} />
      {/* Skills section, contains a button that lets you add skills */}
      <Skills />
      {/* Jobs Section */}
      <Jobs />
      {/* Eduction Section */}
      <Education />
      {/* Languages Section */}
      <Languages />
    </div>
  );
}
