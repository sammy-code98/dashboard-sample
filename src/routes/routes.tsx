import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import { Dashboard, UserDetails, TotalUsers } from "../pages/Dashboard";
import { Error } from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/user-details',
    element: <UserDetails />
  },
  {
    path: '/total-users',
    element: <TotalUsers />
  }
]);




export default router;