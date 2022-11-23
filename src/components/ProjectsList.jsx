import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ projects, itemsPerPage }) => {
	const listItemHeight = 56; // Try to get it dinamically
	return (
		<div style={{ height: itemsPerPage * listItemHeight }}>
			{projects.map(project => (
				<ProjectsListItem key={project.id} {...project} />
			))}
		</div>
	);
};

export default ProjectsList;
