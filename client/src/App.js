import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [emInfo, setEm] = useState({
    name: "",
    age: 0,
    country: "",
    position: "",
    wage: 0,
  });

  const [allEmployees, setAllEmployees] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setEm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleOnClick() {
    Axios.post("http://localhost:3001/create", { emInfo: emInfo }).then(() => {
      console.log("Info Submitted");
    });
  }
  function showEmployees() {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setAllEmployees(response.data);
    });
  }
  return (
    <div className="App">
      <div className="info">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={emInfo.name}
          onChange={handleChange}
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={emInfo.age}
          onChange={handleChange}
        />
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={emInfo.country}
          onChange={handleChange}
        />
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={emInfo.position}
          onChange={handleChange}
        />
        <label>Wage (year):</label>
        <input
          type="text"
          name="wage"
          value={emInfo.wage}
          onChange={handleChange}
        />
        <button onClick={handleOnClick}>Add Employeer</button>
      </div>
      <hr width="100%" />
      <div className="data-base">
        <button onClick={showEmployees}>Show Employees</button>
        <ol>
          {allEmployees.map((employee) => {
            return <li>  {employee.name} {employee.age} {employee.country} {employee.position}{employee.wage}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
