import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import LinkTree from "./pages/LinkTree";

function App() {
  return (
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<LinkTree />} />
    </Routes>
  );
}

export default App;
