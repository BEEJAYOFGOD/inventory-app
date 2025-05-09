import { useAuth } from "../contexts/authContext/userContext";

const Dashboard = () => {
    const { currentUser } = useAuth();

    const { displayName, email } = currentUser;

    return (
        <>
            <p>
                Dashboard of user {displayName} and yr mail is {email}
            </p>
        </>
    );
};

export default Dashboard;
