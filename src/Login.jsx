import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login, selectIsAuthenticated, selectUser } from "./userSlice";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
