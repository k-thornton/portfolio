import { getData } from '@/app/actions';
import Image from 'next/image';

async function ResumePage() {
  const { resumeData } = await getData();
  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`${resumeData.personalDetails.name.first} ${resumeData.personalDetails.name.last}`}</h1>
      <p>Email: {resumeData.personalDetails.email}</p>
      <p>LinkedIn: {resumeData.personalDetails.linkedin}</p>
      <div>
        <h2>Work Experience</h2>
        {resumeData.workExperience.map((experience, index) => (
          <div key={index}>
            <h3>{experience.jobTitle} at {experience.organization}</h3>
            <p>Location: {experience.location}</p>
            <p>Date: {experience.dateRange}</p>
            <p>Summary: {experience.summary}</p>
            {experience.tasks && (
              <ul>
                {experience.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            )}
            {experience.logo && (
              <div className="w-32 h-20 relative">
                <Image
                  src={experience.logo}
                  alt={`${experience.organization} Logo`}
                  layout="fill"  // Use 'fill' to make the image fit the container
                  objectFit="contain"  // Use 'contain' to ensure the image keeps its aspect ratio
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>Degree: {edu.degree}</p>
            <p>Location: {edu.location}</p>
            <p>Date: {edu.dateRange}</p>
          </div>
        ))}
      </div>
      {/* Render other resume details as needed */}
    </div>
  );
}

export default ResumePage;
