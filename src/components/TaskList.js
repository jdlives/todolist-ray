import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        const { taskList } = this.props;
        return (
            <div>
                {taskList.map(item => (
                <TaskItem key={item.id} task={item} />
              ))}
            </div>
        );
    }
}

export default TaskList;