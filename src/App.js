import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([
    { name: "Mehmet", favDay: "Pazar", favFood: "Pide" },
    { name: "Aysenur", favDay: "Pazartesi", favFood: "Tavuk" },
    { name: "Ali", favDay: "Salı", favFood: "Et" },
    { name: "Selin", favDay: "Cuma", favFood: "Soğan" },
  ]);

  return (
    <div className="App">
      <ul className="member-list">
        {memberList.map((member, index) => (
          <li  key={index}>
            <div className="member-list-item">
              <span><strong>{member.name}</strong> - {member.favDay} -{" "}
              {member.favFood}</span>
              <div className="member-buttons">
             

              <button
                
                onClick={() => {
                  const newMemberList = [...memberList];
                  newMemberList.splice(index, 1);
                  setMemberList(newMemberList);
                }}
              >
                Delete
              </button></div>
            </div>
          </li>
        ))}
      </ul>

      <Form memberList={memberList} setMemberList={setMemberList} edit={false} />
    </div>
  );
}

export default App;
