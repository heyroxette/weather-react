import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <Weather defaultCity="Toronto" />
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/heyroxette/weather-react"
          target="blank"
          class="source-code"
        >
          {" "}
          Open source code{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://www.shecodes.io/students/415-roxette-garcia"
          target="blank"
          class="name"
        >
          Roxette Garcia
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
