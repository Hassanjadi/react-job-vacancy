import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="max-w-screen h-screen flex flex-col justify-center items-center">
      <h1>Error Cuy!</h1>
      <p>Salah alamat nih, balik lagi yuk!</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
