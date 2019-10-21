import { connect } from 'react-redux';
import Form from '../components/Form';
import { addTodo } from '../actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd(title: string) {
      dispatch(addTodo(title));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
