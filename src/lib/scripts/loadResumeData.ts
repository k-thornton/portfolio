// Run using npx ts-node --project src/lib/scripts/tsconfig.json src/lib/scripts/loadResumeData.ts from root dir
require('dotenv').config();
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Resume, { IResume } from '../../models/Resume'; // Adjust the import path to your Resume model

const mongoUri: string = process.env.MONGO_URI as string;

const insertSampleData = async () => {
    await mongoose.connect(mongoUri);

    // Read JSON data from file
    const jsonData = fs.readFileSync(path.join(__dirname, 'resumeData.json'), 'utf-8');
    const resumeData: IResume = JSON.parse(jsonData);

    // Insert resume data
    await Resume.create(resumeData);

    console.log('Resume data inserted from JSON file');
};

insertSampleData()
    .then(() => mongoose.disconnect())
    .catch(err => {
        console.error('Data insertion error:', err);
        mongoose.disconnect();
    });
