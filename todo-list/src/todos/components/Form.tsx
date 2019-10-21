import React, { Component, FormEvent, ChangeEvent } from "react";
import css from './Form.module.css';

interface Props {
  onAdd: (title: string) => void;
}

class Form extends Component<Props> {
  state = {
    title: ""
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onAdd(this.state.title);
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value
    });
  };
  render() { 
    //return React.createElement('div', { className: 'Form' }, 'Component Form');
    //return <div className="Form">Component Form</div>
    return (
      <form className={css.Form} onSubmit={this.handleSubmit}>
        <div>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button>+</button>
        </div>
      </form>
    );
  }
}

export default Form;
