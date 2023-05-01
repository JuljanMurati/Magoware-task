import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Views/registration";
import SignIn from "./Views/signin";
import Posts from "./Views/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
