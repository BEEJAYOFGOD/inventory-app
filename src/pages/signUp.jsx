import google_icon from "../assets/icons/google.svg";
import CustomInput from "../components/inputComponent";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
    doCreateUserWithEmailAndPassword,
    doSignInWithGoogle,
} from "../firebase/auth";
import Spinner from "../components/spinnerComponent";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/authContext/userContext";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    // const { currentUser } = useAuth();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [errors, setErrors] = useState({});

    const defaultFormData = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState(defaultFormData);

    const [loading, setLoading] = useState(false);
    const [googleLoading, setGLoading] = useState(false);

    const { currentUser } = useAuth();

    const toastShownRef = useRef(false);

    useEffect(() => {
        if (currentUser && !toastShownRef.current) {
            toast.success("You are already logged in");
            toastShownRef.current = true;
        }
    }, [currentUser]);

    if (currentUser) {
        return <Navigate to="/dashboard" replace />;
    }

    // Add navigate to dependencies if using this approach

    // Remove the conditional rendering of Navigate component
    // The navigation is now handled in the useEffect

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

    const validateConfirmPassword = (confirmPassword) => {
        if (confirmPassword !== formData.password) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: "Passwords do not match",
            }));

            return false;
        } else {
            setErrors((prev) => ({ ...prev, confirmPassword: null }));
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(formData.email);
        const isPasswordValid = validatePassword(formData.password);
        const isConfirmValid = validateConfirmPassword(
            formData.confirmPassword
        );

        // if (!isEmailValid || !isPasswordValid || !isConfirmValid) return;

        if (!isEmailValid || !isPasswordValid || !isConfirmValid) {
            return; // Don't submit
        } else {
            try {
                setLoading(true);

                const user = await doCreateUserWithEmailAndPassword(
                    formData.email,
                    formData.password
                );

                toast.success(
                    `User with  ${user.email} created successfully! check mail to verify and log in`
                );

                navigate("/login", { replace: true });
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Account is already created, log in instead");
                    navigate("/login", { replace: true });
                    return;
                }

                toast.error(error.code);
            } finally {
                // setFormData(defaultFormData);
                setLoading(false);
            }
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

    // check if user is already logged in

    return (
        <div className=" mx-auto  min-w-sm">
            <h1 className="text-3xl mb-8 font-bold">Create an account</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col   gap-4   ">
                    <label htmlFor="email">Email*</label>
                    <CustomInput
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={() => {
                            // setErrors((prev) => ({ ...prev, email: null }));
                            validateEmail(formData.email);
                        }}
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <div className="flex flex-col   gap-4   ">
                    <label htmlFor="password">Password*</label>

                    <CustomInput
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={() => validatePassword(formData.password)}
                    />
                </div>
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                )}

                <div className="flex flex-col   gap-4">
                    <label htmlFor="password">Confirm Password*</label>
                    <CustomInput
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleChange}
                        onBlur={() =>
                            validateConfirmPassword(formData.confirmPassword)
                        }
                    />
                </div>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                        {errors.confirmPassword}
                    </p>
                )}

                <p className="mb-4 text-sm text-gray-500">
                    password must be at least 8 characters long
                </p>
                <button
                    // disabled={loading || googleLoading}
                    className="flex justify-center items-center gap-4 bg-primary text-white w-full  rounded-md px-4 py-3 hover:bg-blue-700 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer mb-4"
                    type="submit"
                >
                    {loading ? (
                        <>
                            <Spinner />
                            <span className="animate-pulse">
                                creating account ...
                            </span>
                        </>
                    ) : (
                        <span>Create account</span>
                    )}
                </button>
                <button
                    type="button"
                    disabled={loading || googleLoading}
                    onClick={handleSignInWithGoogle}
                    className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-500/20 cursor-pointer w-full"
                >
                    <img className="w-8" src={google_icon} alt="" />
                    <span>Sign up with Google</span>
                </button>
            </form>

            <div className="flex items-center justify-center gap-2  mt-8">
                <span className="text-sm text-gray-500 ">
                    Already have an account?
                </span>
                <Link className="text-sm text-primary p-0" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
