import React from "react";
import { useParams } from "react-router";

export default function Header() {
  const { id } = useParams();
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {id}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
