import api from "../apis/axios";
import { useEffect, useState } from "react";

// DataTables
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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
    <div className="card">
      <DataTable
        value={users}
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        size="normal"
        stripedRows
        filterDisplay="row"
      >
        <Column field="name" header="Name" filter filterPlaceholder="Search" sortable ></Column>
        <Column field="username" header="UserName" filter filterPlaceholder="Search" sortable ></Column>
        <Column field="email" header="Email" filter filterPlaceholder="Search" sortable ></Column>
        <Column field="age" header="Age" filter filterPlaceholder="Search" sortable ></Column>
        <Column header="Actions" className="w-60"></Column>
      </DataTable>
    </div>
  );
}

export default UserList;
