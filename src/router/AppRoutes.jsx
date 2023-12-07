import Cards from "../components/pages/Cards"
import Dashboard from "../components/pages/Dashboard"
import Tables from "../components/pages/Tables"
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/cards" element={<Cards />} />
        </Routes>
    )
}
export default AppRoutes;