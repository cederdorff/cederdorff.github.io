import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";
import ApplicationPage from "./pages/ApplicationPage";
import CVPage from "./pages/CVPage";

function App() {
  return (
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
      <Route path="/application" element={<ApplicationPage />} />
      <Route path="/cv" element={<CVPage />} />
    </Routes>
  );
}

export default App;
