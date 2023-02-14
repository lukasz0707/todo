import React from "react"

export default function BackgroundImg({children}) {
  return (
    <div className="h-max w-max bg-red-300"
      style={{
        backgroundImage: `url("../../public/vitor-santos-GOQ32dlahDk-unsplash.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "brightness(70%)",
      }}
    >{children}</div>
  )
}
