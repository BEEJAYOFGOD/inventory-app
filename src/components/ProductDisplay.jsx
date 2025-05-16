import { Outlet, useParams } from "react-router-dom";
import editIcon from "../assets/icons/inventory/edit-2.svg";
import { NavLink } from "react-router-dom";

const ProductDisplay = () => {
    const { product } = useParams();

    console.log(product);

    const productDisplayLinks = [
        { linkTitle: "Overview", to: "" },
        { linkTitle: "Purchases", to: "/purchases" },
        { linkTitle: "Adjustments", to: "/adjustments" },
        { linkTitle: "History", to: "/history" },
    ];

    const outletContext = {
        productName: product,
    };

    return (
        <div className="bg-gray-300/30 p-8 min-h-full  flex">
            <main className=" bg-white rounded-md p-4 min-h-full  w-full">
                <header className="flex  justify-between">
                    <h1 className="text-xl">{product}</h1>
                    <div className="flex gap-3 text-gray-600">
                        <button className="flex gap-4 border-gray-600/30 border rounded-md px-4 py-2">
                            <img className="w-4" src={editIcon} alt="" />
                            <span>Edit</span>
                        </button>
                        <button className="border-gray-600/30 border rounded-md px-4 py-2">
                            Download
                        </button>
                    </div>
                </header>

                <nav className="flex gap-4 relative after:content-[''] after:bg-gray-500/30 after:absolute after:h-[1px] after:w-full after:bottom-0">
                    {productDisplayLinks.map(({ linkTitle, to }) => (
                        <NavLink
                            to={`/dashboard/inventory/products/${product}${to}`}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "z-0 relative after:rounded-full after:absolute after:left-0 after:h-[2.5px] after:bottom-0 after:content-[''] after:bg-primary  after:w-full py-2"
                                    : "py-2"
                            }
                        >
                            {linkTitle}
                        </NavLink>
                    ))}
                </nav>

                <Outlet context={outletContext} />
            </main>
        </div>
    );
};

export default ProductDisplay;
