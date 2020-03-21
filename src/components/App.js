import React from 'react';

import SearchBar from './SearchBar';
import TodoList from './TodoList';

class App extends React.Component {

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
            <h1>TO DO LIST</h1>
            <SearchBar />
            <div className="ui segment">
                <div className="ui middle aligned divided list">
                    <TodoList />
                </div>
            </div>
        </div>
    };
}

export default App;
