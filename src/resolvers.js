import gql from 'graphql-tag';

export const defaults = {
	tasks: []
};
let nextTaskId = 0;
export const resolvers = {
	Mutation: {
		addTask: (_, { text }, { cache }) => {
			//fetch all the current tasks from state by executing query
			const prevTasks = cache.readQuery({
				query: gql`
					{
						tasks @client {
							id
							completed
							text
						}
					}
				`
			});
			//add new task in existing tasks array
			const newTask = {
				id: nextTaskId++,
				completed: false,
				text,
				__typename: 'TaskItem' //__typename:id
			};
			const data = {
				tasks: prevTasks.tasks.concat([newTask])
			};
			//write or update the cache with new task
			cache.writeData({ data });
			// return a new task from this method
			return newTask;
		}
	}
};
