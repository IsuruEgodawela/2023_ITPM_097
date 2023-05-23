import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";


export default function UserRegistration() {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [pwd1, setPassowrd1] = useState("");
  const [pwd2, setPassowrd2] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    console.log(pwd1);
    console.log(pwd2);

    let newuser = {
      userName: userName,
      email: email,
      pwd: pwd1,

    };
    if (pwd1 == pwd2) {
      axios
        .post("http://localhost:8080/api/user/signup", newuser)
        .then(() => {
          alert("Registration Success");
          window.location = "/";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Password dismatch");
    }
    setuserName("");
    setemail("");
    setPassowrd1("");
    setPassowrd2("");

  };

  return (
      <div><br/><br/><br/>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            style={{
              width: 1000,
              background: "#DCEAFB",
              height: 600,
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <form action="" method="post" name="form" onSubmit={sendData}>
                <div className="row g-0">
                  <div className="col-xl-7 d-none d-xl-block">
                    <br />
                    <br />
                    <h3>
                      {" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <b>
                        <u>USER&nbsp;&nbsp;REGISTERATION</u>
                      </b>
                    </h3>
                    <br />
                    <br />
                    <img
                      src="https://res.cloudinary.com/dpoqmqjjp/image/upload/v1684553517/home-intro-image-1-removebg-preview_qpknfx.png"
                      style={{ width: 450 }}
                    />
                  </div>

                  <div className="col-xl-5">
                    {" "}
                    <br />
                    <div className="form-outline mb-2">
                      <br />
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full
                        Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setuserName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-envelope"></i>
                        &nbsp;&nbsp;&nbsp;Email Address
                      </span>
                      <div className="col-md-10">
                        <input
                          type="email"
                          className="form-control"
                          pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                          inputMode="email"
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-key" aria-hidden="true"></i>
                        &nbsp;&nbsp;&nbsp;Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          className="form-control"
                          data-toggle="tooltip"
                          data-placement="center"
                          title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                          onChange={(e) => setPassowrd1(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-unlock-alt"></i>
                        &nbsp;&nbsp;&nbsp;Confirm Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          className="form-control"
                          title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                          onChange={(e) => setPassowrd2(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-left pt-1">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        {" "}
                        Already Registered? &nbsp;&nbsp;
                      </span>
                      <a href="/signin">Sign In</a>{" "}
                    </div>
                    <br />
                    <div>
                      <Button
                        type="submit"
                        style={{
                          background: "#8BC0FF",
                          width: 33 + "%",
                          height: 20 + "%",
                          color: "BLACK",
                          borderRadius: 20,
                        }}
                      >
                        <i className="fa fa-check-circle" />
                        &nbsp;Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br/><br/><br/>
      </div>
  );
}
