import React from "react";

const Todo = (props) => {
  return (
    <div>
      <h4>
        {props.title} {props.time}
      </h4>
    </div>
  );
};
export default Todo;
