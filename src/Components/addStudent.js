import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function AddStudent() {
  const { student, setStudent } = AppState();
  const history = useHistory();

  const [id, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");

  const newData = {
    id,
    name,
    email,
    class: standard
  }

  const addStudent = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch("https://645f8c04ca2d89f7e748df6e.mockapi.io/student", {
        method: "post",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json();
      setStudent([...student, newData])
      history.push("/student")

    } catch (error) {
      console.log(error)
    }



  }


  return (
    <BaseApp>
      <div>
        <form className="form">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(event) => setIdx(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Standard"
            value={standard}
            onChange={(event) => setStandard(event.target.value)}
            required
          />
          <button className="submit-btn" type="submit" onClick={addStudent} >
            Add
          </button>
        </form>
      </div>
    </BaseApp>
  );
}
