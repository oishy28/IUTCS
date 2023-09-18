import React from 'react';
import '../components/executive.css'; // Import your main CSS file
import TeamMember from '../components/TeamMember'; // Import the TeamMember component

function Executive() {
  return (
    <div className="App">
      <div className="home-container">
        <div className="box">
          <h1 className="neon-text">Introducing Executive Committee of 2023-2024</h1>
        </div>
        <div className="team-row">
          <TeamMember name="Tom Cruise" position="Full Stack Developer" />
          <TeamMember name="David Wornar" position="Front End Developer" isFirst={true} />
          <TeamMember name="Vin Diesel" position="Back End Developer" />
        </div>

        {/* Second Set of Team Members */}
        <div className="team-row">
          <TeamMember name="John Doe" position="UI/UX Designer" />
          <TeamMember name="Jane Smith" position="Project Manager" />
          <TeamMember name="Alice Johnson" position="Data Analyst" />
        </div>

        {/* <div className="team-row">
          <TeamMember name="John Doe" position="UI/UX Designer" />
          <TeamMember name="Jane Smith" position="Project Manager" />
          <TeamMember name="Alice Johnson" position="Data Analyst" />
          <TeamMember name="Jane Smith" position="Project Manager" />
          <TeamMember name="Alice Johnson" position="Data Analyst" />
        </div> */}

        {/* Add more TeamMember components as needed */}
      </div>
    </div>
  );
}

export default Executive;
