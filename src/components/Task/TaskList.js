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
	}
`;
const TaskList = () => {
	return (
		<Query query={TASKS_QUERY}>
			{({ data: { tasks } }) => {
				debugger;
				return (
					<ul className="list-group">
						{tasks.map(task => (
							<Task key={task.id} {...task} />
						))}
					</ul>
				);
			}}
		</Query>
	);
};

export default TaskList;
