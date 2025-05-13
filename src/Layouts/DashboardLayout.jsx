import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext/userContext";
import { NavLink, Link } from "react-router-dom";
import searchIcon from "../assets/icons/search_icon.svg";
import NotificationIcon from "../assets/icons/notification_icon.svg";
import SideBar from "../components/sideBar";

// import SupplierIcon from "../assets/icons/supplier_icon.svg";

const DashboardLayout = () => {
    const { currentUser } = useAuth();

    const photoURL = currentUser?.photoURL;

    return (
        <div className="grid  grid-cols-[180px_2fr] min-h-screen ">
            <SideBar />

            <main className="h-screen flex flex-col">
                <header className="flex justify-between px-6 py-4 border-gray-600/30 border-b">
                    <div className="flex  items-center w-fit gap-2 border border-gray-400  rounded-sm px-2 py-1">
                        <div>
                            <img className="w-6 h-6" src={searchIcon} alt="" />
                        </div>
                        <div className="">
                            <input
                                className="outline-0 w-[200px] sm:w-[250px] md:w-[300px]"
                                type="text"
                                id="searchQuery"
                                placeholder="Search product, supplier, order"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div>
                            <img
                                className="w-8"
                                src={NotificationIcon}
                                alt=""
                            />
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${photoURL})`,
                                backgroundSize: "cover", // Optional, to cover the entire div
                                backgroundPosition: "center",
                            }}
                            className={`rounded-full border-gray-600/50 border h-8 w-8 `}
                        ></div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
