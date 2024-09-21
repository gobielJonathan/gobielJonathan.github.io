const data = [
  {
    job: "Teaching Assistant",
    location: "Bina Nusantara, Kemanggisan",
    date: "2018-2019",
    desc: (
      <code className="text-[#e83e8c]">
        <h6>Software Laboratory Center:</h6>
        <ul className="list-disc ml-8">
          <li> Progressive tests (projects) for assistant</li>
          (Game, Analysis, Web, Network, Mobile)
          <li>
            Practicum teaching (Algorithm, Database, Multimedia, Security, Web)
          </li>
          <li> Answer marking</li>
        </ul>
      </code>
    ),
  },

  {
    job: "Research & Developement Team",
    location: "Bina Nusantara, Kemanggisan",
    date: "2019-2021",
    desc: (
      <code className="text-[#e83e8c]">
        <h6>Research & Developement Team at Bina Nusantara: </h6>
        <ul className="list-disc ml-8">
          <li>Improved existing web application and mobile development</li>
          <li>Transformed hiring web app from jQuery template into Nextjs</li>
          <li>
            Transformed teaching assistant web app from asp.net into Nextjs
          </li>
          <li>Mentor teaching assistant in Research Development Phase</li>
        </ul>
        <h6 className="mt-4">Tech of Web Application:</h6>
        <ul className="list-disc ml-8">
          <li>C# Web API </li>
          <li>ReactJS </li>
          <li>Angular </li>
          <li>Laravel </li>
          <li>IIS </li>
          <li>SQL Server </li>
        </ul>

        <h6 className="mt-4">Tech of Mobile Development: </h6>
        <ul className="list-disc ml-8">
          <li>Java </li>
          <li>Flutter</li>
        </ul>
      </code>
    ),
  },
  {
    job: "Software Engineer Web Platform",
    location: "Tokopedia, Ciputra World",
    date: "2019-Now",
    desc: (
      <code className="text-[#e83e8c]">
        <h6>Software Engineer Web Platform at Tokopedia Digital: </h6>
        <p>
          I worked in the Web Platform team, planning and implementing various
          tech improvements along with the team. Some projects that I worked on:
        </p>
        <ol className="list-decimal ml-8">
          <li>
            Contribute features into our javascript framework
            <ul className="list-disc ml-8">
              <li>Launched automation report before release</li>
              <li>Launched bundle size checker in PR before merge</li>
              <li>
                Achieved seamless migration from tokopeda into tiktok ecosystem
              </li>
              <li>
                Improved the build time in development by 90% to enable better
                developer experience
              </li>
              <li>
                Standarized usage of i18n in tokopedia web platform ecosystem
              </li>
            </ul>
          </li>

          <li>Migrate web tokopedia service into tiktok ecosystem</li>
        </ol>
        <h6 className="mt-4">Tech of Web Application:</h6>
        <ul className="list-disc ml-8">
          <li>ReactJS</li>
          <li>NodeJs</li>
          <li>Docker</li>
          <li>Typescript</li>
          <li>Graphql</li>
        </ul>
      </code>
    ),
  },
].reverse();

export default function Experience() {
  return (
    <section className="px-4  container mx-auto">
      <div>
        <div id="exp">
          <h1 className="font-bold text-4xl text-slate-900 dark:text-white">
            WORK EXPERIENCES
          </h1>
        </div>

        <section className="mt-16">
          {data.map(({ date, job, location, desc }, idx) => {
            return (
              <div key={idx} className="mb-5">
                <h4 className="font-bold text-xl break-words text-slate-900 dark:text-white">
                  {job} - {location}
                </h4>
                <div className="my-3">
                  <i className="text-slate-600">{date}</i>
                </div>
                <div className="text-slate-900 dark:text-white">{desc}</div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
