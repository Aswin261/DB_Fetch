import React, { useState } from "react";
import axios from "axios";

function AddPro() {
  const [form, setForm] = useState({
    id:"",
    title: "",
    price: "",
    category:""
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/posts", form);
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
      <form class="border rounded p-3 bg-secondary" onSubmit={handleSubmit}>
     <input
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
          pattern="[0-9]+"
          required
          class="mb-1"
  /><br/>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          class="mb-1"
        /><br/>
        <input
          type="text"
          name="price"
          placeholder="Price"
          pattern="[0-9]+"
          value={form.price}
          onChange={handleChange}
          required
          class="mb-1"
        /><br/>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          required
          class="mb-1"
          onChange={handleChange}
        /><br/>
        <br/>
        <button class="bg-primary text-light border rounded p-1"type="submit">Add Product</button>
      </form>
      </div>
      <br/>
    </div>
  );
}

export default AddPro;

