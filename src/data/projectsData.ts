export const projectsData = [
    {
      slug: "project-1",
      name: "Project 1",
      description: "Description of Project 1",
      technologies: ["React", "Next.js"],
      imageUrl: "",
      liveUrl: "https://liveurl.com",
      githubUrl: "https://github.com/user/project-1"
    },
    // Other projects
  ];
 
export function getProjectDetails(slug: string) {
  return projectsData.find(project => project.slug === slug);
}
