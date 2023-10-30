import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="articles/">게시글 1</Link>
      </li>
      <li>
        <Link to="articles/">게시글 2</Link>
      </li>
      <li>
        <Link to="articles/">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
