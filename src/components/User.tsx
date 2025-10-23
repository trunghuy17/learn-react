import { NavLink, Outlet } from "react-router-dom";

function User() {
  return (
    <div>
      <h1>User</h1>
      <div>
        <h4>Nguyen Trung Huy</h4>
      </div>
      <br />
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <NavLink
            to="/user/profile"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounde-t-lg cursor-pointer"
          >
            Profile
          </NavLink>
        </li>
        <li className="me-2">
          <NavLink
            to="/user/payment"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounde-t-lg cursor-pointer"
          >
            Payment
          </NavLink>
        </li>
      </ul>
      <br />
      <Outlet />
    </div>
  );
}

export default User;
