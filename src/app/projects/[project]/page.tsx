'use client'
import { getProjectDetails } from '../../../data/projectsData';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import path from 'path';


const ProjectPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const projectSlug = pathSegments[pathSegments.length - 1];

  const projectDetails = getProjectDetails(projectSlug as string);

  if (!projectDetails) {
    return <div>Project not found
    <p>Current pathname: {projectSlug}</p></div>;
  }

  return (
    <article>
      <p>Current pathname: {projectSlug}</p>
      <h1>{projectDetails.name}</h1>
      <Image src={projectDetails.imageUrl} alt={projectDetails.name} />
      <p>{projectDetails.description}</p>
      <h2>Technologies Used</h2>
      <ul>
        {projectDetails.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={projectDetails.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
      <a href={projectDetails.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </article>
  );
};

export default ProjectPage;
