import React from "react";

const MessageList = props => {
  return (
    <div className="messages">
      {/* iterate on the messages array to display each message's content & visibility */}
      <ul>
        {props.messages.map(message => {
          return (
            <li className="one-message" key={message.id}>
              <p className="content">
                <strong>{message.content}</strong>
              </p>
              <p className="visibility">{message.visibility}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageList;
