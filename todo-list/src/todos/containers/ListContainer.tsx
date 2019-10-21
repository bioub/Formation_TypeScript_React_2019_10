import { connect } from 'react-redux';
import List from '../components/List';

function mapStateToProps(state) {
  return {
    todos: state.todos.items,
  }
}

export default connect(mapStateToProps)(List);
