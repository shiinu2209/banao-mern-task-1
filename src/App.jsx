import "./App.css";
import Group from "./components/Group";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import SignIn from "./components/SignIn";
import Modal from "react-modal";
import SignUP from "./components/SignUp";
import img1 from "./assets/img1.svg";
import pfimg1 from "./assets/pfimg1.svg";
import img2 from "./assets/img2.svg";
import pfimg2 from "./assets/pfimg2.svg";
import img3 from "./assets/img3.svg";
import pfimg3 from "./assets/pfimg3.svg";
import pfimg4 from "./assets/pfimg4.svg";
import StickyBar from "./components/StickyBar";
import { IoCloseCircleSharp } from "react-icons/io5";
import LocationComponent from "./components/LocationComponent";

function App() {
  const [state, setstate] = useState("");
  const handleSigninModal = () => {
    setstate("signin");
  };
  const handleSignupModal = () => {
    setstate("signup");
  };
  return (
    <>
      <div className="Navbar">
        <Navbar login={handleSigninModal}></Navbar>
      </div>

      <Group></Group>
      <nav className="flexme navbar2">
        <span style={{ marginLeft: "80px", fontWeight: "700" }}>
          POSTS{"(368)"}
        </span>

        <select style={{ marginRight: "80px" }} name="filter">
          <option value="all">ALL</option>
          <option value="Article">Article</option>
          <option value="Education">Education</option>
        </select>
      </nav>
      <StickyBar></StickyBar>
      {state === "" && (
        <div className="login hoverme" onClick={handleSigninModal}>
          <MdEdit></MdEdit>
        </div>
      )}

      <Modal
        isOpen={state !== ""}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            overflow: "auto",
          },
        }}
        className="mymodal modal-fade"
        onRequestClose={() => setstate("")}
      >
        <div className="closeit hoverme" onClick={() => setstate("")}>
          <IoCloseCircleSharp></IoCloseCircleSharp>
        </div>
        {state === "signin" && <SignIn signup={handleSignupModal}></SignIn>}
        {state === "signup" && <SignUP login={handleSigninModal}></SignUP>}
      </Modal>

      <div className="posts flexm">
        <div className="post">
          <Post
            img={img1}
            tag="✍Article"
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            pfimg={pfimg1}
            name="Sarthak Kamra"
            views="1.4k views"
          ></Post>
          <Post
            img={img2}
            tag="🔬️ Education"
            title="Tax Benefits for Investment under National Pension Scheme launched by Government"
            content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            pfimg={pfimg2}
            name="Sarha West"
            views="1.4k views"
          ></Post>
          <Post
            btn="Visit Website"
            date="Fri, 12 Oct, 2018"
            location="Ahmedabad, India"
            img={img3}
            tag="🗓️ Meetup"
            title="Finance & Investment Elite Social Mixer @Lujiazui"
            pfimg={pfimg3}
            name="Sarthak Kamra"
            views="1.4k views"
          ></Post>
          <Post
            company="Innovaccer Analytics Private Ltd."
            location="Noida, India"
            btn="Apply on Timesjobs"
            tag="💼️ Job"
            title="Software Developer"
            pfimg={pfimg4}
            name="Sarthak Kamra"
            views="1.4k views"
          ></Post>
        </div>
        <div className="id">
          <LocationComponent></LocationComponent>
        </div>
      </div>
    </>
  );
}

export default App;
