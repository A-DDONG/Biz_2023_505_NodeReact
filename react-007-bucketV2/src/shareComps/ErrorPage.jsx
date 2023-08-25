import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>ㅋㅋ</h1>
      <p>오류뜸. 관리자 문의해라</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
