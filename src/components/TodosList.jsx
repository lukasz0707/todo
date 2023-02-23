import React, { useState } from "react"

export default function TodosList() {
  const [todos, setTodos] = useState()

  return (
    <article>
      <h2>Todos</h2>
      {todos?.length ? (
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              todo{i}: {todo}
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos to display</p>
      )}
    </article>
  )
}
