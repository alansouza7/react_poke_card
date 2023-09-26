import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title, serie}) => {
  return <Wrapper>
    <div className='page-container'>
       
        {serie? <h3> <Link  to="/">Home</Link>/ <Link to="/series">{title}</Link> / {serie} </h3>:
                              <h3> <Link  to="/">Home</Link>/ {title} </h3>

        }
          
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--beige);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero