import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/login";
import Router from "./routes/router";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router />
    </div>
  );
}
export default App;
