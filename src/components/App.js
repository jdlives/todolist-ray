import React from 'react';
import SearchBar from './SearchBar';
import TaskList from './TaskList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    onFormSubmit = (newTask) => {
        this.setState({ taskList: [...this.state.taskList, { description: newTask, ongoing: true }] });
    };

    onRemoveItem = (key) => {
        var array = [...this.state.taskList]; 
        if (key !== -1) {
            array.splice(key, 1);
            this.setState({taskList: array});
        }
    };

    onCompleteItem = (key) => {
        var array = [...this.state.taskList]; 
        array[key].ongoing = !array[key].ongoing
        this.setState({taskList: array});
    };

    onEditItem = (key, description) => {
        var array = [...this.state.taskList]; 
        array[key].description = description
        this.setState({taskList: array});
    }

    render() {
        const { taskList } = this.state;
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmitCallback={this.onFormSubmit}/>
            <div className="ui segment">
                <div className="ui middle aligned divided list">
                    <TaskList taskList={taskList} onRemoveCallback={this.onRemoveItem} onCompleteCallback={this.onCompleteItem} onEditCallback={this.onEditItem}/>
                </div>
            </div>
        </div>
    };
}

export default App;