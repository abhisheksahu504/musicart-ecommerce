import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer
        style={{
          color: "white",
          backgroundColor: "#2E0052",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70px",
          fontSize: "15px",
          fontWeight: "bold",
          width: "100vw",
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      >
        Music Art | All rights reserved
      </footer>
    </div>
  );
};
