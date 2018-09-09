import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_TASK_MUTATION = gql`
	mutation AddTask($text: String!) {
		addTask(text: $text) @client {
			id
		}
	}
`;
class TaskForm extends Component {
	state = {
		text: ''
	};
	render() {
		return (
			<Mutation mutation={ADD_TASK_MUTATION}>
				{addTask => {
					return (
						<form
							onSubmit={e => {
								e.preventDefault();
								addTask({
									variables: {
										text: this.state.text
									}
								});
								this.setState({ text: '' });
							}}>
							<div className="row">
								<div className="col-8">
									<input
										type="text"
										className="form-control"
										placeholder="Task name"
										name="text"
										value={this.state.text}
										onChange={e => this.setState({ text: e.target.value })}
									/>
								</div>
								<div className="col-2">
									<button className="btn btn-primary">Add Task</button>
								</div>
							</div>
						</form>
					);
				}}
			</Mutation>
		);
	}
}
export default TaskForm;
