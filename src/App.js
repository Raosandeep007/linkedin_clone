import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { Job } from "./components/jobs/Job";
import { Login } from "./components/Login/Login";

import { Navbar } from "./components/Navbar/Navbar";
import { Network } from "./components/Network/Network";
import { Notifications } from "./components/notifications/notifications";
import { Profile } from "./components/Profile/Profile";
import {
  selectUser,
  loginUser,
  logoutUser,
} from "./components/Redux/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //already logged in
        dispatch(
          loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //not logged in
        {
          document.title = `LinkedIn`;
        }
        dispatch(logoutUser());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <div className="App">
          {(document.title = `${user.displayName}  | LinkedIn`)}
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/jobs" element={<Job />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/network" element={<Network />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
