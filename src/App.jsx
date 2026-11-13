import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
