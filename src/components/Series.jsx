import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import { Link } from "react-router-dom"
import { series } from '../utils'

const Series = () => {

    const { filterSeries} = useGlobalContext()

 

  return (
    <Wrapper className='page-container'>
    {series.map(sets=>{
      const {id, logo, name, width} = sets
       return <Link key={id} to="/sets">  <div  onClick={()=>filterSeries(id, name)} className="series" >
        <img  width={width} src={`${logo}.png`} alt="Set" />
        <div style={{ marginTop: 'auto' }}>
          <p>{name}</p>
          </div>
       </div> </Link>
    })}

    </Wrapper>
  )
}

export default Series

const Wrapper = styled.div `
     display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  margin-top: 3rem;
    .series {
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

  .series:hover {
    box-shadow: var(--shadow-4);
    transform: scale(0.95);
    border: 2px solid var(--beige);
  }

  a {
    color: black;
    font-weight: 500;
  }

  
`