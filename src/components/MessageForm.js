import React, { Component } from "react";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      visibility: ""
    };
  }

  // Changes the state of content or visibility each time the user changes its value
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Adds the new message to the list of messages and resets the inputs values
  handleSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state.content, this.state.visibility);
    this.setState({
      content: "",
      visibility: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* content of the message */}
          <input
            id="content"
            type="text"
            placeholder="Écrivez votre message ici"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />

          {/* visibility of the message (public or private) */}
          <div id="radio-visibility">
            <input
              className="visibility"
              type="radio"
              name="visibility"
              value="public"
              checked={this.state.visibility === "public"}
              onChange={this.handleChange}
              required
            />
            <label>public</label>

            <input
              className="visibility"
              type="radio"
              name="visibility"
              value="privé"
              checked={this.state.visibility === "privé"}
              onChange={this.handleChange}
            />
            <label>privé</label>
          </div>

          <button type="submit"> Publier </button>
        </form>
      </div>
    );
  }
}
