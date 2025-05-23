import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import { useState } from 'react';
function App() {
  const handleUpClick = (event) =>{
    setText((newText)=>{text.toUpperCase()});
  }
  const [text, setText] = useState("Enter Text Here");
  return (
    <div className="App">
      <Navbar title ="TextUtils" aboutText = {1653561} searchBar = {true}/>
      <TextForm/>
      
      <div className='btn btn.primary' onClick={handleUpClick}>Convert Up to Upper Case</div>
    </div>
  );
}

export default App;
