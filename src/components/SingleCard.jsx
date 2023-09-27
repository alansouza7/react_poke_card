import { Link, useParams } from "react-router-dom"
import { useFetchCards } from "../useFetch"
import styled from 'styled-components'
import Loading from "./Loading"
import Error from "./Error"
import { useGlobalContext } from "../context/context"
import { useDeckContext } from "../context/deckContext"
const url = "https://api.tcgdex.net/v2/en/cards/"



const SingleCard = () => {

  const {getRandomNumbers} = useGlobalContext()
  const {id} = useParams()
  const {data, isLoading, isError} = useFetchCards(`${url}${id}`, ["singleCard"])
  const {addToDeck} = useDeckContext()

  if(isError){
    return <Error />
  }
  
  if(isLoading){
    return <Loading />
  }

  const h1Styles = {
    textAlign : "center",
    background : "var(--beige)",
    minHeight : "20vh",
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
  }




const {attacks, hp, abilities, rarity, set, types} = data.data

  const img = data?.data?.image
  const name = data?.data?.name

   
  return (<>
  <h1 style={h1Styles}>{name}</h1>
    <Wrapper className='page-container'>
    
    <div className="img_div">
    <img className="img" src={`${img}/high.webp`} alt={name} />
    <button onClick={()=>addToDeck(data.data)} type="button" className="button">Favourite </button>
      
    </div>
     
      
      <div className="poke-info">

        <div className="general-info">
          <h4 ><span className="title">{name}</span></h4>
          <p><span>Type:</span> {types}</p>
          <p><span>Rarity:</span> {rarity}</p>
          <p><span>HP:</span> {hp}</p>
        </div>
        
        <div className="set-info">
          <h4><span className="title">Set Info</span></h4>
          <p><span>Set Name: </span>{set.name}</p>
          <p><span>Set Cards:</span> {set.cardCount.official}</p>
         <Link to={`/sets/${set.id}`}><img className="set-img" src={`${set.symbol}.png`} alt="set symbol" /></Link>
        </div>

        {abilities?  <div className="abilities">
          <h4><span className="title">Abilities</span></h4>
          {abilities? <p><span>Type: </span>{abilities[0].type}</p>: null}
          {abilities? <p><span>Name: </span>{abilities[0].name}</p>: null}
          {abilities? <p><span>Effect: </span>{abilities[0].effect}</p>: null}
        </div>: null}

        {attacks?<div className="attacks">
          <h4><span className="title">Attacks</span></h4>
          {attacks? <p><span>Name: </span>{attacks[0]?.name}</p>: null}
          {attacks? <p><span>Effect: </span>{attacks[0].effect? attacks[0].effect: ""}</p>: null}
          {attacks.length > 1? <p className="second-attack"><span>Name: </span>{attacks[1]?.name}</p>: null}
          {attacks.length > 1? <p><span>Effect: </span>{attacks[1].effect? attacks[1].effect: ""}</p>: null}
        </div>: null }
      </div>
  </Wrapper>
  <Link onClick={getRandomNumbers} className="button" style={{textAlign: "center", display: "block", margin: "5rem auto", width: "150px"}} to='/'>Back home</Link>
  </>
  )
}

export default SingleCard


const Wrapper = styled.section`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
  

  .img{
    height: 481px;
    width: 350px;
    border-radius: 12px;
    
  }

  .img_div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .set-img{
    width: 60px;
    margin-top: 12px;
  }

  .set-info, .attacks, .abilities, .general-info{
    margin-bottom: 3rem;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 16px;
    max-width: 450px;
    line-height: 1.5;
  }

  h4{
    margin-bottom: 20px;
  }

  .title {
    padding: 16px 0;
    position: relative;
  }

  .title:before {
    position: absolute;
    content: '';
    height: .2em;
    width: 80%;
    bottom: 12px;
    z-index: -1;
    background: var(--red); 
}

  span{
    font-weight: bold;
    font-size: 16px;
  }

  p {
    padding: 2px 0;
  }

  .second-attack{
    margin-top: 15px;
  }
  @media(min-width: 990px){
    flex-direction: row;
    align-items: flex-start;
    gap: 10rem;
  }  

`