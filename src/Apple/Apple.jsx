import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Heaser from "../Header/Heaser";


const Apple = () => {
    return (
        <div>
          <div className="max-w-8xl max-auto bg-stone-800">
          <Heaser></Heaser>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>


        </div>
    );
};

export default Apple;