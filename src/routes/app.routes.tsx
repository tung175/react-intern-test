import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import UsersTable from "../components/usersTable";
// import Login from "../components/login";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-table" element={<UsersTable />} />
        {/* <Route
          path="/users"
          element={
            <PrivateRoute>
              <TableUsers />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
