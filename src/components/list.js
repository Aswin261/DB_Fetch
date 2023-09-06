import React, { useState } from "react";

function Listdel() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleClick = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <div>
        <h3 class="mt-5">Removable List</h3>
        <div class='border border-warning rounded m-5 p-5'>
            <div class="d-flex justify-content-center">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter List Values" />
      <button class="btn btn-primary  mx-1 p-1"onClick={handleClick}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleDelete(index)}>
            {item}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Listdel;
