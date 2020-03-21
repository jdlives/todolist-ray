import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
                <TodoItem key={uuidv4()} tag={index} todo={item} onEditCallback={onEditCallback} />
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