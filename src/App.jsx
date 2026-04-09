import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart"  element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
