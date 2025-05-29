import React, { useState } from 'react';

export default function TextForm() {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Anvesh textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary my-3 mx-3' onClick={() => setText("")}> Clear Text</button>
        <button className='btn btn-primary my-3 mx-3' onClick={handleExtraSpaces}> Remove Extra Spaces</button>
      </div>

      <div className='container my-3'>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.0008*text.split(" ").length} Minutes</p>

      </div>
    </div>
  );
}
