import React, { useState } from "react";

function InputDisplay() {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);
  const [pholder,setPholder]=useState(0);
  const placeholders = ["Father", "Mother", "Descendant1","Descendant2"];

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPholder((pholder + 1)%placeholders.length);
    setValues([...values, inputValue]);
    setInputValue("");
  };
  

  return (
    <div>
      <h3 class="mt-5">Dynamic Text</h3>
    <div class='border border-warning rounded m-5 p-5'>
      <form class='d-flex justify-content-center' onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholders[pholder]+"'s Name"}
          required
        />
        <button class="btn btn-primary  mx-1 p-1"type="submit">Display</button>
      </form>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default InputDisplay;
