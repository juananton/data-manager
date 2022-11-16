import ProjectsList from './components/ProjectsList';
import './index.css';

const PROJECTS = [
	{
		name: 'Users manager',
		type: 'React',
		date: '2022'
	},
	{
		name: 'Feedback manager',
		type: 'React',
		date: '2021'
	},
	{
		name: 'Bank accounts manager',
		type: 'javaScript',
		date: '2022'
	},
	{
		name: 'Ticket booking',
		type: 'javaScript',
		date: '2022'
	}
];

const App = () => <ProjectsList initialProjects={PROJECTS} />;

export default App;
