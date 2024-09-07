import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./auth/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/main" />
          <Route element={<Login />} path="/login" />

          <Route element={<Navigate to="/login"/>} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
