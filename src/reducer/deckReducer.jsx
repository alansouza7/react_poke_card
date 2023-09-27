import { ADD_TO_DECK, CLEAR_DECK, UPDATE_FILTER, DELETE_CARD} from "../actions"


const deckReducer = (state, action) =>{

    if(action.type === ADD_TO_DECK){
        const card = action.payload

        let cardSelected = {
            id: card.id,
            name: card.name,
            categories: card.category,
            type: card?.types?.[0], 
            img: `${card.image}/high.webp`
        }

        /* Update Type */
        const updateTypeQtd = state.types.find(item => item.type === cardSelected.type)

        if(updateTypeQtd){
            if (!state.deck.some(item => item.name === cardSelected.name)){
                updateTypeQtd.qtd = updateTypeQtd.qtd + 1
            }
           
        }

        if (!state.deck.some(item => item.name === cardSelected.name)) {
            return { ...state, deck:[...state.deck, cardSelected], filteredDeck: [...state.deck, cardSelected]}
        }

        return state

       
    }
   
    if(action.type === CLEAR_DECK){
        return {deck: [],  categories: [
            {category: "Pokemon", qtd: 0},
            {category: "Trainer", qtd: 0},
            {category: "Energy", qtd: 0},
            
        ], 
        types:[
            {type: "Colorless", qtd: 0},
            {type: "Darkness", qtd: 0},
            {type: "Dragon", qtd: 0},
            {type: "Fairy", qtd: 0},
            {type: "Fighting", qtd: 0},
            {type: "Fire", qtd: 0},
            {type: "Grass", qtd: 0},  
            {type: "Lightning", qtd: 0},
            {type: "Metal", qtd: 0},
            {type: "Psychic", qtd: 0},
            {type: "Water", qtd: 0},
        ],
    }
    }

    if(action.type === UPDATE_FILTER){
     
      const optionSelected = action.payload

        const deckFiltered = state?.deck?.filter(card =>{
           return card.type.includes(optionSelected)
        })

        if(optionSelected === "all"){
            return {...state, filteredDeck: [...state.deck]}
        }

      return {...state, filteredDeck: deckFiltered}
    }

    if(action.type === DELETE_CARD){
        const deck = state.filteredDeck
        const {id, type} = action.payload
        

        const tempDeck = deck.filter(card =>{
            return card.id !== id
        })

          /* Update Type */
          const updateTypeQtd = state.types.find(item => item.type === type)

          if(updateTypeQtd){
              updateTypeQtd.qtd = updateTypeQtd.qtd - 1
          }


       return {...state, filteredDeck: tempDeck, deck: tempDeck}
    }
   
}

export default deckReducer