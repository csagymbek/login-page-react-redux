import { useSelector } from "react-redux";
import "./App.css";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { selectUser } from "./userSlice";

export const App = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return <div className="app">{user ? <Logout /> : <Login />}</div>;
};
