import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./styles/login.css"
// import "./styles/demo.css"
import Demo from "./pages/Demo";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<SignUpPage />} />
        <Route exact path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
