import { useState } from "react";
import data from "./data";
import List from "./ui/List";

const App = () => {
  const [people, setPeople] = useState(data);
  function handleClearList() {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{`${people.length} Birthdays Today`}</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={() => handleClearList()}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
