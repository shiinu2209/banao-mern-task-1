// import React from "react";
import { IoSearch } from "react-icons/io5";
import whole from "../assets/whole.svg";
import css from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <>
      <nav className={css.Navbar}>
        <img className={css.logo} src={whole} alt="whole" />

        <div
          className="d-flex"
          style={{ width: "360px", borderRadius: "21px" }}
        >
          <button type="button" className={`btn ${css.searh}`}>
            <IoSearch />
          </button>

          <input
            className="form-control custom-input-search"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </div>
        <div className={css.createaccount}>
          <span>Create Account.</span>
          <span onClick={props.login} className={css.create}>
            IT{"'"}s Free!
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
