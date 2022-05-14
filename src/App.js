import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import CompanyDetails from "./components/CompanyDetails";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Favorites from "./components/Favorites";
import Nav from "./components/Nav";
import Page404 from "./components/Page404";
import Results from "./components/Results";
function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path={"/favorites"} element={<Favorites />} />
            <Route exact path={"/"} element={<Homepage />} />
            <Route path={"/:company"} element={<CompanyDetails />} />
            <Route path={"/results"} element={<Results />} />
            <Route path={"*"} element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
