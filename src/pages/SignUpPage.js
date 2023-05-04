import React from "react";
import {
  PersonFill,
  KeyFill,
  ArrowRight,
  EnvelopeOpenFill,
  Check
} from "react-bootstrap-icons";

const SignUpPage = () => {
  return (
    <div className="container">
      <div className="login container__login">
        <form action="#">
          <div className="login__field">
            <PersonFill />
            <input
              type="text"
              placeholder="User name"
              required
              className="login__input"
            />
          </div>

          <div className="login__field">
            <EnvelopeOpenFill />
            <input
              type="email"
              placeholder="Email address"
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

          <div className="login__field">
            <Check />
            <input
              type="password"
              placeholder="Confirm"
              required
              className="login__input"
            />
          </div>

          <button type="submit" className="login__submit">
            <span>Sign up</span>

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

export default SignUpPage;
