import React from "react";
import loginimage from "../images/logincard.png";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div class="d-flex justify-content-center">
        <div class="col-md-3 mt-5 bg-light shadow">
          <img src={loginimage} />
        </div>
        <div class="col-md-3">
          <div class="login-form bg-light shadow">
            <form class="mt-5 border p-4" method="post" action="login.php">
              <h4 class="mb-3 text-secondary">Login</h4>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>
                    Phone Number<span class="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name="U_PhoneNumber"
                    id="U_PhoneNumber"
                    class="form-control"
                    required
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="pass_word"
                    id="pass_word"
                    class="form-control"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary float-end">
                    Log me in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
