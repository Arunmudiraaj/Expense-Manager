
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route,Routes,NavLink } from "react-router-dom";
import User from "./pages/User";
import CompleteProfile from "./pages/CompleteProfile";
function App() {
  return (
    <div className="">
      <div>
        <NavLink to={'/signup'}>Sign Up</NavLink>
        <NavLink to={'/login'}>Log In</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<div>This is Home page</div>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/completeprofile" element={<CompleteProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
