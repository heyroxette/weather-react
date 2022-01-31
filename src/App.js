import "./App.css";
import Weather from "./Weather";


function App() {
 return (
   <div className="App">
     <div className="card">
       <div className="card-body">
         <div className="form-group">
           <Weather defaultCity="Toronto"/>
         </div>
       </div>
     </div>
   </div>
 );
}

export default App;
