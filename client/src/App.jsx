import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Register,
  Error,
  Landing,
  Dashboard,
  ComingSoon,
  Pricing,
  Templates,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
