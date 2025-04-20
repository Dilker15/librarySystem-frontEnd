import { Routes,Route } from "react-router-dom"
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { UserRoutes } from "./routes/UserRoutes";
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/*" element={
                                    <PrivateRoutes>
                                       <UserRoutes/>
                                    </PrivateRoutes>
                                  }/>
      </Routes>
    </>
  );
}

export default App
