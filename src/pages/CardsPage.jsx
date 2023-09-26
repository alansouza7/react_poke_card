import React from 'react'
import Cards from '../components/Cards'
import PageHero from '../components/PageHero'
import Filter from '../components/Filter'
import styled from "styled-components";


const CardsPage = () => {
  return (
    <main >
       <PageHero title="Cards" />
    <Wrapper>
      <div className='page-container products'>
        <Filter />
      <Cards />
     
      </div>
     
      </Wrapper>
    </main>
  );
   
  
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;


export default CardsPage

