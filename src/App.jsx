import ProjectsManager from './components/ProjectsManager';
import './styles/index.css';

const PROJECTS = [
	{
		name: 'Users manager',
		category: 'React',
		date: 2022
	},
	{
		name: 'Feedback manager',
		category: 'React',
		date: 2021
	},
	{
		name: 'Bank accounts manager',
		category: 'Vanilla JS',
		date: 2022
	},
	{
		name: 'Ticket booking',
		category: 'Node.js',
		date: 2020
	},
	{
		name: 'Test project',
		category: 'Vanilla JS',
		date: 2021
	},
	{
		name: 'Node project',
		category: 'Node.js',
		date: 2020
	}
];

const App = () => <ProjectsManager initialProjects={PROJECTS} />;

export default App;
