import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const InventoryContent = () => {
    let { page } = useParams();
    const navigate = useNavigate();
    console.log("page", page);
    let pageNum = Number(page);

    console.log(Number(page));
    console.log("page");

    const products = [
        {
            name: "Bru",
            buyingPrice: 257,
            quantity: "22 Packets",
            thresholdValue: "12 Packets",
            expiryDate: "21/12/22",
            availability: "Out of stock",
        },
        {
            name: "Red Bull",
            buyingPrice: 405,
            quantity: "36 Packets",
            thresholdValue: "9 Packets",
            expiryDate: "5/12/22",
            availability: "In-stock",
        },
        {
            name: "Bourn Vita",
            buyingPrice: 502,
            quantity: "14 Packets",
            thresholdValue: "6 Packets",
            expiryDate: "8/12/22",
            availability: "Out of stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
        {
            name: "Scotch Brite",
            buyingPrice: 359,
            quantity: "43 Packets",
            thresholdValue: "8 Packets",
            expiryDate: "6/6/23",
            availability: "In-stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Red Bull",
            buyingPrice: 405,
            quantity: "36 Packets",
            thresholdValue: "9 Packets",
            expiryDate: "5/12/22",
            availability: "In-stock",
        },
        {
            name: "Red Bull",
            buyingPrice: 405,
            quantity: "36 Packets",
            thresholdValue: "9 Packets",
            expiryDate: "5/12/22",
            availability: "In-stock",
        },

        {
            name: "Bourn Vita",
            buyingPrice: 502,
            quantity: "14 Packets",
            thresholdValue: "6 Packets",
            expiryDate: "8/12/22",
            availability: "Out of stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
        {
            name: "Scotch Brite",
            buyingPrice: 359,
            quantity: "43 Packets",
            thresholdValue: "8 Packets",
            expiryDate: "6/6/23",
            availability: "In-stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
        {
            name: "Scotch Brite",
            buyingPrice: 359,
            quantity: "43 Packets",
            thresholdValue: "8 Packets",
            expiryDate: "6/6/23",
            availability: "In-stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Red Bull",
            buyingPrice: 405,
            quantity: "36 Packets",
            thresholdValue: "9 Packets",
            expiryDate: "5/12/22",
            availability: "In-stock",
        },
        {
            name: "Bourn Vita",
            buyingPrice: 502,
            quantity: "14 Packets",
            thresholdValue: "6 Packets",
            expiryDate: "8/12/22",
            availability: "Out of stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
        {
            name: "Scotch Brite",
            buyingPrice: 359,
            quantity: "43 Packets",
            thresholdValue: "8 Packets",
            expiryDate: "6/6/23",
            availability: "In-stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
        {
            name: "Scotch Brite",
            buyingPrice: 359,
            quantity: "43 Packets",
            thresholdValue: "8 Packets",
            expiryDate: "6/6/23",
            availability: "In-stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Coca cola",
            buyingPrice: 205,
            quantity: "41 Packets",
            thresholdValue: "10 Packets",
            expiryDate: "11/11/22",
            availability: "Low stock",
        },
        {
            name: "Bru",
            buyingPrice: 257,
            quantity: "22 Packets",
            thresholdValue: "12 Packets",
            expiryDate: "21/12/22",
            availability: "Out of stock",
        },
        {
            name: "Red Bull",
            buyingPrice: 405,
            quantity: "36 Packets",
            thresholdValue: "9 Packets",
            expiryDate: "5/12/22",
            availability: "In-stock",
        },
        {
            name: "Bourn Vita",
            buyingPrice: 502,
            quantity: "14 Packets",
            thresholdValue: "6 Packets",
            expiryDate: "8/12/22",
            availability: "Out of stock",
        },
        {
            name: "Horlicks",
            buyingPrice: 530,
            quantity: "5 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Harpic",
            buyingPrice: 605,
            quantity: "10 Packets",
            thresholdValue: "5 Packets",
            expiryDate: "9/1/23",
            availability: "In-stock",
        },
        {
            name: "Ariel",
            buyingPrice: 408,
            quantity: "23 Packets",
            thresholdValue: "7 Packets",
            expiryDate: "15/12/23",
            availability: "Out of stock",
        },
    ];

    console.log("products", products);
    const totalPages = Math.ceil(products.length / 10);
    console.log("totalpages", totalPages);
    console.log(products.length / 10);

    const [newProducts, setNewProducts] = useState(
        products.filter(
            (_product, index) =>
                index < pageNum * 10 && index >= (pageNum - 1) * 10
        )
    );

    if (page < 1 || page > totalPages) {
        navigate("dashboard/inventory/1");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        console.log(page);
        const prod = products.filter(
            (_product, index) =>
                index < pageNum * 10 && index >= (pageNum - 1) * 10
        );

        console.log(prod);
        setNewProducts(prod);
    }, [page]);

    return (
        <>
            <section className=" bg-white rounded-b-xl ">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed">
                        <thead className="bg-white">
                            <tr>
                                <th className="py-3 pl-12 text-left text-gray-500 font-medium text-sm tracking-wider">
                                    Products
                                </th>
                                <th className="py-3 px-4  text-gray-500 font-medium text-sm tracking-wider">
                                    Buying Price
                                </th>
                                <th className="py-3 px-4  text-gray-500 font-medium text-sm  tracking-wider">
                                    Quantity
                                </th>
                                <th className="py-3 px-4  text-gray-500 font-medium text-sm tracking-wider ">
                                    Threshold Value
                                </th>
                                <th className="py-3 px-4  text-gray-500 font-medium text-sm tracking-wider ">
                                    Expiry Date
                                </th>
                                <th className="py-3 pr-12 text-right  text-gray-500 font-medium text-sm tracking-wider ">
                                    Availability
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 table-fixed">
                            {newProducts.map((product, index) => (
                                <tr
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                        ) {
                                            navigate(
                                                `/dashboard/inventory/products/${product.name}`
                                            );
                                        }
                                    }}
                                    onClick={() =>
                                        navigate(
                                            `/dashboard/inventory/products/${product.name}`
                                        )
                                    }
                                    className="hover:bg-gray-50 cursor-pointer"
                                >
                                    <td className="py-4 pl-12 whitespace-nowrap text-sm text-gray-700">
                                        {product.name}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        ₹{product.buyingPrice}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        {product.quantity}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        {product.thresholdValue}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        {product.expiryDate}
                                    </td>
                                    <td className="py-4  whitespace-nowrap text-sm text-right pr-12">
                                        <span>{product.availability}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-6 p-4 rounded-b-xl">
                    <button
                        className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 disabled:opacity-50"
                        disabled={pageNum === 1}
                        onClick={
                            () => {
                                pageNum -= 1;
                                navigate(`/dashboard/inventory/${pageNum}`);
                            }
                            // setCurrentPage((prev) => Math.max(prev - 1, 1));
                        }
                    >
                        Previous
                    </button>
                    <div className="text-sm text-gray-700">Page {pageNum}</div>
                    <button
                        className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 disabled:opacity-50"
                        disabled={pageNum === totalPages}
                        onClick={() => {
                            pageNum += 1;
                            navigate(`/dashboard/inventory/${pageNum}`);
                        }}
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
};

export default InventoryContent;
