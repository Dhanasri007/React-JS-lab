import React from 'react'

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitdata,setsubmitdata]=useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata={name, email, password};
    submitdata(formdata);
    setName("")
    setEmail("")
    setPassword("")
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
      {submitdata &&(
          <div>
            <p><strong>Name</strong>{submitdata.name}</p>
            <p><strong>email</strong>{submitdata.email}</p>
            <p><strong>password</strong>{submitdata.password}</p>
          </div>
        )}
    </div>
  );
}

export default App;
