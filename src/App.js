import "./App.css";
import RandomNumber from "./components/Randomnumber";

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={100000} />
    </div>
  );
}

export default App;
