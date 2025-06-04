import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState(''); 
    // this is above state we always keep state in our function 
    // now to change the value of text in state we cannot use 
    // text = 'new text'
    // setText = 'New text' correct way 
  
    const handleUpClick = ()=>{
        console.log('uppercase was clicked');
        let newText = text.toUpperCase();
        props.showAlert("Converted to Uppercase", "success");

        setText(newText)

    }

    const handleLoClick = ()=>{
        console.log('uppercase was clicked');
        let newText = text.toLowerCase();

        setText(newText)
                props.showAlert("Converted to Lowercase", "success");


    }


    const clear= ()=>{
        console.log('clear btn is clicked'+ text);
        let newText ="";
        setText(newText);
    
      }

    const handleOnChange = (event)=>{
        console.log('on change');
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8" value={text} onChange={handleOnChange}
         placeholder="Enter Text here" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
        ></textarea>
        {/* we write {text} in value of text area which will give the default value in the textarea enter text here */}
      </div>
      {/* now we want to change text onclick so we create function handleUpClick  */}
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clear}>clear</button>
    </div>
    <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.0008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>


    </div>
    </>
  );
}
