import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import CompanyDetails from "./components/CompanyDetails";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Homepage />} />
            <Route path={"/:company"} element={<CompanyDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
