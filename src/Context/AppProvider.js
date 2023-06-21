import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()


export default function AppProvider({children}){
    const[student,setStudent] =useState([])
    const[teacher,setTeacher] = useState([])

    useEffect(()=>{
        const getStudentDetails = async()=>{
            const response = await fetch("https://645f8c04ca2d89f7e748df6e.mockapi.io/student",{
                method:"GET"
            })
            const data = await response.json()
            setStudent(data)


        }
        getStudentDetails()
        const getTeacherDetails = async()=>{
            const response = await fetch("https://645f8c04ca2d89f7e748df6e.mockapi.io/teacher")
            const data = await response.json()
            setTeacher(data)


        }
        getTeacherDetails()
    },[])
    return(
        <AppContext.Provider
        value={{
            student,
            setStudent,
            teacher,
            setTeacher
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppState=()=>{
    return useContext(AppContext)
}