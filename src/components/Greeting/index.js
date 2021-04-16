import React, { useState } from "react";

function Greeting() {
  const [username, setUsername] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleInput = (e) => setNameInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername(nameInput);
    setNameInput("");
  };

  return (
    <div className="greeting-container">
      <h1 aria-label="greeting" id="greeting">
        Hi there, {username ? username : "belieber"}!{" "}
      </h1>
      <form onSubmit={handleFormSubmit} className="greeting">
        <div className="form-group">
          <label htmlFor="username"> Username </label>
          <input
            className="form-control"
            type="text"
            autoComplete="off"
            name="username"
            id="username"
            placeholder="Enter your name"
            onChange={handleInput}
          />
          <input
            type="submit"
            className="update-bttn btn btn-outline-secondary "
            value="update"
          />
        </div>
      </form>
    </div>
  );
}

export default Greeting;
