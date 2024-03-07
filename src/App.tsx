import { useEffect, useState } from "react";
import axios from "axios";
import { columns, Result } from "./components/usersTable/Columns";
import { DataTable } from "./components/usersTable/DataTable";
function App() {
  const [users, setUsers] = useState<Result[]>();

  const getUsers = async () => {
    const data = await axios.get("https://randomuser.me/api/?results=100");
    setUsers(data?.data?.results);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {users ? (
        <DataTable columns={columns} data={users} />
      ) : (
        <h2>Loading users...</h2>
      )}
    </>
  );
}

export default App;
