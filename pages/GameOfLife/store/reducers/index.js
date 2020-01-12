import { getOccurrence, isArrInArr, compareArrays } from "../../myLib";

const initialState = {
    alivePixels: [],
    stopPressed : false, 
    startPressed: false
}



export default function (state = initialState, action) {
    switch (action.type) {
        case "MAKE_STEP_PRESSED": 
            return {
                ...state,
                alivePixels : state.alivePixels.concat(action.payload.cellsToAdd).filter( pixel => !isArrInArr( pixel, action.payload.cellsToDelete ) )  // придумать, как удалить action.payload.cellsToDelete
            }
        case "CELL_PRESSED":
            return {
                ...state,
                alivePixels : state.alivePixels.concat(action.payload)
            }
        case "CELL_PRESSED_TO_DELETE":
            return {
                ...state,
                alivePixels : state.alivePixels.filter( pixel => !compareArrays(pixel, action.payload.cellToDelete) )
            }
        case "CLEAR_PRESSED" : 
        return {
            ...state,
            alivePixels : []
        }
       
        default:
            return state
    }
};