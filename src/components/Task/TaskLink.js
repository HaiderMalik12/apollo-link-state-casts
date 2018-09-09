import React from 'react';
import PropTypes from 'prop-types';

const TaskLink = ({ text, updateFilter, filterValue }) => {
	return (
		<a
			href="#!"
			onClick={() => {
				updateFilter({
					variables: {
						filterValue
					}
				});
			}}>
			{text}
		</a>
	);
};

TaskLink.propTypes = {
	text: PropTypes.string.isRequired,
	updateFilter: PropTypes.func.isRequired,
	filterValue: PropTypes.string.isRequired
};

export default TaskLink;
