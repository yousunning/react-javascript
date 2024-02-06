import React from "react";
import { createArray } from "../lib";
import Star from "./star";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
    </>
  );
}
