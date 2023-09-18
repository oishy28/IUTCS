import React from 'react';
import './executive.css'; // Import the CSS file for styling

const TeamMember = (props) => {
  const { name, position, isFirst } = props;

  // Add a conditional class to the first team member
  const profileCardClass = `profile-card ${isFirst ? 'first-member' : ''}`;

  return (
    <div className={profileCardClass}>
      <div className="img">
        <img src="./man.jpg" alt={name} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{position}</p>
    
      </div>
    </div>
  );
};

export default TeamMember;
