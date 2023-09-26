import { NEXT_PAGE, PREVIOUS_PAGE, OPEN_SIDEBAR, CLOSE_SIDEBAR, GET_RANDOM_NUMBER, SEARCH_CARD, CLEAR_FILTER, FILTER_SETS} from "../actions"




const reducer = (state, action) =>{
    if(action.type === NEXT_PAGE){
        return {...state, startNumber: state.startNumber + 32, endNumber: state.endNumber + 32}
    }
    if(action.type === PREVIOUS_PAGE) {

        let newStart = state.startNumber
        let newEnd = state.endNumber

        if(newStart <=0){
            newStart = 0
        } if (newStart > 0){
           newStart = newStart - 32
        } if (newEnd <= 32) {
           newEnd = 32
        } if(newEnd > 32) {
           newEnd = newEnd - 32
        }

        return {...state, startNumber: newStart, endNumber: newEnd}
    }

    if(action.type === OPEN_SIDEBAR) {
        return {...state, isSideBarOpen: true}
    }

    if(action.type === CLOSE_SIDEBAR) {
        return {...state, isSideBarOpen: false}
    }


    if(action.type === GET_RANDOM_NUMBER){
        const first = Math.floor(Math.random()* 15000) + 1
        const last = first + 100

        return {...state, randomNumbers:{
            first: first, 
            last: last,
        }}
    }

    if(action.type === SEARCH_CARD){
        const name = action.payload 

        return {...state, cardSearched: name}
    }

    if(action.type === CLEAR_FILTER){
        return {...state, cardSearched: ""}
    }

    if(action.type === FILTER_SETS){
        return {...state, serie: action.payload.serie, serieName: action.payload.name}
    }


   
}

export default reducer