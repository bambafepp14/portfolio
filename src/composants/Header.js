import { Outlet,Link,useLocation } from "react-router-dom";

const Header= ()=>{
      
    return(
        <nav class=" navbar-dark   navbar navbar-expand-lg  bg-first" > 
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <img src="/images/logo.png" className="imglog" />
            <ul class="navbar-nav mx-auto">
                <li class="nav-item p-5">
                    
                
                    <Link to={'/'} className="text-white" > accueil</Link>
                </li>
                <li class="nav-item p-5">
                    <Link to={'/galerie'}className="text-white"> Galerie</Link>
                </li>
                <li class="nav-item p-5">
                    <Link to={'/tarifs'} className="text-white"> Tarifs</Link>
                </li>
                <li class="nav-item p-5">
                    <Link to={'/contact'} className="text-white"> Contact</Link>
                </li>

            </ul>
            </div>
        </nav>
        


        
        
    )

}

export default Header ;