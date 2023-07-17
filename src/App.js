
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, {useState} from 'react'

function App() {
  const [mode , setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='#042743';
  }
 else{
  setMode('light')
  document.body.style.backgroundColor ='white';
 }
}
  return (
    <>
<Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}

<div className="container my-3"  >
<TextForm text="Enter the text to analyze" mode={mode} />

</div>
    </>
  );
}

export default App;