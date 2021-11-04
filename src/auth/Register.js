import React from 'react'

const Register = () => {
    return (
      <form>
        <div className="model__heading">
          <h1>Create new Account</h1>
        </div>
        <div className="group">
          <input
            type="text"
            name=""
            className="group__control"
            placeholder="Enter name"
          />
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
            placeholder="Create Password"
          />
        </div>
        <div className="group">
          <input
            type="submit"
            name=""
            className="btn-dark"
            placeholder="Register"
          />
        </div>
      </form>
    );
}

export default Register
