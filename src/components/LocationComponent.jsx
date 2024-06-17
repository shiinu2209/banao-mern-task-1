import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa";
import reactangle6 from "../assets/grp1.svg";
import grp2 from "../assets/grp2.svg";
import grp3 from "../assets/grp3.svg";
import grp4 from "../assets/grp4.svg";
import GroupName from "./GroupName";

import { IoIosInformationCircleOutline } from "react-icons/io";
import css from "./LocationComponent.module.css";
const LocationComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className={css.searchContainer}>
        <CiLocationOn />
        <input
          className={`input-group input-group-lg ${css.searchbar}`}
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <CiCircleRemove style={{ fontWeight: "bold" }} />
      </div>
      <div className="flexm">
        <IoIosInformationCircleOutline
          style={{ fontSize: "20px" }}
        ></IoIosInformationCircleOutline>
        <div className={css.locationinfo}>
          Your location will help us serve better and extend a personalised
          experience.
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <FaRegThumbsUp></FaRegThumbsUp>RECOMMENDED GROUPS
      </div>
      <br />
      <div>
        <GroupName img={reactangle6} name="Leisure"></GroupName>
        <GroupName img={grp2} name="Activism"></GroupName>
        <GroupName img={grp3} name="MBA"></GroupName>
        <GroupName img={grp4} name="Philosophy"></GroupName>
      </div>
      <div style={{ textAlign: "end", color: "#005EF4" }}>See more..</div>
    </div>
  );
};

export default LocationComponent;
