import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "./config.json";

const OurTeam = () => {
  const [team, setTeam] = useState([]);
  const [inFocus, setInFocus] = useState(0);

  useEffect(() => {
    console.log("HERE!", config.fetchAllTeamApi);
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const response = await fetch(config.fetchAllTeamApi);
    if (!response.ok) {
      console.log("Failed to fetch Team.");
    } else {
      const data = await response.json();
      setTeam(data);
    }
  };

  const handleClick = (i) => {
    setInFocus(i);

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, k) => {
      dot.classList.remove("active");
      if (k === i) {
        dot.classList.add("active");
      }
    });
  };

  return (
    <div className="our-team section">
      <div className="our-team-container">
        <div className="our-team-heading">
          <div>Our Team</div>
          <Link to="/team#top">
            <button>Meet Us</button>
          </Link>
        </div>
        <div className="our-team-cards">
          {team &&
            team.length > 0 &&
            team.map((member, i) => (
              <div
                key={i}
                className={`our-team-card-container ${
                  inFocus === i ? "in-focus" : "not-in-focus"
                }`}
                onClick={() => handleClick(i)}
              >
                <div className="our-team-card">
                  <div className="our-team-card-image">
                    <img src={member.photo} alt="" />
                  </div>
                  <div className="our-team-card-info">
                    <div className="our-team-card-info__name">
                      {member.firstname} {member.lastname}
                    </div>
                    <div className="our-team-card-info__title">
                      {member.title}
                    </div>
                    <div className="our-team-card-info__blurb">
                      {member.about}
                    </div>
                    <Link
                      to={`/our-team-members/${i}`}
                      className="our-team-card-info__read-more"
                    >
                      Read more ...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="our-team-slider">
        {team &&
          team.length > 0 &&
          team.map((member, i) => (
            <div className={`dot ${i === 0 && "active"}`}></div>
          ))}
      </div>
    </div>
  );
};

export default OurTeam;
