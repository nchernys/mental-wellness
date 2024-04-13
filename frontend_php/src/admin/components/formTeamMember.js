import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";

const FormTeamMember = ({ formData }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    firstname: "",
    lastname: "",
    title: "",
    email: "",
    website: "",
    about: "",
    photo: null,
  });

  useEffect(() => {
    console.log("FORM DATA", formData);
    if (formData) {
      setForm({
        id: formData[0].id || "",
        firstname: formData[0].firstname || "",
        lastname: formData[0].lastname || "",
        title: formData[0].title || "",
        email: formData[0].email || "",
        website: formData[0].website || "",
        about: formData[0].about || "",
        photo: formData[0].photo || null,
      });
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("id", form.id);
    formDataToSend.append("firstname", form.firstname);
    formDataToSend.append("lastname", form.lastname);
    formDataToSend.append("title", form.title);
    formDataToSend.append("email", form.email);
    formDataToSend.append("website", form.website);
    formDataToSend.append("about", form.about);
    formDataToSend.append("photo", form.photo);

    try {
      console.log("FORM DATA TO SEND", formDataToSend, form.photo);
      let response;
      if (form.id) {
        response = await fetch(config.editOneTeamMemberApi + `?id=${form.id}`, {
          method: "POST",
          body: formDataToSend,
        });
      } else {
        response = await fetch(config.addOneTeamMemberApi, {
          method: "POST",
          body: formDataToSend,
        });
      }
      if (response.ok) {
        const data = await response.json();
        setForm({
          firstname: "",
          lastname: "",
          title: "",
          email: "",
          website: "",
          about: "",
          photo: null,
        });

        navigate("/admin-all-team");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form
      className="admin-team-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={handleChange}
        value={form.firstname}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={handleChange}
        value={form.lastname}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={form.title}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        onChange={handleChange}
        value={form.website}
      />
      <textarea
        type="text"
        name="about"
        placeholder="About"
        rows="10"
        onChange={handleChange}
        value={form.about}
      ></textarea>
      <input type="file" name="photo" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormTeamMember;
