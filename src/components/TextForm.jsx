import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text) {
      setText(text.toUpperCase());
      props.showAlert("Converted to UpperCase", "success");
    }
  };
  const handleLoClick = () => {
    if (text) {
      setText(text.toLowerCase());
      props.showAlert("Converted to LowerCase", "success");
    }
  };
  const handleReverseClick = () => {
    if (text) {
      let newText = "";
      for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
      }
      setText(newText);
      props.showAlert("Message Reversed", "success");
    }
  };
  const handleUndoClick = () => {
    if (text) {
      const words = text.split(" ");
      if (words.length > 0) {
        words.pop();
        setText(words.join(" "));
      }
      props.showAlert("Message Undone", "success");
    }
  };
  const handleClearClick = () => {
    if (text) {
      setText("");
      props.showAlert("Text Cleared!!", "success");
    }
  };

  const handleOnChange = () => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard", "success");
    }
  };

  const handleExtraSpaces = () => {
    if (text) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "success");
    }
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-warning mx-1" onClick={handleReverseClick}>
          Reverse
        </button>
        <button className="btn btn-warning mx-1" onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
