import React, { useState, useEffect } from "react";
import axios from "axios";
function Users() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const length = item.length;

  const handleMail = (e) => {
    setSearch(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
  };
  const filtered = item.filter((d) => {
    return (
      d.email.toLowerCase().includes(search.toLowerCase()) &&
      d.username.toLowerCase().includes(user.toLowerCase()) &&
      d.password.toLowerCase().includes(pwd.toLowerCase())
    );
  });

  return (
    <div>
      <table class="table-sm tablestyle table-striped table-striped-columns m-5 d-flex justify-content-center">
        <tbody>
          <tr>
            <th style={{ border: "solid" }}>
              <b>Sl NO</b>
            </th>
            <th style={{ border: "solid" }}>
              <b>Mail Id</b>
              <br />
              <input
                type="text"
                value={search}
                size="10"
                onChange={(e) => handleMail(e)}
              />
            </th>
            <th style={{ border: "solid" }}>
              <b>UserName</b>
              <br />
              <input
                type="text"
                value={user}
                size="10"
                onChange={(e) => handleUser(e)}
              />
            </th>
            <th style={{ border: "solid" }}>
              <b>Password</b>
              <br />
              <input
                type="text"
                value={pwd}
                size="10"
                onChange={(e) => handlePwd(e)}
              />
            </th>
          </tr>
          {filtered.map((data) => (
            <tr class="center">
              <td style={{ border: "solid" }}>{data.id}</td>
              <td style={{ border: "solid" }}>{data.email}</td>
              <td style={{ border: "solid" }}>{data.username}</td>
              <td style={{ border: "solid" }}>{data.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p class="col-md-3 m-3 p-1 bg-primary border rounded text-light">
        <b>Count</b>:{length}
      </p>
    </div>
  );
}

export default Users;
