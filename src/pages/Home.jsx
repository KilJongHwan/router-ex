import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // Link to를 사용하지 않고 다른 페이지로 이동해야할 상황에서 사용하는 Hook
  const navigate = useNavigate();
  return (
    <>
      <h1>HOME</h1>
      <p>The First Page</p>
      <button onClick={() => navigate("/about")}>About Page</button>
      <br />
      <Link to="/mypage">My Page</Link>
      <br />
      <ul>
        <li>
          <Link to="/profiles/frontend">Frontend Profile</Link>
        </li>
        <li>
          <Link to="/profiles/backend">Backend Profile</Link>
        </li>
        <li>
          <Link to="/profiles/database">Database Profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
