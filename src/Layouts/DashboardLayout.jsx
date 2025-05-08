import { Outlet } from "react-router-dom";
// import { useAuth } from "../contexts/authContext/userContext";

const DashboardLayout = () => {
    return (
        <div>
            <p>hi</p>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
