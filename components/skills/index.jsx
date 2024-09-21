export default function Skills() {
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="font-bold text-4xl text-slate-900 dark:text-white">
        SKILLS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-x-4 gap-y-8">
        <div>
          <h3 className="text-xl font-light text-slate-900 dark:text-white">
            Developer Experience
          </h3>
          <ul className="list-disc ml-10 mt-2  text-slate-900 dark:text-white">
            <li>CI/CD: Github Action</li>
            <li>Code Quality and Best Practices: Eslint, Prettier</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-light text-slate-900 dark:text-white">
            Core Technologies
          </h3>
          <ul className="list-disc ml-10 mt-2 text-slate-900 dark:text-white">
            <li>HTML, CSS, and JavaScript</li>
            <li>Responsive Design: Bootstrap or Tailwind CSS</li>
            <li>JavaScript Frameworks: ReactJs, VueJs</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-light text-slate-900 dark:text-white">
            Tooling
          </h3>
          <ul className="list-disc ml-10 mt-2 text-slate-900 dark:text-white">
            <li>Version Control: Git</li>
            <li>Build Tools and Bundlers: Webpack, Babel</li>
            <li>Testing Frameworks: Jest</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-light text-slate-900 dark:text-white">
            Modern Web APIs and Performance
          </h3>
          <ul className="list-disc ml-10 mt-2 text-slate-900 dark:text-white">
            <li>Progressive Web Apps (PWAs)</li>
            <li>Web Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
