import "./App.css";
import InputDisplay from "./components/dynamic_text";
import LoginForm from "./components/login";
import QuizApp from "./components/quiz";
import Tablist from "./components/tabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./products";
import DisplayPro from "./components/dispProduct";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
