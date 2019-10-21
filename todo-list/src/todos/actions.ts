import { Todos } from './constants';
import { Todo } from '../todo';

interface FSA<T, P = undefined, M = undefined> {
  type: T;
  payload: P;
  error?: boolean;
  meta?: M;
}

export type ADD_TODO_ACTION = FSA<Todos.ADD_TODO, Todo>;
export type REMOVE_TODO_ACTION = FSA<Todos.REMOVE_TODO, Todo>;

export type TODOS_ACTION = ADD_TODO_ACTION | REMOVE_TODO_ACTION;

export function addTodo(title: string): ADD_TODO_ACTION {
  return {
    type: Todos.ADD_TODO,
    payload: {
      id: Math.floor(Math.random() * 1001),
      title,
      completed: false,
    },
  };
}

export function removeTodo(todo: Todo): REMOVE_TODO_ACTION {
  return {
    type: Todos.REMOVE_TODO,
    payload: todo,
  };
}
