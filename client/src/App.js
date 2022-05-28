import "./App.css";
import { useState } from "react";

function App() {
  const [emInfo, setEm] = useState({
    name: "",
    age: 0,
    country: "",
    position: "",
    wage: 0,
  });

  function handleChange(event){
    const {name, value} = event.target;
    setEm(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleOnClick (){
    console.log(emInfo)
  }
  return (
    <div className="App">
      <div className="info">
        <label>Name:</label>
        <input type="text" name="name" value={emInfo.name} onChange={handleChange}/>
        <label>Age:</label>
        <input type="number" name="age" value={emInfo.age} onChange={handleChange}/>
        <label>Country:</label>
        <input type="text" name="country" value={emInfo.country} onChange={handleChange}/>
        <label>Position:</label>
        <input type="text" name="position" value={emInfo.position} onChange={handleChange}/>
        <label>Wage (year):</label>
        <input type="text" name="wage" value={emInfo.wage} onChange={handleChange}/>
        <button onClick={handleOnClick}>Add Employeer</button>
      </div>
    </div>
  );
}

export default App;
