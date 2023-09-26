import {FaBars} from 'react-icons/fa'
import logo from '../../public/pokemon-logo-black.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

import NavLinkButtons from './NavLinkButtons';


const Navbar = () => {

   const {openSideBar, getRandomNumbers} = useGlobalContext()

const stylesImg = {
  width: "300px",
  margin: "0 auto"

}
   

  return (<div>
     <Link onClick={getRandomNumbers} to="/">
            <img className='main-img' style={stylesImg} src={logo} alt="confy" />
          </Link>
    <NavContainer >
      <div className="nav-center">
        <div className="nav-header">
         <div></div>
          <button  onClick={openSideBar}  type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        
         <NavLinkButtons />
        
      </div>
    </NavContainer>
    </div>
  );
  
  
}

export default Navbar


const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
 
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    
  }


  

`;