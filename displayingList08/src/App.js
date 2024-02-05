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
  return (
    <ul>
      {tahoe_peaks.map((peak, i) => (
        <li key={i}>
          {peak.name}-{peak.elevation.toLocaleString()}ft
        </li>
      ))}
    </ul>
  );
}
