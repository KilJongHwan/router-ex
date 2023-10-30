import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <h1>MyPage</h1>
      <p>My Info</p>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/setting">Setting Page</Link>
    </>
  );
};

export default MyPage;
