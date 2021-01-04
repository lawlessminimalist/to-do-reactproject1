import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
      };
    
    onChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDoProps(this.state.title);
        this.setState({
            title: ""
          });
      };

  render() {
    return (
    <form onSubmit={this.handleSubmit} className="form-container">

        <input type="text"
        className="input-text"
        placeholder="Add todo..." 
        onChange={this.onChange}
        value={this.state.title} />

        <input type="submit" value="Submit" className="input-submit" />

      </form>
    )
  }
}
export default InputTodo