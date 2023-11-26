import CartActionTypes from "./action-types"

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            
        case CartActionTypes.REMOVE_PRODUCT:

        case CartActionTypes.INCREASE_PRODUCT_QUANTITY:

        case CartActionTypes.DECREASE_PRODUCT_QUANTITY:

        default:
            return state
    }
}

export default cartReducer