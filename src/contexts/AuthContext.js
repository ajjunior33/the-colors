import { createContext, useState, useEffect } from "react";
import { auth, firebase } from "../services/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoUrl, uid } = user;
        if (!displayName || !photoUrl) {
          throw new Error("Missing information from Google Account");
        }

        setUser({ name: displayName, avatar: photoUrl, id: uid });
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
        const { displayName, photoUrl, uid } = result.user;
        if (!displayName || !photoUrl) {
          throw new Error("Missing information from Google Account");
        }
        setUser({ name: displayName, avatar: photoUrl, id: uid });
      }
    }
  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
