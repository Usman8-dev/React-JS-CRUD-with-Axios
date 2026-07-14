import api from "../apis/axios";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const result = await api.get("/Users");
    console.log(result);
    setUsers(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
        <h1>user Lists</h1>
    </div>
  )
}

export default UserList;
