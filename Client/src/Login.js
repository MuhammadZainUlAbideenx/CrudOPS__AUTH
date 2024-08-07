import { useState } from "react";
import { login } from "./Api";

const Login = () => {
  const defaultValue = { email: "", password: "" };
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(user);
  };

  return (
    <>
      <form
        className="container-lg col-6 align-items-left needs-validation text-white h-75  mt-5 border-rounded "
        style={{ minHeight: "60vh", marginTop: "20px" }}
      >
        <h1 className="align-center">Login</h1>
        <div className="mb-3">
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            onChange={onValueChange}
            type="email"
            className="form-control form-control-lg has-validation"
            name="email"
            id="exampleFormControlInput2"
            placeholder="email"
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            onChange={onValueChange}
            type="password"
            className="form-control form-control-lg has-validation"
            name="password"
            id="exampleFormControlInput3"
            placeholder="password"
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button onClick={onSubmit} type="submit" className="btn btn-light">
          Submit
        </button>
      </form>
    </>
  );
};
export default Login;
