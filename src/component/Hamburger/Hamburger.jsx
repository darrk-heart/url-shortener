import React from "react";

function Hamburger() {
  return (
    <div
      style={{
        backgroundColor: "#3a3053",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: "9999",
        width: "85%",
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid rgb(205, 203, 203)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          height: "120px",
          padding: "40px 0",
        }}
      >
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "25px 0",
          fontWeight: "600",
          height: "65px",
        }}
      >
        <span>Login</span>
        <span
          style={{
            backgroundColor: "hsl(180, 66%, 49%)",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "8px",
            height: "40px",
            marginTop: "10px",
          }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
}

export default Hamburger;
