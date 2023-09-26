import { createContext, useContext} from "react";
import { useReducer } from "react"
import { NEXT_PAGE, PREVIOUS_PAGE,  OPEN_SIDEBAR, CLOSE_SIDEBAR, GET_RANDOM_NUMBER, SEARCH_CARD, CLEAR_FILTER, FILTER_SETS} from "../actions"
import reducer from "../reducer/reducer"


const reducerState = {
    startNumber: 0,
    endNumber: 24,
    isSideBarOpen: false,
    cardSearched: "",
    serie: "",
    serieName: "", 
    randomNumbers: {
        first: 0,
        last: 100,
    },
    
}
    


export function AppContext ({children}) {

    const [state, dispatch] = useReducer(reducer, reducerState)



    const nextPage = () =>{
        dispatch({type: NEXT_PAGE})
    }

    const previousPage = () =>{
        dispatch({type: PREVIOUS_PAGE})
    }

    const openSideBar = () =>{
        dispatch({type: OPEN_SIDEBAR})
    }

    const closeSideBar = () =>{
        dispatch({type: CLOSE_SIDEBAR})
    }

    const getRandomNumbers = ()=>{
        dispatch({type: GET_RANDOM_NUMBER})
    }

    const searchCard = (e) =>{
        const name = e.target.value.toLowerCase() 
        dispatch({type: SEARCH_CARD, payload: name})
    }

    const clearFilter = () =>{
        dispatch({type: CLEAR_FILTER})
    }

    const filterSeries = (serie, name)=>{
        dispatch({type: FILTER_SETS, payload: {serie, name}})
    }
   


    return <Contexts.Provider value={{...state, nextPage, previousPage, openSideBar, closeSideBar, getRandomNumbers, searchCard, clearFilter, filterSeries}}>
        {children}
    </Contexts.Provider>
}

export default AppContext

const Contexts = createContext()

export const useGlobalContext = () =>{
    return useContext(Contexts)
}