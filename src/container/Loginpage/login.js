import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import Card from "../../components/Layout/UI/Card/card";
import "./login.css";

/**
 * @author
 * @function Login
 **/

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="loginDiv">
        <Card>
          <form>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
            />
            <div>
              <button>Login</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
