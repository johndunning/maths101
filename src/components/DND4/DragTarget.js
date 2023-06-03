import React from "react";
import DragItem from "./DragItem";
import './DND4.css'

function DragTarget({markers, place, removeMarker, placeMarker}) {
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
                debugger
                placeMarker(place);
            }}
        >
            <>
            {Array.from({ length: markers }, (_, i) => (
                <DragItem key={`${place[0].toUpperCase()}::${i}`} place={place} removeMarker={removeMarker}/>
            ))}
            {/*{[...Array(markers).keys()].map(key => <DragItem key=`${place[0].uppercase()}::${key}` place={place}/>)}*/}
            </>
        </div>
    );
}

export default DragTarget;