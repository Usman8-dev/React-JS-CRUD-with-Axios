import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Pages/UserList";
import AddEditUser from "./Pages/AddEditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddEditUser />} />
          <Route path="/edit/:id" element={<AddEditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
