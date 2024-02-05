import React from "react";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Mounment Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9980 },
  { name: "Mt. Tallac", elevation: 5196 },
];
function List({ data = [], renderEmpty }) {
  if (!data.langth) return renderEmpty;
  return <p>{data.langth}items</p>;
}

export default function App() {
  return <List renderEmpty={<p>This list is empty</p>}></List>;
}
