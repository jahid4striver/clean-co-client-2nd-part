import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from './routes/publicRoute'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./pages/About";
import { PrivateRoutes } from "./routes/privateRoutes";
import  AdminRoute from "./authentication/AdminRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }) => <Route path={path} element={<Component />} />)
          }
          {/* <Route path="services" element={<PrivateRoute>
          <Services/>
         </PrivateRoute>}></Route>
         <Route path="about" element={<PrivateRoute>
          <About/>
         </PrivateRoute>}></Route> */}
          {/* <Route element={<PrivateRoute />}>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route> */}
          <Route element={<PrivateRoute />}>
          {
            PrivateRoutes.map(({path, Component})=> <Route path={path} element={<Component/>}/>)
          }
          </Route>
          <Route element={<AdminRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="add-admin" element={<AddAdmin/>}></Route>
            <Route path="add-service" element={<AddService/>}></Route>
          </Route>
          </Route>

        </Routes>
      </Navbar>

    </>
  );
}

export default App;
