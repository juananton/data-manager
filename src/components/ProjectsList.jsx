import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ initialProjects }) => (
	<div className='wrapper'>
		<h1>Projects</h1>
		<ul className='projects-list'>
			{initialProjects.map(project => (
				<ProjectsListItem project={project} key={project.name} />
			))}
		</ul>
	</div>
);

export default ProjectsList;
