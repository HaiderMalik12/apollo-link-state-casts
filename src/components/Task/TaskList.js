import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
					<ul>
						{tasks.map(task => (
							<li key={task.id}>{task.text}</li>
						))}
					</ul>
				);
			}}
		</Query>
	);
};

export default TaskList;
