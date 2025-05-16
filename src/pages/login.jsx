import CustomInput from "../components/inputComponent";
import google_icon from "../assets/icons/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import {
    doSignInWithEmailAndPassword,
    doSignInWithGoogle,
} from "../firebase/auth";
import Spinner from "../components/spinnerComponent";
import { auth } from "../firebase/firebase";
import { useAuth } from "../contexts/authContext/userContext";
import { Navigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [Gloading, setGLoading] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [errors, setErrors] = useState({});

    const defaultFormData = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (e) => {
        setErrors((prev) => ({ ...prev, [e.target.name]: null }));

        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        if (!email.trim()) {
            setErrors((prev) => ({ ...prev, email: "Email is required" }));
            return false;
        } else if (!emailRegex.test(email.trim())) {
            setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, email: null }));
            return true;
        }
    };

    const validatePassword = (password) => {
        if (!password.trim()) {
            setErrors((prev) => ({
                ...prev,
                password: "Password is required",
            }));
            return false;
        } else if (password.trim().length < 8) {
            setErrors((prev) => ({
                ...prev,
                password: "Password must be at least 8 characters long",
            }));

            return false;
        } else {
            setErrors((prev) => ({ ...prev, password: null }));

            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(formData.email);
        const isPasswordValid = validatePassword(formData.password);

        if (!isEmailValid || !isPasswordValid) {
            return; // Don't submit
        }

        try {
            setIsLoading(true);

            const { user } = await doSignInWithEmailAndPassword(
                formData.email,
                formData.password
            );

            if (!user.emailVerified) {
                // force logout if already signed in
                console.log(user);
                await auth.signOut();

                toast.error(
                    "user not verified, \n create new account or  check mail for verification"
                );

                return;
            }

            toast.success(`Log in by user ${user.email} successful`);
            navigate("/dashboard", { replace: true });
        } catch (err) {
            // setErrMsg(err);
            if (err.code === "auth/invalid-credential") {
                toast.error("Invalid credentials, please try again");
            } else if (err.code === "auth/network-request-failed") {
                toast.error("check internet network ");
            } else {
                toast.error(err.code);
            }
        } finally {
            setFormData(defaultFormData);
            setIsLoading(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            setGLoading(true);
            const { user } = await doSignInWithGoogle();

            if (user) {
                navigate("/dashboard", { replace: true });
            }
        } catch (error) {
            console.log(error.code);
            toast.error(error.code);
        } finally {
            setGLoading(false);
        }
    };

    const { currentUser } = useAuth();

    if (currentUser) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className=" mx-auto  min-w-sm">
            <h1 className="text-3xl mb-4 font-bold">Log in to your account</h1>
            <p className="mb-4 text-sm text-gray-500">
                Welcome back! Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col   gap-4   ">
                    <label htmlFor="email">Email*</label>
                    <CustomInput
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => validateEmail(formData.email)}
                    />
                </div>

                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <div className="flex flex-col   gap-4   ">
                    <label htmlFor="password">Password*</label>
                    <CustomInput
                        type="password"
                        value={formData.password}
                        placeholder={"Enter your password"}
                        onChange={handleChange}
                        name={"password"}
                        onBlur={() => validatePassword(formData.password)}
                    />
                </div>
                {/* <p>{errMsg}</p> */}

                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                )}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            name="remember_password"
                            id="remember_password"
                        />
                        <span className="text-sm text-gray-500">
                            Remember for 30 days
                        </span>
                    </div>

                    <button className="text-primary cursor-pointer">
                        Forgot password
                    </button>
                </div>
                <button
                    disabled={isLoading || Gloading}
                    className="bg-primary flex items-center justify-center gap-2 text-white w-full  rounded-md px-4 py-3 hover:bg-blue-700 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50
                cursor-pointer mb-4"
                    type="submit "
                >
                    {isLoading ? (
                        <>
                            <Spinner />
                            <span className="animate-pulse">logging in...</span>
                        </>
                    ) : (
                        <span>Log in</span>
                    )}
                </button>
                <button
                    className="flex items-center justify-center gap-4 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-500/20 cursor-pointer w-full"
                    disabled={isLoading || Gloading}
                    type="button"
                    onClick={handleSignInWithGoogle}
                >
                    <img className="w-8" src={google_icon} alt="" />
                    <span>Sign in with Google</span>
                </button>
            </form>

            <div className="flex items-center justify-center gap-2  mt-8">
                <span className="text-sm text-gray-500 ">
                    Don't have an account?
                </span>
                <Link className="text-sm text-primary p-0" to="/">
                    signup
                </Link>
            </div>
        </div>
    );
};

export default Login;
