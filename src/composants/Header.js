import { Outlet,Link,useLocation } from "react-router-dom";

const Header= ()=>{

    const toggleMenu=()=>{
        document.getElementById('navbarText').classList.toggle('show')
    }
      

      
    return(
        <nav className=" navbar-dark   navbar navbar-expand-lg  bg-first" > 
       <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button >
  <div className="collapse navbar-collapse" id="navbarText">
   <Link to={'/'} >  <img src="/images/logo.png" className="imglog" /></Link>
            <ul className="navbar-nav mx-auto">
               
                <li className="nav-item p-5">
                    <Link to={'/galerie'}className="text-white text-decoration-none "> GALERIE</Link>
                </li>
                <li className="nav-item p-5">
                    <Link to={'/tarifs'} className="text-white text-decoration-none"> TARIFS</Link>
                </li>
                <li className="nav-item p-5">
                    <Link to={'/contact'} className="text-white text-decoration-none"> CONTACT</Link>
                </li>

            </ul>
            </div>
        </nav>
        


        
        
    )

}

export default Header ;