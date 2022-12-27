import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

//external pages
import LandingPage from "./components/pages/landing-page/LandingPage";
import Contact from "./components/pages/contact/Contact";
import Service from "./components/pages/services/Services";
import About from "./components/pages/about/About";
import Blog from "./components/pages/blog/Blog";
//cta pages
import Signup from "./components/core/signup/Signup";
import Login from "./components/core/login/Login";
import Reset from "./components/core/reset/Reset";
// components
import Navbar from "./components/layout/header/Navbar"
import Container from 'react-bootstrap/Container';
import {useState} from "react";

//dashboard
import Dashbaord from "./components/dashboard/Dashbaord";

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
 <div>
 <Navbar changeTheme={changeTheme} currentTheme={theme}/>
      <Routes>
        {/* external pages */}
        <Route path="/" element={<LandingPage />} />
         <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
     {/*CTA PAGES*/}
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/reset" element={<Reset/>} />
    </Routes>
      </div>
    {/*Dashboard PAGES*/}
    <Routes>
      <Route path="/dashboard" element={<Dashbaord/>} />
  </Routes>
      </HashRouter>
</main>
    </Container>
      </>
      );
}

export default App;