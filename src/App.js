
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route,Routes } from "react-router-dom";
import User from "./pages/User";
import CompleteProfile from "./pages/CompleteProfile";
import ForgotPassword from "./pages/ForgotPassword";
import { useSelector } from "react-redux";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
function App() {
  const dark = useSelector(state=> state.theme.dark)
  return (
    <div className={`${dark? 'bg-black text-white min-vh-100': ''}`}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/completeprofile" element={<CompleteProfile/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
