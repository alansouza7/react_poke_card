import { NavLink } from "react-router-dom";
import { useGlobalContext } from '../context/context';
import {TbCards} from 'react-icons/tb'
import { useDeckContext } from "../context/deckContext";
import styled from 'styled-components'

const NavLinkButtons = () => {

    const {getRandomNumbers} = useGlobalContext()
    const {deck} = useDeckContext()

  return (<Wrapper>
    <ul className="nav-links">
     <NavLink  className="button-nav-link" onClick={getRandomNumbers}  to='/'>Home</NavLink>
          <NavLink className="button-nav-link" to='/cards'>Cards</NavLink>
          <NavLink className="button-nav-link" to='/series'>Series</NavLink>
          <NavLink className="button-nav-link deck" to='/deck'>Favourites {deck.length>0?<span className="deck-qtd">{deck.length}</span>:<TbCards className="deck_card"/> } </NavLink>
          </ul>
          </Wrapper>
  )
}

const Wrapper = styled.div `
    
    .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-links {
      display: flex;
      justify-content: center;
      gap: 4rem;
      li {
        margin: 0 .5rem;
      }
      a {
        color: var(-grey-300);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem 1rem;
        border-radius: 12px;
        transition: 0.4s ease-out;
        &:hover {
          background-color: var(--beige);
          transition: 0.4s ease-out;
        }
      }
    }

    .button-nav-link {
  --bg: #000;
  --hover-text: #000;
  color: var(--hover-text);
  border: 2px solid #000;
  border-radius: 4px;
  padding: 0.8em 1em;
  background: var(--beige);
  transition: 0.2s;
  width: 130px;
  cursor: pointer;
  text-align: center;
}

.button-nav-link:hover{
  transform: translate(-0.25rem,-0.25rem);
  background: var(--red);
  box-shadow: 0.25rem 0.25rem var(--bg);
  color: var(--hover-text);
}

.button-nav-link:active {
  transform: translate(0);
  box-shadow: none;
}
  
.active{
      transform: translate(-0.25rem,-0.25rem);
  background: var(--beige);
  box-shadow: 0.25rem 0.25rem var(--bg);
  color: var(--hover-text);
    }
    
  }

  .deck{
    position: relative;
  }



.deck-qtd{
    position: absolute;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 3px;
    top: -9px;
    right: -9px;
    background: var(--red);
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    color:#fff;
    border: 2px solid #000;
    transform: rotateZ(-14deg);
}

`

export default NavLinkButtons