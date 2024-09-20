import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getPosts() {
    try {
      const response = await fetch("https://simple-crud-wmoo.onrender.com");
      const result = await response.json();
      console.log("API response:", result);

      if (!response.ok) {
        setError(result.error);
      } else {
        if (result.allusers && Array.isArray(result.allusers)) {
          setData(result.allusers);
        } else {
          console.error("Unexpected API response structure:", result);
          setError("Invalid data structure");
        }
      }
    } catch (error) {
      setError("Failed to fetch data");
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted sucessfully");

      setTimeout(() => {
        setError("");
        getPosts();
      }, 2000);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}
      <div className="container my-2">
        <h2 className="text-center">All Data</h2>
        <div className="row">
          {data.length === 0 && <p>No data available</p>}{" "}
          {data.map((ele) => (
            <div key={ele._id} className="col-3">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">{ele.email}</p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.age}
                  </h6>
                  <Link to={`/${ele._id}`} className="card-link">
                    Edit
                  </Link>
                  <a
                    href="#"
                    className="card-link"
                    onClick={() => handleDelete(ele._id)}
                  >
                    delete
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
