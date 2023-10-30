import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "Jessy",
    description: "react developer",
  },
  backend: {
    name: "Kane",
    description: "spring-boot developer",
  },
  database: {
    name: "reina",
    description: "database developer",
  },
};

const Profile = () => {
  // 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 Hook
  const params = useParams();
  // 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  const profile = data[params.username];

  return (
    <>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>NO EXIST PROFILE</p>
      )}
    </>
  );
};

export default Profile;
