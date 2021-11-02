import './App.css';
import React,{useState} from 'react';
import ColorForm from './Components/ColorForm';
import Colors from './Components/Colors';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [currentColor, setCurrentColor] = useState(['peachpuff'])

  const newColors = (newColor) =>{
    setCurrentColor([...currentColor, newColor])
  }
  return (
    <div className="App">
      <ColorForm onNewColor={newColors}/>
      <hr></hr>
      <Colors colors={currentColor}></Colors>
    </div>
  );
}

export default App;
