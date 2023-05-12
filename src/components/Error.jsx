import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError;
  return error;
};

export default Error;
