import React,{useEffect} from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

 const Navbar = () => {
    useEffect(() => {
        M.AutoInit();
        //eslint-disable-next-line
      }, []);
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">BOOK REVIEW</a>
       </div>
    </nav>
    )
}
export default Navbar