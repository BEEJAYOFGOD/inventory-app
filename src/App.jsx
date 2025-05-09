import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
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
import Inventory from "./pages/inventory";
import Report from "./pages/Report";
import Suppliers from "./pages/supplier";
import Orders from "./pages/Orders";
import Store from "./pages/store";
import Settings from "./pages/settings";

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
                    <Route
                        path="/dashboard/inventory"
                        element={
                            <ProtectedRoute>
                                <Inventory />
                            </ProtectedRoute>
                        }
                    />
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
