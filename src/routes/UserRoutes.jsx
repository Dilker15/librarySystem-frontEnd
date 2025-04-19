import { Routes,Route } from "react-router-dom";
import { DashboardPage } from "../Pages/DashboardPage";


export function UserRoutes(){

    return(<>
          <Routes>
              <Route path="/dashboard" element={<DashboardPage/>}/>
          </Routes>
    </>);
}