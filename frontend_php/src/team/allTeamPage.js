import { useState, useEffect } from "react";
import Navigation from "../navigation.js";
import { Link } from "react-router-dom";

const AllTeamPage = () => {
  const [team, setTeam] = useState([]);
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const response = await fetch(
      "/backend_php/functions/endpointAllMembers.php"
    );
    if (!response.ok) {
      console.log("Failed to fetch Team.");
    } else {
      const data = await response.json();
      console.log("Fetching team 1", data);
      setTeam(data);
    }
  };

  return (
    <div id="top">
      <Navigation
        navBackground={"rgba(0,0,0, .9)"}
        headingBackground={"transparent"}
        navTextColor={"white"}
      />
      <div class="client-all-team-section">
        <div className="client-all-team-super-heading">Our Team</div>
        <div className="client-all-team-agenda">
          We are a team of therapists who brings specialized education and
          training to provide crucial support for individuals facing mental
          health challenges. Through empathetic listening and evidence-based
          interventions, we create a safe space for clients to explore their
          thoughts and emotions. Collaborating with clients, we develop tailored
          treatment plans, drawing on a range of therapeutic modalities.
        </div>
        <div className="client-all-team-members">
          {team &&
            team.map((member, i) => (
              <>
                <div className="client-all-team__member">
                  <div className="client-all-team-member-details_wrapper">
                    <div className="client-all-team__photo">
                      <img src={member.photo} alt="" />
                    </div>
                    <div className="client-all-team-member-details__wrapper_text">
                      <div className="client-all-team__name">
                        {member.firstname} {member.lastname}{" "}
                      </div>
                      <div className="client-all-team__title">
                        {member.title}{" "}
                      </div>
                      <div className="client-all-team__contact">
                        {member.email}, {member.website}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="client-all-team__about">{member.about} </div>

                  <Link
                    to={`/our-team-members/${i}`}
                    className="client-all-team__meet-me"
                  >
                    Meet me
                  </Link>
                </div>
              </>
            ))}
        </div>
        <div className="client-all-team__apply">
          Whould you like to join our team? Apply!
        </div>
      </div>
    </div>
  );
};

export default AllTeamPage;
