import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Register,
  Error,
  Landing,
  Dashboard,
  ComingSoon,
  Login,
  Pricing,
  Templates,
  Stats,
  DueToday,
  AllTasks,
  UrgentTasks,
  ProtectedRoute,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/templates" element={<Templates />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="due-today" element={<DueToday />} />
          <Route path="all-tasks" element={<AllTasks />} />
          <Route path="urgent" element={<UrgentTasks />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
