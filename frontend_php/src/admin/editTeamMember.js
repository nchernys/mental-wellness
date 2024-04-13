import { useState, useEffect } from "react";
import AdminNavigation from "./adminNavigation";
import FormTeamMember from "./components/formTeamMember";
import { useParams } from "react-router-dom";
import config from "../config.json";

const EditTeamMember = () => {
  const { id } = useParams();
  const [teamMember, setTeamMember] = useState();
  useEffect(() => {
    const fetchTeamMemberToEdit = async () => {
      const response = await fetch(
        config.fetchOneTeamMemberByIdApi + `?id=${id}`
      );

      if (!response.ok) {
        console.log("Failed to fetch the team member.");
      } else {
        const data = await response.json();
        setTeamMember(data);
      }
    };
    fetchTeamMemberToEdit();
  }, []);

  return (
    <>
      <AdminNavigation />
      <div className="add-team-section">
        <h1>Edit Team</h1>
        <p>Fill out the form to update the team member details </p>
        {teamMember ? (
          <FormTeamMember formData={teamMember} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default EditTeamMember;
