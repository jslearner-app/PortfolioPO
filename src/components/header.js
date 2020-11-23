import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>PATIENCE ORA</Link>
          </div>
           <div className='menu' 
          
           
           ><a href="https://s3.amazonaws.com/archivos-cvonline/assets/pdf/890771/Patience_Ora_Resume_29-09-2020-08-48-27.pdf"> RESUME</a> 
    
          
             

</div>
  </div>    
  </div>
    </header>
  );
};

export default Header;
