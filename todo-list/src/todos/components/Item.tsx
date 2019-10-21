import React from "react";
import { Todo } from "../../todo";

interface Props {
  todo: Todo;
}

function Item(props: Props) {
  return <div className="Item">
    {props.todo.title}
    <button>-</button>
  </div>
}


export default Item;