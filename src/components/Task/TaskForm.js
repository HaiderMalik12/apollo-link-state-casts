import React, { Component } from 'react';

class TaskForm extends Component {
	state = {
		text: ''
	};
	render() {
		return (
			<form>
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
	}
}
export default TaskForm;
