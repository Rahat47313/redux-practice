import { BUY_PIZZA } from "./pizzaTypes";

const initialState = {
    numOfPizzas: 50
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA: return {
            ...state,
            numOfPizzas: state.numOfPizzas - 1
        }
    
        default: return state
    }
}

export default pizzaReducer