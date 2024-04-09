'use server'
import { IResume } from '../models/Resume'; // Adjust the path to your Resume model
import connectToDatabase from '../lib/mongodb';

export async function getData(): Promise<{ resumeData: IResume | null }> {
  try {
    const { db } = await connectToDatabase(); // Connect to MongoDB
    // Sort by _id in descending order and get the first document
    const resumeData = await db.collection('resumes').find({}).sort({_id: -1}).limit(1).next();
    return { resumeData: resumeData as IResume };
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return { resumeData: null };
  }
};
