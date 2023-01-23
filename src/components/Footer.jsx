import React from "react";
export default function Footer({mode}) {

    const style={
        borderTop:mode ? "":"1px solid #FC1503"
    }
  return (
    <div className="Footer" style={style}>
      <small>
        Copyrights &copy;{`${new Date().getFullYear()}`}
        <span style={{ color: "#FC1503", fontWeight: "bold",margin:"5px" }}>
          {" "}
          Kingsley
        </span>
        Aigbojie.
      </small>
    </div>
  );
}
