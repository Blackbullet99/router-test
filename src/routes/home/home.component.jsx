import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <h1>Welcome Back!</h1>
    </div>
  );
};

export default Home;
