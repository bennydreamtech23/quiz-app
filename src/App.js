
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing-page/LandingPage";
import { themeContext } from "./Context";
import {useContext} from "react";
import './App.css'
function App() {
 const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <HashRouter className="App" style={{background: darkMode?'#000000':'', color: darkMode?'#ffffff':''}}>
      <Routes>
        {/* external pages */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </HashRouter>
      );
}

export default App;