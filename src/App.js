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
        <footer>
          <a
            href="https://github.com/heyroxette/weather-react"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open source code{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://www.shecodes.io/students/415-roxette-garcia"
            target="blank"
            rel="noopener noreferrer"
          >
            Roxette Garcia
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
