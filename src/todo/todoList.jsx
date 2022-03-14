import React from 'react';
import { useRecoilValue } from "recoil";
import {filteredTodoListState} from '../component/RecoilExample/store.js';
import TodoItemCreator from './todoItemCreator.jsx';
import TodoItem from './todoItem.jsx';
import TodoListFilters from './todoListFilters';
import TodoListStats from './todoListStats';

const TodoList = (props) => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
}
export default TodoList;