import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ projects }) => {
	return projects.map(project => (
		<ProjectsListItem key={project.id} {...project} />
	));
};

export default ProjectsList;
