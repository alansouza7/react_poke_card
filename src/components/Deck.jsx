import styled from 'styled-components'
import { useDeckContext } from '../context/deckContext'
import { Link } from 'react-router-dom'
import { colorness, darkness, dragon, fairy, fighting, fire, grass, lightning, metal, psychic, water } from "../assets/types/types"

const Deck = () => {

  const {filteredDeck} = useDeckContext()

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
 

  return (<Wrapper>

      {filteredDeck?.map((card, index)=>{
       const {id, img, name, type} = card
        return <div key={index} className='main-card-box'>
          <Link to={`/card/${id}`}> <img className='main-img' width="150" src={img} alt={name} /></Link>
          <div className="deck-info">
         {type?<><img width="20" src={typeImages[type.toLowerCase()] || null} alt="" /> <h5>{name}</h5></>: <h5>{name}</h5>} 
          </div>
              
        </div>
      })}
    
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
  

.main-card-box {
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  border-radius: 12px;
  padding: 1rem;
  height: 280px;
  width: 180px
}


.deck-info{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
}

.main-img{
  transition: var(--transition);
}

.main-img:hover {
  box-shadow: var(--shadow-4);
  transform: scale(1.8);
  transition: var(--transition);
}

img{
  border-radius: 6px;
}

`

export default Deck

