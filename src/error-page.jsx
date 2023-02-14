import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center text-white border-2 border-red-500">
    <div className="text-center text-2xl">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="mt-10">Sorry, an unexpected error has occurred.</p>
      <p  className="font-thin mt-10 text-gray-300">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}