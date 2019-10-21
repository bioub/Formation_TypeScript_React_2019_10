import { Todos } from './constants';
import { Todo } from '../todo';
import { TODOS_ACTION, ADD_TODO_ACTION, FETCH_TODOS_SUCCESS } from './actions';

const initialState = {
  items: [
    {
      id: 1001,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 1002,
      title: 'Acheter du lait',
      completed: true,
    },
  ],
};

export function todosReducer(state: { items: Todo[] } = initialState, action: TODOS_ACTION) {
  switch (action.type) {
    case Todos.ADD_TODO: {
      const a = action as ADD_TODO_ACTION;
      return {
        ...state,
        items: [...state.items, a.payload],
      };
    }
    case Todos.FETCH_TODOS_SUCCESS: {
      const a = action as FETCH_TODOS_SUCCESS;
      return {
        items: [...state.items, ...a.payload],
      };
    }
    default:
      return state;
  }
}
