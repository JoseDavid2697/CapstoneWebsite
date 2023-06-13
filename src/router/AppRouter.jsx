import {Routes, Route} from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CapstoneRoutes } from "../capstone/routes/CapstoneRoutes";

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/auth/*" element={<AuthRoutes/>}/>

            <Route path="/*" element={<AuthRoutes/>}/>

            <Route path="/home/*" element={<CapstoneRoutes />}/>

        </Routes>
    )
}