import DragTarget from "./DragTarget";
import React from "react";
import {totalValue} from "../../utils/utils";
import './DND5.css'

function Total({ markers, place, dragMarker, moveMarker }) {

  console.log(markers);
  return (
    <div className="totalContent">
          {totalValue(markers)}
    </div>
  );
}

export default Total;
