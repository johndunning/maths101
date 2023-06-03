import React from "react";
import DragItem from "./DragItem";

function DragTarget({markers, place, dragMarker, moveMarker}) {
    return (
        <div
            id={place}
            className="dragTarget"
            onDragEnter={(e) => console.log("onDragEnter")}
            onDragLeave={(e) => console.log("onDragLeave")}
            onDragOver={(e) => {
                e.preventDefault();
                console.log("onDragOver");
            }}
            onDrop={(e) => {
                moveMarker(place);
            }}
        >
            <>
            {Array.from({ length: markers }, (_, i) => (
                <DragItem key={`${place[0].toUpperCase()}::${i}`} place={place} dragMarker={dragMarker}/>
            ))}
            {/*{[...Array(markers).keys()].map(key => <DragItem key=`${place[0].uppercase()}::${key}` place={place}/>)}*/}
            </>
        </div>
    );
}

export default DragTarget;