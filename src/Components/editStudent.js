import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";


export default function EditStudent() {
  const { student, setStudent } = AppState();
  const history = useHistory();
  const { id } = useParams()

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");

  const selectedStudent = student.find((per) => {
    return per.id == id
  })
  useEffect(() => {
    setIdx(selectedStudent.id)
    setName(selectedStudent.name)
    setEmail(selectedStudent.email)
    setStandard(selectedStudent.class)
  }, [])
  const newData = {
    id,
    name,
    email,
    class: standard
  }

  const studentIndex = student.findIndex((per) => {
    return per.id == id
  })
  console.log(studentIndex)

  const editStudent = async (e) => {
    e.preventDefault()
    const responce = await fetch(`https://645f8c04ca2d89f7e748df6e.mockapi.io/student/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    student[studentIndex] = newData
    history.push("/student")

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
            placeholder="Standard"
            value={standard}
            onChange={(event) => setStandard(event.target.value)}
            required
          />
          <button className="submit-btn" type="submit" onClick={editStudent} >
            Update
          </button>
        </form>
      </div>
    </BaseApp>
  );
}