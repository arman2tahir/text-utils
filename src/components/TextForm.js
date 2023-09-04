import React, { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState("");

    const UpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const LowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearClick = () =>{
        let newtext = "";
        setText(newtext)
    }

    const changehandler = (event) =>{
        setText(event.target.value);
    }

  return (
    <>
    <div className="container my-3">
        <div className="mb-3">
            <h1>Enter your text to analyze</h1>
            <textarea className="form-control" value={text} onChange={changehandler} placeholder='Enter your text here' id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={LowClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={clearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>

  )
}
