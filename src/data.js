// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: 'ISWARYA S',
  title: 'Software Developer',
  subtitle: 'Computer Science Engineering Student',
  intro: 'Motivated Computer Science and Engineering student with a foundation in programming and web technologies, eager to apply technical and creative problem-solving skills to develop effective software solutions while continuously learning and growing professionally.',
  location: 'Vellore, Tamil Nadu, India',
  email: 'iswaryaishu1808@gmail.com',
  phone: '+91 7695930155',
  phoneHref: 'tel:+917695930155',
  linkedin: 'https://www.linkedin.com/in/iswaryas0805/',
  github: 'https://github.com/Iswaryasureshbabu',
  resume: 'Iswarya_S_Resume.pdf',
  photo: 'profile.jpg', // replace public/profile.jpg to change the default photo
  tagline: 'Software development grounded in clear thinking and thoughtful design.',
}

export const nav = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

export const about = {
  text: 'I am pursuing a B.E. in Computer Science and Engineering at Kingston Engineering College, with a foundation in Java, SQL and web technologies. I enjoy breaking problems down, writing structured code, and shaping interfaces that are clear and usable. My UI/UX internship at Least Action Technologies strengthened the design perspective I bring to software development.',
  strengths: ['Java & OOP', 'Web Technologies', 'Data Structures & Algorithms', 'UI/UX Design', 'Problem Solving'],
}

export const education = [
  {
    school: 'Kingston Engineering College',
    degree: 'B.E. Computer Science and Engineering',
    years: '2023–2027',
    score: 'CGPA: 8.206/10',
    note: 'Vellore, Tamil Nadu',
  },
  {
    school: 'Ethiraj Matric Higher Secondary School',
    degree: 'Higher Secondary (12th)',
    years: '2023',
    score: 'Percentage: 79.9%',
    note: 'Higher Secondary Certificate',
  },
]

export const skills = [
  { category: 'Programming', icon: 'code', items: ['Java'] },
  { category: 'Database', icon: 'database', items: ['SQL'] },
  { category: 'Web Technologies', icon: 'layout', items: ['HTML', 'CSS'] },
  { category: 'UI/UX Design', icon: 'pen', items: ['Wireframing', 'Prototyping', 'User-Centered Design'] },
  { category: 'Engineering Practices', icon: 'chip', items: ['Object-Oriented Programming (OOP)', 'Data Structures', 'Algorithms'] },
  { category: 'Tools & Technologies', icon: 'tools', items: ['VS Code', 'Git', 'GitHub', 'Figma'] },
]

export const projects = [
  {
    id: 'mann-manam',
    title: 'Mann Manam – Tamil Nadu Traditional Recipe Book',
    category: 'Web Development',
    desc: 'A digital recipe book that preserves and showcases traditional Tamil Nadu recipes. Recipes are organised by regional cuisine, ingredients and preparation methods so users can explore and learn traditional cooking.',
    tech: ['Java', 'Spring Boot', 'Vaadin', 'HTML', 'CSS'],
    image: 'projects/mann-manam.svg',
    imageAlt: 'Mann Manam project cover',
    github: 'https://github.com/Iswaryasureshbabu/Mann_Manam',
    demo: null,
    note: 'Heritage recipe management system.',
  },
  {
    id: 'magizham',
    title: 'Magizham – Food Products Website',
    category: 'Full Stack',
    desc: 'A responsive e-commerce website for traditional food products with Tamil and English language support. Includes user-friendly navigation, organised product categories and an accessible shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    image: 'projects/magizham.svg',
    imageAlt: 'Magizham project cover',
    github: 'https://github.com/Iswaryasureshbabu/Magizham-food-products',
    demo: null,
    note: 'Bilingual storefront with a PostgreSQL-backed API.',
  },
  {
    id: 'lab-test-analyzer',
    title: 'Lab Test Analyzer – Medical Report Analysis System',
    category: 'Full Stack',
    desc: 'A web application for uploading medical laboratory reports and reviewing laboratory results in a structured, accessible format. Includes file validation and frontend–backend integration for report uploads.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: 'projects/lab-test-analyzer.png',
    imageAlt: 'Lab Test Analyzer landing page screenshot',
    github: 'https://github.com/Iswaryasureshbabu/lab-test-analyzer',
    demo: 'https://lab-test-analyzer-dusky.vercel.app',
    note: 'Educational software project — not a certified medical diagnostic tool.',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'UI/UX',
    desc: 'A responsive portfolio website that showcases projects, technical skills and internship experience. Built with a clean, professional layout, intuitive navigation and light and dark themes.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: 'projects/personal-portfolio.png',
    imageAlt: 'Personal Portfolio website screenshot',
    github: 'https://github.com/Iswaryasureshbabu/Personal-Portfolio',
    demo: null,
    note: 'Designed and built as a living showcase of my work.',
  },
]

export const projectFilters = ['All', 'Web Development', 'Full Stack', 'UI/UX']

export const experience = [
  {
    role: 'UI/UX Designer Intern',
    org: 'Least Action Technologies',
    meta: 'June 02, 2026 – July 02, 2026',
    points: [
      'Designed user-centered interfaces for web and mobile applications.',
      'Applied UI/UX principles to improve usability, navigation and visual consistency.',
    ],
  },
]

export const certs = [
  {
    org: 'NPTEL',
    name: 'Programming in Java',
    detail: 'Scored 85%',
    score: '85%',
    image: null,
    link: null,
  },
  {
    org: 'GUVI HCL',
    name: 'UI/UX Design',
    detail: 'UI/UX design certification',
    score: null,
    image: null,
    link: null,
  },
]
