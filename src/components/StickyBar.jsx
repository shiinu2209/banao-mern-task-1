import { FaUserGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import css from "./StickyBar.module.css";
const StickyBar = () => {
  const [joinStatus, setJoinStatus] = useState("Join Group");
  const handleJoin = () => {
    if (joinStatus === "Join Group") {
      setJoinStatus("Leave Group");
    } else {
      setJoinStatus("Join Group");
    }
  };
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight - 27) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bar ${isSticky ? "sticky" : ""}`}>
      <nav className="flexme">
        <div className={css.mylist}>
          <div className={css.listitema}>ALL POST{"(42)"}</div>
          <div className={css.listitems}>EVENT</div>
          <div className={css.listitems}>ARTICLE</div>
          <div className={css.listitems}>EDUCATION</div>
        </div>
        <div>
          <button className={`btn  ${css.mybtn}`} type="button">
            Write Post
          </button>
          <button
            onClick={handleJoin}
            type="button"
            className={`btn btn-primary  ${css.mybtn}`}
          >
            <FaUserGroup style={{ marginRight: "5px" }}></FaUserGroup>
            {joinStatus}{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StickyBar;
