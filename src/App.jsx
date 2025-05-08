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
