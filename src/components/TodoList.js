import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import actions from "../actions";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    static propTypes = {
        todoList: PropTypes.array.isRequired,
    };

    renderList(todoList) {
        if (todoList.length > 0) {
            return (
                <div className="ui segment">
                    <div className="ui middle aligned divided list"></div>
                    <div>
                        {todoList.map((item, index) => (
                            <React.Fragment>
                                <TodoItem
                                    key={uuidv4()}
                                    tag={index}
                                    todo={item}
                                />
                                <div class="ui divider"></div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        const { todoList } = this.props;
        return this.renderList(todoList);
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
    };
}

export default connect(mapStateToProps, actions)(TodoList);
