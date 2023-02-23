import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="text-center text-2xl">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="mt-10">Sorry, an unexpected error has occurred.</p>
        <p className="mt-10 font-thin text-gray-300">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}
