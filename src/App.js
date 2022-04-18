import "./App.css";
import data from "./data.js";
import { useState } from "react";
function App() {
  const [allUsers, setAllUsers] = useState(data);
  return (
    <div className="App">
      <main>
        <div className="container">
          <h2>{allUsers.length} birthdays today</h2>
          {allUsers.map((person) => {
            const { age, image, name, id } = person;
            return (
              <article className="person">
                <img src={image} width="150px" />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
          <button onClick={() => setAllUsers([])}>Clear All</button>
        </div>
      </main>
    </div>
  );
}

export default App;
