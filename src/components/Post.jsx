import css from "./Post.module.css";
import { FaRegEye } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const Post = (props) => {
  const [state, setstate] = useState(false);

  return (
    <>
      <div className={` ${css.mycontainer}`}>
        <div className="card">
          {props.img && (
            <img src={props.img} className="card-img-top" alt="..." />
          )}
          <div className={css.cont}>
            <div className="tag flexme">
              <h4>{props.tag}</h4>
              <h3 onClick={() => setstate(!state)} className="hoverme">
                ...
                {state && (
                  <div className={css.editmenu}>
                    <div className={css.menu}>
                      <span className={css.item}>Edit</span>
                      <span className={css.item}>Report</span>
                      <span className={css.item}>Delete</span>
                    </div>
                  </div>
                )}
              </h3>
            </div>
            <div className="title">
              <h5>{props.title}</h5>
            </div>
            <div className="content">
              <p>{props.content}</p>
            </div>
            <div className={`${css.details} flexme`}>
              {props.date && (
                <div style={{ fontWeight: "600", paddingRight: "10px" }}>
                  <FaCalendarAlt></FaCalendarAlt>
                  {props.date}
                </div>
              )}
              {props.company && (
                <div style={{ fontWeight: "600", paddingRight: "10px" }}>
                  <FaBriefcase></FaBriefcase>
                  {props.company}
                </div>
              )}
              {props.location && (
                <div style={{ fontWeight: "600", paddingRight: "10px" }}>
                  <FaLocationDot></FaLocationDot>
                  {props.location}
                </div>
              )}
            </div>
            {props.btn && <button className={css.button}>{props.btn}</button>}
            <div className={`${css.profile} flexme`}>
              <div className={`${css.views} flexme`}>
                <img
                  style={{ height: "46px", marginRight: "4px" }}
                  src={props.pfimg}
                  alt=""
                />
                <div style={{ fontWeight: "500" }}>{props.name}</div>
              </div>
              <div
                style={{ paddingLeft: "10px" }}
                className={`${css.views} flexme`}
              >
                <FaRegEye />
                <span>{props.views}</span>

                <IoShareSocial
                  className={`${css.profile} flexme`}
                  style={{ marginLeft: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="solid"></hr>
    </>
  );
};

export default Post;
