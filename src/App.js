import React from "react";
import MessageForm from "./components/MessageForm.js";
import MessageList from "./components/MessageList.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  // Adds the message to the list of messages
  addMessage = (content, visibility) => {
    this.setState({
      messages: [
        { content: content, visibility: visibility },
        ...this.state.messages
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <div id="message-form">
          <h2>Publier un message</h2>
          <MessageForm addMessage={this.addMessage} />
        </div>
        <hr />
        <div id="message-list">
          <h2>Liste des messages publiés</h2>
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
