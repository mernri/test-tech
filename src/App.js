import React from "react";
import MessageForm from "./components/MessageForm.js";
import MessageList from "./components/MessageList.js";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.getAllMessages();
  }

  // Retrieves all the messsages
  getAllMessages = () => {
    let url = "http://localhost:3001/messages";
    axios
      .get(url)
      .then(response => {
        this.setState({
          messages: response.data.reverse()
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Adds the new message to the list of messages
  addMessage = async (content, visibility) => {
    let url = "http://localhost:3001/messages";
    await axios.post(url, { content: content, visibility: visibility });
    this.getAllMessages();
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
