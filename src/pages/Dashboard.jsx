import { useAuth } from "../contexts/authContext/userContext";

const Dashboard = () => {
    const { currentUser, logOut } = useAuth();

    const { displayName, email } = currentUser;

    const handlelogOut = () => {
        logOut();
    };
    return (
        <>
            <p>
                Dashboard of user {displayName} and yr mail is {email}
            </p>
            <button className="cursor-pointer" onClick={handlelogOut}>
                logout
            </button>
        </>
    );
};

export default Dashboard;
