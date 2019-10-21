import React, { Component } from "react";
import "./App.css";
import { Todo } from "./todo";
import FormContainer from "./todos/containers/FormContainer";
import ListContainer from "./todos/containers/ListContainer";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }
class App extends Component<{}, { todos: Todo[] }> {
  // state: { todos: Todo[] } = {
  //   todos: [
  //     {
  //       id: 1,
  //       title: "Acheter du pain",
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       title: "Acheter du lait",
  //       completed: true
  //     }
  //   ]
  // };

  // handleAdd = (title) => {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: Math.floor(Math.random() * 1001),
  //         title,
  //         completed: false
  //       }
  //     ]
  //   });
  // }

  render() {
    return (
      <div className="App">
        <FormContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
