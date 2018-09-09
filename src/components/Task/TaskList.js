import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Task from './Task';

const TASKS_QUERY = gql`
	{
		tasks @client {
			id
			completed
			text
		}
		filter @client
	}
`;
const getFilteredTasks = (filter, tasks) => {
	switch (filter) {
		case 'SHOW_ALL':
			return tasks;
		case 'COMPLETED':
			return tasks.filter(task => task.completed === true);
		case 'ACTIVE':
			return tasks.filter(task => task.completed === false);
	}
};
const TaskList = () => {
	return (
		<Query query={TASKS_QUERY}>
			{({ data: { tasks, filter } }) => {
				debugger;
				return (
					<ul className="list-group">
						{getFilteredTasks(filter, tasks).map(task => (
							<Task key={task.id} {...task} />
						))}
					</ul>
				);
			}}
		</Query>
	);
};

export default TaskList;
