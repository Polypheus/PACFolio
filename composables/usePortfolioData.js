import { reactive } from 'vue'

export const usePortfolioData = () => {
  const personalInfo = reactive({
    name: 'Paul Andrew Consunji',
    role: 'Frontend Developer',
    location: 'Metro Manila, Philippines',
    email: 'paulandrew.consunji@example.com',
    phone: '+63 912 345 6789',
    linkedin: 'linkedin.com/in/paulandrewconsunji/',
    github: 'https://github.com/paulandrewconsunji'
  })

  const education = reactive({
    degree: 'Bachelor of Science in Information Technology',
    school: 'Rizal Technological University',
    period: '2020-2024',
    distinction: 'Cum Laude',
    previousEducation: [
      {
        level: 'Senior High School',
        school: 'Rizal High School',
        period: '2019-2020'
      },
      {
        level: 'Junior High School', 
        school: 'Rizal High School',
        period: '2016-2019'
      },
      {
        level: 'Elementary',
        school: 'Bagong Ilog Elementary School',
        period: '2012-2016'
      }
    ]
  })

  const achievements = reactive([
    {
      title: 'Academic Achiever',
      description: 'Since Freshmen Year',
      type: 'academic'
    },
    {
      title: 'Dean\'s Lister',
      description: 'Since Freshmen Year',
      type: 'academic'
    },
    {
      title: 'Pasig City Scholar',
      description: 'Since First Year College',
      type: 'scholarship'
    },
    {
      title: 'Cum Laude',
      description: 'Academic Distinction',
      type: 'graduation'
    }
  ])

  const skills = reactive([
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'Vue.js/Nuxt.js', level: 88, category: 'frontend' },
    { name: 'Node.js/Express', level: 85, category: 'backend' },
    { name: 'PHP/MySQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Adobe Creative Cloud', level: 80, category: 'design' },
    { name: 'Blender (3D)', level: 70, category: 'specialized' },
    { name: 'Video Editing', level: 75, category: 'specialized' },
    { name: 'GitHub', level: 85, category: 'tools' },
    { name: 'Microsoft Office', level: 90, category: 'tools' },
    { name: 'Computer System Servicing', level: 85, category: 'technical' },
    { name: 'Networking', level: 80, category: 'technical' }
  ])

  const workExperience = reactive([
    {
      title: 'ATM Technician (Probationary)',
      company: 'One Point Contact Inc',
      description: 'Servicing and repairing ATM machines both offsite and at bank branches',
      period: '2024-2025',
      type: 'full-time'
    },
    {
      title: 'Assistant Computer Technician (OJT)',
      company: 'Rizal Technological University',
      description: 'Managed and maintained computers in Computer Laboratory',
      period: '2023',
      type: 'internship'
    },
    {
      title: 'Graphic Designer (OJT)',
      company: 'Teravision',
      description: 'Managed social media and created graphics design including posters',
      period: '2023',
      type: 'internship'
    }
  ])

  const certifications = reactive([
    {
      name: 'CSS NC II',
      issuer: 'Capellan Institute of Technology, Inc.',
      year: '2019',
      type: 'technical'
    },
    {
      name: 'CompTIA Network+',
      issuer: 'Capellan Institute of Technology, Inc.',
      year: '2019',
      type: 'technical'
    },
    {
      name: 'Google\'s Foundation of Cyber Security',
      issuer: 'Coursera',
      year: '2023',
      type: 'online'
    },
    {
      name: 'TOPCIT Examination',
      issuer: 'Rizal Technological University',
      year: '2024',
      type: 'assessment'
    }
  ])

  const projects = reactive([
    {
      id: 1,
      title: 'Polynotes',
      description: 'A modern note-taking application with real-time collaboration features',
      url: 'https://polynotes.netlify.app/',
      tags: ['React', 'TypeScript', 'Supabase'],
      featured: true
    },
    {
      id: 2,
      title: 'RTU-PDSMS',
      description: 'Personnel Data and Scheduling Management System for university administration',
      url: 'https://rtu-pdsms.onrender.com/',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio V2',
      description: 'Interactive portfolio showcasing modern web development skills',
      url: 'https://pacfolio.netlify.app/',
      tags: ['Vue.js', 'Nuxt', 'GSAP'],
      featured: true
    }
  ])

  const stats = reactive([
    { label: 'Projects', value: '50+' },
    { label: 'Years', value: '3+' },
    { label: 'Satisfaction', value: '100%' }
  ])

  return {
    personalInfo,
    education,
    achievements,
    skills,
    workExperience,
    certifications,
    projects,
    stats
  }
}