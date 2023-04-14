import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubAuthProvider)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser)
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div>
      <h1>Login page</h1>
      {user ? (
        <button onClick={handleGoogleSignOut}>Sing OUt</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Signin</button>
          <button onClick={handleGithubSignIn}>Github SignIn</button>
        </>
      )}
      {user && (
        <div>
          <h1>User name: {user?.displayName}</h1>
          <p>Email: {user?.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
