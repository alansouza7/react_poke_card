import { Link } from "react-router-dom"
import { useFetchCards } from "../useFetch"
const url = 'https://api.tcgdex.net/v2/en/sets'
import styled from 'styled-components'
import Loading from "./Loading"
import Error from "./Error"
import { useGlobalContext } from "../context/context"


const SetList = () => {

    const {data, isLoading, isError} = useFetchCards(url, ["setList"])
    const {serie} = useGlobalContext()

    const setSelected = data?.data.filter(set=>{
      return set.id.includes(`${serie}`)
    })

    if(isError){
      return <Error />
    }
    
    if(isLoading){
      return <Loading />
    }
    
  return (
    <Wrapper className='page-container'>
    {setSelected.map(sets=>{
      const {id, logo, name, cardCount} = sets
       return <Link key={id} to={`/sets/${id}`}>  <div   className="set" >
        <img className="set_img" width="100" src={`${logo}.png`} alt="Set" />
        <div style={{ marginTop: 'auto' }}>
          <p>{name}</p>
          <p className="cards-total">Cards : {cardCount.total}</p>
          </div>
       </div> </Link>
    })}

    </Wrapper>
  )
}

export default SetList

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  
  .set {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    background: var(--white);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    border-radius: 12px;
    padding: 1rem;
    height: 200px;
    cursor: pointer;
   
  }

 a {
  color: #000;
  font-weight: 400;
 }


  p{
    text-align: center;
  }

  img {
    margin: 0 auto;
  }

  .set:hover {
    box-shadow: var(--shadow-4);
  transform: scale(0.95);
  }

  .set::before {
  content: '';
  width: 99%;
  height: 99%;
  background: var(--off-white);
  position: absolute;
  z-index: -1;
  top: 1px;
  left: 1px;
  border-radius: 25px;
  transition: all 0.3s;
}

.set:hover::before {
  transform: rotate(6deg);
  box-shadow: 0px 0px 20px -5px #000;
  border: 1px solid var(--yellow);
}


`