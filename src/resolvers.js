import gql from 'graphql-tag';

export const defaults = {
	tasks: [],
	filter: 'SHOW_ALL'
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
		},
		toggleTask: (_, { id }, { cache }) => {
			const taskId = `TaskItem:${id}`; //__typename:id
			const fragment = gql`
				fragment completedTask on TaskItem {
					completed
				}
			`;
			const task = cache.readFragment({ fragment, id: taskId });
			const data = { ...task, completed: !task.completed };

			cache.writeData({ id: taskId, data });
			return null;
		},
		updateFilter: (_, { filterValue }, { cache }) => {
			const data = {
				filter: filterValue,
				__typename: 'Filter'
			};
			cache.writeData({ data });
			return null;
		}
	}
};
