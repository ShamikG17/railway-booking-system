import React from "react";
import signupimage from "../images/singupcard.png";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div class="d-flex justify-content-center">
        <div class="col-md-4 mt-5 bg-light shadow">
          <img src={signupimage} />
        </div>
        <div class="col-md-4">
          <div class="signup-form bg-light shadow">
            <form
              action=""
              class="mt-5 border p-4"
              method="post"
              action="signup.php"
            >
              <h4 class="mb-3 text-secondary">Sign Up</h4>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label>
                    First Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="U_Firstname"
                    id="U_Firstname"
                    class="form-control"
                    required
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label>
                    Last Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="U_Lastname"
                    id="U_Lastname"
                    class="form-control"
                    required
                  />
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Your Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="U_Email_ID"
                    id="U_Email_ID"
                    class="form-control"
                    required
                  />
                </div>

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

                <div class="form-group d-flex">
                  <div class="mb-3 col-md-6 pe-3">
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

                  <div class="mb-3 col-md-6">
                    <label>
                      Confirm Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirm_pass"
                      id="confirm_pass"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    class="btn btn-primary float-end"
                  >
                    Signup Now
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

export default Register;
