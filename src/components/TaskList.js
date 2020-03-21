import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        const { taskList, onRemoveCallback } = this.props;
        return (
            <div>
                {taskList.map((item, index) => (
                <TaskItem key={index} tag={index} task={item} onRemoveCallback={onRemoveCallback} />
              ))}
            </div>
        );
    }
}

export default TaskList;