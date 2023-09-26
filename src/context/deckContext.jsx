import { createContext, useContext, useEffect} from "react";
import { useReducer } from "react"
import { ADD_TO_DECK, CLEAR_DECK, UPDATE_FILTER} from "../actions"
import deckReducer from "../reducer/deckReducer";

const getDeckLocalStorage = () =>{

    if(JSON.parse(localStorage.getItem('deck'))){
        const {deck} = JSON.parse(localStorage.getItem('deck'))
        return deck

    }
   
    
}

const getCategoriesLocalStorage = () =>{

    if(JSON.parse(localStorage.getItem('deck'))){
        const {categories} = JSON.parse(localStorage.getItem('deck'))
        return categories
    }
    
   
}

const getTypesLocalStorage = () =>{

    if(JSON.parse(localStorage.getItem('deck'))){
        const {types} =  JSON.parse(localStorage.getItem('deck'))

    return types
    }
    
}


const reducerState = {
    deck:  getDeckLocalStorage() || [], 
    categories:  getCategoriesLocalStorage() || [
        {category: "Pokemon", qtd: 0},
        {category: "Trainer", qtd: 0},
        {category: "Energy", qtd: 0},
        
    ], 
    types: getTypesLocalStorage() || [
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

    filteredDeck: getDeckLocalStorage() || [],
    
}


    


export function DeckContext ({children}) {

const [state, dispatch] = useReducer(deckReducer, reducerState)


    const addToDeck = (card) =>{
        dispatch({type:ADD_TO_DECK, payload: card})
    }

    const clearDeck = ()=>{
        dispatch({type: CLEAR_DECK})
    }

    const updateFilter = (e) =>{
       const value = e.target.value 
       dispatch({type: UPDATE_FILTER, payload: value})
    }

    useEffect(()=>{
        localStorage.setItem('deck', JSON.stringify(state))
    }, [state])


    return <DeckContexts.Provider value={{...state, addToDeck, clearDeck, updateFilter}}>
        {children}
    </DeckContexts.Provider>
}

export default DeckContext

const DeckContexts = createContext()

export const useDeckContext = () =>{
    return useContext(DeckContexts)
}