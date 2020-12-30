import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Thế Giới",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { 
      text: "Thế Giới Tiền Sử", 
      handler: props.actionProvider.handlePythonQuiz,
      id: 2 
    },
    { 
      text: "Địa Lý",
      handler: props.actionProvider.handleGolangQuiz,
      id: 3 
    },
    { 
      text: "Khoa Học Máy Tính",
      handler: props.actionProvider.handleGolangQuiz,
      id: 4
    },
    { 
      text: "Địa Điểm Du Lịch",
      handler: props.actionProvider.handleGolangQuiz,
      id: 5 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
