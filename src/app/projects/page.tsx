import Link from 'next/link';
import { projectsData } from '../../data/projectsData';

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectsData.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
