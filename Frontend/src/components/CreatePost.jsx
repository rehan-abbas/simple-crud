import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adduser = { name, email, age };

    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      body: JSON.stringify(adduser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setAge("");
      setEmail("");
      setName("");
      navigate("/all");
    }
  };
  return (
    <>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}
      <div className=" border border-dark  pt-5 pb-5 ps-5 pe-5 mt-5 container-xl d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Enter The Data</h2>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <div className="mb-3 text-center w-100">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="name"
                  className="form-control form-control-sm"
                  placeholder="Enter your name..."
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="mb-3 text-center w-100">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-sm"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="mb- text-center h-20 w-100">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="form-control form-control-sm"
                  min={0}
                  max={100}
                  placeholder="Enter your Age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
