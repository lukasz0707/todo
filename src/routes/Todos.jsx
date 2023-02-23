import React from "react"
import TodosList from "../components/TodosList"

export default function Todos() {
  return (
    <div className="flex h-screen max-w-full flex-col  items-center justify-center break-words text-white">
      <TodosList />
    </div>
  )
}
