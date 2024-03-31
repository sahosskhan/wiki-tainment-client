import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const googleLogin = (value) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    LogOut,
    signIn,
    googleLogin,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
