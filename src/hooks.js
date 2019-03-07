import React, { useState } from "react";

export default function Hooks() {
  const [fields, setValue] = useState({ name: "", email: "" });
  const [users, addUser] = useState({ list: [] });

  const handleChange = evt => {
    const { value, name } = evt.target;
    setValue({ ...fields, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addUser({ list: users.list.concat([{ ...fields }]) });
    setValue({ name: "", email: "" });
  };

  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          onChange={handleChange}
          value={fields.name}
          type="text"
          name="name"
        />
        <br />
        <label>Email:</label>
        <input
          onChange={handleChange}
          value={fields.email}
          type="email"
          name="email"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {users.list.map(userInfo => {
        return <Users {...userInfo} />;
      })}
    </div>
  );
}

function Users({ name, email }) {
  return (
    <div>
      <p>Name: {name}</p>
      <br />
      <p>Email: {email}</p>
      <br />
    </div>
  );
}
