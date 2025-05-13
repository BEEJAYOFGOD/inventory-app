import filterIcon from "../assets/icons/inventory/filters_lines.svg";

const Inventory = () => {
    const inventoryDetails = [
        {
            title: "Categories",
            contents: [14],
            bottomInfo: ["Last 7 days"],
            color: "primary",
        },
        {
            title: "Total Products",
            contents: [868, "#12,000"],
            bottomInfo: ["Last 7 days", "Revenue"],
            color: "products",
        },
        {
            title: "Top Selling",
            contents: [17],
            bottomInfo: ["Last 7 days", "Cost"],
            color: "selling",
        },
        {
            title: "Low Stocks",
            contents: [12, 2],
            bottomInfo: ["Ordered", "Not in stock"],
            color: "stocks",
        },
    ];

    const colorClasses = {
        primary: "text-[#1366d9]",
        products: "text-[#e19133]",
        selling: "text-[#845ebc]",
        stocks: "text-[#f36960]",
    };

    return (
        <section className="flex flex-col gap-8 p-10 bg-gray bg-gray-300/30 h-full">
            <section className="bg-white rounded-md p-4">
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                    Overall Inventory
                </h2>

                <div className="flex *:flex-1 *:border-r-2 *:border-gray-400/50 *:last-of-type:border-0 gap-18 *:nth-[2]:pr-18 *:nth-[3]:pr-18">
                    {inventoryDetails.map((inventoryDetail) => (
                        <div className="mt-4 flex flex-col gap-2">
                            <div
                                className={`${
                                    colorClasses[inventoryDetail.color]
                                }`}
                            >
                                <h3 className="text-base font-semibold">
                                    {inventoryDetail.title}
                                </h3>
                            </div>
                            <span className="flex justify-between">
                                {inventoryDetail.contents.map((content) => (
                                    <p>{content}</p>
                                ))}
                            </span>

                            <span className="flex justify-between">
                                {inventoryDetail.bottomInfo.map((content) => (
                                    <p>{content}</p>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col">
                <section className="border bg-white rounded-md flex justify-between">
                    <header className="p-4">
                        <h1>Products</h1>
                    </header>
                    <div className="p-4 flex gap-4">
                        <button className="bg-primary  text-white px-4 py-2 rounded-md">
                            Add button
                        </button>
                        <button className="flex justify-between items-center gap-2 border border-gray-800/30 px-4 py-2 rounded-md">
                            <img src={filterIcon} alt="filter Icon" /> Filters
                        </button>
                        <button className=" border border-gray-800/30 px-4 py-2 rounded-md">
                            Download all
                        </button>
                    </div>
                </section>
                <section className="">
                    <header className="flex justify-between">
                        <h2>Products</h2>
                        <h2>Buying Price</h2>
                        <h2>Quantity</h2>
                        <h2>Threshold Value</h2>
                        <h2>Expiry Date</h2>
                        <h2>Availability</h2>
                    </header>
                </section>
            </section>
        </section>
    );
};

export default Inventory;
