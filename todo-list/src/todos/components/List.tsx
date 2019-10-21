import React from 'react';
import Item from './Item';
import { Todo } from '../../todo';
import { useEffect } from 'react';
import { fetchTodos } from '../api';

interface Props {
  todos: Todo[];
  onFetchTodosSuccess: (todo: Todo[]) => void;
}

function List({ todos = [], onFetchTodosSuccess = () => undefined }: Props) {
  useEffect(() => {
    fetchTodos().then((todosRes: Todo[]) => onFetchTodosSuccess(todosRes));
  }, []);
  return (
    <div className="List">
      {todos.map((t) => (
        <Item todo={t} key={t.id} />
      ))}
    </div>
  );
}

export default List;
