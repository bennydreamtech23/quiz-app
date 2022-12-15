
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/landing-page/LandingPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* external pages */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </HashRouter>
  );
}

export default App;

