import { Link } from "react-router-dom";
import { getUserProfiles } from "../data";

const UserProfiles = () => {
  let userProfiles = getUserProfiles();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {userProfiles.map((userProfile) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/userProfiles/${userProfile.number}`}
            key={userProfile.number}
          >
            {userProfile.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default UserProfiles;
