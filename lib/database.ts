import { connect, model, models, Schema, Document } from "mongoose";

/**
 * Detail schema document type
 */
export interface DetailsDocument{
    name: string;
    surname: string;
    contact: string;
    email: string;
    profession: string;
    slogan: string;
    about: string;
    profile: string;
}

/**
 * details schema
 */
export const detailsSchema = new Schema<DetailsDocument>({
    name: String,
    surname: String,
    contact: String,
    email: String,
    profession: String,
    about: String,
    profile: String,
});

/**
 * Skills document type
 */
export interface SkillsDocument {
    data: string[];
    title: string;
}

/**
 * Skills schema
 */
export const skillsSchema = new Schema<SkillsDocument>({
    data: [String],
    title: String,
});

/**
 * Projects document type
 */
export interface ProjectsDocument {
    image: string;
    title: string;
    description: string;
    concepts: string[];
    tools: string[];
    demo: string;
    source: string;
}

/**
 * Projects schema
 */
export const projectsSchema = new Schema<ProjectsDocument>({
    title: String,
    image: String,
    description: String,
    demo: String,
    source: String,
    concepts: [String],
    tools: [String],
});

export const Detail = models.Detail || model<DetailsDocument>("Detail", detailsSchema);
export const Skill = models.Skill || model<SkillsDocument>("Skill", skillsSchema);
export const Project = models.Project || model<ProjectsDocument>("Project", projectsSchema);

export const connectDB = async () => {
    try {
        await connect(process.env.DATABASE_URL as string);
        console.log("Database connected!");
    }
    catch (error) {
        throw new Error("Could not connect to the database.");
    }
}