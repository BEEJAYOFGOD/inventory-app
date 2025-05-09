import { useAuth } from "../contexts/authContext/userContext";
import salesIcon from "../assets/icons/sales/sales.svg";
import profiIcon from "../assets/icons/sales/profit.svg";
import revenueIcon from "../assets/icons/sales/revenue.svg";
import costIcon from "../assets/icons/sales/cost.svg";

const Dashboard = () => {
    const { currentUser } = useAuth();

    const { displayName, email } = currentUser;
    const sales = [
        {
            title: "Sales",
            value: "#873",
            imgSrc: salesIcon,
        },
        {
            title: "Revenue",
            value: "#18,300",
            imgSrc: revenueIcon,
        },

        {
            title: "Profit",
            value: "#868",
            imgSrc: profiIcon,
        },
        {
            title: "Cost",
            value: "#17, 342",
            imgSrc: costIcon,
        },
    ];
    return (
        <>
            <main className="grid  grid-cols-[2fr_1fr] gap-4 p-4 bg-gray-300/30 min-h-screen grid-rows-7 grid-flow-row">
                <div className="bg-white p-4 rounded-md space-y-4">
                    <h2 className="font-primary text-gray-900">
                        Sales Overview
                    </h2>
                    <div className="flex  bg-white gap-4  rounded-md">
                        {sales.map(({ title, value, imgSrc }) => (
                            <div className="space-y-4 flex-1   px-8  border-r border-gray-400/20 last-of-type:border-none">
                                <img className="mx-auto" src={imgSrc} alt="" />
                                <div className="flex justify-between">
                                    <p>{value}</p>
                                    <p>{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" rounded-md bg-white"></div>

                <div className="bg-white p-4 rounded-md space-y-4">
                    <h2 className="font-primary text-gray-900">
                        Sales Overview
                    </h2>
                    <div className="flex  bg-white gap-4  rounded-md">
                        {sales.map(({ title, value, imgSrc }) => (
                            <div className="space-y-4 flex-1   px-8  border-r border-gray-400/20 last-of-type:border-none">
                                <img className="mx-auto" src={imgSrc} alt="" />
                                <div className="flex justify-between">
                                    <p>{value}</p>
                                    <p>{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" rounded-md bg-white"></div>
                <div className="row-span-3 rounded-md bg-white"></div>
                <div className="row-span-3 rounded-md bg-white"></div>

                <div className="row-span-2 rounded-md bg-white"></div>
                <div className="row-span-2 rounded-md bg-white"></div>
            </main>
        </>
    );
};

export default Dashboard;
