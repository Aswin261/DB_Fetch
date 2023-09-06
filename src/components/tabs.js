import React, { useState, useEffect } from "react";
import Products from "../products";
import Users from "../users";
import AddPro from "./addPro";
import AddUser from "./Add_data";
import GetChange from "./denom";
import InputDisplay from "./dynamic_text";
import Listdel from "./list";
import Money from "./Money";
import QuizApp from "./quiz";
function Tablist({ user }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (user === "user1") {
      document.getElementById("create").className = "nav-link disabled";
      document.getElementById("search").className = "nav-link";
    } else if (user === "user2") {
      document.getElementById("create").className = "nav-link disabled";
      document.getElementById("search").className = "nav-link disabled";
    } else if (user === "user3") {
      document.getElementById("create").className = "nav-link";
      document.getElementById("search").className = "nav-link";
    }
  }, [user]);
  return (
    <div>
      <ul
        class="nav nav-pills mb-2 m-3 p-0  justify-content-center border rounded bg-dark text-white"
        role="tablist"
      >
        <li class="nav-item">
          <div
            class="nav-link active"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(0);
            }}
          >
            Products
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(1);
            }}
          >
            Users
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link"
            id="create"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(2);
            }}
          >
            Create
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link"
            id="search"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(3);
            }}
          >
            Search
          </div>
        </li>
        <li class="nav-item ">
          <div
            class="nav-link "
            data-toggle="pill"
            role="tab"
            aria-disabled="true"
            onClick={() => {
              setIndex(4);
            }}
          >
            Quiz
          </div>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade show active" hidden={index !== 0}>
          <Products />
        </div>
        <div class="tab-pane fade show active" hidden={index !== 1}>
          <Users />
        </div>
        <div class="tab-pane fade show active" hidden={index !== 2}>
          <AddPro />
        </div>
        <div class="tab-pane fade show active" hidden={index !== 3}>
          <div>
            <AddUser />
          </div>
          <div>
            <GetChange />
          </div>
        </div>
        <div class="tab-pane fade show active" hidden={index !== 4}>
          <div class="d-flex justify-content-center">
            <div>
              <InputDisplay />
            </div>
            <div>
              <Listdel />
            </div>
            <div>
              <Money />
            </div>
          </div>
          <div>
            <QuizApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablist;
