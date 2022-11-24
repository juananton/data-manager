import ProjectsManager from './components/ProjectsManager';
import { PROJECTS } from './lib/constants/mockProjects';
import './styles/index.css';

const App = () => <ProjectsManager initialProjects={PROJECTS} />;
export default App;
