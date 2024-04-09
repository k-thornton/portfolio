'use server'
import { IResume } from '../models/Resume'; // Adjust the path to your Resume model
import connectToDatabase from '../lib/mongodb';

export async function getData(): Promise<{ resumeData: IResume | null }> {
  try {
    const { db } = await connectToDatabase(); // Connect to MongoDB
    const resumeData = await db.collection('resumes').findOne({});
    return { resumeData: resumeData as IResume };
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return { resumeData: null };
  }
};