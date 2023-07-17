import React, {useState} from 'react' ;


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
      }
      const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value);
      }
      const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy =() => {
    //  let text = document.getElementById("my-box");
    //   text.select();
      navigator.clipboard.writeText(text);
    }
    const handleExtraspaces =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    // const handleLightTheme = () => {
    //   document.querySelector('.body').style.backgroundColor = "white"
    // }
  
    // const handleDarkTheme = () => {
    //   document.querySelector('.body').style.backgroundColor = "black"
    //   document.querySelector('.body').style.color = "white"
      
    // }
   
      const [text, setText] = useState('');
  return (
    
  <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'grey'}} >
         <h1>{props.text}  </h1>
      <div className="text1">
        <textarea className='text' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white'}}  id="my-box" rows='9' placeholder='Enter your text here '></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick} > CONVERT TO UPPERCASE</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoChange}> CONVERT TO LOWERCASE</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy} >COPY TEXT</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraspaces}>REMOVE EXTRA SPACES</button>
    </div>
    <div className="contain my-3" style={{color: props.mode === 'dark'? 'white':'grey'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter text to preview here."}</p>
</div>
</>
  )
}
