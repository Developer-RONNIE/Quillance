export interface Module {
  id: number;
  title: string;
  topics: string[];
}

export const curriculumData: Record<string, Module[]> = {
  "full-stack-development": [
    {
      id: 1,
      title: "Foundations of Web Development",
      topics: [
        "Introduction to Modern Web Development Ecosystem",
        "Front-End vs Back-End Architecture",
        "Setting Up Development Environment & Tools",
        "Fundamentals of HTML5, CSS3, and JavaScript"
      ]
    },
    {
      id: 2,
      title: "Front-End Engineering",
      topics: [
        "Semantic HTML5 & Advanced Elements",
        "CSS3: Layouts, Flexbox, Grid & Responsive Design",
        "Form Handling & User Input Validation",
        "JavaScript Fundamentals & ES6+ Features",
        "DOM Manipulation & Event Handling",
        "Asynchronous JavaScript (Promises, Async/Await)",
        "Introduction to React.js",
        "Component-Based Architecture & State Management",
        "Routing with React Router (SPA Development)",
        "Advanced State Management with Redux"
      ]
    },
    {
      id: 3,
      title: "Back-End Development",
      topics: [
        "Introduction to Node.js Runtime",
        "Server-Side Development with Express.js",
        "Designing RESTful APIs",
        "Middleware, Routing & Error Handling",
        "Database Fundamentals: SQL vs NoSQL",
        "MongoDB with Mongoose (NoSQL)",
        "PostgreSQL (SQL Databases)",
        "CRUD Operations & Data Modeling"
      ]
    },
    {
      id: 4,
      title: "Full Stack Integration & DevOps",
      topics: [
        "Connecting Front-End with Back-End Services",
        "API Integration & Data Fetching Techniques",
        "Authentication & Authorization (JWT-Based Security)",
        "State Management (Redux & Context API)",
        "Introduction to DevOps Practices",
        "Deployment on Netlify, Vercel & Heroku",
        "Containerization with Docker",
        "CI/CD Pipelines using GitHub Actions"
      ]
    },
    {
      id: 5,
      title: "Advanced Concepts & Best Practices",
      topics: [
        "Advanced JavaScript (Closures, Scope, Execution Context)",
        "Functional Programming Principles",
        "Design Patterns in JavaScript Applications",
        "Web Performance Optimization Techniques",
        "Caching Strategies & Code Splitting",
        "Unit Testing with Jest",
        "End-to-End Testing with Cypress",
        "Web Security & Best Practices"
      ]
    },
    {
      id: 6,
      title: "Capstone Project Development",
      topics: [
        "End-to-End Full Stack Application Development",
        "Project Planning & System Design",
        "Agile Methodologies (Scrum / Kanban)",
        "Version Control & Collaboration via GitHub",
        "Technical Documentation & Final Presentation"
      ]
    },
    {
      id: 7,
      title: "Industry & Career Preparation",
      topics: [
        "Portfolio Development & Personal Branding",
        "GitHub Project Optimization & Showcasing",
        "Resume & LinkedIn Profile Enhancement",
        "Technical Interview Preparation",
        "Problem Solving & Coding Challenges"
      ]
    }
  ],
  "web-development": [
    {
      id: 1,
      title: "Foundations of Web Development",
      topics: [
        "Introduction to Modern Web Development Ecosystem",
        "Understanding Front-End vs Back-End Architecture",
        "Setting Up Development Environment & Tools",
        "Fundamentals of HTML5, CSS3, and JavaScript"
      ]
    },
    {
      id: 2,
      title: "HTML & CSS Development",
      topics: [
        "Semantic HTML5 & Best Practices",
        "CSS3 Fundamentals (Selectors, Box Model, Positioning)",
        "Layout Techniques: Flexbox & CSS Grid",
        "Responsive Web Design (Mobile-First Approach)",
        "Forms, Input Fields & Validation"
      ]
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      topics: [
        "JavaScript Fundamentals & ES6+ Features",
        "Variables, Functions, Arrays & Objects",
        "DOM Manipulation & Event Handling",
        "Browser APIs & Local Storage",
        "Asynchronous JavaScript (Promises, Async/Await)"
      ]
    },
    {
      id: 4,
      title: "Modern Front-End Development",
      topics: [
        "Introduction to React.js",
        "Component-Based Architecture",
        "Props, State & Lifecycle Methods",
        "Routing with React Router (SPA Development)",
        "API Integration & Data Fetching (Fetch/Axios)"
      ]
    },
    {
      id: 5,
      title: "UI/UX & Performance Optimization",
      topics: [
        "UI/UX Principles for Web Design",
        "Accessibility (WCAG Basics)",
        "Web Performance Optimization Techniques",
        "Image Optimization & Lazy Loading",
        "Code Optimization & Best Practices"
      ]
    },
    {
      id: 6,
      title: "Deployment & Version Control",
      topics: [
        "Version Control with Git & GitHub",
        "Branching & Collaboration Workflows",
        "Deployment on Netlify & Vercel",
        "Domain & Hosting Basics",
        "Debugging & Troubleshooting Techniques"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Building Real-World Web Projects",
        "Portfolio Development & Personal Branding",
        "GitHub Project Showcasing",
        "Resume & LinkedIn Profile Optimization",
        "Front-End Interview Preparation"
      ]
    }
  ],
  "cybersecurity": [
    {
      id: 1,
      title: "Foundations of Cybersecurity",
      topics: [
        "Introduction to Cybersecurity Landscape",
        "Types of Cyber Threats & Attack Vectors",
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Networking Fundamentals (TCP/IP, OSI Model)",
        "Setting Up a Security Lab (Kali Linux, Virtual Machines)"
      ]
    },
    {
      id: 2,
      title: "Network Security",
      topics: [
        "Network Protocols & Architecture",
        "Firewalls, IDS & IPS Systems",
        "VPNs & Secure Communication",
        "Network Scanning with Nmap",
        "Packet Analysis using Wireshark",
        "Common Network Attacks (MITM, DDoS, Spoofing)"
      ]
    },
    {
      id: 3,
      title: "System & Application Security",
      topics: [
        "Operating System Security (Windows & Linux)",
        "User Authentication & Access Control Mechanisms",
        "Vulnerability Assessment & Scanning",
        "Web Application Security (OWASP Top 10)",
        "Secure Coding Principles",
        "Cryptography Fundamentals (Encryption, Hashing, SSL/TLS)"
      ]
    },
    {
      id: 4,
      title: "Ethical Hacking & Penetration Testing",
      topics: [
        "Ethical Hacking Methodologies & Phases",
        "Footprinting & Reconnaissance Techniques",
        "Scanning & Enumeration",
        "Exploitation Techniques & Tools",
        "Post-Exploitation & Privilege Escalation",
        "Tools: Metasploit, Burp Suite, Nikto"
      ]
    },
    {
      id: 5,
      title: "Cloud & Advanced Security",
      topics: [
        "Cloud Security Fundamentals (AWS/Azure Basics)",
        "Identity & Access Management (IAM)",
        "Introduction to DevSecOps",
        "Malware Analysis Basics",
        "Digital Forensics Fundamentals",
        "Incident Response & Risk Management"
      ]
    },
    {
      id: 6,
      title: "Capstone Project Development",
      topics: [
        "Real-World Security Assessment Project",
        "Vulnerability Scanning & Reporting",
        "Penetration Testing Simulation",
        "Security Audit & Risk Analysis",
        "Documentation & Final Presentation"
      ]
    },
    {
      id: 7,
      title: "Industry & Career Preparation",
      topics: [
        "Cybersecurity Portfolio Building",
        "Hands-on Labs & CTF Challenges",
        "Resume & LinkedIn Profile Optimization",
        "Certification Guidance (CEH, Security+, etc.)",
        "Technical Interview Preparation"
      ]
    }
  ],
  "data-science": [
    {
      id: 1,
      title: "Foundations of Data Science",
      topics: [
        "Introduction to Data Science & Analytics Ecosystem",
        "Role of a Data Scientist in Industry",
        "Python for Data Science (NumPy, Pandas, Matplotlib)",
        "Data Collection & Data Types",
        "Exploratory Data Analysis (EDA)"
      ]
    },
    {
      id: 2,
      title: "Data Wrangling & Preprocessing",
      topics: [
        "Data Cleaning & Handling Missing Values",
        "Data Transformation & Normalization",
        "Feature Engineering Techniques",
        "Working with Structured & Unstructured Data",
        "Data Visualization (Matplotlib, Seaborn)"
      ]
    },
    {
      id: 3,
      title: "Statistics & Probability",
      topics: [
        "Descriptive Statistics (Mean, Median, Variance)",
        "Probability Fundamentals",
        "Distributions (Normal, Binomial, Poisson)",
        "Hypothesis Testing",
        "A/B Testing Concepts"
      ]
    },
    {
      id: 4,
      title: "Machine Learning for Data Science",
      topics: [
        "Supervised Learning (Regression, Classification)",
        "Unsupervised Learning (Clustering, PCA)",
        "Model Training & Evaluation Metrics",
        "Overfitting & Underfitting",
        "Model Selection Techniques"
      ]
    },
    {
      id: 5,
      title: "Advanced Data Science & Tools",
      topics: [
        "Time Series Analysis",
        "Natural Language Processing (NLP) Basics",
        "Recommendation Systems",
        "Big Data Overview (Hadoop, Spark Basics)",
        "Data Science Project Lifecycle"
      ]
    },
    {
      id: 6,
      title: "Data Visualization & Business Intelligence",
      topics: [
        "Advanced Data Visualization Techniques",
        "Dashboard Creation (Power BI / Tableau)",
        "Storytelling with Data",
        "KPI Tracking & Business Insights",
        "Data-Driven Decision Making"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Data Science Project",
        "Problem Framing to Insight Generation",
        "Portfolio Development & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "Data Science Interview Preparation"
      ]
    }
  ],
  "data-analytics": [
    {
      id: 1,
      title: "Foundations of Data Analytics",
      topics: [
        "Introduction to Data Analytics & Business Intelligence",
        "Role of a Data Analyst in Industry",
        "Types of Data (Structured, Unstructured, Semi-Structured)",
        "Data Lifecycle & Analytics Workflow",
        "Introduction to Excel for Data Analysis"
      ]
    },
    {
      id: 2,
      title: "Data Handling & Preparation",
      topics: [
        "Data Cleaning & Preprocessing Techniques",
        "Handling Missing & Inconsistent Data",
        "Data Transformation & Normalization",
        "Introduction to SQL for Data Analysis",
        "Writing Queries (SELECT, JOIN, GROUP BY, Aggregations)"
      ]
    },
    {
      id: 3,
      title: "Data Analysis & Exploration",
      topics: [
        "Exploratory Data Analysis (EDA)",
        "Descriptive Statistics (Mean, Median, Variance)",
        "Identifying Trends & Patterns",
        "Data Visualization using Excel & Python",
        "Working with Real-World Datasets"
      ]
    },
    {
      id: 4,
      title: "Advanced Analytics Techniques",
      topics: [
        "Hypothesis Testing & A/B Testing",
        "Correlation & Regression Analysis",
        "Forecasting Basics",
        "Introduction to Python for Analytics (Pandas, NumPy)",
        "Automation of Data Analysis Tasks"
      ]
    },
    {
      id: 5,
      title: "Data Visualization & BI Tools",
      topics: [
        "Dashboard Creation using Power BI / Tableau",
        "Data Storytelling & Presentation Techniques",
        "KPI Tracking & Business Metrics",
        "Interactive Reports & Visualization Best Practices"
      ]
    },
    {
      id: 6,
      title: "Business Applications & Case Studies",
      topics: [
        "Sales & Marketing Analytics",
        "Financial Data Analysis",
        "Customer Segmentation & Behavior Analysis",
        "Operational & Performance Analytics",
        "Real-World Case Studies"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Data Analytics Project",
        "Data Cleaning → Analysis → Visualization Workflow",
        "Portfolio Development & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "Data Analyst Interview Preparation"
      ]
    }
  ],
  "software-testing-quality-assurance-qa-": [
    {
      id: 1,
      title: "Foundations of Software Testing",
      topics: [
        "Introduction to Software Testing & QA",
        "SDLC vs STLC (Software vs Testing Lifecycle)",
        "Types of Testing (Manual, Automation, Functional, Non-Functional)",
        "Testing Principles & Best Practices",
        "Introduction to QA Tools & Environment Setup"
      ]
    },
    {
      id: 2,
      title: "Manual Testing & Test Design",
      topics: [
        "Requirement Analysis & Test Planning",
        "Writing Test Cases, Test Scenarios & Test Data",
        "Black Box & White Box Testing Techniques",
        "Functional & Regression Testing",
        "Bug Life Cycle & Defect Tracking (JIRA)"
      ]
    },
    {
      id: 3,
      title: "Web & API Testing",
      topics: [
        "Web Application Testing Concepts",
        "Cross-Browser & Cross-Platform Testing",
        "API Testing using Postman",
        "HTTP Methods, Status Codes & REST APIs",
        "Introduction to Automation Testing"
      ]
    },
    {
      id: 4,
      title: "Test Automation",
      topics: [
        "Automation Testing Fundamentals",
        "Selenium WebDriver with Java/Python",
        "Test Script Development & Execution",
        "Data-Driven & Keyword-Driven Frameworks",
        "Introduction to Cypress / Playwright"
      ]
    },
    {
      id: 5,
      title: "Performance & Security Testing",
      topics: [
        "Performance Testing Concepts (Load, Stress, Scalability)",
        "Tools: JMeter Basics",
        "Security Testing Fundamentals",
        "Vulnerability Testing Basics",
        "Introduction to OWASP Top 10"
      ]
    },
    {
      id: 6,
      title: "CI/CD & DevOps in Testing",
      topics: [
        "Introduction to DevOps & Agile Testing",
        "Continuous Integration & Continuous Testing",
        "Jenkins Basics for Automation",
        "Version Control with Git & GitHub",
        "Test Automation in CI/CD Pipelines"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Testing Project (Manual + Automation)",
        "Test Plan, Execution & Reporting",
        "Real-Time Bug Tracking & Documentation",
        "Portfolio Development & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "QA Interview Preparation"
      ]
    }
  ],
  "cloud-computing": [
    {
      id: 1,
      title: "Foundations of Cloud Computing",
      topics: [
        "Introduction to Cloud Computing & Service Models (IaaS, PaaS, SaaS)",
        "Cloud Deployment Models (Public, Private, Hybrid)",
        "Overview of Leading Cloud Providers (AWS, Azure, GCP)",
        "Virtualization & Cloud Architecture Basics",
        "Setting Up Cloud Accounts & Environment"
      ]
    },
    {
      id: 2,
      title: "Core Cloud Services",
      topics: [
        "Compute Services (EC2, Virtual Machines)",
        "Storage Services (S3, Blob Storage, Cloud Storage)",
        "Networking Fundamentals (VPC, Subnets, Load Balancers)",
        "Identity & Access Management (IAM)",
        "Monitoring & Logging Basics"
      ]
    },
    {
      id: 3,
      title: "Cloud Security & Compliance",
      topics: [
        "Cloud Security Fundamentals",
        "Identity & Access Control (IAM Policies & Roles)",
        "Data Encryption (At Rest & In Transit)",
        "Network Security (Firewalls, Security Groups)",
        "Compliance & Governance Basics"
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud Automation",
      topics: [
        "Introduction to DevOps in Cloud",
        "Infrastructure as Code (Terraform Basics)",
        "CI/CD Pipelines (GitHub Actions / Jenkins)",
        "Containerization with Docker",
        "Orchestration Basics (Kubernetes Introduction)"
      ]
    },
    {
      id: 5,
      title: "Serverless & Advanced Cloud Services",
      topics: [
        "Serverless Computing (AWS Lambda / Azure Functions)",
        "API Gateway & Microservices Architecture",
        "Event-Driven Architecture",
        "Managed Databases (RDS, NoSQL Services)",
        "Cloud Cost Optimization Strategies"
      ]
    },
    {
      id: 6,
      title: "Deployment & Real-World Applications",
      topics: [
        "Deploying Web Applications on Cloud",
        "Hosting Static & Dynamic Websites",
        "Scaling Applications (Auto Scaling)",
        "Backup & Disaster Recovery",
        "Performance Optimization & Monitoring"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Cloud Deployment Project",
        "Architecture Design & Implementation",
        "CI/CD Pipeline Setup & Automation",
        "Portfolio Development & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "Cloud Certification Guidance (AWS, Azure, GCP)"
      ]
    }
  ],
  "gen-ai-agentic-ai": [
    {
      id: 1,
      title: "Foundations of AI, Generative AI & Agentic Systems",
      topics: [
        "Introduction to Artificial Intelligence & Machine Learning",
        "What is Generative AI (LLMs, diffusion models, multimodal AI)",
        "What is Agentic AI (autonomous agents, reasoning systems)",
        "Overview of Large Language Models (LLMs)",
        "Python for AI (NumPy, Pandas, basic scripting)",
        "Prompt Engineering Fundamentals"
      ]
    },
    {
      id: 2,
      title: "Working with Generative AI Models",
      topics: [
        "Understanding LLM architectures (Transformers basics)",
        "Text generation, summarization, and Q&A systems",
        "Image generation basics (diffusion models overview)",
        "Fine-tuning vs Prompt Engineering",
        "Using APIs (OpenAI / open-source models)",
        "Tokenization & context handling"
      ]
    },
    {
      id: 3,
      title: "Building AI Applications with LLMs",
      topics: [
        "Building chatbots and assistants",
        "Retrieval-Augmented Generation (RAG)",
        "Working with embeddings & vector databases",
        "Document-based Q&A systems",
        "Memory handling in AI systems",
        "Multi-modal AI basics (text + image)"
      ]
    },
    {
      id: 4,
      title: "Agentic AI & Autonomous Systems",
      topics: [
        "Introduction to AI Agents & Agent Architectures",
        "Task planning, reasoning & tool usage",
        "Building autonomous workflows",
        "Multi-agent systems & collaboration",
        "Frameworks (LangChain, AutoGen basics)",
        "Function calling & tool integration"
      ]
    },
    {
      id: 5,
      title: "Optimization, Safety & Evaluation",
      topics: [
        "Prompt optimization techniques",
        "Evaluation of LLM outputs",
        "Bias, hallucination & mitigation strategies",
        "Guardrails & AI safety",
        "Cost optimization (tokens, APIs)",
        "Performance monitoring"
      ]
    },
    {
      id: 6,
      title: "Deployment & Real-World Applications",
      topics: [
        "Deploying AI apps (Streamlit / Flask)",
        "API integration & backend workflows",
        "Cloud deployment basics (AWS / GCP overview)",
        "Introduction to LLMOps / MLOps",
        "Scaling AI applications",
        "Real-world use cases (chatbots, automation tools)"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Build an end-to-end Agentic AI application",
        "Real-world problem solving with GenAI",
        "Portfolio development & project showcase",
        "Resume & LinkedIn optimization",
        "Mock interviews & career guidance in AI"
      ]
    }
  ],
  "artificial-intelligence-machine-learning": [
    {
      id: 1,
      title: "Foundations of Artificial Intelligence & Machine Learning",
      topics: [
        "Introduction to Artificial Intelligence & Machine Learning",
        "Types of AI (Narrow AI, General AI, Generative AI)",
        "Types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning)",
        "Python for AIML (NumPy, Pandas, Matplotlib)",
        "Data Collection & Preprocessing Basics",
        "Exploratory Data Analysis (EDA)"
      ]
    },
    {
      id: 2,
      title: "Data Preprocessing & Feature Engineering",
      topics: [
        "Data Cleaning & Handling Missing Values",
        "Feature Selection & Feature Engineering Techniques",
        "Encoding Categorical Variables",
        "Data Normalization & Feature Scaling",
        "Train/Test/Validation Data Splitting"
      ]
    },
    {
      id: 3,
      title: "Supervised Learning Algorithms",
      topics: [
        "Linear Regression & Logistic Regression",
        "Decision Trees & Random Forest",
        "Support Vector Machines (SVM)",
        "K-Nearest Neighbors (KNN)",
        "Model Training, Evaluation & Performance Metrics"
      ]
    },
    {
      id: 4,
      title: "Unsupervised Learning & AI Techniques",
      topics: [
        "Clustering (K-Means, Hierarchical Clustering)",
        "Dimensionality Reduction (PCA)",
        "Anomaly Detection Techniques",
        "Introduction to Neural Networks",
        "Association Rule Learning Basics"
      ]
    },
    {
      id: 5,
      title: "Model Optimization & Advanced AI Concepts",
      topics: [
        "Hyperparameter Tuning (Grid Search, Random Search)",
        "Cross-Validation Techniques",
        "Bias-Variance Tradeoff",
        "Ensemble Learning (Boosting, Bagging)",
        "Introduction to Deep Learning Concepts"
      ]
    },
    {
      id: 6,
      title: "Model Deployment & AI Applications",
      topics: [
        "Saving & Loading Models (Pickle, Joblib)",
        "Building AI/ML Web Apps (Flask / Streamlit)",
        "API Integration for AI Models",
        "Introduction to MLOps",
        "Cloud Deployment Basics (AWS / GCP Overview)"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End AIML Project Development",
        "Problem Definition to Model Deployment",
        "Portfolio Building & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "AIML Interview Preparation"
      ]
    }
  ],
  "internet-of-things-iot-": [
    {
      id: 1,
      title: "Foundations of IoT",
      topics: [
        "Introduction to Internet of Things (IoT) Ecosystem",
        "IoT Architecture & Components (Sensors, Actuators, Gateways)",
        "Communication Protocols (HTTP, MQTT, CoAP)",
        "Embedded Systems Basics",
        "Setting Up Development Environment (Arduino / Raspberry Pi)"
      ]
    },
    {
      id: 2,
      title: "Electronics & Hardware Fundamentals",
      topics: [
        "Basics of Electronics (Voltage, Current, Circuits)",
        "Working with Sensors & Actuators",
        "Microcontrollers (Arduino) & Multi-processors (Raspberry Pi)",
        "Interfacing Components (LEDs, Relays, Motors)",
        "Breadboarding & Circuit Design"
      ]
    },
    {
      id: 3,
      title: "Programming for IoT",
      topics: [
        "Programming with Arduino (C/C++)",
        "Python for Raspberry Pi",
        "Reading Sensor Data & Device Control",
        "Serial Communication & Debugging",
        "Real-Time Data Processing"
      ]
    },
    {
      id: 4,
      title: "Connectivity & Networking",
      topics: [
        "Wireless Communication (Wi-Fi, Bluetooth, Zigbee)",
        "IoT Protocols (MQTT, HTTP APIs)",
        "Cloud Integration for IoT Devices",
        "Data Transmission & Device Management",
        "Edge vs Cloud Computing in IoT"
      ]
    },
    {
      id: 5,
      title: "IoT Cloud & Data Handling",
      topics: [
        "IoT Platforms (AWS IoT, Azure IoT Hub Basics)",
        "Data Storage & Visualization",
        "Real-Time Dashboards",
        "Data Analytics for IoT",
        "Security in IoT Systems"
      ]
    },
    {
      id: 6,
      title: "Advanced IoT Applications",
      topics: [
        "Smart Home Automation Systems",
        "Industrial IoT (IIoT) Concepts",
        "Wearable Devices & Healthcare IoT",
        "Smart Cities & Connected Systems",
        "AI Integration with IoT (AIoT Basics)"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End IoT Project Development",
        "Device Design → Connectivity → Cloud Integration",
        "Real-World Problem Solving",
        "Portfolio Development & Project Showcasing",
        "Resume & LinkedIn Optimization",
        "IoT Career & Interview Preparation"
      ]
    }
  ],
  "embedded-systems": [
    {
      id: 1,
      title: "Foundations of Embedded Systems",
      topics: [
        "Introduction to Embedded Systems & Applications",
        "Microcontrollers vs Microprocessors",
        "Embedded System Architecture & Components",
        "Development Environment Setup (Arduino IDE / Keil)",
        "Basics of C Programming for Embedded Systems"
      ]
    },
    {
      id: 2,
      title: "Electronics & Circuit Fundamentals",
      topics: [
        "Basics of Electronics (Voltage, Current, Resistance)",
        "Digital Electronics (Logic Gates, Flip-Flops)",
        "Reading Circuit Diagrams & Schematics",
        "Working with Breadboards & Basic Components",
        "Power Supply & Circuit Protection"
      ]
    },
    {
      id: 3,
      title: "Microcontroller Programming",
      topics: [
        "Programming with Arduino (C/C++)",
        "GPIO (Input/Output) Control",
        "Timers, Counters & Interrupts",
        "Serial Communication (UART, SPI, I2C)",
        "Debuging & Code Optimization"
      ]
    },
    {
      id: 4,
      title: "Interfacing & Peripheral Devices",
      topics: [
        "Interfacing Sensors (Temperature, Motion, Light)",
        "Actuators (Motors, Relays, Displays)",
        "LCD / OLED Display Integration",
        "Keypad & Button Interfaces",
        "ADC & DAC Concepts"
      ]
    },
    {
      id: 5,
      title: "Real-Time Systems & RTOS",
      topics: [
        "Introduction to Real-Time Embedded Systems",
        "Scheduling & Task Management",
        "Basics of RTOS (FreeRTOS)",
        "Memory Management in Embedded Systems",
        "Power Optimization Techniques"
      ]
    },
    {
      id: 6,
      title: "Communication & IoT Integration",
      topics: [
        "Wireless Communication (Wi-Fi, Bluetooth)",
        "Embedded Networking Basics",
        "IoT Integration with Microcontrollers",
        "Cloud Connectivity Basics",
        "Data Logging & Remote Monitoring"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Embedded System Project",
        "System Design & Implementation",
        "Hardware-Software Integration",
        "Testing & Debugging",
        "Documentation & Presentation",
        "Resume & Interview Preparation"
      ]
    }
  ],
  "hybrid-electric-vehicles": [
    {
      id: 1,
      title: "Introduction to Hybrid & Electric Vehicles",
      topics: [
        "Overview of Electric Vehicles (EVs) & Hybrid Electric Vehicles (HEVs)",
        "EV Industry Landscape & Future Trends",
        "Types of Electric Vehicles (BEV, HEV, PHEV, FCEV)",
        "Basic Automotive Engineering Concepts",
        "EV Architecture & System Overview"
      ]
    },
    {
      id: 2,
      title: "Electrical & Automotive Fundamentals",
      topics: [
        "Basics of Electrical Engineering for EVs",
        "DC & AC Machines Fundamentals",
        "Power Electronics Overview",
        "Batteries & Energy Storage Systems",
        "Vehicle Dynamics Basics"
      ]
    },
    {
      id: 3,
      title: "EV Powertrain Systems",
      topics: [
        "Electric Motor Types (BLDC, Induction, PMSM)",
        "Motor Controllers & Inverters",
        "Transmission Systems in EVs",
        "Regenerative Braking Systems",
        "Drivetrain Architecture"
      ]
    },
    {
      id: 4,
      title: "Battery Technology & Management Systems",
      topics: [
        "Lithium-Ion Battery Technology",
        "Battery Pack Design & Configuration",
        "Battery Management System (BMS)",
        "Charging Systems & Fast Charging Technologies",
        "Thermal Management in Batteries"
      ]
    },
    {
      id: 5,
      title: "Control Systems & Electronics",
      topics: [
        "Embedded Systems in EVs",
        "Sensors & Actuators in Vehicles",
        "Vehicle Control Units (VCU)",
        "CAN Communication Protocol",
        "Basic MATLAB/Simulink for EV Systems"
      ]
    },
    {
      id: 6,
      title: "Charging Infrastructure & Smart Mobility",
      topics: [
        "EV Charging Stations (AC & DC Charging)",
        "Charging Standards (CCS, CHAdeMO, Type 2)",
        "Smart Grid Integration",
        "IoT in EV Charging Systems",
        "Energy Management Systems"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "EV System Design Project (Simulation-Based)",
        "Battery Pack or Motor Control Model",
        "Real-World Case Study Analysis",
        "Portfolio Development & Documentation",
        "Resume & Interview Preparation for EV Industry"
      ]
    }
  ],
  "autocad-mechanical": [
    {
      id: 1,
      title: "Introduction to AutoCAD Mechanical",
      topics: [
        "Overview of CAD in Mechanical Engineering",
        "Interface of AutoCAD & Workspace Customization",
        "Basic Drawing Tools & Commands",
        "Units, Limits & Mechanical Drawing Standards",
        "File Management & Template Setup"
      ]
    },
    {
      id: 2,
      title: "2D Drafting for Mechanical Design",
      topics: [
        "Line, Circle, Arc, Rectangle, Polygon Tools",
        "Object Selection & Modification Tools",
        "Layers, Linetypes & Properties",
        "Dimensioning & Tolerancing Basics",
        "Precision Drawing using Coordinates & Object Snaps"
      ]
    },
    {
      id: 3,
      title: "Mechanical Components Drawing",
      topics: [
        "Orthographic Projections & Views",
        "Sectional Views & Detailed Drawings",
        "Thread Representation & Fasteners",
        "Shas, Bearings & Gears Basics",
        "Assembly Drawing Fundamentals"
      ]
    },
    {
      id: 4,
      title: "Advanced AutoCAD Mechanical Tools",
      topics: [
        "Advanced Editing & Parametric Constraints",
        "Blocks, Dynamic Blocks & Attributes",
        "Hatching & Surface Finishing Symbols",
        "External References (XREF)",
        "Layouts, Plotting & Printing"
      ]
    },
    {
      id: 5,
      title: "Machine Design & Industrial Drafting",
      topics: [
        "Introduction to Machine Components Design",
        "Limits, Fits & Tolerances",
        "Sheet Metal Basics",
        "Welding Symbols & Standards",
        "Bill of Materials (BOM) & Parts List"
      ]
    },
    {
      id: 6,
      title: "3D Modeling & Visualization",
      topics: [
        "Introduction to 3D Modeling",
        "Solid, Surface & Mesh Modeling",
        "Creating Mechanical Parts in 3D",
        "Assembly Modeling Basics",
        "Rendering & Visualization Techniques"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Complete Mechanical Design Project (Part + Assembly)",
        "Industry Drawing Standards Practice",
        "Portfolio Development & Project Showcase",
        "Resume Building for Mechanical Roles",
        "Interview Preparation for CAD/Design Engineer Roles"
      ]
    }
  ],
  "autocad-civil": [
    {
      id: 1,
      title: "Introduction to AutoCAD Civil",
      topics: [
        "Overview of Computer-Aided Design (CAD) in Civil Engineering",
        "Interface of AutoCAD Civil & Workspace Setup",
        "Basic Drawing Tools & Commands",
        "Units, Scale & Drawing Standards",
        "File Management & Project Setup"
      ]
    },
    {
      id: 2,
      title: "2D Drafting Fundamentals",
      topics: [
        "Line, Circle, Arc, Polyline Tools",
        "Object Selection & Modification Tools",
        "Layers, Blocks & Properties Management",
        "Dimensioning & Annotation Techniques",
        "Precision Drawing & Coordinate Systems"
      ]
    },
    {
      id: 3,
      title: "Civil Engineering Drawings",
      topics: [
        "Site Plans & Layout Drawings",
        "Floor Plans & Elevation Drawings",
        "Sectional Views & Cross Sections",
        "Road Layout & Alignment Drawings",
        "Basic Structural Drawings"
      ]
    },
    {
      id: 4,
      title: "Advanced AutoCAD Tools",
      topics: [
        "Advanced Editing & Drawing Techniques",
        "Hatching, Patterns & Text Styling",
        "Dynamic Blocks & Attributes",
        "External References (XREF)",
        "Plotting & Printing Drawings"
      ]
    },
    {
      id: 5,
      title: "Surveying & Land Development",
      topics: [
        "Introduction to Survey Data & Mapping",
        "Contour Mapping Basics",
        "Road Design & Profile Drawing",
        "Land Development Planning",
        "Quantity Estimation Basics"
      ]
    },
    {
      id: 6,
      title: "3D Modeling & Visualization",
      topics: [
        "Introduction to 3D Modeling in AutoCAD",
        "Creating 3D Objects & Surfaces",
        "Rendering Techniques",
        "Visualization of Civil Structures",
        "Basic Introduction to Civil 3D"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Complete Civil Design Project (Site Plan to Execution Drawing)",
        "Real-World Drawing Standards Practice",
        "Portfolio Development & Project Showcase",
        "Resume & Career Guidance",
        "Interview Preparation for Civil Drafting Roles"
      ]
    }
  ],
  "construction-planning-designing": [
    {
      id: 1,
      title: "Foundations of Construction Planning",
      topics: [
        "Introduction to Construction Management & Project Lifecycle",
        "Roles & Responsibilities in Construction Projects",
        "Types of Construction Projects (Residential, Commercial, Infrastructure)",
        "Basics of Construction Materials & Methods",
        "Overview of Construction Drawings & Documentation"
      ]
    },
    {
      id: 2,
      title: "Engineering Drawing & Design Fundamentals",
      topics: [
        "Introduction to Technical Drawing & Drafting",
        "Reading Architectural & Structural Drawings",
        "Basics of AutoCAD for Construction Design",
        "2D Drafting & Layout Planning",
        "Introduction to Building Codes & Standards"
      ]
    },
    {
      id: 3,
      title: "Project Planning & Scheduling",
      topics: [
        "Construction Project Planning Process",
        "Work Breakdown Structure (WBS)",
        "Scheduling Techniques (Gantt Charts, CPM, PERT)",
        "Resource Planning & Allocation",
        "Project Cost Estimation Basics"
      ]
    },
    {
      id: 4,
      title: "Construction Design & Software Tools",
      topics: [
        "Advanced AutoCAD for Construction",
        "Introduction to Building Information Modeling (BIM)",
        "Tools: Revit / SketchUp Basics",
        "Structural & Architectural Design Coordination",
        "Quantity Takeoff & BOQ (Bill of Quantities)"
      ]
    },
    {
      id: 5,
      title: "Site Management & Execution",
      topics: [
        "Site Layout Planning & Management",
        "Construction Safety & Regulations",
        "Quality Control & Assurance in Construction",
        "Material Management & Procurement",
        "Monitoring & Reporting Project Progress"
      ]
    },
    {
      id: 6,
      title: "Advanced Construction Practices",
      topics: [
        "Sustainable Construction & Green Building Concepts",
        "Smart Construction Technologies",
        "Risk Management in Construction Projects",
        "Contract Management & Legal Aspects",
        "Introduction to Infrastructure Planning"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Construction Planning Project",
        "Design & Planning of a Building Project",
        "Scheduling, Costing & Execution Plan",
        "Documentation & Presentation",
        "Portfolio Development & Project Showcasing",
        "Resume & Interview Preparation"
      ]
    }
  ],
  "digital-marketing": [
    {
      id: 1,
      title: "Foundations of Digital Marketing",
      topics: [
        "Introduction to Digital Marketing Ecosystem",
        "Traditional Marketing vs Digital Marketing",
        "Customer Journey & Marketing Funnel (AIDA Model)",
        "Overview of Digital Channels",
        "Website Basics & Online Presence"
      ]
    },
    {
      id: 2,
      title: "Search Engine Optimization (SEO)",
      topics: [
        "Introduction to SEO & Search Engines",
        "On-Page SEO (Keywords, Meta Tags, Content Optimization)",
        "Off-Page SEO (Backlinks, Authority Building)",
        "Technical SEO (Site Speed, Mobile Optimization)",
        "Keyword Research & Competitor Analysis"
      ]
    },
    {
      id: 3,
      title: "Search Engine Marketing (SEM)",
      topics: [
        "Introduction to Google Ads",
        "Keyword Bidding & Campaign Setup",
        "Search, Display & Video Ads",
        "Conversion Tracking & Optimization",
        "Budgeting & ROI Optimization"
      ]
    },
    {
      id: 4,
      title: "Social Media Marketing (SMM)",
      topics: [
        "Social Media Platforms Overview (Instagram, Facebook, LinkedIn, YouTube)",
        "Content Strategy & Planning",
        "Paid Social Media Ads",
        "Influencer Marketing Basics",
        "Engagement & Community Building"
      ]
    },
    {
      id: 5,
      title: "Content Marketing & Branding",
      topics: [
        "Content Strategy Development",
        "Blog Writing & Copywriting Basics",
        "Video Marketing & Short-Form Content (Reels/Shorts)",
        "Brand Positioning & Storytelling",
        "Content Distribution Strategies"
      ]
    },
    {
      id: 6,
      title: "Analytics & Marketing Tools",
      topics: [
        "Google Analytics & Traffic Analysis",
        "Social Media Insights & Metrics",
        "Conversion Rate Optimization (CRO)",
        "Marketing Automation Tools (Email Marketing)",
        "Reporting & Performance Tracking"
      ]
    },
    {
      id: 7,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Digital Marketing Campaign",
        "SEO + Ads + Social Media Integration Project",
        "Portfolio Development & Case Studies",
        "Resume & LinkedIn Optimization",
        "Digital Marketing Interview Preparation"
      ]
    }
  ],
  "stock-market-and-crypto-currency": [
    {
      id: 1,
      title: "Foundations of Financial Markets",
      topics: [
        "Introduction to Stock Markets & Crypto Ecosystem",
        "How Financial Markets Work (Primary & Secondary Markets)",
        "Role of Investors, Traders & Institutions",
        "Basics of Risk, Return & Portfolio Concepts",
        "Overview of Blockchain Technology"
      ]
    },
    {
      id: 2,
      title: "Stock Market Basics",
      topics: [
        "Introduction to Equity, Bonds & Mutual Funds",
        "Stock Exchanges (NSE, BSE, Global Markets)",
        "Market Indices (Nifty, Sensex, S&P 500)",
        "Order Types (Market, Limit, Stop Loss)",
        "Fundamental vs Technical Analysis"
      ]
    },
    {
      id: 3,
      title: "Technical Analysis",
      topics: [
        "Candlestick Patterns & Chart Reading",
        "Support & Resistance Levels",
        "Trend Analysis & Indicators (RSI, MACD, Moving Averages)",
        "Volume Analysis",
        "Trading Strategies Basics"
      ]
    },
    {
      id: 4,
      title: "Fundamental Analysis",
      topics: [
        "Company Financial Statements Analysis",
        "Earnings, Revenue & Growth Metrics",
        "Ratio Analysis (PE, PB, ROE, ROCE)",
        "Industry & Economic Analysis",
        "Valuation Methods"
      ]
    },
    {
      id: 5,
      title: "Cryptocurrency & Blockchain",
      topics: [
        "Introduction to Cryptocurrency & Digital Assets",
        "Blockchain Technology Fundamentals",
        "Bitcoin, Ethereum & Altcoins Overview",
        "Wallets (Hot & Cold Wallets)",
        "Crypto Exchanges & Trading Basics"
      ]
    },
    {
      id: 6,
      title: "Advanced Trading & Risk Management",
      topics: [
        "Portfolio Management Strategies",
        "Risk Management Techniques",
        "Derivatives (Futures & Options Basics)",
        "Trading Psychology & Discipline",
        "Scam Awareness & Security in Crypto"
      ]
    },
    {
      id: 7,
      title: "Tools & Market Platforms",
      topics: [
        "Trading Platforms (Zerodha, Upstox, Binance Basics)",
        "Charting Tools (TradingView)",
        "Market News & Research Tools",
        "Portfolio Tracking Applications",
        "Excel for Trading Analysis"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Stock Market Analysis Project",
        "Crypto Portfolio Simulation",
        "Trading Strategy Development",
        "Portfolio Performance Report",
        "Resume & Career Guidance in Finance"
      ]
    }
  ],
  "business-analytics": [
    {
      id: 1,
      title: "Foundations of Business Analytics",
      topics: [
        "Introduction to Business Analytics & Data-Driven Decision Making",
        "Role of a Business Analyst in Modern Organizations",
        "Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)",
        "Business Intelligence Overview",
        "Analytics Lifecycle & Problem-Solving Framework"
      ]
    },
    {
      id: 2,
      title: "Data Handling & Excel Analytics",
      topics: [
        "Data Collection, Cleaning & Preparation",
        "Advanced Excel for Analytics (Formulas, Pivot Tables, Charts)",
        "Data Transformation Techniques",
        "Working with Business Datasets",
        "Reporting & Dashboard Basics in Excel"
      ]
    },
    {
      id: 3,
      title: "SQL for Business Analytics",
      topics: [
        "Introduction to Databases & SQL",
        "Writing Queries (SELECT, JOIN, GROUP BY)",
        "Data Extraction & Filtering Techniques",
        "Aggregations & Reporting Queries",
        "Business Use Cases with SQL"
      ]
    },
    {
      id: 4,
      title: "Statistical Analysis for Business",
      topics: [
        "Basics of Statistics (Mean, Median, Variance)",
        "Probability Concepts",
        "Correlation & Regression Analysis",
        "Hypothesis Testing & A/B Testing",
        "Business Forecasting Basics"
      ]
    },
    {
      id: 5,
      title: "Data Visualization & BI Tools",
      topics: [
        "Data Visualization Principles",
        "Power BI / Tableau Basics",
        "Dashboard Creation & Storytelling",
        "KPI Tracking & Business Metrics",
        "Interactive Reporting Techniques"
      ]
    },
    {
      id: 6,
      title: "Python for Business Analytics",
      topics: [
        "Introduction to Python for Analytics",
        "Pandas & NumPy for Data Analysis",
        "Data Visualization using Matplotlib & Seaborn",
        "Automation of Business Reports",
        "Basic Predictive Analytics"
      ]
    },
    {
      id: 7,
      title: "Business Applications & Case Studies",
      topics: [
        "Sales & Revenue Analytics",
        "Customer Behavior & Segmentation Analysis",
        "Marketing & Campaign Performance Analysis",
        "Financial & Operational Analytics",
        "Real-World Business Case Studies"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Business Analytics Project",
        "Data Cleaning → Analysis → Dashboard Creation",
        "Business Insight Reporting",
        "Portfolio Development",
        "Resume & Interview Preparation"
      ]
    }
  ],
  "finance": [
    {
      id: 1,
      title: "Foundations of Finance & Accounting",
      topics: [
        "Introduction to Finance & Accounting Principles",
        "Types of Accounting (Financial, Managerial, Cost Accounting)",
        "Accounting Concepts, Principles & Standards",
        "Basics of Financial Statements",
        "Introduction to Business Environment"
      ]
    },
    {
      id: 2,
      title: "Financial Accounting",
      topics: [
        "Journal Entries & Ledger Preparation",
        "Trial Balance & Adjustments",
        "Profit & Loss Statement",
        "Balance Sheet Preparation",
        "Cash Flow Statement Basics"
      ]
    },
    {
      id: 3,
      title: "Cost & Management Accounting",
      topics: [
        "Cost Concepts & Classification",
        "Cost Sheet Preparation",
        "Break-Even Analysis",
        "Budgeting & Forecasting",
        "Standard Costing & Variance Analysis"
      ]
    },
    {
      id: 4,
      title: "Financial Management",
      topics: [
        "Time Value of Money",
        "Capital Budgeting Techniques",
        "Working Capital Management",
        "Risk & Return Analysis",
        "Sources of Finance"
      ]
    },
    {
      id: 5,
      title: "Taxation & Compliance",
      topics: [
        "Basics of Direct & Indirect Taxes",
        "GST Fundamentals",
        "Tax Filing Procedures",
        "Corporate Compliance Basics",
        "Introduction to Auditing"
      ]
    },
    {
      id: 6,
      title: "Financial Markets & Investments",
      topics: [
        "Introduction to Stock Markets",
        "Equity, Bonds & Mutual Funds",
        "Portfolio Management Basics",
        "Risk Management in Investments",
        "Financial Market Instruments"
      ]
    },
    {
      id: 7,
      title: "Tools & Industry Applications",
      topics: [
        "Tally ERP / Tally Prime Basics",
        "Excel for Finance & Reporting",
        "Financial Modeling Basics",
        "MIS Reporting & Dashboards",
        "Real-World Case Studies"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Financial Statement Analysis Project",
        "Budgeting & Investment Case Study",
        "Portfolio Development & Reporting",
        "Resume & LinkedIn Optimization",
        "Finance Interview Preparation"
      ]
    }
  ],
  "product-management": [
    {
      id: 1,
      title: "Foundations of Product Management",
      topics: [
        "Introduction to Product Management & Role of a PM",
        "Product Lifecycle & Development Process",
        "Types of Products (B2B, B2C, SaaS, Platforms)",
        "Understanding User Needs & Market Problems",
        "Basics of Agile & Scrum Methodology"
      ]
    },
    {
      id: 2,
      title: "Product Discovery & Research",
      topics: [
        "User Research Methods (Interviews, Surveys, Personas)",
        "Market & Competitor Analysis",
        "Problem Definition & Opportunity Mapping",
        "Product-Market Fit (PMF) Concepts",
        "Writing Problem Statements"
      ]
    },
    {
      id: 3,
      title: "Product Design & Strategy",
      topics: [
        "Product Vision & Strategy Development",
        "Feature Prioritization Frameworks (RICE, MoSCoW)",
        "Wireframing & Prototyping Basics (Figma)",
        "User Journey Mapping",
        "Information Architecture"
      ]
    },
    {
      id: 4,
      title: "Product Development & Execution",
      topics: [
        "Writing Product Requirements Document (PRD)",
        "Working with Engineering & Design Teams",
        "Agile Development Process (Scrum/Kanban)",
        "Sprint Planning & Backlog Management",
        "Stakeholder Communication"
      ]
    },
    {
      id: 5,
      title: "Product Analytics & Growth",
      topics: [
        "Key Product Metrics (DAU, MAU, Retention, Churn)",
        "A/B Testing & Experimentation",
        "Funnel Analysis & Conversion Optimization",
        "Data-Driven Decision Making",
        "Introduction to Product Analytics Tools"
      ]
    },
    {
      id: 6,
      title: "Product Launch & Marketing",
      topics: [
        "Go-To-Market (GTM) Strategy",
        "Product Launch Planning",
        "Positioning & Messaging",
        "Growth Hacking Basics",
        "User Onboarding Strategies"
      ]
    },
    {
      id: 7,
      title: "Tools & Industry Stack",
      topics: [
        "Jira / Trello for Product Management",
        "Figma for Design Collaboration",
        "Notion for Documentation",
        "Google Analytics / Mixpanel Basics",
        "Roadmap Tools (Aha!, Productboard Basics)"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End Product Case Study",
        "Building a Product from Idea to Launch",
        "PRD + Wireframe + Strategy Document",
        "Portfolio Development",
        "Resume & PM Interview Preparation"
      ]
    }
  ],
  "international-business-management": [
    {
      id: 1,
      title: "Foundations of International Business",
      topics: [
        "Introduction to International Business Management",
        "Scope & Importance of Global Business",
        "Globalization & Its Impact on Business",
        "Types of International Business Operations",
        "Global Business Environment Overview"
      ]
    },
    {
      id: 2,
      title: "Global Trade & Economics",
      topics: [
        "International Trade Theories",
        "Trade Policies & Agreements (WTO, IMF, World Bank)",
        "Foreign Direct Investment (FDI)",
        "Balance of Payments & Exchange Rates",
        "Global Economic Systems"
      ]
    },
    {
      id: 3,
      title: "International Marketing",
      topics: [
        "Global Market Research & Entry Strategies",
        "Product Standardization vs Localization",
        "International Branding & Positioning",
        "Pricing Strategies in Global Markets",
        "Global Distribution Channels"
      ]
    },
    {
      id: 4,
      title: "International Finance",
      topics: [
        "Foreign Exchange Markets",
        "Currency Risk Management",
        "International Financial Management",
        "Cross-Border Investment Decisions",
        "Global Banking Systems"
      ]
    },
    {
      id: 5,
      title: "Cross-Cultural Management",
      topics: [
        "Cultural Differences in Business Practices",
        "International Negotiation Strategies",
        "Global Leadership Styles",
        "Managing Multicultural Teams",
        "Business Ethics in Global Context"
      ]
    },
    {
      id: 6,
      title: "Global Operations & Supply Chain",
      topics: [
        "International Supply Chain Management",
        "Logistics & Distribution in Global Markets",
        "Outsourcing & Offshoring Strategies",
        "Risk Management in Global Operations",
        "Trade Documentation & Compliance"
      ]
    },
    {
      id: 7,
      title: "Digital Global Business",
      topics: [
        "E-Commerce in International Markets",
        "Digital Transformation in Global Business",
        "Cross-Border Digital Marketing",
        "Global SaaS & Platform Businesses",
        "Role of Technology in International Expansion"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "Global Market Entry Strategy Project",
        "International Business Case Study",
        "Business Expansion Plan for Foreign Market",
        "Portfolio Development",
        "Resume & Interview Preparation"
      ]
    }
  ],
  "human-resource-management-hr-": [
    {
      id: 1,
      title: "Foundations of Human Resource Management",
      topics: [
        "Introduction to HRM & Organizational Structure",
        "Role of HR in Modern Organizations",
        "HR Functions & Responsibilities",
        "HR Policies & Compliance Basics",
        "Overview of Employee Lifecycle"
      ]
    },
    {
      id: 2,
      title: "Recruitment & Talent Acquisition",
      topics: [
        "Workforce Planning & Job Analysis",
        "Job Description & Job Specification Creation",
        "Sourcing Strategies (Job Portals, Social Media, Referrals)",
        "Interviewing Techniques & Selection Process",
        "Onboarding & Induction Process"
      ]
    },
    {
      id: 3,
      title: "Employee Relations & Engagement",
      topics: [
        "Employee Engagement Strategies",
        "Workplace Communication & Conflict Management",
        "Grievance Handling & Disciplinary Procedures",
        "Performance Management Systems",
        "Employee Retention Strategies"
      ]
    },
    {
      id: 4,
      title: "Training & Development",
      topics: [
        "Training Need Analysis (TNA)",
        "Learning & Development Programs",
        "Skill Enhancement & Upskilling Strategies",
        "Leadership Development Programs",
        "Evaluation of Training Effectiveness"
      ]
    },
    {
      id: 5,
      title: "Compensation & Benefits Management",
      topics: [
        "Salary Structure Design",
        "Payroll Management Basics",
        "Incentives & Rewards Systems",
        "Employee Benefits & Welfare Programs",
        "Compensation Benchmarking"
      ]
    },
    {
      id: 6,
      title: "HR Analytics & HR Technology",
      topics: [
        "Introduction to HR Analytics",
        "HR Metrics & KPI Tracking",
        "HRIS (Human Resource Information Systems)",
        "Data-Driven Decision Making in HR",
        "Automation in HR Processes"
      ]
    },
    {
      id: 7,
      title: "Labor Laws & Compliance",
      topics: [
        "Introduction to Labor Laws & Regulations",
        "Industrial Relations & Workplace Laws",
        "Employee Rights & Employer Responsibilities",
        "Statutory Compliance (PF, ESI, etc.)",
        "Ethics in HR Management"
      ]
    },
    {
      id: 8,
      title: "Capstone Project & Career Preparation",
      topics: [
        "End-to-End HR Case Study Project",
        "Recruitment Simulation Project",
        "HR Policy Design Project",
        "Resume & LinkedIn Optimization",
        "HR Interview Preparation"
      ]
    }
  ]
};
