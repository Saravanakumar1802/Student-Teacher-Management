import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function TeacherDetails() {
  const history = useHistory()
  const { teacher, setTeacher } = AppState()
  const deleteTeacher = async (idx) => {
    try {
      const response = await fetch(`https://645f8c04ca2d89f7e748df6e.mockapi.io/teacher/${idx}`, {
        method: "DELETE",
      })
      const alterData = teacher.filter((per) => {
        return per.id !== idx
      })
      setTeacher(alterData)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <BaseApp>
      <div>
        <div>
          <button type="button" className="btn btn-secondary add-btn" onClick={() => history.push("/Teacher/add")}>Add</button>
        </div>
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Experience</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((per, index) => {
              return (
                <tr id={index}>
                  <th>{index + 1}</th>
                  <td>{per.name}</td>
                  <td>{per.email}</td>
                  <td>{per.subject}</td>
                  <td>{per.experience}</td>
                  <td>
                    <button className="edit-btn" onClick={() => history.push(`/teacher/edit/${per.id}`)}>Edit</button>
                    <button className="del-btn" onClick={() => deleteTeacher(per.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </BaseApp>
  );
}
