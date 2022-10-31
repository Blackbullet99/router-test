import { Routes, Route } from "react-router-dom";

import UserPreview from "./user-preview.component";
import UserId from "./user-Id.component";
import NotFound from "../error-page/error-page.component";

const User = () => {
  return (
    <Routes>
      <Route index element={<UserPreview />} />
      <Route path=":userId" element={<UserId />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default User;
