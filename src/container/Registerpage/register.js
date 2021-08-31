import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import Card from "../../components/UI/Card/card";
import "./register.css";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/actions";

/**
 * @author
 * @function Register
 **/

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  return (
    <Layout>
      <div className="registerDiv">
        <Card>
          <form onSubmit={registerUser}>
            <h3>Create an Account</h3>
            <input
              name="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Firstname"
            />

            <input
              name="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Lastname"
            />

            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <div>
              <button>Sign Up</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
