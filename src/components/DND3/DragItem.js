import React from "react";

function DragItem({place, dragMarker}) {
    return (
        <>
            <div
                place={place}
                className="dragItem"
                draggable={true}
                onDragStart={(e) => {
                    console.log('onDragStart '+place);
                    console.log('dragMarker: '+dragMarker);
                    dragMarker(place);
                }}
                onDragEnd={(e) => console.log("onDragEnd")}
            >
                {place[0].toUpperCase()}
            </div>
        </>
    );
}

export default DragItem;