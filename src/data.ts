// Edit this file to update the whole site. Keep every claim something you can explain in an interview.
export const profile = {
  name: 'Pavan Kalyan Buradagunta',
  role: 'Python Full-Stack & Cloud Engineer',
  location: 'Hyderabad, India',
  headline: ['I build Python backends', 'and cloud systems that', 'stay up and stay tested.'],
  intro:
    '2025 MCA graduate focused on Django, FastAPI, PostgreSQL, React and AWS. Open to entry-level Python, Backend, Full-Stack and Cloud roles in Hyderabad, Bangalore, Chennai, remote, or abroad.',
  email: 'pavankalyanburadagunta@gmail.com',
  github: 'https://github.com/pavanklyn',
  linkedin: 'https://www.linkedin.com/in/buradagunta-pavan-kalyan',
  resume: 'https://drive.google.com/file/d/1ipl3IjrGPeVgFL75ah_DoRK_5u16v3Wf/view?usp=sharing'
}

export const layers = [
  { t: 'Client', n: 'React' },
  { t: 'API', n: 'FastAPI / Django REST' },
  { t: 'Cache', n: 'Redis' },
  { t: 'Data', n: 'PostgreSQL' },
  { t: 'Cloud', n: 'AWS, Docker, CI/CD' }
]

export const stats = [
  { v: '5+', l: 'automation modules built' },
  { v: '35%', l: 'faster on 10+ PostgreSQL queries' },
  { v: '25+', l: 'bugs fixed through pytest regression tests' },
  { v: '20%', l: 'lower storage cost with S3 lifecycle policies' }
]

export const experience = [
  {
    role: 'Cloud Engineering Trainee',
    org: 'AWS Academy Cloud Internship Program',
    when: 'Jul 2024 to Sep 2024',
    points: [
      'Deployed web applications on EC2 and VPC with IAM roles, keeping access secure and uptime above 99%.',
      'Built a Lambda function for fraud detection and monitored 10+ CloudWatch metrics.',
      'Configured S3 lifecycle policies that cut storage cost by about 20%.'
    ]
  },
  {
    role: 'Python Developer Intern',
    org: 'Innovates Technology Solutions',
    when: 'Feb 2024 to Apr 2024',
    points: [
      'Built 5+ Python automation modules that removed about 40% of manual workflow steps.',
      'Improved 10+ PostgreSQL queries by 35% and fixed 25+ bugs through pytest regression testing.',
      'Built data-parsing and visualization tools for reporting.'
    ]
  }
]

export const flagship = {
  name: 'Order & Inventory Management Platform',
  blurb:
    'A cloud-ready backend for placing orders without overselling stock. Orders run in database transactions with row-level locking, so two buyers can never claim the same last item.',
  points: [
    'JWT authentication, pagination, rate limiting and structured logging',
    'Redis caching for hot inventory reads',
    'Pytest coverage of auth, inventory and order workflows',
    'Docker setup and GitHub Actions CI/CD'
  ],
  stack: ['FastAPI', 'PostgreSQL', 'Redis', 'React + Vite', 'Docker', 'GitHub Actions', 'AWS'],
  link: 'https://github.com/pavanklyn/Order-Inventory-Platform'
}

export const projects = [
  {
    name: 'Task Manager API',
    text: 'REST API with JWT auth, Swagger docs, 95% pytest coverage and a CI pipeline on every push.',
    stack: 'Django, DRF, PostgreSQL, Docker, GitHub Actions',
    link: 'https://github.com/pavanklyn/taskmanager-api'
  },
  {
    name: 'Real-Time Surge Pricing Engine',
    text: 'Predicts demand-based price multipliers with a RandomForest model behind a Django REST API. Deployed on Render.',
    stack: 'Django REST, scikit-learn, Streamlit',
    link: 'https://github.com/pavanklyn'
  },
  {
    name: 'GitHub Activity Bot',
    text: 'Labels new issues and opens dependency-update pull requests on my own repositories.',
    stack: 'Python, GitHub API, GitHub Actions',
    link: 'https://github.com/pavanklyn'
  },
  {
    name: 'EAR Drowsiness Detection',
    text: 'Detects eye closure from a webcam using the eye aspect ratio. I moved from dlib to MediaPipe after dlib kept failing to install on Windows.',
    stack: 'Python, MediaPipe, OpenCV',
    link: 'https://github.com/pavanklyn'
  }
]

export const skills = [
  { g: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'JWT'] },
  { g: 'Data', items: ['PostgreSQL', 'SQL', 'Redis'] },
  { g: 'Cloud and DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'IAM', 'CloudWatch', 'VPC', 'Docker', 'GitHub Actions'] },
  { g: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { g: 'Testing', items: ['pytest', 'Regression testing'] }
]

export const education = [
  { t: 'MCA, MIC College of Technology', d: '2023 to 2025 | CGPA 8.00' },
  { t: 'B.Sc. Computer Science, Krishna University', d: '2018 to 2021 | 70%' }
]

export const credentials = [
  'AWS Academy Cloud Foundations',
  'AWS Academy: Getting Started with GenAI',
  'Tata GenAI-Powered Data Analytics Job Simulation (Forage)'
]
