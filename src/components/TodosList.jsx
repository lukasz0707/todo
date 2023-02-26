// import React, { useContext, useEffect, useState } from "react"
// import AuthContext from "../context/AuthProvider"
// import UseFetchWithToken from "../hooks/useAxiosPrivate"

// export default function TodosList() {
//   const [todos, setTodos] = useState()

//   const fetchData = UseFetchWithToken("todo_by_user_id")

//   useEffect(() => {
//     if (fetchData?.length > 0) {
//       setTodos(fetchData)
//     }
//   }, [fetchData])

//   return (
//     <article>
//       <h2>Todos</h2>
//       {todos?.length > 0 ? (
//         <ul>
//           {todos.map((todo, i) => (
//             <li key={i}>
//               todo{i}: {todo.todo_name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No todos to display</p>
//       )}
//     </article>
//   )
// }

import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom"

const Todos = () => {
  const [todos, setTodos] = useState()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getTodos = async () => {
      try {
        const response = await axiosPrivate.get("/todo_by_user_id", {
          signal: controller.signal,
        })
        console.log(response.data)
        isMounted && setTodos(response.data)
      } catch (err) {
        console.error(err)
        navigate("/login", { state: { from: location }, replace: true })
      }
    }

    getTodos()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <article>
      <h2>Todos</h2>
      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              todo{i}: {todo.todo_name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos to display</p>
      )}
    </article>
  )
}

export default Todos
