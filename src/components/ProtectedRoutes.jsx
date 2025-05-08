import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/userContext";

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    console.log(currentUser);

    if (!currentUser) {
        // alert("hello");
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
