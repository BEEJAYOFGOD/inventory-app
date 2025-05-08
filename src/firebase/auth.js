import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updatePassword,
    signInWithRedirect,
    getRedirectResult,
} from "firebase/auth";
import { isMobile } from "react-device-detect";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = userCredential.user;

    const actionCodeSettings = {
        url: "http://localhost:5173/", // 👈 Redirect here after verification
        handleCodeInApp: false,
    };

    await doSendEmailVerification(user, actionCodeSettings);

    return user;
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    provider.setCustomParameters({ prompt: "select_account" });

    if (isMobile) {
        console.log("redirect initiated");
        return signInWithRedirect(auth, provider);
        // console.log("redirect initiated");
    } else {
        return signInWithPopup(auth, provider);
    }
};

export const getGoogleRedirectResult = () => {
    return getRedirectResult(auth);
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doUpdatePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
};

export const doSendEmailVerification = (user) => {
    const actionCodeSettings = {
        url: `${window.location.origin}/login`, // 👈 Redirect here after verification
        handleCodeInApp: false,
    };

    return sendEmailVerification(user, actionCodeSettings);
};
