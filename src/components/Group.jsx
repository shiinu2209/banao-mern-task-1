import css from "./Group.module.css";
import { useState } from "react";
const Group = () => {
  const [joinStatus, setJoinStatus] = useState("Join Group");
  const handleJoin = () => {
    if (joinStatus === "Join Group") {
      setJoinStatus("Leave Group");
    } else {
      setJoinStatus("Join Group");
    }
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.groupInfo}>
          <span className={css.groupName}>Computer Engineering</span>
          <br />
          <span className={css.participants}>
            {" "}
            186,358 Computer Engineers follow this
          </span>
        </div>
        <button
          onClick={handleJoin}
          type="button"
          className={`btn  ${css.btn}`}
        >
          {joinStatus}{" "}
        </button>
      </div>
      <br />
    </>
  );
};

export default Group;
