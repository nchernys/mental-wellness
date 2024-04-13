import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./navigation";
import OneTeamMemberComponent from "./admin/components/oneTeamMemberComponent";
import config from "./config.json";

const OneTeamMember = () => {
  const { currentId } = useParams();
  const [allTeam, setAllTeam] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchAllTeam = async () => {
      const response = await fetch(config.fetchAllTeamApi);
      if (!response.ok) {
        console.log("Failed to fetch the team member.");
      } else {
        const data = await response.json();
        setAllTeam(data);
      }
    };

    fetchAllTeam();

    const sanitizedCurrentId = parseInt(currentId);
    if (!isNaN(sanitizedCurrentId) && sanitizedCurrentId >= 0) {
      setCurrentIndex(sanitizedCurrentId);
    }
  }, [currentId]);

  const handleDisplayTeamMember = (i) => {
    setCurrentIndex(i);
  };

  return (
    <>
      <Navigation
        headingBackground={"transparent"}
        navTextColor={"rgba(0,0,0,0.3)"}
      />
      {allTeam.length > 0 && currentIndex !== null && (
        <div className="one-team-member-section">
          <div className="one-team-member-heading">
            <span> Our Team</span>
          </div>
          <div className="one-team-member-show-all">
            {allTeam.map((item, i) => (
              <div
                onClick={() => handleDisplayTeamMember(i)}
                className="one-team-member-photo one-team-member-show-all-photos"
                style={{ opacity: i == currentIndex ? "1" : ".5" }}
              >
                <img src={item.photo} />
              </div>
            ))}
          </div>
          <OneTeamMemberComponent index={currentIndex} allTeam={allTeam} />
        </div>
      )}
    </>
  );
};

export default OneTeamMember;
