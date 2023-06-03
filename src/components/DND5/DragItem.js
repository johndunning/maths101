import React from "react";
import './DND5.css'

function DragItem({place, removeMarker, count}) {
    let classStr = "dragItem";
    if(count >= 9) classStr += " tooMany";
    
    return (
      <>
        <div
          place={place}
          className={classStr}
          draggable={true}
          onDragStart={(e) => {
            removeMarker(place);
          }}
          onDragEnd={(e) => console.log("onDragEnd")}
        >
          {place[0].toUpperCase()}
        </div>
      </>
    );
}

export default DragItem;