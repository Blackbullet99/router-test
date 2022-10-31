import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import User from "./components/user/user.component";
import NotFound from "./components/error-page/error-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} /> 
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
