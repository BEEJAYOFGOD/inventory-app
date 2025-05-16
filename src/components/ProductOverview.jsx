import { useOutletContext } from "react-router-dom";
import maggi from "../assets/images/maggi.png";

const ProductOverview = () => {
    const { productName } = useOutletContext();

    return (
        <section>
            <section className="flex">
                <div className="inline-block w-1/2">
                    <table>
                        <thead>
                            <tr>
                                <th className="px-8 pt-8">Product Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="px-8 py-2 text-gray-400">
                                    Product name
                                </td>

                                <td className="text-gray-600 pl-12">
                                    {productName}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-8 py-2 text-gray-400">
                                    Product ID
                                </td>
                                <td className="text-gray-600 pl-12">456657</td>
                            </tr>
                            <tr>
                                <td className="px-8 py-2 text-gray-400">
                                    Expiry date
                                </td>
                                <td className="text-gray-600 pl-12">13/4/23</td>
                            </tr>
                            <tr>
                                <td className="px-8 py-2 text-gray-400">
                                    Threshold value
                                </td>
                                <td className="text-gray-600 pl-12">12</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-8 pt-8  ">
                                    Supplier details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-8 py-2 text-gray-400">
                                    Supplier name
                                </td>
                                <td className="text-gray-600 pl-12">
                                    Ronald man
                                </td>
                            </tr>
                            <tr>
                                <td className="px-8 py-2 text-gray-400 ">
                                    Contact Number
                                </td>
                                <td className="text-gray-600 pl-12">
                                    989191991
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" w-1/2 mt-8  flex flex-col items-end pr-12">
                    <div>
                        <div className="w-fit p-4 mx-auto border border-dashed rounded-md mb-12">
                            <img src={maggi} alt="" />
                        </div>

                        <table className="table-fixed  ml-auto min-w-xs">
                            <tbody>
                                <tr>
                                    <td className="py-4 text-gray-400">
                                        Opening Stock
                                    </td>
                                    <td className="text-gray-600 text-right">
                                        40
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-gray-400">
                                        Remaining Stock
                                    </td>
                                    <td className="text-gray-600 text-right">
                                        40
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-gray-400">
                                        On the way
                                    </td>
                                    <td className="text-gray-600 text-right">
                                        40
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-gray-400">
                                        Threshold
                                    </td>
                                    <td className="text-gray-600 text-right">
                                        12
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 ml-4">
                    Stock Locations
                </h2>
                <table className="table-fixed border-collaps min-w-xl ">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 ">
                            <th className="px-4 py-3">Store Name</th>
                            <th className="px-4 py-3 text-right">
                                Stock in hand
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 ">
                            <td className="px-4 py-3 ">Sulur Branch</td>
                            <td className="px-4 py-3 text-right ">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    15
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3">Singanallur Branch</td>
                            <td className="px-4 py-3 text-right">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    19
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default ProductOverview;
