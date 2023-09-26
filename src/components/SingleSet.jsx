import { Link, useParams } from "react-router-dom"
import { useFetchCards } from "../useFetch"
import styled from 'styled-components'
import Loading from "./Loading"
import Error from "./Error"
import { useGlobalContext } from "../context/context"
const url = "https://api.tcgdex.net/v2/en/sets"


const SingleSet = () => {

    const {id} = useParams()
    const {data, isLoading, isError} =useFetchCards(`${url}/${id}`, ["singleSet"])
    const {getRandomNumbers} =useGlobalContext()
  
  const newArray = data?.data?.cards.filter(cards=>{
    return cards?.image?.includes("https")
  })



  if(isError){
    return <Error />
  }
  
  if(isLoading){
    return <Loading />
  }

const {name, logo, cardCount, serie, releaseDate, symbol} = data.data


  return (<>
  
  <div className="single-set-info">
      <div> <img className="set-info-img" src={`${logo}.png`} alt={name} /></div>
      <div>
        <h1 className="single-set-title"><span className="single-set-underline">{name}</span></h1>
        <img width="25" src={`${symbol}.png`} alt={name} />
      <p><span className="single-set-names">Serie: </span>{serie.name}</p>
      <p><span className="single-set-names">Cards: </span>{cardCount.total}</p>
      <p><span className="single-set-names">Release Date: </span>{releaseDate}</p>
      </div>
      
    </div>

  
  <div className='page-container'>

  
       <Wrapper >
     {newArray?.map(card=>{
       const {id, image, name} = card

       return <div className="main-card-box" key={id}>
            <Link to={`/card/${id}`}> <img src={`${image}/high.webp`} alt={name} /></Link>
                <p>{name}</p>
            </div>
        })} 
    </Wrapper>
    </div>
    <Link onClick={getRandomNumbers} className="button" style={{textAlign: "center", display: "block", margin: "5rem auto", width: "150px"}} to='/'>Back home</Link>
    </>
  )
}

export default SingleSet

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

p{
  padding: 0.5rem 0 0.8rem 0;
}

img{
  border-radius: 6px;
}


`