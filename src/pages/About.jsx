import { Link, useSearchParams, useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <>
      <h1>Introduce</h1>
      <p>React Router Sample</p>
      <Link to="/">Home Page</Link>
      <p>query string : {location.search}</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <br />
      <button onClick={onIncreaseMode}>mode + 1</button>
    </>
  );
};
export default About;
