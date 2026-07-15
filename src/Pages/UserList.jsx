import api from "../apis/axios";
import { useEffect, useState } from "react";

// DataTables of PrimeReact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// Button of PrimeReact
import { Button } from "primereact/button";

import { useNavigate } from "react-router-dom";

import { confirmDialog } from "primereact/confirmdialog";

function UserList({ toast }) {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await api.get("/Users");
    console.log(result);
    setUsers(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (id) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: async () => {
        await api.delete(`/Users/${id}`);
        toast.current.show({
          severity: "success",
          summary: "Deleted",
          detail: "User deleted Successfully",
          life: 3000,
        });
        fetchData();
      },
    });
  };

  const ActionTemplate = (rowData) => (
    <>
      <Button
        icon="pi pi-pencil"
        title="Edit"
        onClick={() => navigate(`/edit/${rowData.id}`)}
        className="p-button-rounded p-button-success mr-3 ml-2"
      />
      <Button
        icon="pi pi-trash"
        title="Delete"
        className="p-button-rounded p-button-danger"
        onClick={() => deleteUser(rowData.id)}
      />
    </>
  );

  return (
    <div className="card">
      <div className="flex justify-between m-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <Button
          label="Add User"
          icon="pi pi-plus"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>

      <DataTable
        value={users}
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        size="small"
        stripedRows
        filterDisplay="row"
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search"
          sortable
        ></Column>
        <Column
          field="username"
          header="UserName"
          filter
          filterPlaceholder="Search"
          sortable
        ></Column>
        <Column
          field="email"
          header="Email"
          filter
          filterPlaceholder="Search"
          sortable
        ></Column>
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search"
          sortable
        ></Column>
        <Column
          body={ActionTemplate}
          header="Actions"
          className="w-60"
        ></Column>
      </DataTable>
    </div>
  );
}

export default UserList;
