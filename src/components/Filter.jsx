import styled from 'styled-components'
import { useGlobalContext } from '../context/context'


const Filter = () => {

  const {searchCard, cardSearched, clearFilter} = useGlobalContext()

  return (<Wrapper >
    <div className="content">
    <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              placeholder="search"
              className="search-input"
               onChange={searchCard} 
               value={cardSearched}
            />
            
          </div>
          </form>

          <button type="button" className="clear-btn" onClick={clearFilter}>clear filter</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .search-input {
    padding: 0.5rem;
    background: var(--grey-200);
    border-radius: 12px;
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  .active {
    border-color: var(--clr-grey-5);
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

export default Filter