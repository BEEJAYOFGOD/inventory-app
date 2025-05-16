import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Navigate,
} from "react-router-dom";

import "./App.css";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import RootLayout from "./Layouts/RootLayout";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext/userContext";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Inventory from "./Layouts/InventoryLayout";
import Report from "./pages/Report";
import Suppliers from "./pages/supplier";
import Orders from "./pages/Orders";
import Store from "./pages/store";
import Settings from "./pages/settings";
import InventoryContent from "./pages/inventoryContent";
import ProductDisplay from "./components/ProductDisplay";
import ProductOverview from "./components/ProductOverview";
import ProductPurchases from "./components/ProductPurchases";
import ProductLoader from "./loader func/ProductLoader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                </Route>

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    // Inventory layout with nested routes
                    <Route
                        path="/dashboard/inventory"
                        element={
                            <ProtectedRoute>
                                <Inventory />
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={
                                <Navigate to="/dashboard/inventory/1" replace />
                            }
                        />
                        <Route
                            path=":page"
                            element={
                                <ProtectedRoute>
                                    <InventoryContent />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                    <Route
                        path="/dashboard/inventory/products/:product"
                        element={<ProductDisplay />}
                    >
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <ProductOverview />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="purchases"
                            element={
                                <ProtectedRoute>
                                    <ProductPurchases />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="adjustments"
                            element={
                                <ProtectedRoute>
                                    <ProductPurchases />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="history"
                            element={
                                <ProtectedRoute>
                                    <ProductPurchases />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                    <Route
                        path="/dashboard/report"
                        element={
                            <ProtectedRoute>
                                <Report />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard/suppliers"
                        element={
                            <ProtectedRoute>
                                <Suppliers />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard/orders"
                        element={
                            <ProtectedRoute>
                                <Orders />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard/store"
                        element={
                            <ProtectedRoute>
                                <Store />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard/settings"
                        element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Route>
        </>
    )
);
function App() {
    return (
        <AuthProvider>
            <>
                <RouterProvider router={router} />
                <ToastContainer
                    theme="colorblack"
                    toastClassName="bg-primary text"
                    progressClassName="bg-primary"
                />
            </>
        </AuthProvider>
    );
}

export default App;
