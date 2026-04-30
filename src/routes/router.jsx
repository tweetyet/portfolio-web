import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import PublicLayout from "../components/PublicLayout";

const router = createBrowserRouter([{
    path: '/',
    errorElement: <h1>404</h1>,
    element: <PublicLayout/>,
    children: [...publicRoutes]
}])

export default router;