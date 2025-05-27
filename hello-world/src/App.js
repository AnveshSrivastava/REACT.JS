import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
function App() {
  
  return (
    <div className="App">
      <Navbar title ="TextUtils" aboutText = "about" searchBar = {true}/>
      <TextForm/>
      </div>
  );
}

export default App;
