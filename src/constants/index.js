export const myProjects = [
  {
    id: 1,
    title: "REALM",
    description:
      "AI Powered Virtual Storytelling Platform.",
    subDescription: [
      "Built an AI storytelling platform where kids become protagonists using their photos or image sequences.",
      "Implemented two interactive modes– image-based story generation and face-swapped visual storytelling– using Gemini Pro, Together AI, and InsightFace.",
      "Built a modular Flask backend for captioning, prompt handling, story creation, and face swapping."
    ],
    image: "/assets/projects/REALM.png",
    tags: [
      { name: "LLaMA2", path: "/assets/logos/llama.svg" },
      { name: "Gemini", path: "/assets/logos/gemini.svg" },
      { name: "Insightface", path: "/assets/logos/insightface.jpg" },
      { name: "Flask", path: "/assets/logos/flask.svg" },
      { name: "Python", path: "/assets/logos/python.svg" },
    ],
    href: "https://github.com/katakampranav/REALM"
  },
  {
    id: 2,
    title: "PhisX - Chrome Extension",
    description:
      "A real-time phishing URL detection tool to prevent online fraud.",
    subDescription: [
      "Implements machine learning for real-time phishing URL classification.",
      "Built as a Chrome Extension that scans URLs before redirection.",
      "Classifies phishing attempts based on features like length, subdomains, and redirects.",
      "Backend served with Flask, model trained using scikit-learn.",
    ],
    image: "/assets/projects/phisx.png",
    tags: [
      { name: "AWS", path: "/assets/logos/aws.svg" },
      { name: "Docker", path: "/assets/logos/docker.svg" },
      { name: "Flask", path: "/assets/logos/flask.svg" },
      { name: "Scikit-learn", path: "/assets/logos/scikit-learn.svg" },
      { name: "Python", path: "/assets/logos/python.svg" },
    ],
    href: "https://chromewebstore.google.com/search/PhisX"
  },
  {
    id: 3,
    title: "COBA",
    description:
      "Comprehensive Omni-Functional Bot for Assistance",
    subDescription: [
      "AI-powered assistant for document Q&A, summarization, sentiment analysis, and NER using Hugging Face models.",
      "Built with a Next.js + TypeScript frontend and Flask Python backend for robust performance.",
      "Integrated APIs like Gemini, Together AI, and FAISS for efficient data retrieval and AI capabilities.",
      "Deployed on Vercel and Render with a scalable, responsive architecture for seamless user experience.",
    ],
    image: "/assets/projects/COBA.png",
    tags: [
      { name: "Gemini", path: "/assets/logos/gemini.svg" },
      { name: "LLama", path: "/assets/logos/llama.svg" },
      { name: "FAISS", path: "/assets/logos/vectordatabase.png" },
      { name: "Python", path: "/assets/logos/python.svg" },
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "Flask", path: "/assets/logos/flask.svg" },
    ],
    href: "https://coba-azure-tau.vercel.app/"
  },
  {
    id: 4,
    title: "Material Recommendation System",
    description:
      "A smart ML-based recommendation system for construction materials.",
    subDescription: [
      "Trained a Classifiction model with a custom dataset of construction materials.",
      "Predicts suitable materials based on project input features and historical data.",
      "Implements supervised learning and ensemble models to improve accuracy.",
      "Used in the civil engineering domain for material optimization.",
      "Used Mlflow for model tracking and deployment.",
    ],
    image: "/assets/projects/MRS.png",
    tags: [
      { name: "MLFLow", path: "/assets/logos/MLflow.png" },
      { name: "Pandas", path: "/assets/logos/pandas.svg" },
      { name: "Scikit-learn", path: "/assets/logos/scikit-learn.svg" },
      { name: "Python", path: "/assets/logos/python.svg" },
    ],
    href: "https://ai-based-material-recommendation-system.vercel.app/"
  },
  {
    id: 5,
    title: "Comment Toxicity Model",
    description:
      "A deep learning-based sentiment and toxicity detector for online comments.",
    subDescription: [
      "Built an LSTM-based deep learning model to classify toxic comments across six categories.",
      "Trained on the Kaggle Toxic Comment dataset using TensorFlow, achieving around 70% accuracy.",
      "Deployed with Gradio for real-time comment toxicity detection and classification.",
      "Handled data preprocessing, model evaluation, and UI deployment for user interaction.",
    ],

    image: "/assets/projects/CTM.png",
    tags: [
      { name: "LSTM", path: "/assets/logos/lstm.png" },
      { name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { name: "NLP", path: "/assets/logos/nlp.svg" },
      { name: "Gradio", path: "/assets/logos/gradio.png" },
      { name: "Python", path: "/assets/logos/python.svg" },
    ],
    href: "https://github.com/katakampranav/Comment-Toxicity-Model"
  },
  {
    id: 6,
    title: "Interview Support System",
    description:
      "A Hybrid AI for Professional Interview Preparation (Q&A)",
    subDescription: [
      "Built an intelligent interview preparation tool combining a fine-tuned Falcon-7B model with Google Gemini for polished response generation.",
      "Curated a custom Q&A dataset and performed QLoRA using PEFT and 4-bit quantization via BitsAndBytes.",
      "Designed a two-step pipeline: Falcon-7B generates structured guidance → Gemini 2.0 crafts full interview answers.",
    ],
    image: "/assets/projects/ISS.png",
    tags: [
      { name: "HuggingFace", path: "/assets/logos/huggingface.svg" },
      { name: "Gemini", path: "/assets/logos/gemini.svg" },
      { name: "Google Colab", path: "/assets/logos/colab.svg" },
      { name: "Gradio", path: "/assets/logos/gradio.png" },
      { name: "Python", path: "/assets/logos/python.svg" },
    ],
    href: "https://huggingface.co/Pranav06/falcon-7b-qlora-interview_qa-support-bot"
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/8074250290",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/katakam-pranav-shankar/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pranavv_k_06",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Smart India Hackathon Finalist",
    job: "ReSculpt – Waste Upcycling Platform",
    date: "December 2023",
    contents: [
      "Led a dynamic team of 6 engineers to develop ReSculpt, a digital platform focused on waste upcycling and sustainability.",
      "Designed and integrated AI-driven classification systems to identify waste types and recommend optimal reuse strategies.",
      "Collaborated closely with mentors from the Ministry of Housing and Urban Affairs, addressing a real-world urban sustainability challenge.",
      "Facilitated the development of an intuitive user interface and backend pipeline for seamless waste material tracking and suggestions.",
      "Achieved recognition as a national finalist, showcasing innovation at one of India's largest innovation challenges."
    ],
  },
  {
    title: "IDE Bootcamp Participant",
    job: "NIT Goa",
    date: "April 2024",
    contents: [
      "Selected for the prestigious IDE Bootcamp at NIT Goa, aimed at nurturing entrepreneurial and product innovation skills.",
      "Pitched a tech-driven startup idea to a panel of seasoned entrepreneurs, investors, and incubation experts for critical feedback.",
      "Engaged in hands-on workshops on business model canvas, product-market fit analysis, and crafting a compelling MVP roadmap.",
      "Learned the art of startup storytelling, pitching, and the strategic importance of scalability in tech products.",
      "Built strong connections with peers, startup founders, and industry mentors to broaden perspectives on entrepreneurship and technology."
    ],
  },
  {
    title: "AI Intern",
    job: "IDC India",
    date: "Oct 2024 – Feb 2025",
    contents: [
      "Worked on multiple impactful AI/ML projects, including the **Disease Prediction Model**, aimed at enabling early diagnosis through machine learning techniques.",
      "Designed and developed **LegalQ**, a sophisticated legal query system capable of providing AI-driven legal insights by leveraging large language models and advanced NLP techniques.",
      "Implemented solutions using a rich tech stack comprising Python, Pandas, Scikit-Learn, Streamlit for rapid prototyping, and Transformers for deep NLP tasks.",
      "Integrated **LangChain**, **FAISS vector database**, and **Hugging Face models** to enable efficient semantic search and retrieval-augmented generation (RAG) pipelines.",
      "Gained hands-on experience in applying theoretical AI/ML concepts to real-world problem statements, with a strong focus on scalability, model interpretability, and user-centric design."
    ],
  },
];