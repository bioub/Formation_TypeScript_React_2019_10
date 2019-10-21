import React from "react";
import Item from "./Item";
import { Todo } from "../../todo";

interface Props {
  todos: Todo[];
}

function List(props: Props) {
  const todos = props.todos || [];
  return (
    <div className="List">
      {todos.map(t => (
        <Item todo={t} key={t.id} />
      ))}
    </div>
  );
}

export default List;
