const ProjectsListItem = ({ project }) => (
	<li>
		<input className='check' type='checkbox' />
		{`${project.name}. ${project.type}.
		${project.date}`}
	</li>
);

export default ProjectsListItem;
