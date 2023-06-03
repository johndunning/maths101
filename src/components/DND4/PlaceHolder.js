import DragTarget from "./DragTarget";
import React from "react";
import {markerValue, placeTitle} from "../../utils/utils";
import './DND4.css'

function PlaceHolder({ markers, place, removeMarker, placeMarker }) {

  return (
    <div className="placeholder">
      <div className="header">{placeTitle(place)}</div>
      <div className="content">
        <DragTarget
          markers={markers}
          place={place}
          removeMarker={removeMarker}
          placeMarker={placeMarker}
        />
      </div>
      <div className="footer">
          {markerValue(place, markers)}
      </div>
    </div>
  );
}

export default PlaceHolder;
