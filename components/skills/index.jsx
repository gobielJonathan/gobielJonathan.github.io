import classNames from "classnames";
import styles from "./index.module.css";

export default function Skills() {
  return (
    <div className="container">
      <h1 className="font-bold">SKILLS</h1>
      <div className={classNames("row", styles["skills"])}>
        <div className="col-6">
          <h3>Developer Experience</h3>
          <ul>
            <li>CI/CD: Github Action</li>
            <li>Code Quality and Best Practices: Eslint, Prettier</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>Core Technologies</h3>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>Responsive Design: Bootstrap or Tailwind CSS</li>
            <li>JavaScript Frameworks: ReactJs, VueJs</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>Tooling</h3>
          <ul>
            <li>Version Control: Git</li>
            <li>Build Tools and Bundlers: Webpack, Babel</li>
            <li>Testing Frameworks: Jest</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>Modern Web APIs and Performance</h3>
          <ul>
            <li>Progressive Web Apps (PWAs)</li>
            <li>Web Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
