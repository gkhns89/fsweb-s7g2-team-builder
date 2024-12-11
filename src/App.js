import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [memberList, setMemberList] = useState([
    { name: "Mehmet", favDay: "Pazar", favFood: "Pide" },
    { name: "Aysenur", favDay: "Pazartesi", favFood: "Tavuk" },
    { name: "Ali", favDay: "Salı", favFood: "Et" },
    { name: "Selin", favDay: "Cuma", favFood: "Soğan" },
  ]);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {memberList.map((member, index) => (
            <li key={index}><strong>{member.name}</strong> - {member.favDay} - {member.favFood}</li>
          ))}
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
