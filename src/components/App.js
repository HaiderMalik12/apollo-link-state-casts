import React from 'react';
import TaskList from './Task/TaskList';

const App = () => (
	<div className="container" style={{ textAlign: 'center' }}>
		<h3>Task App</h3>
		<div style={{ marginTop: '20px' }}>
			<TaskList />
		</div>
	</div>
);
export default App;
