import type { Cv } from '@/common/cv.types'

export const CV: Cv = {
  name: 'Joseph Clegg',
  title: 'Senior Software Engineer',
  location: 'London, UK',
  email: 'jo_clegg@hotmail.com',
  phone: '+44 752 676 7568',
  linkedin: 'https://www.linkedin.com/in/josephmarkclegg/',
  github: 'https://github.com/joclegg',
  summary:
    'Senior full-stack engineer in front office trading technology, expert in TypeScript, React and .NET. I build the platforms the whole firm books and hedges on, and I build with AI agents every day.',
  experience: [
    {
      company: 'Capula Investment Management',
      location: 'London, UK',
      roles: [
        { title: 'Senior Software Engineer', start: '2025-01' },
        { title: 'Full Stack Developer', start: '2023-05', end: '2024-12' },
      ],
      description:
        'Front office technology engineer and a go-to technical adviser across the firm, well beyond my own stack, with a broad map of how its systems connect. Technical owner of the equity hedger rewrite, with a leading technical role on trade capture, the firm’s main trade booking platform.',
      highlights: [],
      projects: [
        {
          name: 'Trade capture',
          description:
            'The firm’s main trade booking platform, booking into FIS Front Arena and used by every trader and by the operations, financing, risk and treasury teams. I took a leading technical role on the front office technology team’s biggest project.',
          highlights: [
            'Let the firm decommission its two biggest legacy systems: a blotter spreadsheet with 15 years of development behind it, backed by an MS SQL database that ran many booking and operations workflows, and an on-prem WinForms and .NET service for booking and viewing trades and positions.',
            'Built the bulk booking screen, a complex Excel-like grid with extensive logic for booking all manner of tickets and enriching them with data from other systems.',
            'Built the tickets for complex products: MBS, TRS, IAM, caps and floors, variance swaps and FX.',
            'Built the position pivot page, a fully customisable pivot grid of live positions, and a full reconciliation system that proved it against the system it replaced.',
            'Optimised the trade blotter, which builds itself dynamically from Front Arena’s output.',
            'Built a trade viewer that queries the trade query system and opens straight from the other screens.',
            'Integrated trade capture with each user’s local Bloomberg Terminal.',
            'Streamed live updates to every screen over WebSockets, with the screens sharing data and opening linked windows through interop.io desktop.',
            'Ran the services on EKS with PostgreSQL, using Redis for distributed caching.',
          ],
        },
        {
          name: 'Equity hedger',
          description:
            'Owned the technical delivery of the rewrite of the platform volatility traders use to hedge positions across parts of the firm with futures and stocks.',
          highlights: [
            'Built its own server-side order management system, integrated with the SpiderRock SRSE OMS, that executes orders and books contra trades into internal systems.',
            'Integrated many disparate data sources into a single platform, streaming live data to the UI with SignalR.',
            'Built the backend in .NET 9 with Minimal APIs, Dapper and Refit on Aurora RDS PostgreSQL, and the UI in React 18.',
            'Deployed the services and the NGINX-hosted UI to EKS with Jenkins and Argo, with the UI running in the browser or on interop.io desktop.',
          ],
        },
        {
          name: 'AI and agentic engineering',
          description:
            'Use Pi, Claude Code and Codex every day, and help shape how the firm builds with AI.',
          highlights: [
            'Advise the applied AI team daily on the architecture and UX/UI of their front office AI assistant.',
            'Build and maintain a library of agent skills for Pi, Claude Code and Codex.',
            'Building, as a side project, an internal collaborative AI coding platform where a team works on a feature together with a Pi coding agent in a shared chat, integrated with issue tracking and source control.',
            'It runs each agent in its own Kubernetes workload, provisioned on demand with the tooling it needs, and takes an agreed brief through an automated plan, build, verify and review loop to a pull request.',
            'Built a visual, guided code review experience for agent-generated changes.',
            'Built model routing to switch models between build stages, evals that compare model combinations for each stage on the same piece of work, and cost tracking for every agent turn.',
            'Run Pi through the firm’s AI gateway to Amazon Bedrock, so we can evaluate the full range of models, not just OpenAI and Anthropic.',
          ],
        },
        {
          name: 'Developer platform and testing',
          description:
            'Built the tooling that keeps a large, fast-moving codebase shippable.',
          highlights: [
            'Run around 4,000 end-to-end Playwright tests against trade capture’s UI in about 8 minutes on distributed infrastructure, considerably cheaper than any Playwright SaaS offering.',
            'Build internal tooling for the firm’s developers.',
          ],
        },
        {
          name: 'Legacy estate',
          description:
            'Maintain and progressively decommission a large estate of legacy .NET Framework services with older React and Vue front ends, on on-premises Windows and Linux servers built in TeamCity.',
          highlights: [
            'Fixed a number of significant bugs in a legacy trading app being revamped rather than rewritten, and added VWAP analytics and improved bulk repo contra booking.',
            'Removed non-compliant use of a third-party market data service from a legacy service.',
          ],
        },
      ],
      tags: [
        'TypeScript',
        'React',
        '.NET 9',
        'Minimal APIs',
        'Dapper',
        'Refit',
        'PostgreSQL',
        'Aurora RDS',
        'Redis',
        'EKS',
        'Jenkins',
        'Argo',
        'NGINX',
        'SignalR',
        'WebSockets',
        'interop.io',
        'Playwright',
        'FIS Front Arena',
        'Bloomberg Terminal',
        'SpiderRock',
        'AI agents',
        'Amazon Bedrock',
        '.NET Framework',
        'Vue',
        'TeamCity',
      ],
    },
    {
      company: 'Eurotrader (Mulix)',
      location: 'London, UK',
      roles: [
        {
          title: 'Senior Software Developer',
          start: '2023-02',
          end: '2023-05',
        },
      ],
      description:
        'Led the build of greenfield platforms that replace outsourced onboarding, CRM, back-office reporting and trading systems. Set the engineering best practices, designed the platform architecture and defined the development and deployment processes. The role ended when the business closed its UK operations.',
      highlights: [
        'Built rigorous, repeatable infrastructure deployments with Terraform.',
        'Deployed hexagonal-architecture .NET microservices on AKS using Helm, managed by Flux CD.',
        'Built GitHub Actions CI/CD with strong unit test coverage, component tests and post-deploy functional tests.',
      ],
      projects: [],
      tags: [
        '.NET',
        'AKS',
        'Terraform',
        'Helm',
        'Flux CD',
        'GitHub Actions',
        'Hexagonal architecture',
      ],
    },
    {
      company: 'Axi',
      url: 'https://www.axi.com/',
      location: 'London, UK',
      roles: [
        { title: 'Senior Software Developer', start: '2022', end: '2023-02' },
        { title: 'Software Developer', start: '2021-05', end: '2022' },
      ],
      description:
        'Led the build of two greenfield APIs, customer onboarding and customer data, and shaped the architecture of the payments and trading platforms.',
      highlights: [],
      projects: [
        {
          name: 'Customer onboarding API',
          description:
            'Led an event-driven API that automated manual onboarding, on the critical path to launching a new trading app. Shipped the MVP in 3 months, with targeted improvements released daily thanks to investment in CI/CD and real-time analytics.',
          highlights: [
            'Stateless .NET 6 API on AKS with Helm and Flux CD, storing events as an append-only log in Cosmos DB and using event sourcing and the change feed to drive asynchronous consumers.',
            'Designed a JSON Schema and JSON Forms KYC validation framework, so the API defined form content while the React Native trading app and React affiliate site controlled the look and feel.',
            'Built 15 worker services on the Cosmos feed calling Salesforce, Cellxpert, Jumio and other APIs for validation, account creation and credit rebalancing.',
            'Secured services with OAuth2 for machine-to-machine calls and single sign-on with the authorization code flow.',
            'Independent Azure DevOps pipelines, with unit, component, post-deploy functional and BrowserStack regression tests.',
            'Monitoring with Prometheus, Promitor and Log Analytics Exporter, alerting to Slack and email via Alertmanager, plus Segment and Amplitude analytics for the onboarding funnel.',
          ],
        },
        {
          name: 'Customer data API',
          description:
            'Led an API normalising customer data from a legacy SQL database, Salesforce and a new Azure SQL database. Shipped the MVP in 2 months.',
          highlights: [
            'Integrated all three sources: Entity Framework Core for the legacy database, the Salesforce REST API, and Dapper over stored procedures in our Azure SQL database.',
            'Removed Salesforce rate limits by streaming Change Data Capture events over gRPC into Cosmos DB, mapping them to our model and publishing to Event Hubs so teams could own their state.',
            'Built a single writer service to sync changes into our database, with the API as the only reader.',
            'Added reconciliation in the API and as a daily cron job, alerting to Slack and email.',
          ],
        },
        {
          name: 'Cross-team architecture',
          description: 'Designed platform-wide improvements with other teams.',
          highlights: [
            'Co-designed the move of payments from a coupled, synchronous distributed monolith to independently deployable, event-driven microservices, giving an extensible framework for new payment providers.',
            'Planned moving the trading platform core from a custom actor model to Akka.NET, using the strangler fig pattern to split out off-hot-path services and Kafka for low-latency streaming.',
          ],
        },
      ],
      tags: [
        '.NET 6',
        'AKS',
        'Cosmos DB',
        'Event sourcing',
        'Event Hubs',
        'Salesforce',
        'OAuth2',
        'Azure DevOps',
        'Prometheus',
      ],
    },
    {
      company: 'Genius Sports Group',
      url: 'https://geniussports.com/',
      location: 'London, UK',
      roles: [
        { title: 'Software Engineer', start: '2020', end: '2021-04' },
        { title: 'Junior Software Engineer', start: '2019-04', end: '2020' },
      ],
      description:
        'Led projects and shipped features on a real-time, high-performance sportsbook platform supplying data feeds and odds to bookmakers.',
      highlights: [],
      projects: [
        {
          name: 'Automatic booking service',
          description:
            'Led the rebuild of the fixture auto-booking service, an economically key part of the business that could no longer handle its load.',
          highlights: [
            'Built a stateless, rules-engine .NET 5 service on EKS, scheduling jobs with Quartz.NET and storing schedules in RDS Aurora MySQL.',
            'Rebuilt the Autobooking page in React with a backend-for-frontend mapping the domain model to the UI.',
          ],
        },
        {
          name: 'Sportsbook platform',
          description:
            'Scaled and decoupled the stateful actor-model platform that recalculated markets, odds and pricing from in-play feeds and bookmaker and trader changes.',
          highlights: [
            'Moved football modelling to an asynchronous background thread, supporting 3× the booked football fixtures on the same clusters.',
            'Removed sync-over-async blocking found with dotTrace, doubling the fixtures the platform could support.',
            'Used the strangler fig pattern to split sport pricing into independently releasable .NET Core services, and ported all shared libraries to .NET Core.',
          ],
        },
      ],
      tags: [
        '.NET 5',
        '.NET Core',
        'AWS',
        'EKS',
        'Quartz.NET',
        'React',
        'Actor model',
      ],
    },
    {
      company: 'AXA Direct and Partnerships',
      url: 'https://www.axa.co.uk/',
      location: 'Cobham, UK',
      roles: [
        { title: 'eRate Analyst', start: '2016', end: '2019-04' },
        { title: 'Graduate eRate Analyst', start: '2015-08', end: '2016' },
      ],
      description:
        'Built rating models in the eRate pricing software in a DSDM Agile team, shipping weekly rate changes and major project releases on a production platform serving millions of customers. Moved on to building tools and automation in C#.',
      highlights: [
        'Delivered all eRate work for a new home insurance broker pricing platform, a 9-month project that set the industry standard.',
        'Introduced automated testing with Selenium and C#, cutting time spent testing by around 40%.',
        'Led small teams that changed working practices, and mentored teammates.',
        'Wrote SQL for MI reporting and testing, and partnered with DBAs, .NET developers, testers and architects to improve the platform.',
      ],
      projects: [],
      tags: ['C#', 'SQL', 'Selenium', 'eRate', 'DSDM Agile'],
    },
  ],
  education: [
    {
      title: 'MNatSci Natural Sciences, 2:1',
      institution: 'University of Leeds',
      url: 'https://www.leeds.ac.uk/',
      start: '2011',
      end: '2015',
      detail:
        'Specialising in mathematics and physics, focusing on condensed matter physics and fluid dynamics. Co-founded the Joint Honours Society, now the Natural Sciences Society.',
    },
    {
      title:
        'A Levels: Maths (A*), Further Maths (A), Physics (A*), Chemistry (A*)',
      institution: 'Bullers Wood School',
      start: '2009',
      end: '2011',
    },
    {
      title: '9 GCSEs, A* to B, including Maths A* and Science A*',
      institution: 'Dulwich College',
      url: 'https://www.dulwich.org.uk/',
      start: '2000',
      end: '2009',
    },
  ],
  skills: [
    'TypeScript',
    'React',
    'C#',
    '.NET',
    'Playwright',
    'Kubernetes',
    'Real-time messaging',
    'RabbitMQ',
    'Azure Service Bus',
    'Terraform',
    'Azure DevOps Pipelines',
    'Event-driven architecture',
    'Event sourcing',
    'TDD',
    'AWS',
    'Azure',
    'Microservices',
    'AI-assisted development: Claude Code, Codex and Pi',
  ],
  interests: [
    'Film',
    'Music',
    'Video games',
    'Food',
    'Comedy',
    'Puzzles and Rubik’s cubes',
    'Quizzes',
  ],
}
