/* eslint-disable react-refresh/only-export-components */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import FullPageSpinner from "../../components/fullLoader";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return unsubscribe;
    }, []);

    async function initializeUser(userCred) {
        if (userCred) {
            setCurrentUser(userCred);
            setUserLoggedIn(true);
            setLoading(false);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setLoading(false);
        }
    }

    async function logOut() {
        try {
            await signOut(auth);
            setCurrentUser(null);
            setUserLoggedIn(false);
            console.log("user logged out successfully");
        } catch (error) {
            console.log(error);
        }
    }

    const value = {
        currentUser,
        loading,
        userLoggedIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <FullPageSpinner />}
        </AuthContext.Provider>
    );
};
