import { connect } from 'react-redux';
import List from '../components/List';

import { fetchTodosSuccess } from '../actions';

function mapStateToProps(state) {
  return {
    todos: state.todos.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchTodosSuccess(todos) {
      dispatch(fetchTodosSuccess(todos));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
