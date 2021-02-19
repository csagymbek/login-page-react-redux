import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "./userSlice";

export const Logout = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="logout">
      <h1>
        Welcome <span>{name}</span>
      </h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
