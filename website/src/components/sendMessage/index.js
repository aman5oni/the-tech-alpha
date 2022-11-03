import React from "react";
import "./style.css";

const SendMessage = () => {
  return (
    <div className="send-message-container">
      <div className="send-message-header">Send Message</div>
      <div className="send-message-card">
        <div className="send-message-credentials-container">
          <input
            type="text"
            className="send-message-name"
            placeholder="ENTER YOUR NAME"
          />
          <input
            type="text"
            className="send-message-email"
            placeholder="ENTER YOUR EMAIL"
          />
        </div>
        <textarea
          className="send-message-message"
          placeholder="YOUR MESSAGE HERE"
        />
        <div className="send-message-submit-button">SUBMIT</div>
      </div>
    </div>
  );
};

export default SendMessage;
