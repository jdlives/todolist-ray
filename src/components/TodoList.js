import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import actions from '../actions';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    static propTypes = {
        todoList: PropTypes.array.isRequired
    }

    render() {
        const { todoList, onEditCallback } = this.props;
        return (
            <div>
                {todoList.map((item, index) => (
                <TodoItem key={index} tag={index} todo={item} onEditCallback={onEditCallback} />
              ))}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      todoList: state.todoList
    };
}

export default connect(mapStateToProps, actions)(TodoList);