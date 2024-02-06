import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? "skyblue" : "gray"} onClick={onSelect} />;
}
export default Star;
