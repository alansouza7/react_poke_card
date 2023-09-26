import { colorness, darkness, dragon, fairy, fighting, fire, grass, lightning, metal, psychic, water } from "../assets/types/types"
import { useDeckContext } from "../context/deckContext"
import styled from 'styled-components'
import {TbCards} from 'react-icons/tb'

const DeckAttribute = () => {

    const {types, clearDeck, deck, updateFilter} = useDeckContext()

    const typeImages = {
        colorless: colorness,
        darkness: darkness,
        dragon: dragon,
        fairy: fairy,
        fighting: fighting,
        fire: fire,
        grass: grass,
        lightning: lightning,
        metal: metal,
        psychic: psychic,
        water: water,
    }

   

  return (<>
    <Wrapper>

        <div className="content">
          <div className="form-control">
            <h2>Total: {deck.length}</h2>

            <button style={{background: "#0077b6"}} type="button" className="clear-btn" value={"all"} onClick={updateFilter}> <TbCards/>  My Deck</button>
          </div>
          <div className="form-control">
              <h4>Types</h4>
              <div>
                  {types.map((type, index)=>{
                      return <div key={index} className="flex"> 
                          <span>{type.qtd}</span>
                          <img width="25" src={typeImages[type.type.toLowerCase()] || null} alt="" />
                          
                          <button value={type.type} onClick={updateFilter} >{type.type}</button>
                      </div>
                  })} 
              </div>
          </div>

         
          <button type="button" className="clear-btn" onClick={clearDeck}>clear deck</button>
          </div>
         

    </Wrapper>
    
    </>
  )
}


const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  
  .flex{
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  button {
    display: block;
    
    margin: 0.35em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: red;
  }

  .clear-btn {
    background: var(--red);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 9px;
  }
 
  
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default DeckAttribute