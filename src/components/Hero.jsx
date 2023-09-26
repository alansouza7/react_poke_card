import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Loading from "./Loading"
import Error from "./Error"
import { useFetchCards } from "../useFetch";
import { useGlobalContext } from "../context/context";
const url = `https://api.tcgdex.net/v2/en/cards/`

const Hero = () => {

  const [imageIndex, setImageIndex] = useState(0)
  const {data, isLoading, isError} = useFetchCards(url, ["cardsHero"])
  const{randomNumbers}=useGlobalContext()

const cardsArray = data?.data?.filter(card=>{
  return card?.image?.includes("https")
})

  const settings = {
    autoplay: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    beforeChange: (current, next) => setImageIndex(next)
  };

   if(isError){
    return <Error />
  }
  
  if(isLoading){
    return <Loading />
  }
  


  return (
  <Wrapper className="page-container">

      <div className="carrousel" >
      <Slider {...settings}>
        {cardsArray.slice(randomNumbers.first, randomNumbers.last).map((cards, index)=>{
        const {id, image} = cards
        return <div className={index === imageIndex?"slide activeSlide": "slide"}  key={id}>
        <Link to={`/card/${id}`}> <img  src={`${image}/high.webp`} alt="pokemon" /></Link>
             </div> 
  })}
        </Slider>
      </div>
   
  </Wrapper>
    
  ) 
}


const Wrapper = styled.div`


.carrousel {
  width: 100%;
  margin: 6rem 0 6rem 0;
  height: 470px;
}

.slide img {
  width: 20rem;
  margin: 0 auto;
}

.slide {
  transform: scale(0.6);
  transition: transform 300ms;
  opacity: 0.5;
}

.activeSlide {
  transform: scale(1.0);
  opacity: 1;
}



@media(max-width: 850px){
  .carrousel {
    height: 200px;
    margin: 5rem 0 5rem 0 ;
  }
}

`

export default Hero