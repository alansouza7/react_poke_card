import Deck from "../components/Deck"
import styled from 'styled-components'
import PageHero from "../components/PageHero"
import DeckAttribute from "../components/DeckAttribute"



const DeckPage = () => {
  return ( <section >
    <PageHero title="Deck" />
 <Wrapper>
   <div className='page-container deck_page'>
     <DeckAttribute />
    <Deck />
  
   </div>
  
   </Wrapper>
 </section>
  )
}

export default DeckPage

const Wrapper = styled.section`
   .deck_page {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .deck_page {
      grid-template-columns: 200px 1fr;
    }
  }


`