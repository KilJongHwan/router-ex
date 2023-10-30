import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = false;

  if (isLogin) {
    return (
      <>
        <h1>MyPage</h1>
        <p>My Info</p>

        <button onClick={() => navigate(-1)}>Prev Page</button>
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/login" replace={true} />
      </>
    );
  }
};

export default MyPage;
