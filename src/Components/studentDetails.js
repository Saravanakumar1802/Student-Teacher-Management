import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function StudentDetails() {
  const history = useHistory()
  const { student, setStudent } = AppState()
  const deleteStudent = async (idx) => {
    try {
      const response = await fetch(`https://645f8c04ca2d89f7e748df6e.mockapi.io/student/${idx}`, {
        method: "DELETE",
      })
      const alterData = student.filter((per) => {
        return per.id !== idx
      })
      setStudent(alterData)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <BaseApp>
      <div>
        <div>
          <button type="button" className="btn btn-secondary add-btn" onClick={() => history.push("/student/add")}>Add</button>
        </div>
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Standard</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((per, index) => {
              return (
                <tr id={index}>
                  <th>{index + 1}</th>
                  <td>{per.name}</td>
                  <td>{per.email}</td>
                  <td>{per.class}</td>
                  <td>
                    <button className="edit-btn" onClick={() => history.push(`/student/edit/${per.id}`)}>Edit</button>
                    <button className="del-btn" onClick={() => deleteStudent(per.id)}>Delete</button>
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
