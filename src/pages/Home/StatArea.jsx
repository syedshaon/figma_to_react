import React from "react";
import StatCard from "../../contents/StatCard";
import followers from "../../assets/icons/followers.svg";
import Like from "../../assets/icons/Like.svg";
import Happy from "../../assets/icons/Happy.svg";
import Scan from "../../assets/icons/Scan.svg";

function StatArea() {
  return (
    <div className="container px-2 md:px-7  py-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard imgURL={followers} title={"Followers"} number={"2452"} />
      <StatCard imgURL={Like} title={"Solved Problems"} number={"63"} />

      <StatCard imgURL={Happy} title={"Happy Customers"} number={"250+"} />
      <StatCard imgURL={Scan} title={"Projects"} number={"52"} />
    </div>
  );
}

export default StatArea;
