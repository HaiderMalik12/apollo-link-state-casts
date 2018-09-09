import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import TaskLink from './TaskLink';

const UPDATE_FILTER = gql`
	mutation UpdateFilter($filterValue: String!) {
		updateFilter(filterValue: $filterValue) @client
	}
`;
const TaskFooter = () => {
	return (
		<Mutation mutation={UPDATE_FILTER}>
			{updateFilter => {
				return (
					<div>
						<TaskLink
							text="All"
							filterValue="SHOW_ALL"
							updateFilter={updateFilter}
						/>
						|
						<TaskLink
							text="Completed"
							filterValue="COMPLETED"
							updateFilter={updateFilter}
						/>
						|
						<TaskLink
							text="Active"
							filterValue="ACTIVE"
							updateFilter={updateFilter}
						/>
					</div>
				);
			}}
		</Mutation>
	);
};

export default TaskFooter;
