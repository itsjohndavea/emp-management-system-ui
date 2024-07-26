import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import DashBoard from "./pages/dashboard/DashBoard";
import NoMatch from "./pages/nomatch/NoMatch";
import PostUser from "./pages/employee/PostUser";
import UpdateUser from "./pages/employee/UpdateUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/employee" element={<PostUser />}></Route>
        <Route path="/employee/:id" element={<UpdateUser />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
