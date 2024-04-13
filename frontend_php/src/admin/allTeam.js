import { useState, useEffect } from "react";
import AdminNavigation from "./adminNavigation";
import config from "../config.json";

const AllTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(config.fetchAllTeamApi);
      if (!response.ok) {
        console.log("Failed to fetch Team.");
      } else {
        const data = await response.json();
        console.log("Fetching team 1", data);
        setTeam(data);
      }
    };

    fetchTeam();
  }, []);

  const handleEdit = async (id) => {
    window.location.href = `/admin-edit-team/${id}`;
  };

  const handleDelete = async (id) => {
    const response = await fetch(config.deleteOneTeamMemberApi + `?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Failed to fetch the Team Member.");
    } else {
      const data = await response.json();
      setTeam(data);
      console.log("The team member is deleted.");
    }
  };

  return (
    <>
      <AdminNavigation />
      <div class="dashboard-all-team-section">
        <div className="dashboard-all-team-super-heading">Our Team</div>
        {team &&
          team.map((member) => (
            <>
              <div className="dashboard-all-team__member">
                <div className="dashboard-all-team-member-details_wrapper">
                  <div className="dashboard-all-team__photo">
                    <img src={member.photo} alt="" />
                  </div>
                  <div className="dashbaord-all-team-member-details__wrapper_text">
                    <div className="dashboard-all-team__name">
                      {member.firstname} {member.lastname}{" "}
                    </div>
                    <div className="dashboard-all-team__title">
                      {member.title}{" "}
                    </div>
                    <div className="dashboard-all-team__contact">
                      {member.email}, {member.website}{" "}
                    </div>
                  </div>
                </div>
                <div className="dashboard-all-team__about">{member.about} </div>
                <div className="dashboard-all-team__edit_delete">
                  <span onClick={() => handleEdit(member.id)}>edit</span>
                  <span onClick={() => handleDelete(member.id)}>delete</span>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default AllTeam;
