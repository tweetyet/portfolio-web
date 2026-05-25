import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import PublicLayout from "../components/PublicLayout";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([{
    path: '/',
    errorElement: <ErrorPage/>,
    element: <PublicLayout/>,
    children: [...publicRoutes]
}])

export default router;