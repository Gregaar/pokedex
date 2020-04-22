import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const loadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffcd1e",
      height: "100vh",
    }}
  >
    <h2 style={{ display: "block", color: "#2a75bb", marginRight: "10px" }}>Loading...</h2>
    <ClockLoader color={"#2a75bb"} />
  </div>
);

export default loadingSpinner;
