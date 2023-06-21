import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";


export default function EditTeacher() {
  const { teacher, setTeacher } = AppState();
  const history = useHistory();
  const { id } = useParams()

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");

  const selectedTeacher = teacher.find((per) => {
    return per.id == id
  })
  useEffect(() => {
    setIdx(selectedTeacher.id)
    setName(selectedTeacher.name)
    setEmail(selectedTeacher.email)
    setSubject(selectedTeacher.subject)
    setExperience(selectedTeacher.experience)
  }, [])
  const newData = {
    id,
    name,
    email,
    subject,
    experience
  }

  const teacherIndex = teacher.findIndex((per) => {
    return per.id == id
  })

  const editTeacher = async (e) => {
    e.preventDefault()
    const responce = await fetch(`https://645f8c04ca2d89f7e748df6e.mockapi.io/teacher/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    teacher[teacherIndex] = newData
    history.push("/teacher")

  }


  return (
    <BaseApp>
      <div>
        <form className="form">
          <input
            type="text"
            placeholder="ID"
            value={idx}
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
            placeholder="Subject"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            required
          />
          <button className="submit-btn" type="submit" onClick={editTeacher} >
            Update
          </button>
        </form>
      </div>
    </BaseApp>
  );
}