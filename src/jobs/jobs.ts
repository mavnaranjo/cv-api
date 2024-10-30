import Job from "./job";

const jobs: Job[] = [
    {
      id: 4,
      position: "Team lead",
      company: "Scalefast/ESW",
      location: "Madrid",
      dates: {
        from: new Date(2019, 10, 1),
        to: null
      },
      description:
`As a team lead in a big e-commerce platform, I've helped to manage big launch events and new stores, fixed critical vulnerabilities, and worked with huge amounts of data. I've led different teams in the company, with multiple responsabilities, including:
  • Recruiting and onboarding new team members.
  • Training and optimizing development processes to improve overall quality and efficiency.
  • Building (and maintaining!) a healthy and motivated development team, caring about everyone career path and happiness, and trying to keep balanced workloads.
  • Requirement extraction with clients and architecting software solutions.
  • Modernization and refactorization of big codebases.
  • Orchestrating and review of coding, testing, and deployments stages.
Technologies: PHP and .Net for backend, Angular for frontend, Node.js for scrapping and side projects`
    },
    {
      id: 3,
      position: "Analyst & developer",
      company: "Independent contractor",
      location: "Madrid",
      dates: {
        from: new Date(2018, 9, 1),
        to: new Date(2019, 10, 1),
      },
      description:
`As an Independent contractor, I architected and built projects for some consulting firms. The most interesting one was for a company who built photovoltaic power plants.
I had to design and build from scratch a software to manage every power plant building project. Those kind of projects are very complex, have multiple stages during years, and each of those requires to estimate, manage, validate, and execute thousands of budget items, taking into account the different currencies, laws and taxes in countries all around the world. This involved complex processes that were manual and slow. The software I built allowed to optimize those processes and orchestrate workflows so every role involved in every project knew exactly what and when to do.
Technologies: PHP and Node.js for backend, Angular for frontend`
    },
    {
      id: 2,
      position: "Technical Lead",
      company: "inMediaStudio Comunicación",
      location: "Madrid",
      dates: {
        from: new Date(2016, 3, 1),
        to: new Date(2018, 9,1),
      },
      description:
`There were two kind of projects in InmediaStudio:
  • Multiplatform software for educational publishers: we had to build custom apps to help editors make interactive multimedia books for school (from primary to higher), and custom apps for consuming those books. The consumer apps had to work in multiple devices (Android, iPad, Windows, Linux, Mac, Microsoft Surface, Chromebooks) and were meant to be used by teachers and students to study, prepare lessons, do and review homework, etc.
  • Virtual / augmented reality and interactive / inmersive experiences: those projects involved dealing with all kind of crazy gadgets, custom electronics and hardware we built ourselves, embedded and real-time programming, and complex math.
Technologies: PHP and Node.js for backend, Angular for frontend`
    },
    {
      id: 1,
      position: "Full stack engineer",
      company: "e-valua",
      location: "Madrid",
      dates: {
        from: new Date(2013, 7, 1),
        to: new Date(2015, 9, 1),
      },
      description:
`In e-valua we worked on building software to help manage reports for insurance companies. This involved several challenges:
  • Rethink business flow and processes as it was very manual, inefficient and slow.
  • Build web scrappers to automatically import and update report data for every insurance company we worked with. Every report could have big amounts of inconsistent data, documents and images, which required complex image processing and heuristics.
  • Build complex algorithms to calculate optimal workflows for every agent (they could have hundreds of open reports to manage simultaneously), to satisfy insurance companies requirements while improving agent profitability and minimizing client wait times.
  • Optimization of large queries required for our algorithms.
  • Automate payments by generating digital invoices, and financial reporting.
Technologies: PHP for backend, Angular for frontend, Python for scrapping and side projects`
    }
  ];

  export default jobs;