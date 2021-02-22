import "./App.css";
import Overlay from "./components/Overlay/Overlay";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div className="App">
      <Overlay>
        <Quote />
      </Overlay>
    </div>
  );
}

export default App;
