import { Link } from "react-router-dom";

import { UserButton, UserHeading } from "./user-preview.styles";

const UserPreview = () => {
  return (
    <div>
      <UserHeading>User Preview</UserHeading>
      <Link to="/user/userId">
        <UserButton> Go to User ID</UserButton>
      </Link>
    </div>
  );
};

export default UserPreview;
