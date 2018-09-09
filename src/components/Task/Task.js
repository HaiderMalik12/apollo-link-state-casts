import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const TOGGLE_TASK = gql`
	mutation ToggleTask($id: Int!) {
		toggleTask(id: $id) @client
	}
`;
const Task = ({ completed, text, id }) => {
	return (
		<Mutation
			mutation={gql`
				mutation ToggleTask($id: Int!) {
					toggleTask(id: $id) @client
				}
			`}
			variables={{ id }}>
			{toggleTask => {
				return (
					<li
						className="list-group-item"
						style={{ textDecoration: completed ? 'line-through' : 'none' }}
						onClick={toggleTask}>
						{text}
					</li>
				);
			}}
		</Mutation>
	);
};

export default Task;
