import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>MyPage</h1>
      <p>My Info</p>

      <button onClick={() => navigate(-1)}>Prev Page</button>
    </>
  );
};

export default MyPage;
