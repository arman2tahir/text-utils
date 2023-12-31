import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [visible, setvisible] = useState(false);

    const UpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }

    const LowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")

    }

    const clearClick = () => {
        let newtext = "";
        setText(newtext)
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);

        setvisible(true)

        setTimeout(() => {
            setvisible(false)
        }, 1500);
    }

    const changehandler = (event) => {
        setText(event.target.value);
    }

    let copyBtn = {
        background: "rgba(0,0,0,.3)",
        color: "white",
        opacity: 1,
        padding: "0.4rem 0.5rem",
        position: "absolute",
        transition: "opacity .2s ease-in-out",
        border: "none",
        borderRadius: "5px",
        top: "10px",
        right: "10px"
    }

    let copytext = {
        background: "black",
        color: "white",
        position: "absolute",
        padding: "5px 20px",
        borderRadius: "5px",
        bottom: "-12px",
        left: "50%",
        transition: "opacity .2s ease-in-out",
    }


    return (
        <div className="wrapper">
            <div className="container" >
                <h1>Enter your text to analyze</h1>
                <div className="mb-3" style={{ position: "relative" }}>
                    <textarea className="form-control" data-bs-theme={props.mode} value={text} onChange={changehandler} placeholder='Enter your text here' id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className='copy-text' style={copyBtn} onClick={copyText}>Copy</button>
                    {visible && <p style={copytext}>Copied!</p>}
                </div>
                <button className="btn btn-primary mx-1" onClick={UpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={LowClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1" onClick={clearClick}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p style={{ wordWrap: "break-word" }}>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </div>

    )
}
