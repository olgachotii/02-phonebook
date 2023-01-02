import React from "react";

export default function Filter({ value, onChange }) {
  return (
    <div>
      <p>Found contacts by name</p>
      <input name="filter" value={value} onChange={onChange}></input>
    </div>
  );
}
