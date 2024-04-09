import Resume, { IResume } from '../../models/Resume'; // Adjust the path to your Resume model
import connectToDatabase from '../../lib/mongodb';

async function getData(): Promise<{ resumeData: IResume | null }> {
  try {
    const { db } = await connectToDatabase(); // Connect to MongoDB
    const resumeData = await db.collection('resumes').findOne({});
    return { resumeData: resumeData as IResume };
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return { resumeData: null };
  }
};

async function ResumePage() {
    const {resumeData} = await getData();
    if (!resumeData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{`${resumeData.personalDetails.name.first} ${resumeData.personalDetails.name.last}`}</h1>
            <p>{resumeData.personalDetails.email}</p>
            {/* Render other resume details */}
        </div>
    );
}

export default ResumePage;
