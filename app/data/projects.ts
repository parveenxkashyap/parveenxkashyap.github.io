import * as z from "zod";
import { projectSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const projects: z.infer<typeof projectSchema>[] = [
    {
        year: 2025,
        title: "NetGuard",
        description: "Hybrid ANN-LSTM ensemble achieving 98.41% threat detection accuracy. Classified 15 attack types with 99.7% accuracy on 2.5M+ samples, integrating a self-healing remediation engine that decreased MTTR from 5 minutes to under 100ms via automated IP blocking.",
        languages: {
            tf: { name: "TensorFlow", backgroundColour: colours.ai },
            keras: { name: "Keras", backgroundColour: colours.ml },
            sklearn: { name: "Scikit-learn", backgroundColour: colours.py },
            lstm: { name: "LSTM", backgroundColour: colours.neuroscience },
            ann: { name: "ANN", backgroundColour: colours.ml },
        },
        github: "https://github.com/parveenxkashyap/netguard-ai",
        website: "https://github.com/parveenxkashyap/netguard-ai",
    },
    {
        year: 2025,
        title: "DocsMind",
        description: "Production RAG pipeline using LangChain LCEL and FAISS, achieving sub-second latency via token streaming and managing 10+ Gemini models with a resilient fallback to process 50-page docs in 5s.",
        languages: {
            langchain: { name: "LangChain", backgroundColour: colours.ai },
            streamlit: { name: "Streamlit", backgroundColour: colours.py },
            faiss: { name: "FAISS", backgroundColour: colours.postgresql },
            gemini: { name: "Google Gemini", backgroundColour: colours.ai },
            rag: { name: "RAG", backgroundColour: colours.ml },
        },
        github: "https://github.com/parveenxkashyap/docs-mind-ai",
        website: "https://docs-mind-ai.streamlit.app/",
    },
    {
        year: 2025,
        title: "TalentVector",
        description: "Full-stack AI screening platform using TF-IDF and Cosine Similarity to rank resumes with 99% algorithmic accuracy. Engineered a secure SQLite backend with SHA256 password hashing and UUID salts.",
        languages: {
            sklearn: { name: "Scikit-Learn", backgroundColour: colours.py },
            nlp: { name: "NLP", backgroundColour: colours.ai },
            sqlite: { name: "SQLite", backgroundColour: colours.postgresql },
            streamlit: { name: "Streamlit", backgroundColour: colours.py },
            crypto: { name: "Cryptography", backgroundColour: colours.security },
        },
        github: "https://github.com/parveenxkashyap/talent-vector",
        website: "https://talent-vector.streamlit.app/",
    }
];