import React from "react"
import { v4 as uuidv4 } from "uuid";

import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo"


class TodoContainer extends React.Component {
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            }),
          }))
        };

        delTodo = id => {
            this.setState({
              todos: [
                ...this.state.todos.filter(todo => {
                  return todo.id !== id;
                })
              ]
            });
          };

    addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title:title,
            completed:false

        };
        this.setState({
            todos: [...this.state.todos,newTodo]
        });
    };

    state = {
        todos:[
            {
                id: uuidv4(),
                title: "Setup Dev Environment",
                completed:true
            },
            {
                id: uuidv4(),
                title: "Develop Website and add content",
                completed:false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed:true
            },
        ]
    };
    render() {
        return (
          <div className="container">
            <Header />
            <InputTodo addToDoProps={this.addToDoItem} />
            <TodosList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              />
          </div>
        );
      }
    }
export default TodoContainer