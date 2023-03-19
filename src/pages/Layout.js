import { Outlet,Link,useLocation } from "react-router-dom";
import Footer from "../composants/Footer";
import Header from "../composants/Header";

const Layout= ()=>{
      
    return(
       <> 
      
      <Header></Header>
        <Outlet></Outlet>

        <Footer></Footer>


        
        </>
    )

}

export default Layout