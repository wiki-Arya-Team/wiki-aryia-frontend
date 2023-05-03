import React from "react";
import { PersonFill, KeyFill, ArrowRight } from "react-bootstrap-icons";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login container__login">
        <form action="#">
          <div className="login__field">
            <PersonFill />
            <input
              type="email"
              placeholder="User name/ Email"
              required
              className="login__input"
            />
          </div>

          <div className="login__field">
            <KeyFill />
            <input
              type="password"
              placeholder="Password"
              required
              className="login__input"
            />
          </div>

          <button type="submit" className="login__submit">
            <span>LOG IN NOW</span>
            <ArrowRight />
          </button>
        </form>
      </div>

      <div className="background container__background">
        <span className="background__shape background__shape1"></span>
        <span className="background__shape background__shape2"></span>
        <span className="background__shape background__shape3"></span>
        <span className="background__shape background__shape4"></span>
      </div>
    </div>
  );
};

export default LoginPage;
