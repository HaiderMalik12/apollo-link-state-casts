import React from 'react';
import TaskList from './Task/TaskList';
import TaskForm from './Task/TaskForm';
import TaskFooter from './Task/TaskFooter';

const App = () => (
	<div className="container" style={{ textAlign: 'center' }}>
		<h3>Task App</h3>
		<div style={{ marginTop: '20px' }}>
			<TaskForm />
			<TaskList />
			<TaskFooter />
		</div>
	</div>
);
export default App;
