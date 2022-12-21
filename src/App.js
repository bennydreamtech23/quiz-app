import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing-page/LandingPage";
import Navbar from "./components/layout/header/Navbar"
import Container from 'react-bootstrap/Container';
import {useState} from "react";

function App() {
  const [theme, setTheme] = useState("dark")
  const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
    <>
    <Container fluid className= 'app' data-theme={theme}>

     <main>
 <HashRouter>
 <Navbar changeTheme={changeTheme} currentTheme={theme}/>
      <Routes>
        {/* external pages */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </HashRouter>
</main>
    </Container>
      </>
      );
}

export default App;