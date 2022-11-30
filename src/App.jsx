import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataManager from './components/DataManager';
import CreateItemForm from './components/forms/CreateItemForm';
import './styles/index.css';

const App = () => (
	<Router>
		<Routes>
			<Route exact path='/' element={<DataManager />} />
			<Route path='/createitem' element={<CreateItemForm />} />
		</Routes>
	</Router>
);

export default App;
