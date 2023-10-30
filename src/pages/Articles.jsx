import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">Post 1</Link>
      </li>
      <li>
        <Link to="/articles/2">Post 2</Link>
      </li>
      <li>
        <Link to="/articles/3">Post 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
