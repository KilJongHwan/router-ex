import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h2>Post {id}</h2>
    </>
  );
};
export default Article;
