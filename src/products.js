import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayPro from "./components/dispProduct";
import { Pagination } from "./components/pagination";
function Products() {
  const [item, setItem] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setItem(res.data);
        // console.log(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const length = item.length;

  const lastPostIndex = currentpage * perPage;
  const firstPostIndex = lastPostIndex - perPage;
  const currentPost = item.slice(firstPostIndex, lastPostIndex);
  const paginate = (pageNo) => setcurrentpage(pageNo);
  console.log(currentPost);
  return (
    <div>
      {item.length > 0 ? (
        <>
          {/* <DisplayPro item={currentPost} /> */}
          <p class="mx-5 col-md-2 p-1 bg-primary border rounded text-light">
            <b>Count</b>:{length}
          </p>
          <Pagination
            perPage={perPage}
            totalPost={item.length}
            paginate={paginate}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Products;
