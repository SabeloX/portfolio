// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Detail, DetailsDocument, Project, ProjectsDocument, Skill, SkillsDocument, connectDB } from '../../lib/database';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    const details: DetailsDocument | null = await Detail.findOne({ name: "Sabelo" }).select({ _id: 0 }).lean();
    const skills: SkillsDocument[] = await Skill.find().lean();
    const projects: ProjectsDocument[] = await Project.find().lean();
    res.json({ skills, details, projects });
  }
  catch (error) {
    throw new Error("Internal server error");
  }
}
