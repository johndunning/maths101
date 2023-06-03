import React from "react";
import './DND4.css'

function DragItem({place, removeMarker}) {
    return (
        <>
            <div
                place={place}
                className="dragItem"
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