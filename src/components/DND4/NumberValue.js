import React, { useState } from "react";
import "./DND4.css";
import PlaceHolder from "./PlaceHolder";
import { placeValue } from "../../utils/utils";
import Total from "./Total";

function NumberValue({ value }) {
  const valueStr = String(Math.floor(value)).padStart(3, "0");
  const [markers, setMarkers] = useState({
    hundreds: Number.parseInt(valueStr.at(-3)),
    tens: Number.parseInt(valueStr.at(-2)),
    ones: Number.parseInt(valueStr.at(-1)),
  });
  let sourcePlace = null;

  function removeMarker(source) {
    sourcePlace = source;
  }

  function placeMarker(target) {
    console.log(`moving marker from : ${sourcePlace} to ${target}`);
    if (sourcePlace !== target) {
      let sourceMarkers = 1;
      let targetMarkers = 1;

      if (placeValue(sourcePlace) > placeValue(target)) {
        targetMarkers = placeValue(sourcePlace) / placeValue(target);
      } else {
        sourceMarkers = placeValue(target) / placeValue(sourcePlace);
        if (sourceMarkers > markers[sourcePlace]) {
          return;
        }
      }
      console.log(`targetMarkers : ${targetMarkers}`);

      const newMarkers = { ...markers };
      newMarkers[sourcePlace] -= sourceMarkers;
      newMarkers[target] += targetMarkers;
      setMarkers(newMarkers);
    }
  }

  return (
    <>
      <div className="listBox">
        <PlaceHolder
          key="hundreds"
          markers={markers.hundreds}
          place="hundreds"
          removeMarker={removeMarker}
          placeMarker={placeMarker}
        />
        <PlaceHolder
          key="tens"
          markers={markers.tens}
          place="tens"
          removeMarker={removeMarker}
          placeMarker={placeMarker}
        />
        <PlaceHolder
          key="ones"
          markers={markers.ones}
          place="ones"
          removeMarker={removeMarker}
          placeMarker={placeMarker}
        />
        <Total key="total" markers={markers} />
      </div>
    </>
  );
}

export default NumberValue;
