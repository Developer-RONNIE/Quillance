export const programsData: Record<string, { title: string; desc: string; b1: string; b2: string; icon: string }[]> = {
  "Computer Science & IT": [
    { title: "Full Stack Development", desc: "Build complete fast web apps", b1: "Certification", b2: "Expert-led", icon: "💻" },
    { title: "Web Development", desc: "Front-end and back-end logic", b1: "Certification", b2: "Expert-led", icon: "🌐" },
    { title: "Cybersecurity", desc: "Defense, fundamentals, practice", b1: "Certification", b2: "Expert-led", icon: "🛡️" },
    { title: "Gen AI & Agentic AI", desc: "Applied AI foundations", b1: "Certification", b2: "Expert-led", icon: "🧠" },
    { title: "Artificial Intelligence & Machine Learning", desc: "Models, training, evaluation", b1: "Certification", b2: "Expert-led", icon: "📉" },
    { title: "Data Science", desc: "Data to absolute insights", b1: "Certification", b2: "Expert-led", icon: "📊" },
    { title: "Data Analytics", desc: "Dashboards, metrics, decisions", b1: "Certification", b2: "Expert-led", icon: "📈" },
    { title: "Software Testing & Quality Assurance (QA)", desc: "Maintain strict code quality", b1: "Certification", b2: "Expert-led", icon: "✅" },
    { title: "Cloud Computing", desc: "AWS, Azure, global deployments", b1: "Certification", b2: "Expert-led", icon: "☁️" }
  ],
  "Mechanical Engineering": [
    { title: "AutoCAD Mechanical", desc: "Complex mechanical parts design", b1: "Certification", b2: "Expert-led", icon: "⚙️" },
    { title: "Hybrid & Electric Vehicles", desc: "Modern automotive automotive", b1: "Certification", b2: "Expert-led", icon: "🚗" }
  ],
  "Civil Engineering": [
    { title: "Construction Planning & Designing", desc: "Project structures and mechanics", b1: "Certification", b2: "Expert-led", icon: "🏗️" },
    { title: "AutoCAD Civil", desc: "2D and 3D structural drafting", b1: "Certification", b2: "Expert-led", icon: "📐" }
  ],
  "Electrical Engineering": [
    { title: "Internet of Things (IoT)", desc: "Connected smart devices", b1: "Certification", b2: "Expert-led", icon: "📡" },
    { title: "Embedded Systems", desc: "Microcontrollers and hardware", b1: "Certification", b2: "Expert-led", icon: "💡" }
  ],
  "Management & Business": [
    { title: "Digital Marketing", desc: "SEO, social media, mass ads", b1: "Certification", b2: "Expert-led", icon: "📱" },
    { title: "Finance", desc: "Accounting, analysis, reporting", b1: "Certification", b2: "Expert-led", icon: "💰" },
    { title: "Human Resource Management (HR)", desc: "Recruitment, policies, growth", b1: "Certification", b2: "Expert-led", icon: "👥" },
    { title: "Stock market and crypto currency", desc: "Trading, market trends, assets", b1: "Certification", b2: "Expert-led", icon: "💹" },
    { title: "Product Management", desc: "Strategy, lifecycle, leadership", b1: "Certification", b2: "Expert-led", icon: "📦" },
    { title: "International Business Management", desc: "Global operations strategy", b1: "Certification", b2: "Expert-led", icon: "🌍" },
    { title: "Business Analytics", desc: "Data driven business insights", b1: "Certification", b2: "Expert-led", icon: "📊" }
  ]
};

export const allCourses = Object.keys(programsData).flatMap(cat => 
  programsData[cat].map(prog => ({ ...prog, category: cat }))
);
