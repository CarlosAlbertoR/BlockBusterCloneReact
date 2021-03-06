import React from 'react';

function Signup() {
  return (
    <div className="login-wrapper" id="signup-content">
      <div className="login-content">
        <a href="http" className="close">
          x
        </a>
        <h3>sign up</h3>
        <form method="post" action="#">
          <div className="row">
            <label htmlFor="username-2">
              Username:
              <input
                type="text"
                name="username"
                id="username-2"
                placeholder="Carlos A."
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                required="required"
              />
            </label>
          </div>

          <div className="row">
            <label htmlFor="email-2">
              your email:
              <input
                type="password"
                name="email"
                id="email-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                required="required"
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="password-2">
              Password:
              <input
                type="password"
                name="password"
                id="password-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                required="required"
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="repassword-2">
              re-type Password:
              <input
                type="password"
                name="password"
                id="repassword-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                required="required"
              />
            </label>
          </div>
          <div className="row">
            <button type="submit">sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
