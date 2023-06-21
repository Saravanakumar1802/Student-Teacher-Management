import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function AddTeacher() {
  const { teacher, setTeacher } = AppState();
  const history = useHistory();

  const [id, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");

  const newData = {
    id,
    name,
    email,
    subject,
    experience
  }

  const addTeacher = async (e) => {
    e.preventDefault()
    try {
      e.preventDefault()
      const response = await fetch("https://645f8c04ca2d89f7e748df6e.mockapi.io/teacher", {
        method: "post",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        }
      })
      setTeacher([...teacher, newData])
      history.push("/teacher")
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <BaseApp>
      <div>
        <form className="form">
          <input
            type="number"
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
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            required
          />
          <button className="submit-btn" type="submit" onClick={addTeacher} >
            Add
          </button>
        </form>
      </div>
    </BaseApp>
  );
}
