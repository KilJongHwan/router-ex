import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <h1>Setting</h1>
      <p>Pages Setting</p>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/about">About Page</Link>
    </>
  );
};

export default Setting;
