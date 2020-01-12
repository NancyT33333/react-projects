export function pressCell( coords) {  
    return (dispatch) => {
        
        const X = coords[0];
        const Y = coords[1];
        const newCells = [ [X, Y]];        // ex. [[2,1], [2,1]] 
        dispatch({
            type: "CELL_PRESSED",
            payload:  newCells
        });
    }

}

export function pressStep ( cellsToAdd = [], cellsToDelete = []) {
    return { 
        type: "MAKE_STEP_PRESSED", 
        payload : {
            cellsToAdd, 
            cellsToDelete 
            }
        }

}

export function deleteCell ( cellToDelete = []) {
    return {
        type: "CELL_PRESSED_TO_DELETE",
        payload : { cellToDelete }
    }
}

export function pressClear (  ) {
    return {
        type: "CLEAR_PRESSED"
    }
}