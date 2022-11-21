import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ projects }) => {
	return projects.map(project => (
		<ProjectsListItem key={project.name} {...project} />
	));
};

export default ProjectsList;
