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
            <li key={index}>
              <strong>{member.name}</strong> - {member.favDay} -{" "}
              {member.favFood}
            </li>
          ))}
        </ul>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const favDay = e.target.favDay.value;
            const favFood = e.target.favFood.value;
            setMemberList([...memberList, { name, favDay, favFood }]);
            e.target.reset();
          }}
        >
          <input type="text" name="name" placeholder="Name" /><br />
          <select name="favDay" id="favDay" defaultValue="Pazartesi"><br />
            <option value="Pazartesi">Pazartesi</option>
            <option value="Salı">Salı</option>
            <option value="Çarşamba">Çarşamba</option>
            <option value="Perşembe">Perşembe</option>
            <option value="Cuma">Cuma</option>
            <option value="Cumartesi">Cumartesi</option>
            <option value="Pazar">Pazar</option>
          </select><br />
          <input type="text" name="favFood" placeholder="Fav Food" /><br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
