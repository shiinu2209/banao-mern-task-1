import React, { useState } from "react";

const GroupName = (props) => {
  const [state, setstate] = useState(false);
  return (
    <>
      <div className="flexme">
        <div className="flexme">
          <img src={props.img} alt="" />
          &nbsp;&nbsp;
          <div style={{ fontWeight: "500" }}>{props.name}</div>
        </div>
        <div>
          <button
            style={{ borderRadius: "20px", padding: "3px 6px" }}
            onClick={() => {
              setstate(!state);
            }}
            className={state ? "btn btn-dark" : "btn btn-light"}
          >
            {state ? "Followed" : "Follow"}
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default GroupName;
