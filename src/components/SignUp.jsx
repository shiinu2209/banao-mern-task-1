import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import formsvg from "../assets/form.svg";
import css from "./SignIn.module.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleconfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={css.custommodalheader}>
        Let{"'"}s learn, share & inspire each other with our passion for
        computer engineering. Sign up now 🤘🏼
      </div>
      <div className={css.mycontainer}>
        <div className={css.mycontainer1}>
          <div id={css.signin}>
            <span className={css.spana}>Sign Up</span>
            <span className={css.spanb}>Sign Up</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
              />

              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                style={{ width: "100%" }}
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <div className={`${css.passwordcontainer} form-control`}>
                <input
                  style={{ border: "none" }}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
                <button className="btn btn-light" onClick={handleShowPassword}>
                  {showPassword === true ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </button>
              </div>
            </div>
            <div className="form-group">
              <input
                style={{ width: "100%" }}
                type="email"
                className="form-control"
                value={confirmPassword}
                onChange={handleconfirmPassword}
                placeholder="Confirm Password"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button type="submit" className={`${css.btn} btn btn-primary`}>
                Sign In
              </button>
              <span
                onClick={props.login}
                className={`hoverme ${css.spanc}`}
                style={{
                  textDecoration: "underline",
                  color: "rgb(0, 94, 244)",
                }}
              >
                or Sign In
              </span>
            </div>
            <div className={css.socialButtons}>
              <button className={`${css.btnsocial} btn btn-light`}>
                <CiFacebook></CiFacebook> Login with Facebook
              </button>
              <button className={`${css.btnsocial} btn btn-light`}>
                <SiGmail></SiGmail> Login with Google
              </button>
            </div>
          </form>
        </div>
        <div className={css.mycontainer2}>
          <div
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            Already have an account{" "}
            <span
              className="hoverme"
              onClick={props.login}
              style={{ color: "rgb(0, 94, 244)" }}
            >
              Login
            </span>
          </div>
          <img
            src={formsvg}
            style={{ height: "320px", width: "320px", marginTop: "10px" }}
            alt="img"
          />
        </div>
      </div>
      <div className={css.infosignup}>
        By signing up, you agree to our Terms & conditions, Privacy policy
      </div>
    </>
  );
};

export default SignIn;
