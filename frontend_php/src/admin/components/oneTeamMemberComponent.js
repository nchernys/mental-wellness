import { Link } from "react-router-dom";

const OneTeamMemberComponent = ({ index, allTeam }) => {
  return (
    <>
      <div className="one-team-member-wrapper">
        <div className="one-team-member-details">
          <div className="one-team-member-photo">
            <img src={allTeam[index].photo} alt="photo" />
          </div>

          <div className="one-team-member-container">
            <div className="one-team-member-name">
              {allTeam[index].firstname} {allTeam[index].lastname}
            </div>
            <div className="one-team-member-title">{allTeam[index].title}</div>
            <div className="one-team-member-email">{allTeam[index].email}</div>
            <div className="one-team-member-website">
              {allTeam[index].website}
            </div>
          </div>
        </div>
        <div className="one-team-member-blurb">{allTeam[index].about}</div>
        <div className="one-team-member__return-to-all">
          {" "}
          <Link to="/team">&#x27F5; return to all team members</Link>
        </div>
      </div>
    </>
  );
};

export default OneTeamMemberComponent;
