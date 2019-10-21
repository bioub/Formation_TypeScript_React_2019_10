import { Todos } from './constants';
import { Todo } from '../todo';
import { TODOS_ACTION, ADD_TODO_ACTION } from './actions';

const initialState = {
  items: [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Acheter du lait',
      completed: true,
    },
  ],
};

export function todosReducer(state: { items: Todo[] } = initialState, action: TODOS_ACTION) {
  switch (action.type) {
    case Todos.ADD_TODO:
      const a = action as ADD_TODO_ACTION;
      return {
        ...state,
        items: [...state.items, a.payload],
      };
    default:
      return state;
  }
}
