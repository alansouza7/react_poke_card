import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useGlobalContext } from "../context/context"
import Loading from "./Loading"
import Error from "./Error"
import { useFetchCards } from "../useFetch"
const url = `https://api.tcgdex.net/v2/en/cards/`


const Cards = () => {

const {startNumber, endNumber, nextPage, previousPage, cardSearched} = useGlobalContext()
const {data, isLoading, isError} = useFetchCards(url, ["cards"])

/* SHOW CARDS WITH PICS ONLY */
const cardsArray = data?.data?.filter(card=>{
  return card?.image?.includes("https")
})

/*SEARCH FILTER */
const searchedArray = cardsArray?.filter(singleCard=>{
  return singleCard.name.toLowerCase().includes(cardSearched)
}) 


 if(isError){
  return <Error />
}

if(isLoading){
  return <Loading />
}




  return (<div >
    <h1 className="cards-title"><span className="page-titles">Cards</span></h1>

    <Wrapper >
        {searchedArray?.slice(`${startNumber}`, `${endNumber}`).map(cards=>{
            const {id, image, name} = cards
            
         return  <div className="main-card-box" key={id}>
              <Link to={`/card/${id}`}> <img src={`${image}/high.webp`} alt={name} /></Link>
                <p>{name}</p>
            </div>
        })}
    </Wrapper>

    <div className="button-flex">
      <button className="button" onClick={previousPage}>PREVIOUS</button>
      <button className="button"  onClick={nextPage}>NEXT</button>
    </div>
    </div>
  )  
}

export default Cards

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
}

.main-card-box:hover {
  box-shadow: var(--shadow-4);
  transform: scale(1.05);
}

img{
  border-radius: 6px;
}

p{
  padding: 0.5rem 0 0.8rem 0;
}


`