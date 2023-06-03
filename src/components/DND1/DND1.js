import React from "react";
import './DND1.css'

function DND1() {
  return (
    <>
      <div
          id="thisone"
          removerfunc={() => console.log("removed from container")}
          className="source"
        draggable={true}
        onDragStart={(e) => {
            e.dataTransfer.setData("text", e.target.id);
            e.dataTransfer.setData("object", () => console.log("removed from container"));
            console.log("onDragStart")
        }}
        onDragEnd={(e) => console.log("onDragEnd")}
      >
        Drag source
      </div>

      <div
          className="target"
        onDragEnter={(e) => console.log("onDragEnter")}
        onDragLeave={(e) => console.log("onDragLeave")}
        onDragOver={(e) => {
          e.preventDefault();
          console.log("onDragOver");
        }}
        onDrop={(e) => {
            console.log("onDrop");
            console.log(e.dataTransfer.getData("text"));
        }}
      >
        Drop target
      </div>
    </>
  );
}

export default DND1;
