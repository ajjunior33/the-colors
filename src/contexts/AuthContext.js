import Swal from "sweetalert2";
import { createContext, useState, useEffect } from "react";
import { auth, firebase } from "../services/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          Swal.fire(
            "Houve um error!",
            "Missing information from Google Account",
            "error"
          );
        }

        setUser({ name: displayName, avatar: photoURL, id: uid });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
        if (!displayName || !photoURL) {
          // throw new Error("");
          Swal.fire(
            "Houve um error!",
            "Missing information from Google Account",
            "error"
          );
        }
        setUser({ name: displayName, avatar: photoURL, id: uid });
      }
    }
  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
