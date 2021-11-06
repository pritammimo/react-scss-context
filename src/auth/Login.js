import React from 'react'

const Login = () => {
    return (
      <form>
        <div className="model__heading">
          <h1>Login</h1>
        </div>
       
        <div className="group">
          <input
            type="email"
            name=""
            className="group__control"
            placeholder="Enter email"
          />
        </div>
        <div className="group">
          <input
            type="password"
            name=""
            className="group__control"
            placeholder="Enter Password"
          />
        </div>
        <div className="group flex space-between y-center">
          <input
            type="submit"
            name=""
            className="btn-dark"
            placeholder="Login"
          />
          <span>Create new account?</span>
        </div>
      </form>
    );
}

export default Login
