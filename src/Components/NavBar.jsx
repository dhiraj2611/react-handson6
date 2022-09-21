

import { Link } from "react-router-dom";
import './Style.css'

const NavigationBar = () => {
    return ( 
        <div className="Nav">
        <Link to ='/Home' className="ip">Home</Link>
        <Link to ='/Student' className="ip">Student</Link>
        <Link to ='/Contact' className="ip">Contact</Link>
        
    </div> 
    
    );
}
 
export default NavigationBar;