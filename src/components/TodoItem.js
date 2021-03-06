import React from "react"

class ToDoItem extends  React.Component
{
    render() {
      const completedStyle = {
        fontStlye: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const {completed,id,title} = this.props.todo;
        return (
            
          <li className="todo-item"><input 
          type="checkbox" 
          checked={completed}
          onChange={()=>this.props.handleChangeProps(id)}/>
          
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          </li>

        );
      }
}
export default ToDoItem
