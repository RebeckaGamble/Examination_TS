import { Link } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div className="w-screen text-center flex flex-col gap-4 pt-10 px-4">
      <h1 className="text-2xl font-semibold text-alert">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600">
        We're sorry for the inconvenience. An unexpected error has occurred.
      </p>{" "}
      <Link className="underline text-blue-700" to="/">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
