import * as z from "zod";
import { experienceSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const professionalExp: z.infer<typeof experienceSchema>[] = [
    {
        date: ["Aug 2025", "Dec 2025"],
        title: "AI Engineer Intern",
        institution: "ResoluteAI Software Private Limited",
        description: [
            "Engineered an AI governance system detecting 5 discrimination types across 100+ loan applications via a FastAPI/SQLite backend and Gemini Flash to enable real-time compliance auditing",
            "Developed a RAG medical chatbot achieving 95%+ accuracy by implementing Pinecone and Sentence Transformers for context-aware retrieval, transitioning early-stage prototypes into production-ready systems",
            "Built an optimized CV pipeline with 90%+ accuracy using YOLOv8 and EasyOCR, applying ROI-based filtering and inference tuning to automate data extraction from complex invoice tables"
        ],
        experienceBadges: {
            ai: { label: "AI", backgroundColour: colours.ai },
            cv: { label: "Computer Vision", backgroundColour: colours.cv },
            automation: { label: "Automation", backgroundColour: colours.automation },
        },
        link: "https://resoluteaisoftware.in/",
    },
    {
        date: ["June 2025", "Dec 2025"],
        title: "Machine Learning Trainee",
        institution: "Unified Mentor & MedTourEasy",
        description: [
            "Completed intensive, mentor-led programs involving 9 end-to-end ML projects across two organizations, focusing on model deployment and production-ready code architectures",
            "Developed an ASL recognition system achieving 98% test accuracy by implementing Transfer Learning (MobileNetV2) and custom CNNs in TensorFlow, deploying the model as a real-time Streamlit web application",
            "Optimized multi-class classification for forest cover types to 90.24% accuracy by benchmarking 7 algorithms using Scikit-Learn pipelines, GridSearchCV, and Extra Trees ensemble methods for model selection",
            "Engineered automated ML pipelines for fraud and medical datasets by implementing temporal feature engineering and Random Forest models, enabling batch processing and inference via Streamlit interfaces"
        ],
        experienceBadges: {
            ml: { label: "Machine Learning", backgroundColour: colours.ml },
            ai: { label: "AI", backgroundColour: colours.ai },
            dev: { label: "Development", backgroundColour: colours.dev },
        },
        link: "https://unifiedmentor.com/",
    }
];

export const educationExp: z.infer<typeof experienceSchema>[] = [
    {
        date: ["Jul 2023", "Jun 2025"],
        title: "Master of Computer Applications",
        institution: "Chandigarh University",
        description: [
            "Specialized in Artificial Intelligence & Machine Learning",
            "CGPA: 7.76/10.0",
            "Focused on advanced ML algorithms, deep learning, computer vision, and AI systems development"
        ],
        experienceBadges: {
            ai: { label: "AI", backgroundColour: colours.ai },
            ml: { label: "Machine Learning", backgroundColour: colours.ml },
            engineering: { label: "Engineering", backgroundColour: colours.engineering },
        },
        link: "https://www.cuchd.in/",
    },
    {
        date: ["May 2020", "Jun 2023"],
        title: "Bachelor of Computer Applications",
        institution: "Kurukshetra University",
        description: [
            "Percentage: 72.69%",
            "Built strong foundation in programming fundamentals, algorithms, data structures, and software development"
        ],
        experienceBadges: {
            dataStructures: { label: "Data Structures", backgroundColour: colours.dataStructures },
            algorithms: { label: "Algorithms", backgroundColour: colours.algorithms },
            swe: { label: "Software Engineering", backgroundColour: colours.swe },
        },
        link: "https://www.kuk.ac.in/",
    }
];