import React, { useState } from "react";
function DisplayPro(props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const handleTitle = (e) => {
    setSearch(e.target.value);
  };

  const handleRating = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const { item } = props;

  if (!Array.isArray(item)) {
    return <p>Error: item prop is not an array</p>;
  }

  const filtered = item.filter((d) => {
    return (
      d.title.toLowerCase().includes(search.toLowerCase()) &&
      d.category.toLowerCase().includes(category.toLowerCase()) &&
      (price === "" || d.price <= parseInt(price))
    );
  });
  return (
    <div>
      <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-center table-responsive">
        <tbody>
          <tr>
            <th style={{ border: "solid" }}>
              <b>Sl No</b>
            </th>
            <th style={{ border: "solid" }}>
              <b>Title</b>
              <br />
              <input
                type="text"
                value={search}
                size="10"
                onChange={(e) => handleTitle(e)}
              />
            </th>
            <th style={{ border: "solid" }}>
              <b>Price</b>
              <br />
              <input
                type="text"
                pattern="[0-9]+"
                size="3"
                value={price}
                onChange={(e) => handlePrice(e)}
              />
            </th>
            <th style={{ border: "solid" }}>
              <b>Category</b>
              <br />
              <input
                type="text"
                size="5"
                value={category}
                onChange={(e) => handleRating(e)}
              />
            </th>
            <th style={{ border: "solid" }}>
              <b>Image</b>
            </th>
          </tr>
          {filtered.map((data) => (
            <tr class="center">
              <td style={{ border: "solid" }}>{data.id}</td>
              <td style={{ border: "solid", width: "" }}>{data.title}</td>
              <td style={{ border: "solid" }}>${data.price}</td>
              <td style={{ border: "solid" }}>{data.category}</td>
              <td style={{ border: "solid" }}>
                <img src={data.image} height="35px" width="60px" alt=""></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayPro;
