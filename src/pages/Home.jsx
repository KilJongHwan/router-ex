import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <p>The First Page</p>
      <Link to="/about">About Page</Link>
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
