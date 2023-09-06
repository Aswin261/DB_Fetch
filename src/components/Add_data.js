import React, { useState } from "react";
import axios from "axios";

function AddUser() {
  const [form, setForm] = useState({
    id:"",
    email: "",
    username: "",
    password: "",
    firstname:"",
    lastname:""
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/users", form);
      console.log(res.data);
      alert("Data added successfully");
    } catch (err) {
      console.error(err);
      alert("Data cannot be added");
    }
  };

  

  return (
    <div >
      <div className="d-flex justify-content-center">
      <form class="border rounded p-3  m-5 bg-secondary" onSubmit={handleSubmit}>
     <input
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
          pattern="[0-9]+"
          required
          class="mb-1"/><br/>
        <input
          type="email"
          name="email"
          placeholder="Mail Id"
          value={form.email}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          class="mb-1" /><br/>
      {/*<input
          type="text"
          name="name.firstname"
          placeholder="Firstname"
          value={form.name.firstname}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="text"
          name="name.lastname"
          placeholder="Lastname"
          value={form.name.lastname}
          onChange={handleChange}
          required
          class="mb-1"/><br/>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.address.city}
          onChange={handleChange}
  /><br/>*/}<br/>
        <button class="bg-primary text-light border rounded p-1"type="submit">Add User</button>
      </form>
      </div>
    </div>
  );
}

export default AddUser;
