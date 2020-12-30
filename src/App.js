import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "600px" }}>
        <Chatbot
          
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          config={config}
        />
      </div>
    </div>
  );
}

export default App;
