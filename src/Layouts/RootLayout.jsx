import { Outlet } from "react-router-dom";
import companyLogo from "../assets/images/company_logo.svg";

const RootLayout = () => {
    return (
        <div className="border border-red-500 grid grid-cols-2 min-h-screen items-center">
            <div className="flex justify-center items-center animate-pulse ">
                <img className="max-w-md" src={companyLogo} alt="" />
            </div>
            <Outlet />
        </div>
    );
};

export default RootLayout;
