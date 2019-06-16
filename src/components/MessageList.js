import React from "react";

const MessageList = props => {
  return (
    <div className="messages">
      {/* iterate on the messages array to display each message (content & visibility) */}
      {props.messages.map((message, index) => {
        return (
          <ul>
            <li key={index}>
              <p className="content">
                <strong> {message.content} </strong>
              </p>
              <p className="visibility">{message.visibility}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default MessageList;
