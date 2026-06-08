import { experiences } from './experience';
import { projects } from './projects';
import { achievements } from './achievements';

export const resume = {
  header: {
    name: 'Vansh Jain',
    location: 'Bengaluru, India',
    email: 'vanshatarch@gmail.com',
    phone: '+91 9108218530',
    linkedin: 'https://www.linkedin.com/in/vanshjain05',
    github: 'https://github.com/nexxucc',
    portfolio: 'Portfolio',
  },
  experience: experiences,
  projects: projects.map((project) => ({
    title: project.title,
    type: project.type,
    description: project.longDescription,
    tags: project.tags,
    link: project.links.github,
  })),
  skills: {
    Languages: ['Python', 'JavaScript', 'C/C++', 'Java', 'Bash', 'SQL'],
    Web: ['React', 'Next.js', 'Node.js', 'Tailwind', 'Firebase', 'MongoDB', 'SQLite'],
    'AI/ML': ['LangGraph', 'LangChain', 'RAG', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    Tools: ['Git', 'VS Code', 'Linux', 'Power BI', 'Excel'],
    'Cloud/DevOps': ['AWS', 'Docker', 'Kubernetes', 'GitLab', 'CI/CD pipelines', 'Terraform'],
  },
  achievements,
  education: {
    institution: 'Vellore Institute of Technology',
    location: 'Tamil Nadu, India',
    degree: 'B.Tech, Computer Science and Engineering',
    date: 'August 2023 — May 2027',
    specialization: 'AI & Robotics',
  },
};