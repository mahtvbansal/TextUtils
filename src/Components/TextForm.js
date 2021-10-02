import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopy = ()=> {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!", "success");
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <br />
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter your text"
            style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text above to preview it here"}</p>
      </div>
    </>
  );
}
