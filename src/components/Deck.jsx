import styled from 'styled-components'
import { useDeckContext } from '../context/deckContext'
import { Link } from 'react-router-dom'
import { colorness, darkness, dragon, fairy, fighting, fire, grass, lightning, metal, psychic, water } from "../assets/types/types"

const Deck = () => {

  const {filteredDeck, deleteCard, deck} = useDeckContext()

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

  if(deck <=0){
    return <div className='empty'>
      <h2 style={{marginBottom: "1rem"}}>Add a new card</h2>
    <Link to="/cards"> <button style={{height: "100"}} className='button'>Cards</button></Link> 
    </div> 
  }

  if(filteredDeck <=0){
    return <div className='empty'>
    <h2 style={{marginBottom: "1rem"}}>No matches found for this type</h2>
  </div> 
  }

  return (<Wrapper>

      {filteredDeck?.map((card, index)=>{
       const {id, img, name, type} = card
        return <div key={index} className='main-card-box'>
          <img className='main-img' width="200" src={img} alt={name} />
          <div className="deck-info">
         {type?<><img width="20" src={typeImages[type.toLowerCase()] || null} alt="" /> <h5>{name}</h5></>: <h5>{name}</h5>} 
          </div>
          <div className="buttons">
         <Link to={`/card/${id}`}>  <button className="button-blue" >View</button>  </Link>
          <button onClick={()=>deleteCard(id, type)} className="button-red" >Delete</button>
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
  height: 390px;
  width: 230px
}


.deck-info{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
}


img{
  border-radius: 6px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.8rem;
}

.button-blue, .button-red {
  --bg: #000;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.3em;
  transition: 0.2s;
  width: 60px;
  cursor: pointer;
  text-align: center;
}

.button-blue{
  background: var(--blue);
}

.button-red{
  background: var(--red);
}

.button-blue:hover, .button-red:hover {
  transform: translate(-0.25rem,-0.25rem);
  box-shadow: 0.25rem 0.25rem var(--bg);
}

`

export default Deck

