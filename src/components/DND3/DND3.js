import React, {useState} from "react";
import DragTarget from "./DragTarget";
import "./DND3.css";

function DND3() {
    const [markers, setMarkers] = useState({hundreds: 3, tens: 2, ones: 1 });
    let sourcePlace = null;

    function placeValue(place) {
        switch(place) {
            case 'hundreds':
                return 100;
                break;
            case 'tens':
                return 10;
                break;
            case 'ones':
                return 1;
                break;
        }
    }

    function dragMarker(source) {
        sourcePlace = source;
    }

    function moveMarker(target) {
        console.log(`moving marker from : ${sourcePlace} to ${target}`);
        if(sourcePlace !== target) {
            let sourceMarkers = 1;
            let targetMarkers = 1;

            if(placeValue(sourcePlace) > placeValue(target)) {
                targetMarkers = placeValue(sourcePlace) / placeValue(target);
            } else {
                sourceMarkers = placeValue(target) / placeValue(sourcePlace);
                if(sourceMarkers > markers[sourcePlace]) {
                    return;
                }
            }
            console.log(`targetMarkers : ${targetMarkers}`);

            const newMarkers = {...markers};
            newMarkers[sourcePlace]-=sourceMarkers;
            newMarkers[target]+=targetMarkers;
            setMarkers(newMarkers);
        }
    }

    return (
        <div className="listBox">
            {console.log(markers)}
            <DragTarget key="hundreds" markers={markers.hundreds} place='hundreds' dragMarker={dragMarker} moveMarker={moveMarker}/>
            <DragTarget key="tens" markers={markers.tens} place='tens' dragMarker={dragMarker} moveMarker={moveMarker}/>
            <DragTarget key="ones" markers={markers.ones} place='ones' dragMarker={dragMarker} moveMarker={moveMarker}/>
        </div>
    );
}

export default DND3;
