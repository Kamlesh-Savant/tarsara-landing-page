import React from "react";
import "./CommitteeMemberCard.css";

function CommitteeMemberCard({ photo, name, role }) {
  return (
    <div className="committee-card">
      <img src={photo} alt={name} className="committee-photo" />
      <h4 className="committee-name">{name}</h4>
      <p className="committee-role">{role}</p>
    </div>
  );
}

export default CommitteeMemberCard;
