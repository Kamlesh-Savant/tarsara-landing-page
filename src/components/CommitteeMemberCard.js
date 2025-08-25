import React from "react";

function CommitteeMemberCard({ name, role, photo }) {
  return (
    <div className="committee-member-card">
      <div className="committee-member">
        <img 
          src={photo} 
          alt={name} 
          className="member-image"
        />
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
}

export default CommitteeMemberCard;