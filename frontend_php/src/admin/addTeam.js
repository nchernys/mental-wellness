import { useState } from "react";
import FormTeamMember from "./components/formTeamMember";
import AdminNavigation from "./adminNavigation";

const AddTeam = () => {
  const formData = [];
  return (
    <>
      <AdminNavigation />
      <div class="add-team-section">
        <h1>Our Team</h1>
        <p>Fill out the form to add a new team member </p>
        <FormTeamMember />
      </div>
    </>
  );
};

export default AddTeam;
