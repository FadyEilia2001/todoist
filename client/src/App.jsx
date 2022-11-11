import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Register, Error, Landing, Dashboard, ComingSoon } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ComingSoon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
